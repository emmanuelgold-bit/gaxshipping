const db = require('../config/database');
const logger = require('../utils/logger');

async function auditMiddleware(req, res, next) {
  const startTime = Date.now();

  res.on('finish', async () => {
    const duration = Date.now() - startTime;
    const userId = req.user ? req.user.id : null;
    const action = `${req.method} ${req.path}`;
    const severity = res.statusCode >= 500 ? 'critical' : res.statusCode >= 400 ? 'warning' : 'info';

    try {
      await db.query(
        `INSERT INTO audit_logs (user_id, action, resource_type, ip_address, user_agent, timestamp, details, severity)
         VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6, $7)`,
        [
          userId,
          action,
          req.path.split('/')[2] || 'general',
          req.ip,
          req.headers['user-agent'],
          JSON.stringify({
            method: req.method,
            path: req.path,
            statusCode: res.statusCode,
            duration: duration,
            query: req.query,
          }),
          severity,
        ]
      );
    } catch (error) {
      logger.error('Audit log failed:', error);
    }
  });

  next();
}

module.exports = { auditMiddleware };
