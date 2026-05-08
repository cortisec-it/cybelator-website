/**
 * Configuration for API-ready threat feeds
 * Defines structure for future integration with RSS, CERT advisories, and vendor feeds.
 */

export const feedSources = {
  CERT_IN: {
    id: 'cert-in',
    name: 'CERT-In',
    type: 'advisory',
    url: 'https://www.cert-in.org.in/s3/rss.xml',
    updateInterval: 3600 // 1 hour
  },
  CISA: {
    id: 'cisa',
    name: 'CISA Alerts',
    type: 'advisory',
    url: 'https://www.cisa.gov/uscert/ncas/alerts.xml',
    updateInterval: 3600
  },
  THE_HACKER_NEWS: {
    id: 'thn',
    name: 'The Hacker News',
    type: 'news',
    url: 'https://feeds.feedburner.com/TheHackersNews',
    updateInterval: 1800 // 30 mins
  },
  BLEEPING_COMPUTER: {
    id: 'bleeping-computer',
    name: 'Bleeping Computer',
    type: 'news',
    url: 'https://www.bleepingcomputer.com/feed/',
    updateInterval: 1800
  }
};

// Data Models for standardization across different feed types

export const dataModels = {
  newsItem: {
    id: '', // Unique ID
    headline: '', // Title of the news item
    tldr: '', // Brief summary (1-2 sentences)
    fullSummary: '', // Detailed description
    publishedDate: '', // ISO 8601 date string
    source: {
      name: '', // Source name (e.g., CERT-In)
      url: '', // Link to original article
      type: '' // 'cert', 'vendor', 'news'
    },
    severity: '', // 'Critical', 'High', 'Medium', 'Low'
    tags: [], // ['malware', 'phishing', 'zero-day']
    affectedUsers: '', // Description of affected user base
    impact: '', // Potential impact description
    protectionSteps: [] // Array of actionable steps
  },

  threatItem: {
    id: '',
    name: '',
    description: '',
    isIndiaFocused: false, // Boolean for regional highlighting
    affectedRegions: [], // ['India', 'Global', 'US']
    affectedUsers: '', // Specific target group (e.g., 'Android users', 'Bank customers')
    severity: '',
    activityLevel: '', // 'High', 'Medium', 'Low'
    howItWorks: [], // Step-by-step explanation
    protectionMeasures: [], // Actionable defense steps
    source: {
      name: '',
      url: ''
    }
  }
};