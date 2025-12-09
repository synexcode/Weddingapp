import { Bell, Send, Save } from 'lucide-react';
import { useState } from 'react';

export function Notifications() {
  const [notificationType, setNotificationType] = useState('push');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Notifications Center</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Send notifications and manage templates</p>
      </div>

      {/* Send Notification */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-6">Send Notification</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Notification Type</label>
            <div className="flex gap-4">
              <button
                onClick={() => setNotificationType('push')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  notificationType === 'push'
                    ? 'text-white'
                    : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={notificationType === 'push' ? { backgroundColor: '#febe33', color: '#110607' } : {}}
              >
                Push Notification
              </button>
              <button
                onClick={() => setNotificationType('email')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  notificationType === 'email'
                    ? 'text-white'
                    : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={notificationType === 'email' ? { backgroundColor: '#febe33', color: '#110607' } : {}}
              >
                Email Alert
              </button>
              <button
                onClick={() => setNotificationType('whatsapp')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  notificationType === 'whatsapp'
                    ? 'text-white'
                    : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={notificationType === 'whatsapp' ? { backgroundColor: '#febe33', color: '#110607' } : {}}
              >
                WhatsApp Alert
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Target Audience</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <option>All Users</option>
              <option>All Users in Pakistan</option>
              <option>All Users in UAE</option>
              <option>All Users in UK</option>
              <option>Gold Members Only</option>
              <option>Diamond Members Only</option>
              <option>New Users (Last 7 Days)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Title</label>
            <input
              type="text"
              placeholder="Notification title..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Message</label>
            <textarea
              placeholder="Notification message..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
            />
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
              <Send className="w-4 h-4" />
              Send Notification
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700">
              <Save className="w-4 h-4" />
              Save as Template
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Saved Templates</h2>
        <div className="space-y-3">
          {[
            { title: 'Welcome New Users', message: 'Welcome to Ghani Welfare Trust! Start your journey...', type: 'Push' },
            { title: 'New Match Found', message: 'Great news! We found a compatible match for you...', type: 'Push' },
            { title: 'Membership Expiring', message: 'Your membership will expire in 3 days...', type: 'Email' },
            { title: 'Profile Approved', message: 'Congratulations! Your profile has been approved...', type: 'Push' },
          ].map((template, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm text-gray-900 dark:text-gray-100">{template.title}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded text-xs">
                      {template.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{template.message}</p>
                </div>
                <button className="text-sm text-blue-600 hover:underline ml-4">Use Template</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Recent Notifications Sent</h2>
        <div className="space-y-3">
          {[
            { title: 'System Maintenance', recipients: 2847, sent: '2 hours ago', status: 'Delivered' },
            { title: 'New Feature Update', recipients: 950, sent: '1 day ago', status: 'Delivered' },
            { title: 'Special Offer', recipients: 450, sent: '3 days ago', status: 'Delivered' },
          ].map((notification, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <h3 className="text-sm text-gray-900 dark:text-gray-100 mb-1">{notification.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Sent to {notification.recipients} users • {notification.sent}
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">
                {notification.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
