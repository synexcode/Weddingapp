import { CreditCard, Edit, CheckCircle, Clock, XCircle, Download } from 'lucide-react';
import { StatCard } from '../StatCard';

export function MembershipManagement() {
  const membershipPlans = [
    {
      name: 'Silver',
      price: 9.99,
      duration: 'Monthly',
      features: ['Basic Profile', 'Limited Matches', '5 Interests/Month', 'Basic Support'],
      color: '#94a3b8',
      subscribers: 420,
    },
    {
      name: 'Gold',
      price: 19.99,
      duration: 'Monthly',
      features: ['Enhanced Profile', 'Unlimited Matches', 'Unlimited Interests', 'Priority Support', 'View Contact Info'],
      color: '#febe33',
      subscribers: 285,
    },
    {
      name: 'Diamond',
      price: 39.99,
      duration: 'Monthly',
      features: ['Premium Profile', 'AI Matching Priority', 'Profile Boost', 'Premium Support', 'Advanced Filters'],
      color: '#3b82f6',
      subscribers: 156,
    },
    {
      name: 'Lifetime VIP',
      price: 299.99,
      duration: 'Lifetime',
      features: ['All Features', 'Lifetime Access', 'VIP Badge', 'Dedicated Manager', 'Early Access to Features'],
      color: '#8b5cf6',
      subscribers: 89,
    },
  ];

  const recentPurchases = [
    { id: '1', user: 'Ahmed Khan', plan: 'Gold', amount: 19.99, method: 'Stripe', date: 'Dec 8, 2024', status: 'Success' },
    { id: '2', user: 'Fatima Ali', plan: 'Diamond', amount: 39.99, method: 'PayPal', date: 'Dec 8, 2024', status: 'Success' },
    { id: '3', user: 'Hassan Malik', plan: 'Silver', amount: 9.99, method: 'JazzCash', date: 'Dec 7, 2024', status: 'Pending' },
    { id: '4', user: 'Aisha Ahmed', plan: 'Gold', amount: 19.99, method: 'Easypaisa', date: 'Dec 7, 2024', status: 'Pending' },
    { id: '5', user: 'Omar Sheikh', plan: 'Lifetime VIP', amount: 299.99, method: 'Stripe', date: 'Dec 6, 2024', status: 'Success' },
    { id: '6', user: 'Sara Khan', plan: 'Diamond', amount: 39.99, method: 'PayPal', date: 'Dec 5, 2024', status: 'Failed' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Failed':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Membership Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Manage membership plans and subscriptions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Active Memberships"
          value="950"
          icon={CreditCard}
          trend="18% from last month"
          trendUp={true}
          variant="primary"
        />
        <StatCard
          title="Total Revenue"
          value="$18,456"
          icon={CheckCircle}
          trend="22% from last month"
          trendUp={true}
          variant="success"
        />
        <StatCard
          title="Pending Payments"
          value="12"
          icon={Clock}
          trend="Requires approval"
          trendUp={false}
          variant="warning"
        />
        <StatCard
          title="Failed Transactions"
          value="3"
          icon={XCircle}
          trend="This week"
          trendUp={false}
          variant="danger"
        />
      </div>

      {/* Membership Plans */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Membership Plans</h2>
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
            <Edit className="w-4 h-4" />
            Edit Plans
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipPlans.map((plan) => (
            <div key={plan.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-current transition-colors" style={{ borderColor: plan.color }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl text-gray-900 dark:text-gray-100">{plan.name}</h3>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: plan.color }}>
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-3xl text-gray-900 dark:text-gray-100">${plan.price}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/{plan.duration}</span>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">{plan.subscribers} subscribers</p>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                Edit Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Purchases */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Recent Membership Purchases</h2>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">User</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Plan</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Payment Method</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs text-gray-600 dark:text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentPurchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{purchase.user}</td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs text-white"
                      style={{ backgroundColor: membershipPlans.find(p => p.name === purchase.plan)?.color }}
                    >
                      {purchase.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${purchase.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{purchase.method}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{purchase.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusBadge(purchase.status)}`}>
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {purchase.status === 'Pending' && (
                        <>
                          <button className="text-sm text-green-600 hover:underline">Approve</button>
                          <button className="text-sm text-red-600 hover:underline">Reject</button>
                        </>
                      )}
                      {purchase.status === 'Success' && (
                        <button className="text-sm text-blue-600 hover:underline">Refund</button>
                      )}
                      <button className="text-sm text-blue-600 hover:underline">View</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">Showing 1 to 6 of 950 purchases</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm">Previous</button>
            <button className="px-4 py-2 rounded-lg text-sm text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>1</button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm">2</button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm">3</button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
