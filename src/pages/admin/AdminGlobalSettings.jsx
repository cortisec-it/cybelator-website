import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/customSupabaseClient';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

function AdminGlobalSettings() {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const { toast } = useToast();

  const fetchSettings = async () => {
    setLoading(true);
    const { data, error } = await apiFetch('/api/admin/settings');
    if (error) {
      toast({ variant: "destructive", title: "Error fetching settings", description: error.error });
    } else if (data) {
      setSettings(Array.isArray(data) ? data : []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleToggleChange = async (key, currentValue) => {
    setUpdating(true);
    const newValue = !currentValue;
    
    // Optimistic update
    setSettings(settings.map(s => 
      s.key === key ? { ...s, value: newValue, updated_at: new Date() } : s
    ));

    const { error } = await apiFetch(`/api/admin/settings/${key}`, {
      method: 'PATCH',
      body: JSON.stringify({ value: newValue }),
    });

    if (error) {
      setSettings(settings.map(s =>
        s.key === key ? { ...s, value: currentValue, updated_at: new Date() } : s
      ));
      toast({ variant: "destructive", title: "Update failed", description: error.error });
    } else {
      toast({
        title: "Setting updated",
        description: `Successfully updated ${formatKey(key)}`
      });
    }
    setUpdating(false);
  };

  const formatKey = (key) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Global Settings</h2>
        <Button variant="outline" size="sm" onClick={fetchSettings} disabled={loading || updating}>
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <div className="space-y-6">
        {loading ? (
           <div className="flex justify-center p-8">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-300"></div>
           </div>
        ) : settings.length > 0 ? (
          settings.map((setting) => (
            <div key={setting.key} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="space-y-0.5">
                <Label htmlFor={setting.key} className="text-base font-semibold text-slate-900 cursor-pointer">
                  {formatKey(setting.key)}
                </Label>
                <p className="text-xs text-slate-500">
                  Last updated: {new Date(setting.updated_at).toLocaleString()}
                </p>
              </div>
              
              <Switch
                id={setting.key}
                checked={!!setting.value}
                onCheckedChange={() => handleToggleChange(setting.key, setting.value)}
                disabled={updating}
                className="data-[state=checked]:bg-brand-accent"
              />
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            <p>No global settings found.</p>
            <p className="text-xs mt-1">Make sure the 'global_settings' table is populated.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminGlobalSettings;