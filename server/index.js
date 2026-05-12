import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

import { runMigrations } from './migrate.js';
import authRoutes        from './routes/auth.js';
import contactRoutes     from './routes/contact.js';
import newsletterRoutes  from './routes/newsletter.js';
import trainingRoutes    from './routes/training.js';
import consultationRoutes from './routes/consultation.js';
import victimSupportRoutes from './routes/victimSupport.js';
import handbookRoutes    from './routes/handbook.js';
import settingsRoutes    from './routes/settings.js';
import adminRoutes       from './routes/admin.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// ─── Security Headers ───────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc:  ["'self'"],
      styleSrc:   ["'self'", "'unsafe-inline'"],
      imgSrc:     ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:"],
      fontSrc:    ["'self'", "data:", "https:"],
      objectSrc:  ["'none'"],
      frameSrc:   ["'self'", "https:"],
      frameAncestors: ["'none'"],
      baseUri:    ["'self'"],
      formAction: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// ─── CORS ──────────────────────────────────────────────────────────────────
if (!process.env.ALLOWED_ORIGIN) {
  console.warn('WARNING: ALLOWED_ORIGIN not set. CORS will reject cross-origin requests.');
}
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || false,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ─── Rate Limiters ─────────────────────────────────────────────────────────
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Please try again in an hour.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many login attempts. Please wait 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ─── API Routes ─────────────────────────────────────────────────────────────
app.use('/api/auth',           authLimiter,  authRoutes);
app.use('/api/contact',        formLimiter,  contactRoutes);
app.use('/api/newsletter',     formLimiter,  newsletterRoutes);
app.use('/api/training',       formLimiter,  trainingRoutes);
app.use('/api/consultation',   formLimiter,  consultationRoutes);
app.use('/api/victim-support', formLimiter,  victimSupportRoutes);
app.use('/api/handbook',       formLimiter,  handbookRoutes);
app.use('/api/settings',       generalLimiter, settingsRoutes);
app.use('/api/admin',          generalLimiter, adminRoutes);

// ─── Static Files ───────────────────────────────────────────────────────────
const distPath = join(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Cybelator server running on port ${PORT}`);
  runMigrations().catch((err) => console.error('Migration warning:', err));
});
