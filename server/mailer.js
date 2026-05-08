import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.in',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'admin@cybelator.com',
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAlertEmail({ to, subject, html, attachments = [] }) {
  await transporter.sendMail({
    from: `"Cybelator" <${process.env.SMTP_USER || 'admin@cybelator.com'}>`,
    to: to || process.env.ALERT_EMAIL || 'admin@cybelator.com',
    subject,
    html,
    attachments,
  });
}
