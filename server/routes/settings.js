import { Router } from 'express';
import pool from '../db.js';

const router = Router();

// GET /api/settings — public, used by frontend
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT `key`, `value` FROM global_settings');
    const settings = rows.reduce((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {});
    res.json(settings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
