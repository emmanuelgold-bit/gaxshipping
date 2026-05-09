const db = require('../config/database');
const logger = require('../utils/logger');

async function getDashboardStats(req, res) {
  try {
    // Active shipments
    const activeResult = await db.query(
      "SELECT COUNT(*) as count FROM shipments WHERE status NOT IN ('delivered', 'exception')"
    );

    // Delivered this month
    const deliveredResult = await db.query(
      `SELECT COUNT(*) as count FROM shipments 
       WHERE status = 'delivered' 
       AND actual_delivery >= DATE_TRUNC('month', CURRENT_DATE)`
    );

    // Pending customs
    const customsResult = await db.query(
      "SELECT COUNT(*) as count FROM shipments WHERE status = 'customs_processing'"
    );

    // Exceptions
    const exceptionResult = await db.query(
      "SELECT COUNT(*) as count FROM shipments WHERE status = 'exception'"
    );

    res.json({
      success: true,
      activeShipments: parseInt(activeResult.rows[0].count),
      deliveredThisMonth: parseInt(deliveredResult.rows[0].count),
      pendingCustoms: parseInt(customsResult.rows[0].count),
      exceptions: parseInt(exceptionResult.rows[0].count),
    });
  } catch (error) {
    logger.error('Dashboard stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve statistics' });
  }
}

async function getRecentActivity(req, res) {
  try {
    const { limit = 10 } = req.query;

    const result = await db.query(
      `SELECT a.*, u.email as user_email
       FROM audit_logs a
       LEFT JOIN users u ON a.user_id = u.id
       ORDER BY a.timestamp DESC
       LIMIT $1`,
      [limit]
    );

    const activities = result.rows.map(row => ({
      id: row.id,
      type: getActivityType(row.action),
      action: row.action,
      details: row.details ? JSON.stringify(row.details) : '',
      timestamp: row.timestamp,
      user: row.user_email,
      severity: row.severity,
    }));

    res.json({ success: true, activities });
  } catch (error) {
    logger.error('Recent activity error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve activity' });
  }
}

function getActivityType(action) {
  if (action.includes('shipment') || action.includes('SHIPMENT')) return 'shipment';
  if (action.includes('user') || action.includes('USER')) return 'user';
  if (action.includes('compliance') || action.includes('COMPLIANCE')) return 'compliance';
  if (action.includes('login') || action.includes('auth')) return 'security';
  return 'shipment';
}

async function getAuditLogs(req, res) {
  try {
    const { limit = 50, offset = 0, severity, userId } = req.query;

    let query = `
      SELECT a.*, u.email as user_email
      FROM audit_logs a
      LEFT JOIN users u ON a.user_id = u.id
      WHERE 1=1
    `;
    const params = [];
    let paramIndex = 1;

    if (severity) {
      query += ` AND a.severity = $${paramIndex}`;
      params.push(severity);
      paramIndex++;
    }

    if (userId) {
      query += ` AND a.user_id = $${paramIndex}`;
      params.push(userId);
      paramIndex++;
    }

    query += ` ORDER BY a.timestamp DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await db.query(query, params);

    res.json({ success: true, logs: result.rows });
  } catch (error) {
    logger.error('Audit logs error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve audit logs' });
  }
}

async function getClients(req, res) {
  try {
    const { limit = 50, offset = 0, kycStatus } = req.query;

    let query = `
      SELECT id, email, company_name, phone, kyc_status, is_active, created_at, last_login
      FROM users
      WHERE role = 'client'
    `;
    const params = [];
    let paramIndex = 1;

    if (kycStatus) {
      query += ` AND kyc_status = $${paramIndex}`;
      params.push(kycStatus);
      paramIndex++;
    }

    query += ` ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await db.query(query, params);

    res.json({ success: true, clients: result.rows });
  } catch (error) {
    logger.error('Get clients error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve clients' });
  }
}

async function updateKycStatus(req, res) {
  try {
    const { userId } = req.params;
    const { status } = req.body;

    const result = await db.query(
      'UPDATE users SET kyc_status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    logger.info(`KYC status updated for user ${userId} to ${status} by ${req.user.email}`);

    res.json({ success: true, user: result.rows[0] });
  } catch (error) {
    logger.error('Update KYC error:', error);
    res.status(500).json({ success: false, error: 'Failed to update KYC status' });
  }
}

module.exports = {
  getDashboardStats,
  getRecentActivity,
  getAuditLogs,
  getClients,
  updateKycStatus,
};
