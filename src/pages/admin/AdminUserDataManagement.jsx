import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/customSupabaseClient';
import { Search, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'newsletter_subscriptions', label: 'Subscribers' },
  { id: 'contact_us_submissions', label: 'Contact Msgs' },
  { id: 'training_enrollments', label: 'Training' },
  { id: 'expert_consultation_requests', label: 'Consultations' },
  { id: 'victim_support_requests', label: 'Incidents' },
];

function AdminUserDataManagement() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: result } = await apiFetch(`/api/admin/data/${activeTab}`);
      if (result) setData(Array.isArray(result) ? result : []);
      setLoading(false);
    };

    fetchData();
  }, [activeTab]);

  const toggleReview = async (id, currentStatus) => {
    if (activeTab === 'newsletter_subscriptions') return;

    const newStatus = currentStatus === 'reviewed' ? 'pending' : 'reviewed';
    const { error } = await apiFetch(`/api/admin/data/${activeTab}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: newStatus }),
    });

    if (!error) {
      setData(data.map(item => item.id === id ? { ...item, status: newStatus } : item));
    }
  };

  const filteredData = data.filter(item => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">User Data Management</h2>
        <div className="flex flex-wrap gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-brand-dark text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-50/50 border-b border-gray-100">
        <div className="relative max-w-sm">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
           <input 
             type="text" 
             placeholder="Search records..." 
             value={searchTerm}
             onChange={e => setSearchTerm(e.target.value)}
             className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent text-slate-900"
           />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 font-semibold text-slate-500">Date</th>
              <th className="px-6 py-3 font-semibold text-slate-500">User / Details</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Status</th>
              <th className="px-6 py-3 font-semibold text-slate-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan="4" className="p-8 text-center text-slate-500">Loading records...</td></tr>
            ) : filteredData.length === 0 ? (
               <tr><td colSpan="4" className="p-8 text-center text-slate-500">No records found.</td></tr>
            ) : (
              filteredData.map(item => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                    {new Date(item.created_at || item.subscription_date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{item.full_name || item.email}</div>
                    <div className="text-slate-500 text-xs">
                       {item.email !== item.full_name && item.email} 
                       {item.topic && ` • ${item.topic}`}
                       {item.training_type && ` • ${item.training_type}`}
                       {item.incident_type && ` • ${item.incident_type}`}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                      item.status === 'reviewed' || item.status === 'resolved' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status || 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {activeTab !== 'newsletter_subscriptions' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleReview(item.id, item.status)}
                        className="text-slate-400 hover:text-brand-accent"
                      >
                         {item.status === 'reviewed' ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Clock className="w-4 h-4" />}
                      </Button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUserDataManagement;