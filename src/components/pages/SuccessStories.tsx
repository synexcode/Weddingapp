import { Trophy, Check, X, Star } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      id: '1',
      userName: 'Ahmed & Fatima',
      title: 'Found My Perfect Match',
      story: 'We met through Ghani Welfare Trust and got married last month. Thank you for helping us find each other!',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      status: 'Pending',
      submitted: 'Dec 7, 2024',
    },
    {
      id: '2',
      userName: 'Hassan & Aisha',
      title: 'A Journey of Love',
      story: 'This platform made it so easy to find someone who shares the same values. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400&h=300&fit=crop',
      status: 'Approved',
      submitted: 'Dec 5, 2024',
    },
    {
      id: '3',
      userName: 'Omar & Sara',
      title: 'Forever Grateful',
      story: 'We are now happily married with a beautiful family. Thank you Ghani Welfare Trust!',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=300&fit=crop',
      status: 'Approved',
      submitted: 'Dec 3, 2024',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-gray-900 dark:text-gray-100">Success Stories Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Review and manage user success stories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Stories</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100">145</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Approved Stories</p>
          <p className="text-3xl text-green-600">132</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pending Review</p>
          <p className="text-3xl text-yellow-600">13</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    story.status === 'Approved'
                      ? 'bg-green-600 text-white'
                      : 'bg-yellow-600 text-white'
                  }`}
                >
                  {story.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5" style={{ color: '#febe33' }} />
                <h3 className="text-lg text-gray-900 dark:text-gray-100">{story.userName}</h3>
              </div>
              <h4 className="text-sm text-gray-900 dark:text-gray-100 mb-2">{story.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{story.story}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">Submitted: {story.submitted}</p>
              <div className="flex gap-2">
                {story.status === 'Pending' && (
                  <>
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                      <Check className="w-4 h-4" />
                      Approve
                    </button>
                    <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                      <X className="w-4 h-4" />
                      Reject
                    </button>
                  </>
                )}
                {story.status === 'Approved' && (
                  <button className="flex-1 px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white" style={{ backgroundColor: '#febe33', color: '#110607' }}>
                    <Star className="w-4 h-4" />
                    Feature on Top
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
