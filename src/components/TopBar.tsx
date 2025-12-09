import { Search, Moon, Sun, User, Menu } from 'lucide-react';

interface TopBarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onMenuClick?: () => void;
}

export function TopBar({ darkMode, onToggleDarkMode, onMenuClick }: TopBarProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile menu button */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        )}
        
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Global search (name, phone, ID)..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
          
          <div className="flex items-center gap-2 pl-3 border-l border-gray-300 dark:border-gray-600">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#febe33' }}>
              <User className="w-5 h-5" style={{ color: '#110607' }} />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm text-gray-900 dark:text-gray-100">Super Admin</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@ghani.org</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}