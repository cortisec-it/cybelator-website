export const incidentTypes = [
  {
    id: 'money',
    icon: '💸',
    label: 'I lost money online',
    desc: 'UPI fraud, bank transfer scam, fake payment link',
  },
  {
    id: 'hacked',
    icon: '🔓',
    label: 'Someone hacked my account',
    desc: 'Email, social media, or banking account takeover',
  },
  {
    id: 'threats',
    icon: '📞',
    label: 'I received threatening messages or calls',
    desc: 'Blackmail, extortion, harassment online',
  },
  {
    id: 'images',
    icon: '📷',
    label: 'My photos or videos were misused',
    desc: 'Sextortion, morphed images, non-consensual sharing',
  },
  {
    id: 'scam',
    icon: '📱',
    label: 'I was scammed by a fake job or loan app',
    desc: 'Part-time job fraud, fake loan app, investment scam',
  },
  {
    id: 'sim',
    icon: '📶',
    label: 'My phone SIM was taken over',
    desc: 'SIM swap, OTP hijack, number ported without consent',
  },
  {
    id: 'ransomware',
    icon: '🖥️',
    label: 'My business computer was locked',
    desc: 'Ransomware, files encrypted, ransom demand received',
  },
  {
    id: 'other',
    icon: '🛡️',
    label: 'Something else happened',
    desc: 'Any other cyber incident not listed above',
  },
];

export const timingOptions = [
  { id: 'today', icon: '🚨', label: 'Today — within 24 hours', note: 'Highest chance of fund freeze. Call 1930 immediately.', urgency: 'critical' },
  { id: 'days3', icon: '⏰', label: 'In the last 3 days', note: 'Act fast — many banks can still process a freeze request.', urgency: 'high' },
  { id: 'week', icon: '📅', label: 'This week', note: 'Recovery is harder but formal complaints are still valuable.', urgency: 'medium' },
  { id: 'older', icon: '🗓️', label: 'More than a week ago', note: 'Focus on evidence, FIR, and preventing further damage.', urgency: 'low' },
];

