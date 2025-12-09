import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
}

export function StatCard({ title, value, icon: Icon, trend, trendUp, variant = 'default' }: StatCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#febe33', color: '#110607' };
      case 'success':
        return { backgroundColor: '#10b981', color: '#ffffff' };
      case 'danger':
        return { backgroundColor: '#ef4444', color: '#ffffff' };
      case 'warning':
        return { backgroundColor: '#f59e0b', color: '#ffffff' };
      default:
        return {};
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{title}</p>
          <p className="text-3xl text-gray-900 dark:text-gray-100 mb-1">{value}</p>
          {trend && (
            <p className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={variant !== 'default' ? variantStyles : { backgroundColor: '#febe33' }}
        >
          <Icon className="w-6 h-6" style={variant !== 'default' ? {} : { color: '#110607' }} />
        </div>
      </div>
    </div>
  );
}
