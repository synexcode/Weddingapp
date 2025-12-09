import { MessageSquare, AlertTriangle, Eye, Ban, Trash2 } from 'lucide-react';

export function ChatMonitoring() {
  const chatList = [
    {
      id: '1',
      user1: 'Ahmed Khan',
      user2: 'Fatima Ali',
      unread: 3,
      lastMessage: 'Thank you for accepting my interest',
      time: '2 minutes ago',
      suspicious: false,
    },
    {
      id: '2',
      user1: 'Hassan Malik',
      user2: 'Aisha Ahmed',
      unread: 0,
      lastMessage: 'Looking forward to meeting you',
      time: '15 minutes ago',
      suspicious: false,
    },
    {
      id: '3',
      user1: 'Omar Sheikh',
      user2: 'Sara Khan',
      unread: 5,
      lastMessage: 'Can you share your phone number?',
      time: '1 hour ago',
      suspicious: true,
    },
    {
      id: '4',
      user1: 'Ali Raza',
      user2: 'Zainab Hussain',
      unread: 1,
      lastMessage: 'Assalamualaikum, how are you?',
      time: '3 hours ago',
      suspicious: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Chat Monitoring System</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor user conversations and flag suspicious activity</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Active Chats</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">456</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Messages Today</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">2,847</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Flagged Chats</p>
          <p className="text-3xl text-red-600">12</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Blocked Users</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">23</p>
        </div>
      </div>

      {/* Chat List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">Active Conversations</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                chat.suspicious ? 'bg-red-50 dark:bg-red-900/20' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-sm text-gray-900 dark:text-gray-100">
                      {chat.user1} ↔ {chat.user2}
                    </h3>
                    {chat.suspicious && (
                      <span className="px-2 py-1 bg-red-600 text-white rounded text-xs flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Suspicious
                      </span>
                    )}
                    {chat.unread > 0 && (
                      <span className="px-2 py-1 rounded-full text-xs text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
                        {chat.unread} unread
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{chat.lastMessage}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{chat.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors" title="View Chat">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors" title="Warn User">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors" title="Block User">
                    <Ban className="w-4 h-4 text-red-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors" title="Delete Chat">
                    <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suspicious Keywords */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-4">Flagged Keywords Detection</h2>
        <div className="flex flex-wrap gap-2">
          {['phone number', 'whatsapp', 'meet offline', 'bank account', 'send money', 'private photos'].map((keyword) => (
            <span key={keyword} className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-sm">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
