export const currentThreatsData = [
  {
    id: 1,
    name: 'Digital Arrest Scam',
    description: 'Sophisticated scam where fraudsters impersonate law enforcement officials via video calls, claiming victims are involved in illegal activities and demanding immediate payment to avoid "arrest".',
    isIndiaFocused: true,
    source: 'Indian Cyber Crime Coordination Centre',
    sourceUrl: 'https://cybercrime.gov.in/Webform_CrimeCat.aspx?cat=Financial Fraud&subcat=Digital Arrest',
    affectedRegions: ['India', 'Global'],
    affectedUsers: 'Individuals',
    severity: 'Critical',
    activityLevel: 'High',
    lastUpdated: '2026-01-15T08:30:00Z',
    howItWorks: [
      'Scammers call claiming to be police/CBI via video call',
      'Show fake ID cards and "arrest warrants" on screen',
      'Claim victim\'s ID was used in money laundering/drugs',
      'Demand "security deposit" or "bail" via UPI/Transfer'
    ],
    protectionMeasures: [
      'Disconnect immediately - Police do NOT arrest via video call',
      'Never transfer money to "verify" identity',
      'Call 1930 to report the number'
    ],
    whoShouldWorry: 'Elderly parents, high-net-worth individuals, and professionals active on social media.'
  },
  {
    id: 2,
    name: 'UPI Phishing & OTP Fraud',
    description: 'Attackers trick users into sharing UPI PINs or OTPs through fake payment requests, QR codes, or social engineering tactics. Common on OLX and Facebook Marketplace.',
    isIndiaFocused: true,
    source: 'NPCI Advisory',
    sourceUrl: 'https://www.npci.org.in/what-we-do/upi/upi-safety',
    affectedRegions: ['India'],
    affectedUsers: 'Individuals',
    severity: 'High',
    activityLevel: 'High',
    lastUpdated: '2026-01-14T14:15:00Z',
    howItWorks: [
      'You receive a "collect request" disguised as a refund',
      'Scammer asks you to enter PIN to "receive" money',
      'Entering PIN debits money from YOUR account'
    ],
    protectionMeasures: [
      'PIN is ONLY needed to SEND money, never to receive',
      'Verify the VPA (UPI ID) before paying',
      'Don\'t scan QR codes sent by strangers'
    ],
    whoShouldWorry: 'Anyone using UPI apps (GPay, PhonePe, Paytm) or selling items on OLX/Facebook Marketplace.'
  },
  {
    id: 3,
    name: 'WhatsApp Account Hijacking',
    description: 'Attackers hijack WhatsApp accounts by tricking victims into sharing verification codes, then use the account to scam contacts asking for money.',
    isIndiaFocused: false,
    source: 'WhatsApp Security',
    sourceUrl: 'https://faq.whatsapp.com/safety/how-to-keep-your-account-secure',
    affectedRegions: ['India', 'Global'],
    affectedUsers: 'Everyone',
    severity: 'Medium',
    activityLevel: 'Medium',
    lastUpdated: '2026-01-12T09:00:00Z',
    howItWorks: [
      'Attacker tries to login as you',
      'You get an OTP code via SMS',
      'Attacker calls pretending to be a friend needing the code',
      'If you share it, you lose access to your account'
    ],
    protectionMeasures: [
      'Never share 6-digit WhatsApp codes',
      'Enable Two-Step Verification in WhatsApp settings',
      'Set up a PIN for account recovery'
    ],
    whoShouldWorry: 'All WhatsApp users, particularly those in large family or community groups.'
  },
  {
    id: 4,
    name: 'Fake Job Offer Scams',
    description: 'Fraudsters post fake job listings or send unsolicited offers requiring upfront payments for "processing fees" or "training". Often "Like & Earn" schemes.',
    isIndiaFocused: true,
    source: 'Ministry of Labour Advisory',
    sourceUrl: 'https://labour.gov.in/whatsnew/advisory-job-seekers',
    affectedRegions: ['India', 'Global'],
    affectedUsers: 'Individuals',
    severity: 'High',
    activityLevel: 'High',
    lastUpdated: '2026-01-10T11:45:00Z',
    howItWorks: [
      'You get a WhatsApp message offering a high-paying part-time job',
      'Task involves "liking videos" or "rating products"',
      'They pay small amounts first to build trust',
      'Then demand a large "security deposit" for better tasks'
    ],
    protectionMeasures: [
      'Real jobs do not ask you to pay to work',
      'Ignore unsolicited job offers via WhatsApp/Telegram',
      'Verify company details on official websites'
    ],
    whoShouldWorry: 'Students, job seekers, and people looking for work-from-home opportunities.'
  },
  {
    id: 5,
    name: 'SIM Swap Fraud',
    description: 'Attackers convince mobile carriers to transfer victim\'s phone number to a SIM card they control, gaining access to OTPs for banking.',
    isIndiaFocused: false,
    source: 'FCC Consumer Alerts',
    sourceUrl: 'https://www.fcc.gov/consumers/guides/sim-swapping',
    affectedRegions: ['Global'],
    affectedUsers: 'Everyone',
    severity: 'Critical',
    activityLevel: 'Medium',
    lastUpdated: '2026-01-08T16:20:00Z',
    howItWorks: [
      'Attacker gathers your personal info',
      'Calls your mobile carrier pretending to be you',
      'Claims SIM is lost and asks for a new one',
      'Once activated, your phone loses signal, they get your OTPs'
    ],
    protectionMeasures: [
      'Set a PIN/password with your mobile carrier',
      'Use Auth Apps (Google Auth) instead of SMS OTPs',
      'Act fast if your phone loses signal unexpectedly'
    ],
    whoShouldWorry: 'Crypto investors and individuals with significant funds linked to mobile banking.'
  },
  {
    id: 6,
    name: 'Investment Scams (Stock/Crypto)',
    description: 'Fraudulent investment schemes promising unrealistic returns on stocks or cryptocurrency, often promoted via social media ads.',
    isIndiaFocused: false,
    source: 'SEBI Advisory',
    sourceUrl: 'https://www.sebi.gov.in',
    affectedRegions: ['Global', 'India'],
    affectedUsers: 'Investors',
    severity: 'High',
    activityLevel: 'Medium',
    lastUpdated: '2026-01-15T12:00:00Z',
    howItWorks: [
      'Victims are added to "Premium Stock Tips" WhatsApp groups',
      'Scammers show fake screenshots of massive profits',
      'Victims are asked to transfer money to a specific app/account',
      'Money is stolen, and victims are blocked'
    ],
    protectionMeasures: [
      'If it sounds too good to be true, it is',
      'Only invest through registered brokers (SEBI registered in India)',
      'Never transfer investment funds to personal bank accounts'
    ],
    whoShouldWorry: 'Retail investors and people looking for quick passive income.'
  }
];

export const threatTimeline = [
  {
    date: 'Jan 14, 2026',
    title: 'Digital Arrest Scam Surge',
    description: '150+ cases reported across major Indian cities in 48 hours'
  },
  {
    date: 'Jan 12, 2026',
    title: 'UPI Fraud Ring Busted',
    description: 'Cybercrime unit arrests 12 in connection with UPI phishing'
  },
  {
    date: 'Jan 10, 2026',
    title: 'Ransomware Hits Healthcare',
    description: 'Major hospital chain affected by CryptoLock 2026 variant'
  }
];