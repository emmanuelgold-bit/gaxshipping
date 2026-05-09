const db = require('../config/database');
const logger = require('../utils/logger');

const statusLabels = {
  collection_scheduled: 'Collection Scheduled',
  collected: 'Collected',
  verification_pending: 'Verification Pending',
  verified: 'Verified',
  vaulted: 'Vaulted',
  customs_processing: 'Customs Processing',
  customs_cleared: 'Customs Cleared',
  air_transit: 'Air Transit',
  arrived_destination: 'Arrived at Destination',
  final_delivery_scheduled: 'Final Delivery Scheduled',
  delivered: 'Delivered',
  exception: 'Exception',
};

const statusColors = {
  collection_scheduled: 'bg-blue-100 text-blue-800',
  collected: 'bg-indigo-100 text-indigo-800',
  verification_pending: 'bg-yellow-100 text-yellow-800',
  verified: 'bg-green-100 text-green-800',
  vaulted: 'bg-purple-100 text-purple-800',
  customs_processing: 'bg-orange-100 text-orange-800',
  customs_cleared: 'bg-emerald-100 text-emerald-800',
  air_transit: 'bg-sky-100 text-sky-800',
  arrived_destination: 'bg-teal-100 text-teal-800',
  final_delivery_scheduled: 'bg-cyan-100 text-cyan-800',
  delivered: 'bg-green-100 text-green-800',
  exception: 'bg-red-100 text-red-800',
};

async function getPublicTracking(req, res) {
  try {
    const { ref } = req.query;

    if (!ref) {
      return res.status(400).json({ success: false, error: 'Tracking number required' });
    }

    const result = await db.query(
      `SELECT s.*, u.email as client_email
       FROM shipments s
       LEFT JOIN users u ON s.client_id = u.id
       WHERE s.tracking_number = $1`,
      [ref]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Shipment not found' });
    }

    const shipment = result.rows[0];

    // Get tracking events (limited info for public)
    const eventsResult = await db.query(
      `SELECT id, stage, status, location, timestamp, notes
       FROM tracking_events 
       WHERE shipment_id = $1 
       ORDER BY timestamp ASC`,
      [shipment.id]
    );

    // Sanitize data for public view (no sensitive info)
    res.json({
      success: true,
      trackingNumber: shipment.tracking_number,
      origin: shipment.origin,
      destination: shipment.destination,
      corridor: shipment.corridor,
      cargoType: shipment.cargo_type,
      weightKg: shipment.weight_kg,
      status: shipment.status,
      statusLabel: statusLabels[shipment.status] || shipment.status,
      statusColor: statusColors[shipment.status] || 'bg-gray-100 text-gray-800',
      currentLocation: shipment.current_location,
      securityLevel: shipment.security_level,
      armedEscort: shipment.armed_escort,
      estimatedDelivery: shipment.estimated_delivery ? new Date(shipment.estimated_delivery).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null,
      events: eventsResult.rows.map(event => ({
        id: event.id,
        stage: event.stage,
        status: event.status,
        location: event.location,
        timestamp: event.timestamp,
        notes: event.notes,
      })),
    });
  } catch (error) {
    logger.error('Public tracking error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve tracking information' });
  }
}

async function getAuthenticatedTracking(req, res) {
  try {
    const { ref } = req.query;

    if (!ref) {
      return res.status(400).json({ success: false, error: 'Tracking number required' });
    }

    const result = await db.query(
      `SELECT s.*, u.email as client_email
       FROM shipments s
       LEFT JOIN users u ON s.client_id = u.id
       WHERE s.tracking_number = $1`,
      [ref]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Shipment not found' });
    }

    const shipment = result.rows[0];

    // Check permissions for client role
    if (req.user.role === 'client' && shipment.client_id !== req.user.id) {
      return res.status(403).json({ success: false, error: 'Access denied' });
    }

    const eventsResult = await db.query(
      `SELECT t.*, u.email as verified_by_email
       FROM tracking_events t
       LEFT JOIN users u ON t.verified_by = u.id
       WHERE t.shipment_id = $1 
       ORDER BY t.timestamp ASC`,
      [shipment.id]
    );

    res.json({
      success: true,
      shipment: {
        id: shipment.id,
        trackingNumber: shipment.tracking_number,
        origin: shipment.origin,
        destination: shipment.destination,
        corridor: shipment.corridor,
        cargoType: shipment.cargo_type,
        weightKg: shipment.weight_kg,
        declaredValue: shipment.declared_value,
        status: shipment.status,
        statusLabel: statusLabels[shipment.status] || shipment.status,
        statusColor: statusColors[shipment.status] || 'bg-gray-100 text-gray-800',
        currentLocation: shipment.current_location,
        securityLevel: shipment.security_level,
        armedEscort: shipment.armed_escort,
        insuranceProvider: shipment.insurance_provider,
        insurancePolicyNumber: shipment.insurance_policy_number,
        estimatedDelivery: shipment.estimated_delivery,
        actualDelivery: shipment.actual_delivery,
        createdAt: shipment.created_at,
        updatedAt: shipment.updated_at,
        events: eventsResult.rows,
      },
    });
  } catch (error) {
    logger.error('Authenticated tracking error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve tracking information' });
  }
}

async function subscribeToTracking(req, res) {
  try {
    const { trackingNumber } = req.body;

    if (!trackingNumber) {
      return res.status(400).json({ success: false, error: 'Tracking number required' });
    }

    // Verify shipment exists
    const result = await db.query(
      'SELECT id FROM shipments WHERE tracking_number = $1',
      [trackingNumber]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Shipment not found' });
    }

    res.json({ success: true, message: 'Subscribed to tracking updates' });
  } catch (error) {
    logger.error('Subscribe tracking error:', error);
    res.status(500).json({ success: false, error: 'Failed to subscribe' });
  }
}

module.exports = {
  getPublicTracking,
  getAuthenticatedTracking,
  subscribeToTracking,
};
