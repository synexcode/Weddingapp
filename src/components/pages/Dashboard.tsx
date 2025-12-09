import { Users, CheckCircle, Clock, AlertTriangle, CreditCard, UserPlus, DollarSign, MessageSquare } from 'lucide-react';
import { StatCard } from '../StatCard';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function Dashboard() {
  const dailyUsersData = [
    { date: 'Dec 1', users: 45 },
    { date: 'Dec 2', users: 52 },
    { date: 'Dec 3', users: 38 },
    { date: 'Dec 4', users: 65 },
    { date: 'Dec 5', users: 48 },
    { date: 'Dec 6', users: 71 },
    { date: 'Dec 7', users: 58 },
    { date: 'Dec 8', users: 82 },
  ];

  const countryData = [
    { country: 'Pakistan', registrations: 450 },
    { country: 'UAE', registrations: 280 },
    { country: 'UK', registrations: 190 },
    { country: 'USA', registrations: 165 },
    { country: 'Saudi Arabia', registrations: 145 },
  ];

  const membershipData = [
    { name: 'Silver', value: 420, color: '#94a3b8' },
    { name: 'Gold', value: 285, color: '#febe33' },
    { name: 'Diamond', value: 156, color: '#3b82f6' },
    { name: 'Lifetime VIP', value: 89, color: '#8b5cf6' },
  ];

  const aiMatchesData = [
    { day: 'Mon', matches: 145 },
    { day: 'Tue', matches: 189 },
    { day: 'Wed', matches: 167 },
    { day: 'Thu', matches: 201 },
    { day: 'Fri', matches: 178 },
    { day: 'Sat', matches: 223 },
    { day: 'Sun', matches: 195 },
  ];

  const quickActions = [
    { title: 'Approve Profiles', count: 23, color: '#febe33' },
    { title: 'View Recent Reports', count: 8, color: '#ef4444' },
    { title: 'Pending Payments', count: 12, color: '#3b82f6' },
    { title: 'Photo Approvals', count: 34, color: '#8b5cf6' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Dashboard Overview</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Today's Pending Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="p-4 rounded-lg border-2 border-dashed hover:border-solid transition-all text-left"
              style={{ borderColor: action.color }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{action.title}</p>
                  <p className="text-2xl text-gray-900 dark:text-gray-100 mt-1">{action.count}</p>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: action.color, opacity: 0.2 }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: action.color }} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Registered Profiles"
          value="2,847"
          icon={Users}
          trend="12% from last month"
          trendUp={true}
        />
        <StatCard
          title="Verified Profiles"
          value="2,156"
          icon={CheckCircle}
          trend="8% from last month"
          trendUp={true}
          variant="success"
        />
        <StatCard
          title="Pending Approvals"
          value="23"
          icon={Clock}
          trend="5 since yesterday"
          trendUp={false}
          variant="warning"
        />
        <StatCard
          title="Suspicious Profiles"
          value="8"
          icon={AlertTriangle}
          trend="2 flagged today"
          trendUp={false}
          variant="danger"
        />
        <StatCard
          title="Active Memberships"
          value="950"
          icon={CreditCard}
          trend="18% from last month"
          trendUp={true}
          variant="primary"
        />
        <StatCard
          title="Today's Registrations"
          value="82"
          icon={UserPlus}
          trend="15 more than yesterday"
          trendUp={true}
        />
        <StatCard
          title="Total Payments"
          value="$45,890"
          icon={DollarSign}
          trend="22% from last month"
          trendUp={true}
          variant="success"
        />
        <StatCard
          title="Active Chat Users"
          value="456"
          icon={MessageSquare}
          trend="89 today"
          trendUp={true}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily New Users */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Daily New Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyUsersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#febe33" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Country-wise Registrations */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Country-wise Registrations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={countryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="country" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="registrations" fill="#febe33" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Membership Sales */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Membership Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={membershipData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {membershipData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* AI Matches Generated */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg text-gray-900 dark:text-gray-100 mb-4">AI Matches Generated (Daily)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aiMatchesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="matches" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'New user registration', user: 'Ahmed Khan', time: '2 minutes ago', type: 'success' },
            { action: 'Payment received', user: 'Fatima Ali', time: '15 minutes ago', type: 'success' },
            { action: 'Profile reported', user: 'Suspicious User #123', time: '32 minutes ago', type: 'warning' },
            { action: 'Membership upgraded', user: 'Sara Ahmed', time: '1 hour ago', type: 'info' },
            { action: 'Profile approved', user: 'Hassan Malik', time: '2 hours ago', type: 'success' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'success' ? 'bg-green-500' :
                activity.type === 'warning' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`} />
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-gray-100">{activity.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.user}</p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
