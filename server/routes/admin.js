import { Router } from 'express';
import pool from '../db.js';
import { requireAdmin } from '../middleware/auth.js';
import { sanitizeText } from '../middleware/validate.js';

const router = Router();

// All admin routes require admin JWT
router.use(requireAdmin);

// ─── Content Management ────────────────────────────────────────────────────

const CONTENT_TABLES = {
  news: 'news_items',
  threats: 'active_threats',
  alerts: 'alerts',
};

// GET /api/admin/content/:tab
router.get('/content/:tab', async (req, res) => {
  const table = CONTENT_TABLES[req.params.tab];
  if (!table) return res.status(400).json({ error: 'Invalid tab' });

  try {
    const [rows] = await pool.query(
      `SELECT * FROM \`${table}\` ORDER BY created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /api/admin/content/:tab/:id — toggle is_visible
router.patch('/content/:tab/:id', async (req, res) => {
  const table = CONTENT_TABLES[req.params.tab];
  if (!table) return res.status(400).json({ error: 'Invalid tab' });

  const id        = parseInt(req.params.id);
  const is_visible = req.body.is_visible;

  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
  if (typeof is_visible !== 'boolean') return res.status(400).json({ error: 'is_visible must be boolean' });

  try {
    await pool.query(
      `UPDATE \`${table}\` SET is_visible = ? WHERE id = ?`,
      [is_visible, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── User Data Management ──────────────────────────────────────────────────

const DATA_TABLES = {
  newsletter_subscriptions:    'newsletter_subscriptions',
  contact_us_submissions:      'contact_us_submissions',
  training_enrollments:        'training_enrollments',
  expert_consultation_requests:'expert_consultation_requests',
  victim_support_requests:     'victim_support_requests',
};

// GET /api/admin/data/:table
router.get('/data/:table', async (req, res) => {
  const table = DATA_TABLES[req.params.table];
  if (!table) return res.status(400).json({ error: 'Invalid table' });

  try {
    const [rows] = await pool.query(
      `SELECT * FROM \`${table}\` ORDER BY created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /api/admin/data/:table/:id — update status
router.patch('/data/:table/:id', async (req, res) => {
  const table = DATA_TABLES[req.params.table];
  if (!table) return res.status(400).json({ error: 'Invalid table' });

  const id     = parseInt(req.params.id);
  const status = sanitizeText(req.body.status);

  if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid id' });
  if (!['pending', 'reviewed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    await pool.query(
      `UPDATE \`${table}\` SET status = ? WHERE id = ?`,
      [status, id]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ─── Global Settings ───────────────────────────────────────────────────────

// GET /api/admin/settings
router.get('/settings', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM global_settings ORDER BY `key`'
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /api/admin/settings/:key
router.patch('/settings/:key', async (req, res) => {
  const key   = sanitizeText(req.params.key);
  const value = req.body.value;

  if (!key) return res.status(400).json({ error: 'Invalid key' });
  if (typeof value !== 'boolean') return res.status(400).json({ error: 'value must be boolean' });

  try {
    await pool.query(
      'UPDATE global_settings SET `value` = ?, updated_at = NOW() WHERE `key` = ?',
      [value, key]
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
