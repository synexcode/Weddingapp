import { Settings as SettingsIcon, Save } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Configure system settings and preferences</p>
      </div>

      {/* Age Limit Rules */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Age Limit Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Minimum Age</label>
            <input type="number" defaultValue="18" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Maximum Age</label>
            <input type="number" defaultValue="60" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </div>

      {/* Daily Interest Limits */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Daily Interest Limits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Free Users</label>
            <input type="number" defaultValue="5" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Premium Users</label>
            <input type="number" defaultValue="unlimited" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </div>

      {/* AI Match Score Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">AI Match Score Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Minimum Match Score (%)</label>
            <input type="number" defaultValue="70" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">AI Re-run Frequency (hours)</label>
            <input type="number" defaultValue="24" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </div>

      {/* Payment Keys */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Payment Gateway Keys</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Stripe API Key</label>
            <input type="password" placeholder="sk_live_..." className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">PayPal Client ID</label>
            <input type="password" placeholder="Enter PayPal Client ID" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </div>

      {/* App Version Control */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">App Version Control</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Current Version</label>
            <input type="text" defaultValue="1.0.5" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Minimum Required Version</label>
            <input type="text" defaultValue="1.0.0" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-3 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
          <Save className="w-5 h-5" />
          Save All Settings
        </button>
      </div>
    </div>
  );
}
