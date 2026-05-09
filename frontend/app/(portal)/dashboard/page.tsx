'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Shield, 
  FileText, 
  Settings, 
  LogOut,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Clock,
  MapPin,
  BarChart3,
  Search,
  Plus,
  Filter
} from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ShipmentTable from '@/components/admin/ShipmentTable';
import StatCard from '@/components/admin/StatCard';
import RecentActivity from '@/components/admin/RecentActivity';
import toast from 'react-hot-toast';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Package, label: 'Shipments', href: '/shipments' },
  { icon: Users, label: 'Clients', href: '/dashboard/clients' },
  { icon: Shield, label: 'Compliance', href: '/dashboard/compliance' },
  { icon: FileText, label: 'Audit Logs', href: '/dashboard/audit' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    activeShipments: 0,
    deliveredThisMonth: 0,
    pendingCustoms: 0,
    exceptions: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchDashboardStats();
  }, [user, router]);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem('gax_token');
      const response = await fetch('/api/admin/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  if (!user) return null;

  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0" aria-label="Admin sidebar">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-24">
                <div className="mb-6 pb-4 border-b border-slate-200">
                  <p className="text-sm font-semibold text-primary">{user.email}</p>
                  <p className="text-xs text-accent capitalize">{user.role} Account</p>
                </div>
                <nav className="space-y-1" aria-label="Dashboard navigation">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-accent hover:bg-slate-50 hover:text-primary transition-colors"
                    >
                      <item.icon className="w-4 h-4" aria-hidden="true" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-error hover:bg-red-50 transition-colors w-full"
                    aria-label="Log out"
                  >
                    <LogOut className="w-4 h-4" aria-hidden="true" />
                    Log Out
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
                <p className="text-accent">Overview of your logistics operations</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                  title="Active Shipments"
                  value={stats.activeShipments}
                  icon={Package}
                  trend="+12%"
                  color="blue"
                />
                <StatCard
                  title="Delivered This Month"
                  value={stats.deliveredThisMonth}
                  icon={TrendingUp}
                  trend="+8%"
                  color="green"
                />
                <StatCard
                  title="Pending Customs"
                  value={stats.pendingCustoms}
                  icon={Clock}
                  trend="-3%"
                  color="yellow"
                />
                <StatCard
                  title="Exceptions"
                  value={stats.exceptions}
                  icon={AlertTriangle}
                  trend="0%"
                  color="red"
                />
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
                <h2 className="text-lg font-semibold text-primary mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/shipments/new"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary-light transition-colors"
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                    New Shipment
                  </Link>
                  <Link
                    href="/tracking"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-primary rounded-lg font-medium hover:bg-slate-50 transition-colors"
                  >
                    <Search className="w-4 h-4" aria-hidden="true" />
                    Track Shipment
                  </Link>
                  <Link
                    href="/dashboard/clients"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 text-primary rounded-lg font-medium hover:bg-slate-50 transition-colors"
                  >
                    <Users className="w-4 h-4" aria-hidden="true" />
                    Manage Clients
                  </Link>
                </div>
              </div>

              {/* Recent Shipments */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-primary">Recent Shipments</h2>
                  <Link
                    href="/shipments"
                    className="text-sm text-secondary hover:underline inline-flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
                <ShipmentTable limit={5} />
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-primary mb-4">Recent Activity</h2>
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