export const checklists = {
  money: {
    title: 'Financial Fraud — Immediate Steps',
    urgencyNote: 'Every minute counts. Frozen funds are recoverable — transferred funds are often not.',
    steps: [
      {
        n: '1',
        title: 'Call 1930 right now',
        detail: 'National Cyber Crime Helpline — available 24 hours. Report the transaction amount, UPI ID or account number of the fraudster, and your own bank details. Ask for a complaint number.',
      },
      {
        n: '2',
        title: 'File at cybercrime.gov.in',
        detail: 'Go to cybercrime.gov.in → "Report Cyber Crime" → "Financial Fraud". Enter the transaction reference number, date, amount, and fraudster account details. Save the acknowledgement number.',
      },
      {
        n: '3',
        title: 'Email your bank immediately',
        detail: 'Send a written complaint to your bank\'s fraud/cybercrime email (found on their website). Subject line: "Unauthorized Transaction — Urgent Freeze Request". Attach your complaint number from Step 2.',
      },
      {
        n: '4',
        title: 'Block your UPI and cards',
        detail: 'Freeze your UPI ID through your banking app or by calling your bank\'s helpline. Block any cards linked to the account. Do this even if you think the fraud is complete.',
      },
      {
        n: '5',
        title: 'File a police FIR',
        detail: 'Visit your nearest police station with: your Aadhaar, the cybercrime complaint number, bank statements showing the fraudulent transaction, and any screenshots of communication with the fraudster.',
      },
      {
        n: '6',
        title: 'Document everything',
        detail: 'Screenshot all messages, payment confirmations, and transaction history. Save the fraudster\'s number, UPI ID, and any profile they used. Do not delete anything — this is evidence.',
      },
    ],
  },
  hacked: {
    title: 'Account Compromise — Immediate Steps',
    urgencyNote: 'Regain control before the attacker locks you out completely.',
    steps: [
      {
        n: '1',
        title: 'Change your password immediately',
        detail: 'If you can still access the account, change the password right now using a device and network the attacker does not have access to. Use a strong, unique password (15+ characters).',
      },
      {
        n: '2',
        title: 'Enable two-factor authentication',
        detail: 'Turn on 2FA using an authenticator app (Google Authenticator or Authy) — not SMS if possible. This stops the attacker from re-entering even if they know your password.',
      },
      {
        n: '3',
        title: 'Check active sessions and revoke them',
        detail: 'On Google: myaccount.google.com → Security → Your Devices. On Facebook: Settings → Security → Where You\'re Logged In. End all sessions except your current one.',
      },
      {
        n: '4',
        title: 'Report to the platform',
        detail: 'Use the "Hacked Account" recovery flow on the platform. For Gmail: accounts.google.com/signin/recovery. For Facebook: facebook.com/hacked. For Instagram: help.instagram.com.',
      },
      {
        n: '5',
        title: 'Alert your contacts',
        detail: 'Inform your contacts that your account was compromised. They may have received fraudulent messages asking for money or personal information. Warn them not to act on those messages.',
      },
      {
        n: '6',
        title: 'File at cybercrime.gov.in',
        detail: 'Report the account compromise under "Other Cyber Crimes". Include timestamps, screenshots of unauthorized activity, and the account details. Save your complaint reference number.',
      },
    ],
  },
  threats: {
    title: 'Threatening Messages — Immediate Steps',
    urgencyNote: 'Preserve all evidence before responding or blocking.',
    steps: [
      {
        n: '1',
        title: 'Screenshot every message — do not delete anything',
        detail: 'Screenshot all threatening messages, calls (with timestamps), and any social media posts. Export chat history if possible. This is your primary evidence. Do not delete or block yet.',
      },
      {
        n: '2',
        title: 'Do not pay, comply, or engage',
        detail: 'Engaging or paying a blackmailer emboldens them and does not stop the threats. Do not transfer money, share more personal information, or respond to ultimatums.',
      },
      {
        n: '3',
        title: 'Report to cybercrime.gov.in',
        detail: 'File under "Women/Children Related Crime" (if applicable) or "Other Cyber Crimes". Attach all screenshots. Include the sender\'s number, username, and platform.',
      },
      {
        n: '4',
        title: 'Report on the platform',
        detail: 'Use WhatsApp\'s "Report" feature on the contact. For Instagram/Facebook, report the account and each threatening message. Platforms can block the account and preserve logs for law enforcement.',
      },
      {
        n: '5',
        title: 'File a police complaint',
        detail: 'Visit your nearest police station or file online at your state police portal. Bring printed screenshots and the cybercrime complaint number. Ask specifically for a case under IT Act Section 67 and IPC 507.',
      },
      {
        n: '6',
        title: 'Now block the sender',
        detail: 'Only after preserving all evidence and filing the complaint, block the sender on all platforms. Change your phone number if the harassment continues. Tell a trusted family member or friend.',
      },
    ],
  },
  images: {
    title: 'Image / Video Misuse — Immediate Steps',
    urgencyNote: 'This is a serious crime under POCSO and IT Act. You have full legal protection. Act immediately.',
    steps: [
      {
        n: '1',
        title: 'Do not panic — this is a crime against you, not by you',
        detail: 'You are the victim. Sharing intimate images without consent is a crime under Section 67A of the IT Act. You will not be judged for reporting. Take a breath and act systematically.',
      },
      {
        n: '2',
        title: 'Document the content location before it disappears',
        detail: 'Screenshot the posts, pages, or messages containing the misused content — including the URL, profile name, and date. Do not share the content further. This documentation is legal evidence.',
      },
      {
        n: '3',
        title: 'Report to cybercrime.gov.in immediately',
        detail: 'Go to cybercrime.gov.in → "Women/Children Related Crime" → "Non-Consensual Sharing of Intimate Images". The portal prioritizes these cases. Your identity is protected in the complaint.',
      },
      {
        n: '4',
        title: 'Request removal from the platform',
        detail: 'Use the platform\'s "Non-Consensual Intimate Images" (NCII) reporting tool. Facebook, Instagram, and YouTube have dedicated NCII removal teams. Removal can happen in hours after reporting.',
      },
      {
        n: '5',
        title: 'Do not pay if being blackmailed',
        detail: 'Payment does not stop sextortionists — it proves you will pay and increases demands. Report immediately. The more evidence you preserve, the faster law enforcement can act.',
      },
      {
        n: '6',
        title: 'Contact the National Commission for Women (if applicable)',
        detail: 'NCW Helpline: 7827170170. They provide legal guidance and can escalate to police. Assam State Commission for Women: 1091. You can request victim support and legal aid.',
      },
    ],
  },
  scam: {
    title: 'Job / Loan App Fraud — Immediate Steps',
    urgencyNote: 'These scams often have multiple victims. Your report helps stop others.',
    steps: [
      {
        n: '1',
        title: 'Stop all payments immediately',
        detail: 'Do not send any more money, even if told it will unlock your account, release your earnings, or process your loan. The money sent after this point is unrecoverable.',
      },
      {
        n: '2',
        title: 'Preserve all evidence',
        detail: 'Screenshot the app, website, job posting, WhatsApp messages, payment receipts, and any "offer letters" or "loan agreements". Note the company name, contact number, and any UPI IDs used.',
      },
      {
        n: '3',
        title: 'Report to cybercrime.gov.in',
        detail: 'File under "Online Financial Fraud" → "Job Fraud" or "Loan App Fraud". Provide all app details, contact numbers, and payment transaction IDs. Include your bank statement showing the deductions.',
      },
      {
        n: '4',
        title: 'Report the app to Google Play / Apple App Store',
        detail: 'Find the app on the store → scroll to the bottom → "Flag as inappropriate" → "Financial Fraud". Include the specific scam method. Flagged apps are reviewed and can be removed.',
      },
      {
        n: '5',
        title: 'Call 1930 if money was transferred in the last 24 hours',
        detail: 'For very recent transfers, call 1930 immediately. They can attempt to flag the recipient account. Provide the UPI transaction reference number and recipient VPA.',
      },
      {
        n: '6',
        title: 'File a police FIR and warn others',
        detail: 'File a formal FIR at your nearest station. Post a warning (with evidence redacted for privacy) in local WhatsApp groups, Facebook groups, and community pages. Your warning may prevent others from falling victim.',
      },
    ],
  },
  sim: {
    title: 'SIM Swap / OTP Hijack — Immediate Steps',
    urgencyNote: 'If your SIM stops working suddenly, act within minutes — not hours.',
    steps: [
      {
        n: '1',
        title: 'Call your telecom operator immediately',
        detail: 'Jio: 198 · Airtel: 121 · BSNL: 1800-180-1503 · Vi: 199. Report a SIM swap you did not authorize. Ask them to freeze any port or swap requests on your number and restore your original SIM.',
      },
      {
        n: '2',
        title: 'Call your bank on a different number',
        detail: 'Use another phone to call your bank\'s fraud helpline. Tell them your SIM may have been swapped. Ask them to: freeze all OTP-based transactions, flag recent transfers, and add a secondary verification layer.',
      },
      {
        n: '3',
        title: 'Change email passwords from a different device',
        detail: 'Use a laptop or another phone not linked to your compromised number. Change your email password, then update the recovery mobile number to a trusted alternate number.',
      },
      {
        n: '4',
        title: 'Report to cybercrime.gov.in',
        detail: 'File under "SIM Swap Fraud" under Financial Fraud category. Include your mobile number, operator name, approximate time the SIM stopped working, and any unauthorized transactions noticed.',
      },
      {
        n: '5',
        title: 'File a complaint at the telecom operator\'s nearest store',
        detail: 'Visit the operator\'s store with Aadhaar and demand a written explanation of the SIM swap order. This creates an internal paper trail and triggers their fraud investigation process.',
      },
      {
        n: '6',
        title: 'Request TRAI to investigate',
        detail: 'File a complaint at trai.gov.in or call 1800-110-999. TRAI can investigate unauthorized port requests. Include your complaint numbers from Step 4 and any reference numbers from the operator.',
      },
    ],
  },
  ransomware: {
    title: 'Ransomware / Computer Lockdown — Immediate Steps',
    urgencyNote: 'Do NOT pay the ransom. Disconnect from the internet first.',
    steps: [
      {
        n: '1',
        title: 'Isolate the machine immediately',
        detail: 'Disconnect the infected computer from your network — unplug the ethernet cable and turn off Wi-Fi. If multiple computers are on the same network, isolate all of them. This stops the ransomware from spreading.',
      },
      {
        n: '2',
        title: 'Do not pay the ransom',
        detail: 'Payment does not guarantee decryption. It funds criminal operations and marks you as a paying target. In many cases, decryption keys are available free from nomoreransom.org after law enforcement takedowns.',
      },
      {
        n: '3',
        title: 'Photograph the ransom screen',
        detail: 'Take photos of the ransom demand screen with your phone. Note the ransomware name (often visible in the note), payment method requested (usually Bitcoin), and the demand amount. This is critical for investigation.',
      },
      {
        n: '4',
        title: 'Report to CERT-In',
        detail: 'Email incident@cert-in.org.in with subject "Ransomware Incident". CERT-In investigates active ransomware campaigns and may have decryption assistance or intelligence on the specific variant.',
      },
      {
        n: '5',
        title: 'Check nomoreransom.org for free decryptors',
        detail: 'Upload one of your encrypted files at nomoreransom.org — the site identifies the ransomware family and provides free decryption tools if available. Law enforcement has cracked keys for many common strains.',
      },
      {
        n: '6',
        title: 'File at cybercrime.gov.in and local police',
        detail: 'File a formal complaint under "Ransomware Attack". Include the ransom note photo, list of affected systems, and any cryptocurrency wallet addresses in the demand. This data feeds national threat intelligence.',
      },
    ],
  },
  other: {
    title: 'General Cyber Incident — First Steps',
    urgencyNote: 'Every cyber incident has a reporting path. These steps apply to any situation.',
    steps: [
      {
        n: '1',
        title: 'Preserve all evidence first',
        detail: 'Screenshot every relevant screen, message, transaction, or post. Export chat history. Save email headers. Write down dates, times, and amounts. Do not delete or modify anything until you have filed a report.',
      },
      {
        n: '2',
        title: 'Report at cybercrime.gov.in',
        detail: 'Visit cybercrime.gov.in → "Report Cyber Crime" → choose the most relevant category. If unsure, use "Other Cyber Crimes". Describe the incident clearly. Save your acknowledgement number.',
      },
      {
        n: '3',
        title: 'Call 1930 if money is involved',
        detail: 'For any incident involving financial loss or fraud, call 1930 immediately — even if some time has passed. The helpline can advise on recovery options and escalate to the right authority.',
      },
      {
        n: '4',
        title: 'Secure your accounts',
        detail: 'Change passwords on all accounts that may be affected. Enable 2FA. Check for unauthorized access in your email and social accounts. Revoke access for any apps you don\'t recognize.',
      },
      {
        n: '5',
        title: 'File a police FIR',
        detail: 'For serious incidents (identity theft, financial fraud above ₹10,000, harassment, threats), file a formal FIR at your nearest police station. Bring all evidence and your cybercrime complaint number.',
      },
      {
        n: '6',
        title: 'Contact CERT-In for technical incidents',
        detail: 'For technical attacks (hacking, malware, data breach affecting your organization), email incident@cert-in.org.in or call 1800-11-4949. They provide free technical guidance to victims.',
      },
    ],
  },
};

