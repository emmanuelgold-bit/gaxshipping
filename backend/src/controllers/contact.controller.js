const { validationResult } = require('express-validator');
const db = require('../config/database');
const logger = require('../utils/logger');

async function submitContact(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    const result = await db.query(
      `INSERT INTO contact_submissions (name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, email, phone, subject, message]
    );

    logger.info(`Contact form submitted by ${email}`);

    // Here you would typically send an email notification
    // await sendEmailNotification({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry. We will respond within 24 hours.',
      submission: result.rows[0],
    });
  } catch (error) {
    logger.error('Contact submission error:', error);
    res.status(500).json({ success: false, error: 'Failed to submit contact form' });
  }
}

async function getSubmissions(req, res) {
  try {
    const { limit = 50, offset = 0, status } = req.query;

    let query = 'SELECT * FROM contact_submissions WHERE 1=1';
    const params = [];
    let paramIndex = 1;

    if (status) {
      query += ` AND status = $${paramIndex}`;
      params.push(status);
      paramIndex++;
    }

    query += ` ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await db.query(query, params);

    res.json({ success: true, submissions: result.rows });
  } catch (error) {
    logger.error('Get submissions error:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve submissions' });
  }
}

async function updateSubmissionStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await db.query(
      'UPDATE contact_submissions SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Submission not found' });
    }

    res.json({ success: true, submission: result.rows[0] });
  } catch (error) {
    logger.error('Update submission error:', error);
    res.status(500).json({ success: false, error: 'Failed to update submission' });
  }
}

module.exports = {
  submitContact,
  getSubmissions,
  updateSubmissionStatus,
};
