import { Brain, RefreshCw, AlertTriangle, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { StatCard } from '../StatCard';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function AIManagement() {
  const matchesData = [
    { day: 'Mon', matches: 145 },
    { day: 'Tue', matches: 189 },
    { day: 'Wed', matches: 167 },
    { day: 'Thu', matches: 201 },
    { day: 'Fri', matches: 178 },
    { day: 'Sat', matches: 223 },
    { day: 'Sun', matches: 195 },
  ];

  const topMatches = [
    { user1: 'Ahmed Khan', user2: 'Fatima Ali', score: 95, status: 'Accepted' },
    { user1: 'Hassan Malik', user2: 'Aisha Ahmed', score: 92, status: 'Pending' },
    { user1: 'Omar Sheikh', user2: 'Sara Khan', score: 89, status: 'Pending' },
    { user1: 'Ali Raza', user2: 'Zainab Hussain', score: 87, status: 'Declined' },
    { user1: 'Ibrahim Khan', user2: 'Maryam Ahmed', score: 85, status: 'Accepted' },
  ];

  const suspiciousProfiles = [
    { id: '1234', name: 'John Doe', reason: 'Duplicate Face Detected', aiScore: 23, flaggedDate: 'Dec 7, 2024' },
    { id: '5678', name: 'Jane Smith', reason: 'Suspicious Activity Pattern', aiScore: 35, flaggedDate: 'Dec 6, 2024' },
    { id: '9012', name: 'Test User', reason: 'Incomplete Information', aiScore: 18, flaggedDate: 'Dec 5, 2024' },
  ];

  const aiMessages = [
    { type: 'Proposal Message', count: 1234, avgRating: 4.5 },
    { type: 'Response Template', count: 892, avgRating: 4.7 },
    { type: 'Ice Breaker', count: 567, avgRating: 4.3 },
    { type: 'Follow-up Message', count: 423, avgRating: 4.6 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">AI Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor and manage AI-powered features</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total AI Matches"
          value="12,456"
          icon={Brain}
          trend="18% from last month"
          trendUp={true}
          variant="primary"
        />
        <StatCard
          title="Top Compatible Matches"
          value="234"
          icon={TrendingUp}
          trend="Above 90% score"
          trendUp={true}
          variant="success"
        />
        <StatCard
          title="Suspicious Profiles"
          value="8"
          icon={AlertTriangle}
          trend="3 new today"
          trendUp={false}
          variant="danger"
        />
        <StatCard
          title="AI Messages Generated"
          value="3,116"
          icon={MessageSquare}
          trend="23% from last week"
          trendUp={true}
        />
      </div>

      {/* AI Matchmaking Dashboard */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">AI Matchmaking Dashboard</h2>
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
            <RefreshCw className="w-4 h-4" />
            Re-run AI Matching
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-3">Last 7 Days AI Matches</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={matchesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="matches" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-3">Top Compatible Matches</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">User 1</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">User 2</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">Compatibility Score</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">Status</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-600 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {topMatches.map((match, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{match.user1}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{match.user2}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 max-w-[100px]">
                          <div
                            className="h-2 rounded-full"
                            style={{ width: `${match.score}%`, backgroundColor: '#febe33' }}
                          />
                        </div>
                        <span className="text-sm text-gray-900 dark:text-gray-100">{match.score}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          match.status === 'Accepted'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : match.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        }`}
                      >
                        {match.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-blue-600 hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AI Fake Profile Detection */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">AI Fake Profile Detection</h2>
          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-xs">
            {suspiciousProfiles.length} Flagged
          </span>
        </div>

        <div className="space-y-4">
          {suspiciousProfiles.map((profile) => (
            <div
              key={profile.id}
              className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-sm text-gray-900 dark:text-gray-100">{profile.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">ID: {profile.id}</span>
                  <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">AI Score: {profile.aiScore}%</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-red-700 dark:text-red-300 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    {profile.reason}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">Flagged: {profile.flaggedDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-white dark:hover:bg-gray-700 transition-colors">
                  Review
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">
                  Block
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Proposal Writer Logs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-6">AI Proposal Writer Logs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiMessages.map((message, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{message.type}</p>
              <p className="text-2xl text-gray-900 dark:text-gray-100 mb-1">{message.count}</p>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-600 dark:text-gray-400">{message.avgRating} avg rating</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Re-run AI Matching Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Re-run AI Matching</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Run AI matching algorithm for specific users or all users. This process may take several minutes.
        </p>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter User ID (optional)"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button className="px-6 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
            <RefreshCw className="w-4 h-4" />
            Run Matching
          </button>
        </div>
      </div>
    </div>
  );
}
