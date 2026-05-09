const express = require('express');
const { getPublicTracking, getAuthenticatedTracking, subscribeToTracking } = require('../controllers/tracking.controller');
const { authenticate } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/public', getPublicTracking);
router.get('/authenticated', authenticate, getAuthenticatedTracking);
router.post('/subscribe', subscribeToTracking);

module.exports = router;
