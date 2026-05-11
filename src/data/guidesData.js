import { Lock, Mail, Shield, Smartphone } from 'lucide-react';

export const guidesData = [
  {
    id: 1,
    icon: Lock,
    title: 'Password Safety & Multi-Factor Authentication',
    overview: 'Learn how to create strong passwords and implement multi-factor authentication to protect your accounts from unauthorized access.',
    gradient: 'from-blue-500 to-indigo-600',
    steps: [
      {
        title: 'Create Strong, Unique Passwords',
        description: 'Use passwords with at least 12 characters including uppercase, lowercase, numbers, and symbols. Never reuse passwords across different accounts. Consider using passphrases like "Coffee!Morning@2026#Blue" for better memorability.'
      },
      {
        title: 'Use a Password Manager',
        description: 'Install a reputable password manager like Bitwarden, 1Password, or LastPass. It generates strong passwords, stores them securely, and auto-fills login forms. You only need to remember one master password.'
      },
      {
        title: 'Enable Two-Factor Authentication (2FA)',
        description: 'Activate 2FA on all critical accounts (email, banking, social media). Use authentication apps like Google Authenticator or Authy instead of SMS when possible. This adds an extra security layer beyond passwords.'
      },
      {
        title: 'Update Passwords Regularly',
        description: 'Change passwords every 3-6 months for sensitive accounts. Immediately update passwords if a service announces a data breach. Check haveibeenpwned.com to see if your credentials have been compromised.'
      }
    ],
    commonMistakes: [
      'Using personal information (birthdays, names) in passwords',
      'Reusing the same password across multiple accounts',
      'Sharing passwords via email or messaging apps',
      'Writing passwords on sticky notes or unencrypted files',
      'Ignoring two-factor authentication options'
    ],
    bestPractices: [
      'Use different passwords for every account',
      'Enable biometric authentication where available',
      'Store backup codes in a secure location',
      'Review account activity logs regularly',
      'Use hardware security keys for critical accounts'
    ]
  },
  {
    id: 2,
    icon: Mail,
    title: 'Email & Phishing Awareness',
    overview: 'Recognize phishing attempts and practice safe email habits to protect yourself from scams and malicious attacks.',
    gradient: 'from-orange-500 to-red-600',
    steps: [
      {
        title: 'Verify Sender Identity',
        description: 'Always check the sender\'s email address carefully. Scammers use addresses that look similar to legitimate ones (e.g., support@micros0ft.com). Hover over sender name to see actual email address before trusting.'
      },
      {
        title: 'Look for Red Flags',
        description: 'Be suspicious of urgent requests, spelling errors, generic greetings ("Dear Customer"), unexpected attachments, or requests for sensitive information. Legitimate companies never ask for passwords via email.'
      },
      {
        title: 'Verify Before Clicking Links',
        description: 'Hover over links to preview the destination URL before clicking. If it looks suspicious or doesn\'t match the stated destination, don\'t click. Type URLs directly into your browser instead.'
      },
      {
        title: 'Report Phishing Attempts',
        description: 'Use your email provider\'s "Report Phishing" or "Mark as Spam" feature. Forward phishing emails to reportphishing@apwg.org. This helps protect others and improves email security filters.'
      }
    ],
    commonMistakes: [
      'Clicking links without verifying the destination',
      'Opening attachments from unknown senders',
      'Responding to emails requesting password resets you didn\'t initiate',
      'Trusting emails just because they look professional',
      'Ignoring browser security warnings'
    ],
    bestPractices: [
      'Enable email security features and spam filters',
      'Use separate email addresses for different purposes',
      'Verify requests through alternative channels (phone calls)',
      'Keep email software updated with latest security patches',
      'Never download attachments from suspicious emails'
    ]
  },
  {
    id: 3,
    icon: Shield,
    title: 'Social Media & Online Banking Safety',
    overview: 'Secure your social media accounts and practice safe online banking to protect your privacy and finances.',
    gradient: 'from-green-500 to-emerald-600',
    steps: [
      {
        title: 'Configure Privacy Settings',
        description: 'Review and tighten privacy settings on all social media platforms. Limit who can see your posts, contact you, and access personal information. Disable location tracking and remove personal details from public view.'
      },
      {
        title: 'Be Cautious What You Share',
        description: 'Avoid posting sensitive information like phone numbers, addresses, travel plans, or financial details. Think before sharing - information can be used for identity theft or targeted attacks.'
      },
      {
        title: 'Use Secure Banking Practices',
        description: 'Never access banking on public Wi-Fi. Always verify you\'re on the official bank website (check URL and SSL certificate). Use bank\'s official mobile app instead of mobile browsers. Enable transaction alerts and notifications.'
      },
      {
        title: 'Monitor Account Activity',
        description: 'Regularly review social media login history and banking transactions. Set up alerts for unusual activity. Immediately report unauthorized access or suspicious transactions to your bank and platform.'
      }
    ],
    commonMistakes: [
      'Accepting friend requests from unknown people',
      'Clicking on sponsored posts or ads without verification',
      'Using the same password for social media and banking',
      'Ignoring account security notifications',
      'Sharing too much personal information publicly'
    ],
    bestPractices: [
      'Enable login alerts and notification for all accounts',
      'Review third-party app permissions regularly',
      'Use banking apps instead of browsers for transactions',
      'Never share OTPs or PINs with anyone',
      'Log out of banking sessions completely when finished'
    ]
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Device Security & Cyber Hygiene',
    overview: 'Maintain your devices with regular updates, antivirus protection, and proper backup strategies to stay secure.',
    gradient: 'from-purple-500 to-pink-600',
    steps: [
      {
        title: 'Keep Systems Updated',
        description: 'Enable automatic updates for your operating system, browsers, and all applications. Security patches fix vulnerabilities that attackers exploit. Restart devices when updates require it - don\'t postpone.'
      },
      {
        title: 'Install Antivirus Protection',
        description: 'Use reputable antivirus software (Windows Defender, Bitdefender, Kaspersky, Norton). Keep it updated and run regular scans. Enable real-time protection to catch threats before they cause damage.'
      },
      {
        title: 'Create Regular Backups',
        description: 'Follow the 3-2-1 rule: 3 copies of data, on 2 different media types, with 1 copy offsite. Use cloud services (Google Drive, OneDrive) and external drives. Automate backups for important files.'
      },
      {
        title: 'Secure Your Network',
        description: 'Change default router passwords. Use WPA3 encryption for Wi-Fi. Create separate guest networks for visitors. Disable WPS and remote management. Consider using a VPN for sensitive activities on public networks.'
      }
    ],
    commonMistakes: [
      'Postponing software updates indefinitely',
      'Downloading software from unofficial sources',
      'Disabling antivirus to improve performance',
      'Not backing up data until after loss occurs',
      'Using weak or default router passwords'
    ],
    bestPractices: [
      'Encrypt sensitive files and backups',
      'Use device tracking features (Find My Device)',
      'Set up automatic screen lock with strong PIN/password',
      'Disable Bluetooth and Wi-Fi when not in use',
      'Regularly clean up unnecessary software and files'
    ]
  }
];