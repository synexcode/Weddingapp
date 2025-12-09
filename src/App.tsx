import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/pages/Dashboard';
import { UsersManagement } from './components/pages/UsersManagement';
import { UserDetailsPage } from './components/pages/UserDetailsPage';
import { AIManagement } from './components/pages/AIManagement';
import { MembershipManagement } from './components/pages/MembershipManagement';
import { PaymentsBilling } from './components/pages/PaymentsBilling';
import { ChatMonitoring } from './components/pages/ChatMonitoring';
import { InterestsManagement } from './components/pages/InterestsManagement';
import { PhotoVerification } from './components/pages/PhotoVerification';
import { ReportsComplaints } from './components/pages/ReportsComplaints';
import { CMS } from './components/pages/CMS';
import { Settings } from './components/pages/Settings';
import { AdminRoles } from './components/pages/AdminRoles';
import { Notifications } from './components/pages/Notifications';
import { SuccessStories } from './components/pages/SuccessStories';
import { LogsSecurity } from './components/pages/LogsSecurity';
import { TopBar } from './components/TopBar';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    if (selectedUserId && currentPage === 'users') {
      return <UserDetailsPage userId={selectedUserId} onBack={() => setSelectedUserId(null)} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersManagement onViewUser={(id) => setSelectedUserId(id)} />;
      case 'ai-management':
        return <AIManagement />;
      case 'memberships':
        return <MembershipManagement />;
      case 'payments':
        return <PaymentsBilling />;
      case 'chat':
        return <ChatMonitoring />;
      case 'interests':
        return <InterestsManagement />;
      case 'photo-verification':
        return <PhotoVerification />;
      case 'reports':
        return <ReportsComplaints />;
      case 'cms':
        return <CMS />;
      case 'settings':
        return <Settings />;
      case 'admin-roles':
        return <AdminRoles />;
      case 'notifications':
        return <Notifications />;
      case 'success-stories':
        return <SuccessStories />;
      case 'logs':
        return <LogsSecurity />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col">
          <TopBar 
            darkMode={darkMode} 
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onMenuClick={() => setSidebarOpen(true)}
          />
          <main className="flex-1 p-6 lg:p-8 overflow-auto">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}