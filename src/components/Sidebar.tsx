import { 
  LayoutDashboard, 
  Users, 
  Brain, 
  CreditCard, 
  DollarSign, 
  MessageSquare, 
  Heart, 
  Image, 
  Flag, 
  FileText, 
  Settings, 
  Shield, 
  Bell, 
  Trophy, 
  Lock,
  X
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ currentPage, onNavigate, isOpen = true, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users Management', icon: Users },
    { id: 'ai-management', label: 'AI Management', icon: Brain },
    { id: 'memberships', label: 'Memberships', icon: CreditCard },
    { id: 'payments', label: 'Payments & Billing', icon: DollarSign },
    { id: 'chat', label: 'Chat Monitoring', icon: MessageSquare },
    { id: 'interests', label: 'Interests', icon: Heart },
    { id: 'photo-verification', label: 'Photo Verification', icon: Image },
    { id: 'reports', label: 'Reports & Complaints', icon: Flag },
    { id: 'cms', label: 'CMS', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'admin-roles', label: 'Admin Roles', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'success-stories', label: 'Success Stories', icon: Trophy },
    { id: 'logs', label: 'Logs & Security', icon: Lock },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && onClose && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-transform duration-300`}>
        {/* Mobile close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        <div className="p-6" style={{ backgroundColor: '#febe33' }}>
          <h1 className="text-xl" style={{ color: '#110607' }}>Ghani Welfare Trust</h1>
          <p className="text-sm mt-1" style={{ color: '#110607', opacity: 0.8 }}>Admin Dashboard</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                style={isActive ? { backgroundColor: '#febe33', color: '#110607' } : {}}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}