import pool from './db.js';

export async function runMigrations() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_us_submissions (
      id             INT UNSIGNED NOT NULL AUTO_INCREMENT,
      full_name      VARCHAR(100) NOT NULL,
      email          VARCHAR(254) NOT NULL,
      contact_number VARCHAR(15)  NOT NULL,
      city           VARCHAR(100) NULL,
      program        VARCHAR(255) NULL,
      created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      INDEX idx_email      (email),
      INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // Add columns introduced after initial schema (safe to run repeatedly)
  const alterations = [
    "ALTER TABLE contact_us_submissions ADD COLUMN IF NOT EXISTS qualification  VARCHAR(100) NULL AFTER city",
    "ALTER TABLE contact_us_submissions ADD COLUMN IF NOT EXISTS status         VARCHAR(100) NULL AFTER qualification",
    "ALTER TABLE contact_us_submissions ADD COLUMN IF NOT EXISTS specialisation VARCHAR(255) NULL AFTER status",
  ];
  for (const sql of alterations) {
    await pool.query(sql).catch(() => {}); // silently skip if already present
  }

  console.log('Migrations complete.');
}
