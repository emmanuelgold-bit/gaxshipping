const express = require('express');
const db = require('../config/database');

const router = express.Router();

router.get('/documents', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT slug, title, category, version, effective_date, last_reviewed, next_review FROM compliance_documents WHERE is_active = true'
    );
    res.json({ success: true, documents: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to retrieve documents' });
  }
});

router.get('/documents/:slug', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM compliance_documents WHERE slug = $1 AND is_active = true',
      [req.params.slug]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Document not found' });
    }
    res.json({ success: true, document: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to retrieve document' });
  }
});

module.exports = router;
