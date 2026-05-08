export const newsAlertsData = [
  {
    id: 1,
    headline: 'Critical Chrome & Edge Browser Vulnerability',
    tldr: 'Update Chrome, Edge, and Safari immediately. A critical flaw allows hackers to take over your computer via malicious websites.',
    date: 'January 20, 2026',
    lastUpdated: '2026-01-20T08:00:00Z',
    source: 'CERT-In',
    sourceUrl: 'https://www.cert-in.org.in/',
    type: 'Zero-Day',
    severity: 'Critical',
    summary: 'CERT-In has issued a critical warning (CIVN-2026-0041) for Google Chrome and Microsoft Edge. The vulnerability allows attackers to execute arbitrary code on your system if you visit a specially crafted website.',
    affectedUsers: 'All Desktop & Mobile Browser Users',
    impact: 'Complete system takeover possible just by visiting a malicious website.',
    whyItMatters: 'If you browse the web, you are at risk. Attackers are actively using this to install malware.',
    protectionSteps: [
      'Update browsers immediately (Menu > Help > About)',
      'Restart your browser after updating'
    ]
  },
  {
    id: 2,
    headline: 'RBI Warning: Fake KYC SMS Campaigns',
    tldr: 'Beware of fake SMS/Emails from Indian banks asking for KYC or PAN updates. They are fake.',
    date: 'January 19, 2026',
    lastUpdated: '2026-01-19T14:30:00Z',
    source: 'RBI Cyber Security Advisories',
    sourceUrl: 'https://www.rbi.org.in/',
    type: 'Phishing',
    severity: 'High',
    summary: 'The RBI has flagged a sophisticated phishing campaign targeting customers of major Indian banks (SBI, HDFC, ICICI). Fraudsters are sending SMS messages threatening account blockage if PAN/KYC is not updated immediately.',
    affectedUsers: 'Bank Account Holders & UPI Users',
    impact: 'Loss of bank funds and identity theft.',
    whyItMatters: 'The messages look very real and often come from headers that resemble official bank codes.',
    protectionSteps: [
      'Do not click links in SMS about KYC',
      'Visit your bank branch or official app directly to check status'
    ]
  },
  {
    id: 3,
    headline: 'New "CryptoLock" Ransomware Variant',
    tldr: 'New ransomware spreading via email attachments. Back up your data offline immediately.',
    date: 'January 18, 2026',
    lastUpdated: '2026-01-18T11:00:00Z',
    source: 'CISA (USA)',
    sourceUrl: 'https://www.cisa.gov/uscert/ncas/current-activity',
    type: 'Ransomware',
    severity: 'Critical',
    summary: 'CISA has released an advisory regarding a new ransomware strain targeting small businesses and individuals via email invoices. It encrypts all files including connected backup drives.',
    affectedUsers: 'Small Businesses & Freelancers',
    impact: 'Permanent data loss and potential business shutdown.',
    whyItMatters: 'It targets non-technical users specifically. Once files are locked, they are gone unless you have an offline backup.',
    protectionSteps: [
      'Keep offline backups of important files (disconnected from PC)',
      'Don\'t open unexpected email attachments'
    ]
  },
  {
    id: 4,
    headline: 'NPCI Alert: UPI "Collect Request" Fraud',
    tldr: 'Fraudsters are using "Collect Requests" on UPI apps to steal money. Remember: You only enter PIN to SEND money.',
    date: 'January 17, 2026',
    lastUpdated: '2026-01-17T09:15:00Z',
    source: 'NPCI',
    sourceUrl: 'https://www.npci.org.in/',
    type: 'Financial Fraud',
    severity: 'High',
    summary: 'NPCI warns against accepting unknown UPI collect requests. Scammers on OLX and Facebook Marketplace are tricking sellers into approving payments instead of receiving them.',
    affectedUsers: 'UPI App Users (GPay, PhonePe, Paytm)',
    impact: 'Instant financial loss from bank account.',
    whyItMatters: 'Many users are tricked into thinking entering a PIN receives money. This is never true.',
    protectionSteps: [
      'Never enter UPI PIN to receive money',
      'Decline any unexpected payment requests'
    ]
  },
  {
    id: 5,
    headline: 'Microsoft January Security Update',
    tldr: 'Monthly Windows update is out. Install it now to fix 15 critical security holes.',
    date: 'January 15, 2026',
    lastUpdated: '2026-01-15T16:00:00Z',
    source: 'Microsoft Security',
    sourceUrl: 'https://msrc.microsoft.com/update-guide',
    type: 'Software Vulnerability',
    severity: 'High',
    summary: 'Microsoft has released its January 2026 security update addressing 15 critical vulnerabilities across Windows 10 and 11.',
    affectedUsers: 'Windows PC Users',
    impact: 'Remote hackers can control your PC.',
    whyItMatters: 'These are known holes that hackers are scanning for right now. Patching closes the door.',
    protectionSteps: [
      'Run Windows Update now',
      'Restart your computer'
    ]
  }
];