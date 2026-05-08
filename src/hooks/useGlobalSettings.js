import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/customSupabaseClient';

const settingsCache = {
  data: null,
  timestamp: 0,
  TTL: 5 * 60 * 1000,
};

export function useGlobalSettings() {
  const [settings, setSettings] = useState({ source_links_visible: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchSettings = async () => {
      const now = Date.now();
      if (settingsCache.data && (now - settingsCache.timestamp < settingsCache.TTL)) {
        if (mounted) {
          setSettings(settingsCache.data);
          setLoading(false);
        }
        return;
      }

      try {
        const { data, error } = await apiFetch('/api/settings');
        if (error || !data) {
          if (mounted) setLoading(false);
          return;
        }

        settingsCache.data = data;
        settingsCache.timestamp = now;

        if (mounted) setSettings(data);
      } catch (err) {
        console.error('Error fetching settings:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchSettings();
    return () => { mounted = false; };
  }, []);

  return { settings, loading };
}