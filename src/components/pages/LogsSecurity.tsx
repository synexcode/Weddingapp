import { Lock, Shield, AlertTriangle, Activity } from 'lucide-react';

export function LogsSecurity() {
  const loginLogs = [
    { id: '1', user: 'Super Admin', email: 'admin@ghani.org', ip: '192.168.1.1', status: 'Success', time: '2 minutes ago' },
    { id: '2', user: 'John Doe', email: 'john@ghani.org', ip: '192.168.1.5', status: 'Success', time: '1 hour ago' },
    { id: '3', user: 'Unknown', email: 'hacker@test.com', ip: '45.123.45.67', status: 'Failed', time: '3 hours ago' },
  ];

  const activityLogs = [
    { id: '1', admin: 'Super Admin', action: 'Approved user profile #1234', time: '5 minutes ago' },
    { id: '2', admin: 'John Doe', action: 'Updated membership plan pricing', time: '15 minutes ago' },
    { id: '3', admin: 'Jane Smith', action: 'Blocked user #5678', time: '1 hour ago' },
    { id: '4', admin: 'Ali Hassan', action: 'Approved payment transaction', time: '2 hours ago' },
  ];

  const suspiciousActivities = [
    { id: '1', type: 'Multiple Login Attempts', user: 'Unknown', ip: '45.123.45.67', severity: 'High', time: '3 hours ago' },
    { id: '2', type: 'Unusual Activity Pattern', user: 'User #8901', ip: '89.234.56.78', severity: 'Medium', time: '5 hours ago' },
  ];

  const blockedIPs = [
    { ip: '45.123.45.67', reason: 'Brute force attempts', blockedDate: 'Dec 8, 2024', attempts: 150 },
    { ip: '89.234.56.78', reason: 'Suspicious activity', blockedDate: 'Dec 7, 2024', attempts: 45 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Logs & Security</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor system security and activity logs</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Login Attempts (24h)</p>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl text-gray-900 dark:text-gray-100">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Failed Logins</p>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-3xl text-yellow-600">23</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Blocked IPs</p>
            <Shield className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-3xl text-red-600">8</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</p>
            <Lock className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl text-green-600">456</p>
        </div>
      </div>

      {/* Suspicious Activities */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Suspicious Behavior Alerts</h2>
        <div className="space-y-3">
          {suspiciousActivities.map((activity) => (
            <div
              key={activity.id}
              className="p-4 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h3 className="text-sm text-gray-900 dark:text-gray-100">{activity.type}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs text-white ${
                        activity.severity === 'High' ? 'bg-red-600' : 'bg-yellow-600'
                      }`}
                    >
                      {activity.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p>User: {activity.user}</p>
                    <p>IP: {activity.ip}</p>
                    <p>Time: {activity.time}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">
                  Block IP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Login Logs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Login Logs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Email</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">IP Address</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {loginLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{log.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{log.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{log.ip}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        log.status === 'Success'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Logs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Activity Logs</h2>
        <div className="space-y-3">
          {activityLogs.map((log) => (
            <div key={log.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-gray-100">{log.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  By {log.admin} • {log.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blocked IPs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Blocked IP Addresses</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">IP Address</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Reason</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Attempts</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Blocked Date</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {blockedIPs.map((ip, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{ip.ip}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{ip.reason}</td>
                  <td className="px-6 py-4 text-sm text-red-600">{ip.attempts}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{ip.blockedDate}</td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-blue-600 hover:underline">Unblock</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
