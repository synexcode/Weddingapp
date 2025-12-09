import { Heart, Check, X, Filter } from 'lucide-react';

export function InterestsManagement() {
  const interests = [
    { id: '1', sender: 'Ahmed Khan', receiver: 'Fatima Ali', status: 'Sent', timestamp: '2 hours ago', membership: 'Gold' },
    { id: '2', sender: 'Hassan Malik', receiver: 'Aisha Ahmed', status: 'Accepted', timestamp: '5 hours ago', membership: 'Diamond' },
    { id: '3', sender: 'Omar Sheikh', receiver: 'Sara Khan', status: 'Rejected', timestamp: '1 day ago', membership: 'Silver' },
    { id: '4', sender: 'Ali Raza', receiver: 'Zainab Hussain', status: 'Sent', timestamp: '2 days ago', membership: 'Gold' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Interests Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor and manage interest requests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Interests</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">2,456</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Accepted</p>
          <p className="text-3xl text-green-600">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pending</p>
          <p className="text-3xl text-yellow-600">856</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Rejected</p>
          <p className="text-3xl text-red-600">366</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Sender</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Receiver</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Membership</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {interests.map((interest) => (
                <tr key={interest.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{interest.sender}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{interest.receiver}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        interest.status === 'Accepted'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : interest.status === 'Sent'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}
                    >
                      {interest.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{interest.timestamp}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{interest.membership}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg" title="Force Accept">
                        <Check className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg" title="Force Reject">
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
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
