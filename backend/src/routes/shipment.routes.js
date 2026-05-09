const express = require('express');
const { body } = require('express-validator');
const { createShipment, getShipments, getShipmentById, updateShipmentStatus } = require('../controllers/shipment.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', authenticate, authorize(['admin', 'operator']), [
  body('origin').notEmpty().trim(),
  body('destination').notEmpty().trim(),
  body('corridor').isIn(['SL-DXB', 'SL-CH', 'SL-HK']),
  body('cargoType').notEmpty(),
  body('weightKg').isFloat({ min: 0.001 }),
  body('declaredValue').isFloat({ min: 1 }),
  body('securityLevel').optional().isIn(['standard', 'high', 'maximum']),
  body('clientEmail').isEmail(),
], createShipment);

router.get('/', authenticate, getShipments);
router.get('/:id', authenticate, getShipmentById);
router.patch('/:id/status', authenticate, authorize(['admin', 'operator']), updateShipmentStatus);

module.exports = router;
