-- Cybelator MySQL Schema
-- Run in phpMyAdmin with cybelator database selected

-- Admin Users (authentication)
CREATE TABLE IF NOT EXISTS admin_users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  is_admin      TINYINT(1) NOT NULL DEFAULT 1,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Global Settings
CREATE TABLE IF NOT EXISTS global_settings (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  `key`      VARCHAR(100) NOT NULL UNIQUE,
  `value`    TINYINT(1) NOT NULL DEFAULT 1,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seed default settings
INSERT IGNORE INTO global_settings (`key`, `value`) VALUES
  ('source_links_visible', 1);

-- Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_us_submissions (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  full_name      VARCHAR(255) NOT NULL,
  email          VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50)  DEFAULT NULL,
  message        TEXT NOT NULL,
  created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  email      VARCHAR(255) NOT NULL UNIQUE,
  status     VARCHAR(50)  DEFAULT 'active',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Training Enrollments
CREATE TABLE IF NOT EXISTS training_enrollments (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  full_name      VARCHAR(255) NOT NULL,
  email          VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50)  NOT NULL,
  training_type  VARCHAR(255) DEFAULT NULL,
  status         VARCHAR(50)  DEFAULT 'pending',
  created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Expert Consultation Requests
CREATE TABLE IF NOT EXISTS expert_consultation_requests (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  full_name      VARCHAR(255) NOT NULL,
  email          VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50)  NOT NULL,
  topic          TEXT         DEFAULT NULL,
  preferred_date DATETIME     DEFAULT NULL,
  payment_status VARCHAR(50)  DEFAULT 'pending',
  amount         INT          DEFAULT NULL,
  status         VARCHAR(50)  DEFAULT 'pending',
  created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Victim Support Requests
CREATE TABLE IF NOT EXISTS victim_support_requests (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  full_name      VARCHAR(255) NOT NULL,
  email          VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50)  NOT NULL,
  incident_type  VARCHAR(255) DEFAULT NULL,
  message        TEXT NOT NULL,
  status         VARCHAR(50)  DEFAULT 'pending',
  created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Handbook Downloads
CREATE TABLE IF NOT EXISTS handbook_downloads (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  full_name      VARCHAR(255) NOT NULL,
  email          VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50)  DEFAULT NULL,
  created_at     DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Content Tables (managed via admin)
CREATE TABLE IF NOT EXISTS news_items (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  headline    VARCHAR(500) NOT NULL,
  description TEXT DEFAULT NULL,
  source      VARCHAR(255) DEFAULT NULL,
  source_url  VARCHAR(1000) DEFAULT NULL,
  category    VARCHAR(100) DEFAULT NULL,
  is_visible  TINYINT(1) NOT NULL DEFAULT 1,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS active_threats (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(500) NOT NULL,
  description TEXT DEFAULT NULL,
  severity    VARCHAR(50)  DEFAULT NULL,
  is_visible  TINYINT(1) NOT NULL DEFAULT 1,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS alerts (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(500) NOT NULL,
  description TEXT DEFAULT NULL,
  severity    VARCHAR(50)  DEFAULT NULL,
  is_visible  TINYINT(1) NOT NULL DEFAULT 1,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ─── Create Admin User ──────────────────────────────────────────────────────
-- Replace the hash below with: node -e "const b=require('bcryptjs'); b.hash('YOUR_PASSWORD',12).then(console.log)"
-- INSERT INTO admin_users (email, password_hash, is_admin) VALUES ('admin@cybelator.com', '$2a$12$REPLACE_WITH_REAL_HASH', 1);
