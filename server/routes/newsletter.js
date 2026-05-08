import { Router } from 'express';
import pool from '../db.js';
import { sendAlertEmail } from '../mailer.js';
import { sanitizeEmail, validateEmail, collectErrors } from '../middleware/validate.js';

const router = Router();

// POST /api/newsletter
router.post('/', async (req, res) => {
  const email = sanitizeEmail(req.body.email);

  const { errors, hasErrors } = collectErrors({
    email: validateEmail(email),
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  try {
    await pool.query(
      'INSERT INTO newsletter_subscriptions (email, status) VALUES (?, ?)',
      [email, 'active']
    );

    sendAlertEmail({
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <h2 style="color:#06B6D4;">New Newsletter Subscriber</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Time</td><td style="padding:8px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
        </table>
      `,
    }).catch(err => console.error('Email alert failed:', err));

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Already subscribed', code: '23505' });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
