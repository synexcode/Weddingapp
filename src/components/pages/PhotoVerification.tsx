import { Image, Check, X, Eye } from 'lucide-react';

export function PhotoVerification() {
  const pendingPhotos = [
    { id: '1', user: 'Ahmed Khan', type: 'Profile Photo', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', submitted: '2 hours ago' },
    { id: '2', user: 'Fatima Ali', type: 'Gallery Photo', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', submitted: '5 hours ago' },
    { id: '3', user: 'Hassan Malik', type: 'Profile Photo', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', submitted: '1 day ago' },
    { id: '4', user: 'Aisha Ahmed', type: 'Gallery Photo', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', submitted: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Photo Verification & Moderation</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Review and approve user photos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pending Photos</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">34</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Approved Today</p>
          <p className="text-3xl text-green-600">89</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Rejected Today</p>
          <p className="text-3xl text-red-600">12</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl text-gray-900 dark:text-gray-100 mb-6">Pending Photo Approvals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pendingPhotos.map((photo) => (
            <div key={photo.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative group">
                <img src={photo.url} alt={photo.user} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="p-3 bg-white rounded-lg">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-900 dark:text-gray-100 mb-1">{photo.user}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{photo.type} • {photo.submitted}</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                    <Check className="w-4 h-4" />
                    Approve
                  </button>
                  <button className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                    <X className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
