import { Router } from 'express';
import pool from '../db.js';
import { sendAlertEmail } from '../mailer.js';
import {
  sanitizeText, sanitizeEmail,
  validateName, validateEmail, validatePhone, validateMessage,
  collectErrors,
} from '../middleware/validate.js';

const router = Router();

// POST /api/victim-support
router.post('/', async (req, res) => {
  const full_name      = sanitizeText(req.body.full_name);
  const email          = sanitizeEmail(req.body.email);
  const contact_number = sanitizeText(req.body.contact_number);
  const incident_type  = sanitizeText(req.body.incident_type);
  const message        = sanitizeText(req.body.message);

  const { errors, hasErrors } = collectErrors({
    full_name:      validateName(full_name),
    email:          validateEmail(email),
    contact_number: validatePhone(contact_number),
    message:        validateMessage(message, { min: 10, max: 3000, label: 'Incident description' }),
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  try {
    await pool.query(
      `INSERT INTO victim_support_requests
        (full_name, email, contact_number, incident_type, message)
       VALUES (?, ?, ?, ?, ?)`,
      [full_name, email, contact_number, incident_type || null, message]
    );

    sendAlertEmail({
      subject: `URGENT: Victim Support Request — ${full_name}`,
      html: `
        <h2 style="color:#EF4444;">New Victim Support Request</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${full_name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${contact_number}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Incident Type</td><td style="padding:8px;">${incident_type || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Description</td><td style="padding:8px;">${message}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Time</td><td style="padding:8px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
        </table>
      `,
    }).catch(err => console.error('Email alert failed:', err));

    res.status(201).json({ message: 'Support request submitted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
