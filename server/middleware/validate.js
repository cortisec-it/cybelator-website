import xss from 'xss';
import validator from 'validator';

// ─── Sanitizers ────────────────────────────────────────────────────────────

// Strip HTML tags and XSS vectors, trim whitespace
export function sanitizeText(value) {
  if (typeof value !== 'string') return '';
  return xss(value.trim(), {
    whiteList: {},       // no HTML tags allowed
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script', 'style'],
  });
}

// Sanitize and normalize email
export function sanitizeEmail(value) {
  if (typeof value !== 'string') return '';
  return validator.normalizeEmail(value.trim().toLowerCase()) || '';
}

// ─── Validators ────────────────────────────────────────────────────────────

export function validateName(value) {
  if (!value || value.length < 2)   return 'Name must be at least 2 characters.';
  if (value.length > 100)           return 'Name must be under 100 characters.';
  if (!/^[a-zA-Z\s'\-\.]+$/.test(value)) return 'Name can only contain letters, spaces, hyphens and apostrophes.';
  return null;
}

export function validateEmail(value) {
  if (!value)                       return 'Email is required.';
  if (value.length > 254)           return 'Email is too long.';
  const [local, domain] = value.split('@');
  if (!local || !domain)            return 'Invalid email format.';
  if (local.length > 64)            return 'Email local part is too long.';
  if (!validator.isEmail(value))    return 'Invalid email address.';
  // Must have a realistic TLD (2–6 chars)
  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2 || tld.length > 6) return 'Email has an invalid domain extension.';
  return null;
}

export function validatePhone(value) {
  if (!value)                       return 'Phone number is required.';
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 10)         return 'Phone number must be exactly 10 digits.';
  if (!/^[6-9]/.test(digits))       return 'Phone number must start with 6, 7, 8 or 9.';
  return null;
}

export function validateMessage(value, { min = 10, max = 2000, label = 'Message' } = {}) {
  if (!value || value.length < min) return `${label} must be at least ${min} characters.`;
  if (value.length > max)           return `${label} must be under ${max} characters.`;
  return null;
}

export function validatePassword(value) {
  if (!value)                          return 'Password is required.';
  if (value.length < 16)               return 'Password must be at least 16 characters.';
  if (value.length > 128)              return 'Password must be under 128 characters.';
  if (!/[A-Z]/.test(value))            return 'Password must contain at least one uppercase letter (A-Z).';
  if (!/[a-z]/.test(value))            return 'Password must contain at least one lowercase letter (a-z).';
  if (!/[0-9]/.test(value))            return 'Password must contain at least one number (0-9).';
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(value))
                                       return 'Password must contain at least one special character (e.g. @, #, $, !).';
  if (/\s/.test(value))                return 'Password must not contain spaces.';
  return null;
}

export function getPasswordStrength(value) {
  if (!value) return { score: 0, label: '', color: '' };
  let score = 0;
  if (value.length >= 16) score++;
  if (value.length >= 20) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[a-z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(value)) score++;
  if (score <= 2) return { score, label: 'Weak',   color: 'bg-red-500' };
  if (score <= 4) return { score, label: 'Fair',   color: 'bg-yellow-500' };
  if (score <= 5) return { score, label: 'Strong', color: 'bg-blue-500' };
  return           { score, label: 'Very Strong', color: 'bg-green-500' };
}

export function validateLinkedIn(value) {
  if (!value) return null; // optional
  if (!validator.isURL(value, { protocols: ['https'], require_protocol: true })) {
    return 'LinkedIn must be a valid HTTPS URL.';
  }
  if (!value.includes('linkedin.com/')) return 'Please enter a valid LinkedIn profile URL.';
  if (value.length > 500) return 'LinkedIn URL is too long.';
  return null;
}

export function validateExperience(value) {
  if (!value || value.length < 1)  return 'Experience is required.';
  if (value.length > 50)           return 'Experience field is too long.';
  return null;
}

// ─── Collect errors helper ─────────────────────────────────────────────────

// Returns { errors: {field: msg}, hasErrors: bool }
export function collectErrors(checks) {
  const errors = {};
  for (const [field, error] of Object.entries(checks)) {
    if (error) errors[field] = error;
  }
  return { errors, hasErrors: Object.keys(errors).length > 0 };
}
