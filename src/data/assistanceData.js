export const assistanceFlows = [
  {
    id: 'financial',
    icon: 'CreditCard',
    color: '#DC2626',
    bg: '#FEF2F2',
    title: 'Financial Fraud',
    desc: 'Unauthorized transactions, UPI scams, banking fraud',
    steps: [
      { step: '1', title: 'Call 1930 Immediately', detail: 'National Cyber Crime Helpline — available 24/7. Report within minutes to maximize fund recovery chances.' },
      { step: '2', title: 'File Online at cybercrime.gov.in', detail: 'Submit a detailed complaint with transaction IDs, screenshots, and call logs.' },
      { step: '3', title: 'Email Your Bank', detail: 'Send a written complaint to your bank\'s fraud/cybercrime email. Follow up with branch manager if needed.' },
      { step: '4', title: 'Local Police Complaint', detail: 'File an FIR at your nearest police station with your cybercrime complaint number as reference.' },
    ],
    helplines: [{ label: 'Cyber Crime Helpline', value: '1930' }, { label: 'Portal', value: 'cybercrime.gov.in' }],
  },
  {
    id: 'social',
    icon: 'Users',
    color: '#6366F1',
    bg: '#EEF2FF',
    title: 'Social Media Fraud',
    desc: 'Fake profiles, impersonation, blackmail, sextortion',
    steps: [
      { step: '1', title: 'Preserve Evidence', detail: 'Take screenshots of all conversations, profiles, and transactions before reporting or blocking.' },
      { step: '2', title: 'Report on Platform', detail: 'Use the platform\'s built-in "Report" feature for the account and each offending post.' },
      { step: '3', title: 'File at cybercrime.gov.in', detail: 'Choose "Report Cyber Crime → Women/Children Related Crime" or "Other Cyber Crimes" as appropriate.' },
      { step: '4', title: 'Contact Cybelator', detail: 'Reach out to our assistance team for guidance on escalation and evidence packaging.' },
    ],
    helplines: [{ label: 'Cyber Crime Helpline', value: '1930' }, { label: 'WhatsApp', value: '+91 72890 54028' }],
  },
  {
    id: 'identity',
    icon: 'ShieldAlert',
    color: '#D97706',
    bg: '#FFFBEB',
    title: 'Identity Theft',
    desc: 'Aadhaar misuse, fake loan applications, data breach',
    steps: [
      { step: '1', title: 'Lock Your Aadhaar Biometrics', detail: 'Visit myaadhaar.uidai.gov.in → "Lock/Unlock Biometrics" to prevent further misuse immediately.' },
      { step: '2', title: 'Check Your CIBIL Report', detail: 'Pull a free credit report at CIBIL.com to identify fraudulent loan or credit card applications.' },
      { step: '3', title: 'File with Cybercrime Cell', detail: 'Report identity theft at cybercrime.gov.in with copies of your ID proof and fraud evidence.' },
      { step: '4', title: 'Notify Affected Institutions', detail: 'Formally write to any bank or institution where your identity was used without consent.' },
    ],
    helplines: [{ label: 'UIDAI Helpline', value: '1947' }, { label: 'Cyber Crime Helpline', value: '1930' }],
  },
];

export const faqItems = [
  {
    q: 'How quickly should I report financial fraud?',
    a: 'Immediately — within the first hour gives the highest chance of fund recovery. Call 1930 even before going to the bank.',
  },
  {
    q: 'Can I recover money lost in a UPI scam?',
    a: 'Yes, in many cases. Once you report to 1930 and file on cybercrime.gov.in, the portal can place a hold on the fraudulent account. Speed is critical.',
  },
  {
    q: 'What evidence should I preserve?',
    a: 'Screenshots of all conversations, transaction IDs and receipts, call logs, fraudster phone numbers, email headers, and any links sent by the fraudster.',
  },
  {
    q: 'Is reporting on the portal enough?',
    a: 'It is the essential first step. Also file an FIR at your local police station, especially for large amounts (₹50,000+). Both records strengthen your case.',
  },
];
