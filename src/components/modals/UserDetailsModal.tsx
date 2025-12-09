import { X, Check, Ban, Download, Eye, MessageSquare, Flag } from 'lucide-react';

interface UserDetailsModalProps {
  user: any;
  onClose: () => void;
}

export function UserDetailsModal({ user, onClose }: UserDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl text-gray-900 dark:text-gray-100">User Profile Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Profile Photo and Basic Info */}
          <div className="flex items-start gap-6">
            <img src={user.photo} alt={user.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl text-gray-900 dark:text-gray-100">{user.name}</h3>
                {user.verified && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs">
                    Verified
                  </span>
                )}
                <span
                  className="px-3 py-1 rounded-full text-xs text-white"
                  style={{ backgroundColor: user.status === 'Approved' ? '#10b981' : user.status === 'Pending' ? '#f59e0b' : '#ef4444' }}
                >
                  {user.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Gender</p>
                  <p className="text-gray-900 dark:text-gray-100">{user.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Age</p>
                  <p className="text-gray-900 dark:text-gray-100">{user.age} years</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-gray-100">{user.city}, {user.country}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Profile Type</p>
                  <p className="text-gray-900 dark:text-gray-100">{user.profileType}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h4 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Personal Information</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Height</p>
                <p className="text-gray-900 dark:text-gray-100">5'{'8"'}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Marital Status</p>
                <p className="text-gray-900 dark:text-gray-100">Single</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Complexion</p>
                <p className="text-gray-900 dark:text-gray-100">Fair</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Body Type</p>
                <p className="text-gray-900 dark:text-gray-100">Average</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Mother Tongue</p>
                <p className="text-gray-900 dark:text-gray-100">Urdu</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Religion</p>
                <p className="text-gray-900 dark:text-gray-100">Islam</p>
              </div>
            </div>
          </div>

          {/* Education & Profession */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h4 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Education & Profession</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Education Level</p>
                <p className="text-gray-900 dark:text-gray-100">Bachelor's Degree</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Degree</p>
                <p className="text-gray-900 dark:text-gray-100">Computer Science</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Profession</p>
                <p className="text-gray-900 dark:text-gray-100">Software Engineer</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Income Range</p>
                <p className="text-gray-900 dark:text-gray-100">$50,000 - $75,000</p>
              </div>
            </div>
          </div>

          {/* Religious Information */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h4 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Religious Information</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Sect</p>
                <p className="text-gray-900 dark:text-gray-100">Sunni</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Prayer Habit</p>
                <p className="text-gray-900 dark:text-gray-100">Regular</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Preference</p>
                <p className="text-gray-900 dark:text-gray-100">Practices Hijab</p>
              </div>
            </div>
          </div>

          {/* Family Background */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h4 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Family Background</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Father's Occupation</p>
                <p className="text-gray-900 dark:text-gray-100">Business Owner</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Mother's Occupation</p>
                <p className="text-gray-900 dark:text-gray-100">Homemaker</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Siblings</p>
                <p className="text-gray-900 dark:text-gray-100">2 Brothers, 1 Sister</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Family Type</p>
                <p className="text-gray-900 dark:text-gray-100">Joint Family</p>
              </div>
            </div>
          </div>

          {/* Membership Info */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h4 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Membership Information</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Current Plan</p>
                <p className="text-gray-900 dark:text-gray-100">{user.membership}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Registered On</p>
                <p className="text-gray-900 dark:text-gray-100">Nov 15, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center gap-3 flex-wrap">
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#10b981' }}>
            <Check className="w-4 h-4" />
            Approve Profile
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors">
            <Ban className="w-4 h-4" />
            Block User
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-white dark:hover:bg-gray-600 transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-white dark:hover:bg-gray-600 transition-colors">
            <Eye className="w-4 h-4" />
            View AI Score
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-white dark:hover:bg-gray-600 transition-colors">
            <MessageSquare className="w-4 h-4" />
            Check Messages
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-white dark:hover:bg-gray-600 transition-colors">
            <Flag className="w-4 h-4" />
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
