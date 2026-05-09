export const threats = [
  {
    id: 1,
    category: 'Scam Alert',
    severity: 'Critical',
    title: 'WhatsApp Job Scam Surge — Northeast India',
    desc: 'Fraudsters posing as HR executives offering work-from-home jobs via WhatsApp. Victims asked to pay ₹500–₹5,000 "registration fees." Report to 1930 immediately.',
    source: 'Cybelator Monitoring Team',
    date: 'May 2026',
    color: '#DC2626',
    bg: '#FEF2F2',
  },
  {
    id: 2,
    category: 'Safety Tip',
    severity: 'High',
    title: 'Enable Two-Factor Authentication Everywhere',
    desc: 'Enable 2FA on your banking, email, and social media accounts. Use an authenticator app (not SMS) where possible. This single step stops 99.9% of credential-stuffing attacks.',
    source: 'CERT-In Advisory',
    date: 'May 2026',
    color: '#0D9488',
    bg: '#F0FDFA',
  },
  {
    id: 3,
    category: 'Threat Intel',
    severity: 'High',
    title: 'Phishing Campaigns Targeting Indian Banks',
    desc: 'Sophisticated phishing emails mimicking SBI, HDFC, and ICICI are circulating. URLs use homoglyph characters (e.g. "sbi.com" with Cyrillic \'с\'). Verify sender domains carefully.',
    source: 'RBI Cyber Security Cell',
    date: 'April 2026',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    id: 4,
    category: 'Scam Alert',
    severity: 'Critical',
    title: 'KYC Update Fraud — Telecom & Banking',
    desc: 'Calls claiming your SIM/account will be deactivated unless you share OTPs or install remote-access apps. Legitimate companies never ask for OTPs over phone.',
    source: 'DOT Sanchar Saathi',
    date: 'May 2026',
    color: '#DC2626',
    bg: '#FEF2F2',
  },
  {
    id: 5,
    category: 'Safety Tip',
    severity: 'Medium',
    title: 'Use a Password Manager',
    desc: 'Reusing passwords across sites is the #1 cause of account takeovers. Use Bitwarden (free) or 1Password to generate and store unique passwords for every account.',
    source: 'Cybelator Security Team',
    date: 'May 2026',
    color: '#0D9488',
    bg: '#F0FDFA',
  },
  {
    id: 6,
    category: 'Threat Intel',
    severity: 'High',
    title: 'Ransomware Targeting Indian SMBs',
    desc: 'LockBit and Medusa ransomware variants are actively targeting small and medium businesses in India with exposed RDP ports. Patch immediately and disable RDP if not needed.',
    source: 'CERT-In Alert CI-586',
    date: 'April 2026',
    color: '#6366F1',
    bg: '#EEF2FF',
  },
];

export const categories = ['All', 'Scam Alert', 'Safety Tip', 'Threat Intel'];

export const authorities = [
  'CERT-In', 'RBI Cyber Security Cell', 'DOT Sanchar Saathi', 'MHA Cyber Crime', 'I4C'
];
