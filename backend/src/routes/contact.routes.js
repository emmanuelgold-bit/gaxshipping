const express = require('express');
const { body } = require('express-validator');
const { submitContact, getSubmissions, updateSubmissionStatus } = require('../controllers/contact.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().trim(),
  body('subject').notEmpty(),
  body('message').trim().isLength({ min: 10 }),
], submitContact);

router.get('/', authenticate, authorize(['admin', 'operator']), getSubmissions);
router.patch('/:id/status', authenticate, authorize(['admin', 'operator']), updateSubmissionStatus);

module.exports = router;
