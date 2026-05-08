import { Shield, User } from 'lucide-react';

export const quizzesData = [
  {
    id: 1,
    icon: Shield,
    title: 'Can You Spot a Phishing Attempt?',
    description: 'Test your ability to identify phishing emails and messages. Learn to recognize red flags and protect yourself from scams.',
    estimatedTime: '5 minutes',
    questions: [
      {
        question: 'You receive an email from "support@paypa1.com" asking you to verify your account. What should you do?',
        example: 'Subject: Urgent: Your PayPal account has been limited\n\nDear Valued Customer,\n\nWe detected unusual activity. Click here to verify your account within 24 hours or it will be suspended.\n\nPayPal Security Team',
        options: [
          'Click the link to verify my account immediately',
          'Reply to the email asking for more information',
          'Ignore it - it\'s a phishing attempt (note the "1" instead of "l" in paypal)',
          'Forward it to friends to warn them'
        ],
        correctAnswer: 'Ignore it - it\'s a phishing attempt (note the "1" instead of "l" in paypal)',
        explanation: 'This is a classic phishing attempt. The email address uses "paypa1.com" (with number 1) instead of "paypal.com". Legitimate companies never ask you to verify accounts via email links. Always go directly to the website by typing the URL.'
      },
      {
        question: 'You get a text message saying you\'ve won a free iPhone. It includes a link to claim your prize. Is this legitimate?',
        example: 'SMS: Congratulations! You\'ve been selected to receive a FREE iPhone 15 Pro! Click here to claim: bit.ly/freeiphone2026',
        options: [
          'Yes, click the link to claim my prize',
          'No, this is a common scam tactic',
          'Reply "STOP" to unsubscribe',
          'Call the number that sent the message'
        ],
        correctAnswer: 'No, this is a common scam tactic',
        explanation: 'This is a scam. Legitimate companies don\'t randomly give away expensive prizes via text messages. The shortened URL (bit.ly) is a red flag. Clicking could lead to phishing sites or malware. Delete and block the sender.'
      },
      {
        question: 'An email from your "bank" asks you to update your security questions by clicking a link. The email has your name and account number. Should you trust it?',
        options: [
          'Yes, they have my personal information so it must be real',
          'No, banks never send links for security updates via email',
          'Only if the link starts with https://',
          'Reply asking if it\'s legitimate'
        ],
        correctAnswer: 'No, banks never send links for security updates via email',
        explanation: 'Even if personal information is included, this is likely phishing. That data could have come from a data breach. Banks never ask customers to update security information via email links. Always log in directly through the official website or app.'
      },
      {
        question: 'You receive a LinkedIn message from a "recruiter" offering a high-paying job. They want to interview you on WhatsApp and ask for your bank details "for payroll setup" before the interview. What do you do?',
        options: [
          'Provide the information - they need it for payroll',
          'Refuse and report as suspicious - legitimate recruiters don\'t ask for bank details before interviews',
          'Ask for their company email address first',
          'Accept the interview but don\'t share bank details yet'
        ],
        correctAnswer: 'Refuse and report as suspicious - legitimate recruiters don\'t ask for bank details before interviews',
        explanation: 'This is a job scam. Real recruiters never ask for bank details or other sensitive information before an official job offer. Conducting interviews on WhatsApp instead of official platforms is another red flag. Report and block.'
      },
      {
        question: 'An email claims to be from Microsoft saying your Windows license expired. It asks you to call a number to renew. What should you do?',
        options: [
          'Call the number to check if it\'s true',
          'Ignore it - Microsoft doesn\'t send expiration notices for Windows licenses like this',
          'Click the link in the email to renew online',
          'Reply asking for more details'
        ],
        correctAnswer: 'Ignore it - Microsoft doesn\'t send expiration notices for Windows licenses like this',
        explanation: 'This is a tech support scam. Windows licenses don\'t "expire" like subscriptions. Microsoft doesn\'t cold-call or send unsolicited emails asking users to call numbers. Scammers use this tactic to get remote access to your computer or payment information.'
      }
    ]
  },
  {
    id: 2,
    icon: User,
    title: 'How Safe is Your Digital Behavior?',
    description: 'Evaluate your current security practices and discover areas for improvement in your digital habits.',
    estimatedTime: '8 minutes',
    questions: [
      {
        question: 'How do you typically create passwords for new accounts?',
        options: [
          'I use the same password for most accounts for convenience',
          'I use variations of the same password (MyPass123, MyPass456, etc.)',
          'I create unique passwords but write them down',
          'I use a password manager to generate and store unique, strong passwords'
        ],
        correctAnswer: 'I use a password manager to generate and store unique, strong passwords',
        explanation: 'Using a password manager is the best practice. It generates strong, unique passwords for every account and stores them securely. Reusing passwords or variations means if one account is breached, all your accounts are at risk.'
      },
      {
        question: 'Do you have two-factor authentication (2FA) enabled on your email and banking accounts?',
        options: [
          'No, I find it too inconvenient',
          'Yes, but only on my email',
          'Yes, on most important accounts',
          'Yes, on all critical accounts using an authenticator app'
        ],
        correctAnswer: 'Yes, on all critical accounts using an authenticator app',
        explanation: 'Two-factor authentication significantly increases account security. Using an authenticator app is more secure than SMS-based 2FA. Enabling it on all critical accounts (email, banking, social media) is essential for protection.'
      },
      {
        question: 'When you receive an unexpected email with an attachment from someone you know, what do you do?',
        options: [
          'Open it immediately since I know the sender',
          'Open it only if the subject line makes sense',
          'Contact the sender through another method to verify they sent it',
          'Scan it with antivirus before opening'
        ],
        correctAnswer: 'Contact the sender through another method to verify they sent it',
        explanation: 'Even if an email appears to be from someone you know, their account could be compromised. The best practice is to verify through an alternative channel (phone call, text message) before opening unexpected attachments. Malware often spreads this way.'
      },
      {
        question: 'How often do you update the software on your devices?',
        options: [
          'Only when my device forces me to',
          'Every few months when I remember',
          'When I see update notifications',
          'Automatically - I have auto-updates enabled'
        ],
        correctAnswer: 'Automatically - I have auto-updates enabled',
        explanation: 'Enabling automatic updates ensures you receive security patches immediately. Delaying updates leaves your device vulnerable to known exploits. Auto-updates are the best way to stay protected without having to remember manually.'
      },
      {
        question: 'You need to access your bank account while at a coffee shop. What do you do?',
        options: [
          'Use the coffee shop\'s free Wi-Fi',
          'Use the Wi-Fi but make sure to log out after',
          'Use my mobile data instead of public Wi-Fi',
          'Use my mobile data or a VPN if I must use public Wi-Fi'
        ],
        correctAnswer: 'Use my mobile data or a VPN if I must use public Wi-Fi',
        explanation: 'Public Wi-Fi is inherently insecure. Attackers can intercept your data on these networks. Using mobile data is safest. If you must use public Wi-Fi for banking, use a reputable VPN to encrypt your connection.'
      },
      {
        question: 'How do you handle suspicious calls claiming to be from your bank or government agencies?',
        options: [
          'I provide information if they can verify who they are',
          'I ask them to send verification via email first',
          'I hang up and call the organization back using their official number',
          'I transfer them to someone else to handle'
        ],
        correctAnswer: 'I hang up and call the organization back using their official number',
        explanation: 'Never provide information to unsolicited callers claiming to be from banks or government agencies. Scammers can spoof numbers and create convincing scenarios. Always hang up and call back using the official number from the organization\'s website.'
      },
      {
        question: 'What do you do with old devices (phones, laptops) before selling or disposing of them?',
        options: [
          'Just delete files I don\'t want others to see',
          'Do a factory reset',
          'Remove SIM cards and memory cards',
          'Factory reset, remove accounts, and use data wiping software'
        ],
        correctAnswer: 'Factory reset, remove accounts, and use data wiping software',
        explanation: 'Simply deleting files or factory resetting may not permanently erase data. Use data wiping software to overwrite storage. Remove all accounts (Google, Apple ID). Remove SIM and SD cards. This prevents data recovery by others.'
      },
      {
        question: 'How often do you review the permissions granted to apps on your phone?',
        options: [
          'Never - I just accept whatever apps ask for',
          'Only when installing new apps',
          'Occasionally when I remember',
          'Regularly, and I revoke unnecessary permissions'
        ],
        correctAnswer: 'Regularly, and I revoke unnecessary permissions',
        explanation: 'Apps often request more permissions than they need. Regularly reviewing and revoking unnecessary permissions (camera, location, contacts for apps that don\'t need them) protects your privacy and reduces security risks.'
      }
    ]
  }
];