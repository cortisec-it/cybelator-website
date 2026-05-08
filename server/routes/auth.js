import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';
import { JWT_SECRET } from '../middleware/auth.js';
import { sanitizeEmail, validateEmail, collectErrors } from '../middleware/validate.js';

const router = Router();

// POST /api/auth/admin/login
router.post('/admin/login', async (req, res) => {
  const email    = sanitizeEmail(req.body.email);
  const password = req.body.password;

  const { errors, hasErrors } = collectErrors({
    email: validateEmail(email),
    password: !password ? 'Password is required.' : null,
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  try {
    const [rows] = await pool.query(
      'SELECT id, email, password_hash, is_admin FROM admin_users WHERE email = ? LIMIT 1',
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const admin = rows[0];

    if (!admin.is_admin) {
      return res.status(403).json({ error: 'Unauthorized: Admin access only.' });
    }

    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token, email: admin.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
