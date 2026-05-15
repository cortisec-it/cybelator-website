import { Router } from 'express';
import pool from '../db.js';
import { sendAlertEmail } from '../mailer.js';
import {
  sanitizeText, sanitizeEmail,
  validateName, validateEmail, validatePhone,
  collectErrors,
} from '../middleware/validate.js';

const router = Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const full_name      = sanitizeText(req.body.name || req.body.full_name);
  const email          = sanitizeEmail(req.body.email);
  const contact_number = sanitizeText(req.body.phone || req.body.contact_number);
  const city           = sanitizeText(req.body.city);
  const qualification  = sanitizeText(req.body.qualification);
  const status         = sanitizeText(req.body.status);
  const specialisation = sanitizeText(req.body.specialisation);
  const program        = sanitizeText(req.body.program);

  const { errors, hasErrors } = collectErrors({
    full_name:      validateName(full_name),
    email:          validateEmail(email),
    contact_number: validatePhone(contact_number),
  });
  if (hasErrors) return res.status(400).json({ error: 'Validation failed', errors });

  try {
    await pool.query(
      'INSERT INTO contact_us_submissions (full_name, email, contact_number, city, qualification, status, specialisation, program) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [full_name, email, contact_number, city || null, qualification || null, status || null, specialisation || null, program || null]
    );

    sendAlertEmail({
      subject: `New Cybelator Enquiry — ${full_name} — ${program || 'General'}`,
      html: `
        <h2 style="color:#0D9488;font-family:sans-serif;">New Enquiry — Cybelator Academy</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Name</td><td style="padding:8px;">${full_name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px;">${contact_number}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">City</td><td style="padding:8px;">${city || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Qualification</td><td style="padding:8px;">${qualification || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Status / Occupation</td><td style="padding:8px;">${status || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Specialisation</td><td style="padding:8px;">${specialisation || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Program</td><td style="padding:8px;">${program || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Time</td><td style="padding:8px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
        </table>
      `,
    }).catch(err => console.error('Email alert failed:', err));

    res.status(201).json({ message: 'Submission received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/contact — latest 100 enquiries (internal use)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, full_name, email, contact_number, city, program, created_at FROM contact_us_submissions ORDER BY created_at DESC LIMIT 100'
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
