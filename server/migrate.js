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
  console.log('Migrations complete.');
}
