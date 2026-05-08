import { Router } from 'express';
import pool from '../db.js';
import { sendAlertEmail } from '../mailer.js';
import {
  sanitizeText, sanitizeEmail,
  validateName, validateEmail, validatePhone, validateMessage,
  collectErrors,
} from '../middleware/validate.js';

const router = Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const full_name      = sanitizeText(req.body.full_name || req.body.name);
  const email          = sanitizeEmail(req.body.email);
  const contact_number = sanitizeText(req.body.contact_number);
  const message        = sanitizeText(req.body.message || req.body.query);

  const { errors, hasErrors } = collectErrors({
    full_name:      validateName(full_name),
    email:          validateEmail(email),
    contact_number: contact_number ? validatePhone(contact_number) : null,
    message:        validateMessage(message, { min: 5, max: 2000, label: 'Message' }),
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  try {
    await pool.query(
      'INSERT INTO contact_us_submissions (full_name, email, contact_number, message) VALUES (?, ?, ?, ?)',
      [full_name, email, contact_number || null, message]
    );

    sendAlertEmail({
      subject: `New Contact Form — ${full_name}`,
      html: `
        <h2 style="color:#06B6D4;">New Contact Form Submission</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${full_name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${contact_number || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Time</td><td style="padding:8px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
        </table>
      `,
    }).catch(err => console.error('Email alert failed:', err));

    res.status(201).json({ message: 'Submission received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
