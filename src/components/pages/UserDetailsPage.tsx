import { ArrowLeft, Check, Ban, Download, Eye, MessageSquare, Flag, Shield, Edit, Calendar, Mail, Phone } from 'lucide-react';

interface UserDetailsPageProps {
  userId: string;
  onBack: () => void;
}

export function UserDetailsPage({ userId, onBack }: UserDetailsPageProps) {
  // Mock user data
  const user = {
    id: userId,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    name: 'Ahmed Khan',
    gender: 'Male',
    age: 28,
    city: 'Karachi',
    country: 'Pakistan',
    status: 'Approved',
    verified: true,
    membership: 'Gold',
    email: 'ahmed.khan@example.com',
    phone: '+92 300 1234567',
    registeredDate: 'November 15, 2024',
    aiScore: 92,
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
  ];

  const activityTimeline = [
    { date: 'Dec 8, 2024', time: '10:30 AM', action: 'Profile viewed by Admin', type: 'info' },
    { date: 'Dec 7, 2024', time: '2:15 PM', action: 'Sent interest to another profile', type: 'success' },
    { date: 'Dec 5, 2024', time: '5:45 PM', action: 'Updated profile photo', type: 'info' },
    { date: 'Dec 3, 2024', time: '11:20 AM', action: 'Profile approved by moderator', type: 'success' },
    { date: 'Nov 20, 2024', time: '9:00 AM', action: 'Upgraded to Gold membership', type: 'success' },
    { date: 'Nov 15, 2024', time: '3:30 PM', action: 'Account created', type: 'info' },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl text-gray-900 dark:text-gray-100">User Profile Details</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Complete profile information and admin actions</p>
        </div>
      </div>

      {/* Main Actions Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 flex-wrap">
          <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-white" style={{ backgroundColor: '#10b981' }}>
            <Check className="w-4 h-4" />
            Approve Profile
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors">
            <Ban className="w-4 h-4" />
            Reject Profile
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Shield className="w-4 h-4" />
            Verify ID
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Download className="w-4 h-4" />
            Download Biodata PDF
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Eye className="w-4 h-4" />
            View AI Score
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <MessageSquare className="w-4 h-4" />
            Check Chat Messages
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Flag className="w-4 h-4" />
            View Reports
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section A - Personal Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">Personal Information</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-start gap-6 mb-6">
              <img src={user.photo} alt={user.name} className="w-32 h-32 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100">{user.name}</h3>
                  {user.verified && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs text-white"
                    style={{ backgroundColor: '#febe33', color: '#110607' }}
                  >
                    {user.membership} Member
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs">
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Gender</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">{user.gender}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Age</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">{user.age} years</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Height</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">5'{'8"'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">City</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">{user.city}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Country</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">{user.country}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Marital Status</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Single</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Complexion</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Fair</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Body Type</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Average</p>
              </div>
            </div>
          </div>

          {/* Section B - Education & Profession */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">Education & Profession</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Education Level</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Bachelor's Degree</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Degree</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Computer Science</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Profession</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Software Engineer</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Income Range</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">$50,000 - $75,000</p>
              </div>
            </div>
          </div>

          {/* Section C - Religious Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">Religious Information</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sect</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Sunni</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Prayer Habit</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Regular (5 times)</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Religious Practice</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Practicing</p>
              </div>
            </div>
          </div>

          {/* Section D - Family Background */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">Family Background</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Father's Occupation</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Business Owner</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Mother's Occupation</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Homemaker</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Siblings</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">2 Brothers, 1 Sister</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Family Type</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Joint Family</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Family Standard</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Middle Class</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Family Values</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Traditional</p>
              </div>
            </div>
          </div>

          {/* Section E - Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">Partner Preferences</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Preferred Age</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">23 - 28 years</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Preferred Country</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Pakistan, UAE</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Preferred Education</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Bachelor's or Higher</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Preferred Marital Status</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Single</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Religious Preference</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Practicing Muslim</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sect Preference</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">Sunni</p>
              </div>
            </div>
          </div>

          {/* Section F - Photos */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-gray-100">Photo Gallery</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs">
                Privacy: Members Only
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="p-2 bg-white rounded-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Score Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-4">AI Profile Score</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#febe33"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - user.aiScore / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl text-gray-900 dark:text-gray-100">{user.aiScore}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Profile Completeness</span>
                <span className="text-gray-900 dark:text-gray-100">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Photo Quality</span>
                <span className="text-gray-900 dark:text-gray-100">88%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Verification Level</span>
                <span className="text-gray-900 dark:text-gray-100">High</span>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Activity Timeline</h3>
            <div className="space-y-4">
              {activityTimeline.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                    />
                    {index < activityTimeline.length - 1 && (
                      <div className="w-px h-full bg-gray-200 dark:bg-gray-700 my-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm text-gray-900 dark:text-gray-100">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.date} at {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Profile Views</span>
                <span className="text-gray-900 dark:text-gray-100">234</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Interests Sent</span>
                <span className="text-gray-900 dark:text-gray-100">12</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Interests Received</span>
                <span className="text-gray-900 dark:text-gray-100">45</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">AI Matches</span>
                <span className="text-gray-900 dark:text-gray-100">23</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Active Chats</span>
                <span className="text-gray-900 dark:text-gray-100">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
