const { validationResult } = require('express-validator');
const db = require('../config/database');
const logger = require('../utils/logger');

function generateTrackingNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 900000) + 100000;
  return `GAX-${year}-${random}`;
}

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

async function createShipment(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const {
      origin,
      destination,
      corridor,
      cargoType,
      weightKg,
      declaredValue,
      securityLevel,
      armedEscort,
      clientEmail,
    } = req.body;

    const trackingNumber = generateTrackingNumber();

    // Find or create client
    let clientResult = await db.query('SELECT id FROM users WHERE email = $1', [clientEmail]);
    let clientId = null;
    if (clientResult.rows.length > 0) {
      clientId = clientResult.rows[0].id;
    }

    const result = await db.query(
      `INSERT INTO shipments (tracking_number, client_id, origin, destination, corridor, cargo_type, weight_kg, declared_value, security_level, armed_escort, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING *`,
      [trackingNumber, clientId, origin, destination, corridor, cargoType, weightKg, declaredValue, securityLevel, armedEscort, req.user.id]
    );

    const shipment = result.rows[0];

    // Create initial tracking event
    await db.query(
      `INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes)
       VALUES ($1, 'collection', 'Collection scheduled', $2, CURRENT_TIMESTAMP, 'Awaiting collection from origin')`,
      [shipment.id, origin]
    );

    // Emit real-time update
    if (global.io) {
      global.io.to(`shipment:${trackingNumber}`).emit('statusUpdate', {
        trackingNumber,
        newStatus: 'collection_scheduled',
        location: origin,
        timestamp: new Date().toISOString(),
        nextStage: 'collection',
      });
    }

    logger.info(`Shipment created: ${trackingNumber} by ${req.user.email}`);

    res.status(201).json({
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
        securityLevel: shipment.security_level,
        armedEscort: shipment.armed_escort,
        createdAt: shipment.created_at,
      },
    });
  } catch (error) {
    logger.error('Create shipment error:', error);
    res.status(500).json({ success: false, error: 'Failed to create shipment' });
  }
}

async function getShipments(req, res) {
  try {
    const { limit = 50, offset = 0, status, corridor } = req.query;

    let query = `
      SELECT s.*, u.email as client_email
      FROM shipments s
      LEFT JOIN users u ON s.client_id = u.id
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    if (status) {
      query += ` AND s.status = $${paramIndex}`;
      params.push(status);
      paramIndex++;
    }

    if (corridor) {
      query += ` AND s.corridor = $${paramIndex}`;
      params.push(corridor);
      paramIndex++;
    }

    // For client role, only show their shipments
    if (req.user.role === 'client') {
      query += ` AND s.client_id = $${paramIndex}`;
      params.push(req.user.id);
      paramIndex++;
    }

    query += ` ORDER BY s.created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await db.query(query, params);

    const shipments = result.rows.map(row => ({
      id: row.id,
      trackingNumber: row.tracking_number,
      origin: row.origin,
      destination: row.destination,
      corridor: row.corridor,
      cargoType: row.cargo_type,
      weightKg: row.weight_kg,
      declaredValue: row.declared_value,
      status: row.status,
      statusLabel: statusLabels[row.status] || row.status,
      statusColor: statusColors[row.status] || 'bg-gray-100 text-gray-800',
      currentLocation: row.current_location,
      securityLevel: row.security_level,
      armedEscort: row.armed_escort,
      estimatedDelivery: row.estimated_delivery,
      createdAt: row.created_at,
    }));

    res.json({ success: true, shipments });
  } catch (error) {
    logger.error('Get shipments error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve shipments' });
  }
}

async function getShipmentById(req, res) {
  try {
    const { id } = req.params;

    const result = await db.query(
      `SELECT s.*, u.email as client_email
       FROM shipments s
       LEFT JOIN users u ON s.client_id = u.id
       WHERE s.id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Shipment not found' });
    }

    const shipment = result.rows[0];

    // Get tracking events
    const eventsResult = await db.query(
      `SELECT * FROM tracking_events WHERE shipment_id = $1 ORDER BY timestamp ASC`,
      [id]
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
        currentLocation: shipment.current_location,
        securityLevel: shipment.security_level,
        armedEscort: shipment.armed_escort,
        estimatedDelivery: shipment.estimated_delivery,
        createdAt: shipment.created_at,
        events: eventsResult.rows,
      },
    });
  } catch (error) {
    logger.error('Get shipment error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve shipment' });
  }
}

async function updateShipmentStatus(req, res) {
  try {
    const { id } = req.params;
    const { status, location, notes, stage } = req.body;

    const result = await db.query(
      'UPDATE shipments SET status = $1, current_location = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
      [status, location, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Shipment not found' });
    }

    const shipment = result.rows[0];

    // Create tracking event
    await db.query(
      `INSERT INTO tracking_events (shipment_id, stage, status, location, timestamp, notes, verified_by)
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, $5, $6)`,
      [id, stage || 'customs', statusLabels[status] || status, location, notes, req.user.id]
    );

    // Emit real-time update
    if (global.io) {
      global.io.to(`shipment:${shipment.tracking_number}`).emit('statusUpdate', {
        trackingNumber: shipment.tracking_number,
        newStatus: status,
        location,
        timestamp: new Date().toISOString(),
        notes,
      });
    }

    logger.info(`Shipment ${shipment.tracking_number} status updated to ${status} by ${req.user.email}`);

    res.json({ success: true, shipment: result.rows[0] });
  } catch (error) {
    logger.error('Update shipment status error:', error);
    res.status(500).json({ success: false, error: 'Failed to update shipment status' });
  }
}

module.exports = {
  createShipment,
  getShipments,
  getShipmentById,
  updateShipmentStatus,
};
