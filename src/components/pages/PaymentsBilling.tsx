import { DollarSign, CreditCard, Download } from 'lucide-react';

export function PaymentsBilling() {
  const paymentGateways = [
    { name: 'Stripe', status: 'Active', transactions: 345, revenue: '$12,456' },
    { name: 'PayPal', status: 'Active', transactions: 189, revenue: '$5,234' },
    { name: 'Easypaisa', status: 'Active', transactions: 78, revenue: '$890' },
    { name: 'JazzCash', status: 'Active', transactions: 56, revenue: '$678' },
    { name: 'Google Pay', status: 'Active', transactions: 23, revenue: '$234' },
    { name: 'Apple Pay', status: 'Active', transactions: 12, revenue: '$156' },
  ];

  const recentTransactions = [
    { id: 'TXN001234', user: 'Ahmed Khan', method: 'Stripe', amount: '$19.99', status: 'Success', date: 'Dec 8, 2024 10:30 AM' },
    { id: 'TXN001235', user: 'Fatima Ali', method: 'PayPal', amount: '$39.99', status: 'Success', date: 'Dec 8, 2024 09:15 AM' },
    { id: 'TXN001236', user: 'Hassan Malik', method: 'JazzCash', amount: '$9.99', status: 'Pending', date: 'Dec 7, 2024 05:45 PM' },
    { id: 'TXN001237', user: 'Aisha Ahmed', method: 'Easypaisa', amount: '$19.99', status: 'Pending', date: 'Dec 7, 2024 03:20 PM' },
    { id: 'TXN001238', user: 'Omar Sheikh', method: 'Stripe', amount: '$299.99', status: 'Success', date: 'Dec 6, 2024 11:10 AM' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Payments & Billing</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor payment gateways and transactions</p>
      </div>

      {/* Payment Gateways */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-6">Payment Gateways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentGateways.map((gateway) => (
            <div key={gateway.name} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg text-gray-900 dark:text-gray-100">{gateway.name}</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">
                  {gateway.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Transactions</span>
                  <span className="text-gray-900 dark:text-gray-100">{gateway.transactions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Revenue</span>
                  <span className="text-gray-900 dark:text-gray-100">{gateway.revenue}</span>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Configure
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Logs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Payment Logs</h2>
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Method</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{txn.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{txn.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{txn.method}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{txn.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        txn.status === 'Success'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{txn.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-sm text-blue-600 hover:underline">View</button>
                      <button className="text-sm text-blue-600 hover:underline">Receipt</button>
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
