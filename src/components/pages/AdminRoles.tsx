import { Shield, UserPlus, Edit, Trash2 } from 'lucide-react';

export function AdminRoles() {
  const admins = [
    { id: '1', name: 'Super Admin', email: 'admin@ghani.org', role: 'Super Admin', status: 'Active', lastActive: '2 minutes ago' },
    { id: '2', name: 'John Doe', email: 'john@ghani.org', role: 'Approver', status: 'Active', lastActive: '1 hour ago' },
    { id: '3', name: 'Jane Smith', email: 'jane@ghani.org', role: 'Moderator', status: 'Active', lastActive: '3 hours ago' },
    { id: '4', name: 'Ali Hassan', email: 'ali@ghani.org', role: 'Finance Admin', status: 'Active', lastActive: '1 day ago' },
  ];

  const roles = [
    { name: 'Super Admin', permissions: ['Full Access'] },
    { name: 'Approver', permissions: ['View Users', 'Approve Profiles', 'Reject Profiles'] },
    { name: 'Moderator', permissions: ['View Users', 'Moderate Content', 'Handle Reports'] },
    { name: 'Finance Admin', permissions: ['View Payments', 'Approve Payments', 'Issue Refunds'] },
    { name: 'Chat Monitor', permissions: ['View Chats', 'Block Users', 'Delete Messages'] },
    { name: 'AI Supervisor', permissions: ['View AI Logs', 'Run AI Matching', 'Review AI Flags'] },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-gray-900 dark:text-gray-100">Admin Roles & Team Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage admin users and permissions</p>
        </div>
        <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
          <UserPlus className="w-4 h-4" />
          Add Admin
        </button>
      </div>

      {/* Admin Users */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Admin Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Email</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Role</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Last Active</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{admin.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{admin.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{admin.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Roles & Permissions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-6">Roles & Permissions Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div key={role.name} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5" style={{ color: '#febe33' }} />
                <h3 className="text-sm text-gray-900 dark:text-gray-100">{role.name}</h3>
              </div>
              <ul className="space-y-1">
                {role.permissions.map((permission, index) => (
                  <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {permission}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
