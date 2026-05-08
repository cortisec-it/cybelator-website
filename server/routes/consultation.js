import { Router } from 'express';
import pool from '../db.js';
import { sendAlertEmail } from '../mailer.js';
import {
  sanitizeText, sanitizeEmail,
  validateName, validateEmail, validatePhone, validateMessage,
  collectErrors,
} from '../middleware/validate.js';

const router = Router();

// POST /api/consultation
router.post('/', async (req, res) => {
  const full_name      = sanitizeText(req.body.full_name);
  const email          = sanitizeEmail(req.body.email);
  const contact_number = sanitizeText(req.body.contact_number);
  const topic          = sanitizeText(req.body.topic || req.body.message);
  const preferred_date = req.body.preferred_date || null;
  const amount         = req.body.amount ? parseInt(req.body.amount) : null;

  const { errors, hasErrors } = collectErrors({
    full_name:      validateName(full_name),
    email:          validateEmail(email),
    contact_number: validatePhone(contact_number),
    topic:          topic ? validateMessage(topic, { min: 2, max: 1000, label: 'Topic' }) : null,
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  let parsedDate = null;
  if (preferred_date) {
    parsedDate = new Date(preferred_date);
    if (isNaN(parsedDate.getTime())) parsedDate = null;
  }

  try {
    await pool.query(
      `INSERT INTO expert_consultation_requests
        (full_name, email, contact_number, topic, preferred_date, payment_status, amount)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [full_name, email, contact_number, topic || null, parsedDate, 'pending', amount]
    );

    sendAlertEmail({
      subject: `New Consultation Request — ${full_name}`,
      html: `
        <h2 style="color:#06B6D4;">New Expert Consultation Request</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${full_name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${contact_number}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Topic</td><td style="padding:8px;">${topic || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Preferred Date</td><td style="padding:8px;">${preferred_date || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Amount</td><td style="padding:8px;">${amount ? '₹' + amount : '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Time</td><td style="padding:8px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
        </table>
      `,
    }).catch(err => console.error('Email alert failed:', err));

    res.status(201).json({ message: 'Request submitted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
