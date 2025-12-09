import { FileText, Edit, Save } from 'lucide-react';
import { useState } from 'react';

export function CMS() {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'faq', label: 'FAQs' },
    { id: 'about', label: 'About Us' },
    { id: 'templates', label: 'AI Message Templates' },
    { id: 'notifications', label: 'Notification Templates' },
    { id: 'email', label: 'Email Templates' },
    { id: 'whatsapp', label: 'WhatsApp Templates' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Content Management System</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Manage app content and templates</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 text-gray-900 dark:text-gray-100'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                style={activeTab === tab.id ? { borderBottomColor: '#febe33' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-gray-900 dark:text-gray-100">
              {tabs.find(t => t.id === activeTab)?.label}
            </h3>
            <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>

          <textarea
            className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter content here..."
            defaultValue={activeTab === 'privacy' ? 'Privacy Policy Content...' : ''}
          />

          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Last updated: Dec 1, 2024 by Super Admin
          </div>
        </div>
      </div>
    </div>
  );
}
