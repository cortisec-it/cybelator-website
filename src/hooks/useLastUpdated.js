import { useState, useEffect } from 'react';

/**
 * Hook to calculate time elapsed since a specific date
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted string (e.g., "Updated 10 minutes ago")
 */
export function useLastUpdated(dateString) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      if (!dateString) return 'Just now';
      
      const date = new Date(dateString);
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);

      let interval = seconds / 31536000;
      if (interval > 1) return Math.floor(interval) + " years ago";
      
      interval = seconds / 2592000;
      if (interval > 1) return Math.floor(interval) + " months ago";
      
      interval = seconds / 86400;
      if (interval > 1) return Math.floor(interval) + " days ago";
      
      interval = seconds / 3600;
      if (interval > 1) return Math.floor(interval) + " hours ago";
      
      interval = seconds / 60;
      if (interval > 1) return Math.floor(interval) + " minutes ago";
      
      return "Just now";
    };

    setTimeAgo(calculateTimeAgo());
    const timer = setInterval(() => setTimeAgo(calculateTimeAgo()), 60000); // Update every minute

    return () => clearInterval(timer);
  }, [dateString]);

  return timeAgo;
}