import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/customSupabaseClient';
import { Eye, EyeOff, Search, Edit3, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AdminContentManagement() {
  const [activeTab, setActiveTab] = useState('news');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchItems = async (tab) => {
    setLoading(true);
    const { data } = await apiFetch(`/api/admin/content/${tab}`);
    if (data) setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems(activeTab);
  }, [activeTab]);

  const toggleVisibility = async (id, currentStatus) => {
    const { error } = await apiFetch(`/api/admin/content/${activeTab}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ is_visible: !currentStatus }),
    });

    if (!error) {
      setItems(items.map(item =>
        item.id === id ? { ...item, is_visible: !currentStatus } : item
      ));
    }
  };

  const filteredItems = items.filter(item => {
    const term = search.toLowerCase();
    return (
      (item.headline && item.headline.toLowerCase().includes(term)) ||
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.title && item.title.toLowerCase().includes(term))
    );
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-800">Content Management</h2>
        
        <div className="flex gap-2">
           {['news', 'threats', 'alerts'].map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                 activeTab === tab 
                   ? 'bg-[#06B6D4] text-white' 
                   : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>
      </div>

      <div className="p-4 border-b border-gray-100 bg-slate-50/50">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search items..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20 focus:border-[#06B6D4] text-slate-900"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 font-medium">
            <tr>
              <th className="px-6 py-4">Title / Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-slate-500">Loading data...</td>
              </tr>
            ) : filteredItems.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-slate-500">No items found.</td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {item.headline || item.name || item.title}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.is_visible 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {item.is_visible ? 'Visible' : 'Hidden'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleVisibility(item.id, item.is_visible)}
                      className={`${item.is_visible ? 'text-slate-500 hover:text-red-600' : 'text-slate-400 hover:text-green-600'}`}
                      title={item.is_visible ? "Hide Item" : "Show Item"}
                    >
                      {item.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
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

export default AdminContentManagement;