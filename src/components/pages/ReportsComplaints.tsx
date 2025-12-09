import { Flag, Eye, Ban, Trash2, Download } from 'lucide-react';

export function ReportsComplaints() {
  const reports = [
    { id: '1', reportedBy: 'Fatima Ali', reportedUser: 'John Doe', category: 'Fake Profile', message: 'Profile seems fake with stock photos', proofImages: 2, status: 'Pending', date: 'Dec 8, 2024' },
    { id: '2', reportedBy: 'Ahmed Khan', reportedUser: 'Jane Smith', category: 'Harassment', message: 'Sending inappropriate messages', proofImages: 3, status: 'Reviewed', date: 'Dec 7, 2024' },
    { id: '3', reportedBy: 'Hassan Malik', reportedUser: 'Test User', category: 'Scam', message: 'Asking for money', proofImages: 1, status: 'Closed', date: 'Dec 5, 2024' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Reports & Complaints</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Review and manage user reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pending Reports</p>
          <p className="text-3xl text-yellow-600">23</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Reviewed</p>
          <p className="text-3xl text-blue-600">156</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Closed</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">892</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Recent Reports</h2>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Reported By</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Reported User</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Category</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Message</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Proof</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{report.reportedBy}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{report.reportedUser}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-xs">
                      {report.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">{report.message}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{report.proofImages} images</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        report.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                          : report.status === 'Reviewed'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg" title="Review">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg" title="Block User">
                        <Ban className="w-4 h-4 text-red-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg" title="Delete">
                        <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
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