export const faqs = [
  {
    q: 'Will police contact me if I report online?',
    a: 'Filing at cybercrime.gov.in does not automatically generate a police visit. The portal creates a complaint record. Police investigation is typically triggered when you also file a physical FIR, or when the complaint amount or nature meets the threshold for escalation. You are in control of how far it goes.',
  },
  {
    q: 'Is my information stored anywhere?',
    a: 'The information you enter in this tool is processed entirely in your browser — nothing is sent to Cortisec servers. When you file at cybercrime.gov.in, that information is stored by the government portal. Cortisec Technologies does not see, access, or store anything you enter here.',
  },
  {
    q: 'What if the scam happened weeks ago?',
    a: 'It is never too late to report. Financial recovery becomes harder after 72 hours, but criminal cases can be filed months or even years later. Filing a report creates an official record and contributes to the national database used to catch repeat offenders.',
  },
  {
    q: 'Can I report anonymously?',
    a: 'cybercrime.gov.in allows you to report without disclosing your identity for certain categories (especially women and children related crimes). For financial fraud, your identity is required because banks need to verify the complaint. Your information is protected under the IT Act.',
  },
  {
    q: 'My bank says they cannot help — what do I do?',
    a: 'Escalate in writing. Send an email (not just a call) to your bank\'s nodal officer for cyber fraud. If the bank does not respond within 30 days, file a complaint with the Banking Ombudsman at bankingombudsman.rbi.org.in — this is free and the RBI takes these complaints seriously.',
  },
  {
    q: 'Is Cortisec a police or government agency?',
    a: 'No. Cortisec Technologies is a private cybersecurity company. This assistance tool is a voluntary public service. We provide guidance on the right reporting channels but we do not have legal authority, cannot freeze accounts, and do not represent or replace law enforcement.',
  },
];
