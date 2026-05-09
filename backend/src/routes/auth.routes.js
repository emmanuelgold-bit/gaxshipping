const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe, refreshToken } = require('../controllers/auth.controller');
const { authenticate } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 12 }).withMessage('Password must be at least 12 characters'),
  body('companyName').optional().trim(),
  body('phone').optional().trim(),
], register);

router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
], login);

router.get('/me', authenticate, getMe);
router.post('/refresh', refreshToken);

module.exports = router;
