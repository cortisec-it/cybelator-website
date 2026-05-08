import { Router } from 'express';
import pool from '../db.js';
import { sendAlertEmail } from '../mailer.js';
import {
  sanitizeText, sanitizeEmail,
  validateName, validateEmail, validatePhone,
  collectErrors,
} from '../middleware/validate.js';

const router = Router();

// POST /api/handbook
router.post('/', async (req, res) => {
  const full_name      = sanitizeText(req.body.full_name);
  const email          = sanitizeEmail(req.body.email);
  const contact_number = sanitizeText(req.body.contact || req.body.contact_number);

  const { errors, hasErrors } = collectErrors({
    full_name:      validateName(full_name),
    email:          validateEmail(email),
    contact_number: contact_number ? validatePhone(contact_number) : null,
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  try {
    await pool.query(
      'INSERT INTO handbook_downloads (full_name, email, contact_number) VALUES (?, ?, ?)',
      [full_name, email, contact_number || null]
    );

    sendAlertEmail({
      subject: `Handbook Download — ${full_name}`,
      html: `
        <h2 style="color:#06B6D4;">Handbook Download Request</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${full_name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${contact_number || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Time</td><td style="padding:8px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
        </table>
      `,
    }).catch(err => console.error('Email alert failed:', err));

    res.status(201).json({ message: 'Download request recorded' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
