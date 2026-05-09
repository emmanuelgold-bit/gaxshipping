const express = require('express');
const { getDashboardStats, getRecentActivity, getAuditLogs, getClients, updateKycStatus } = require('../controllers/admin.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/stats', authenticate, authorize(['admin', 'operator']), getDashboardStats);
router.get('/activity', authenticate, authorize(['admin', 'operator']), getRecentActivity);
router.get('/audit-logs', authenticate, authorize(['admin']), getAuditLogs);
router.get('/clients', authenticate, authorize(['admin', 'operator']), getClients);
router.patch('/clients/:userId/kyc', authenticate, authorize(['admin']), updateKycStatus);

module.exports = router;
