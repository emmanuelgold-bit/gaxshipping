'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  Search, 
  Filter, 
  ChevronRight,
  Package,
  AlertTriangle,
  Loader2
} from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ShipmentTable from '@/components/admin/ShipmentTable';
import CreateShipmentModal from '@/components/admin/CreateShipmentModal';
import toast from 'react-hot-toast';

export default function ShipmentsPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [shipments, setShipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchShipments();
  }, [user, router]);

  const fetchShipments = async () => {
    try {
      const token = localStorage.getItem('gax_token');
      const response = await fetch('/api/shipments', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setShipments(data.shipments || []);
      }
    } catch (error) {
      console.error('Failed to fetch shipments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredShipments = shipments.filter((shipment: any) => {
    const matchesSearch = 
      shipment.trackingNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.origin?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.destination?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || shipment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!user) return null;

  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-primary">Shipments</h1>
              <p className="text-accent">Manage and track all precious metals shipments</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary-light transition-colors"
              aria-label="Create new shipment"
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              New Shipment
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" aria-hidden="true" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by tracking number, origin, or destination..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  aria-label="Search shipments"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-accent" aria-hidden="true" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  aria-label="Filter by status"
                >
                  <option value="all">All Statuses</option>
                  <option value="collection_scheduled">Collection Scheduled</option>
                  <option value="collected">Collected</option>
                  <option value="verification_pending">Verification Pending</option>
                  <option value="verified">Verified</option>
                  <option value="vaulted">Vaulted</option>
                  <option value="customs_processing">Customs Processing</option>
                  <option value="customs_cleared">Customs Cleared</option>
                  <option value="air_transit">Air Transit</option>
                  <option value="arrived_destination">Arrived at Destination</option>
                  <option value="final_delivery_scheduled">Final Delivery Scheduled</option>
                  <option value="delivered">Delivered</option>
                  <option value="exception">Exception</option>
                </select>
              </div>
            </div>
          </div>

          {/* Shipments Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-secondary" aria-hidden="true" />
              </div>
            ) : filteredShipments.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" aria-hidden="true" />
                <p className="text-accent">No shipments found matching your criteria</p>
              </div>
            ) : (
              <ShipmentTable shipments={filteredShipments} />
            )}
          </div>
        </div>
      </main>
      <Footer />

      {isCreateModalOpen && (
        <CreateShipmentModal
          onClose={() => setIsCreateModalOpen(false)}
          onSuccess={() => {
            setIsCreateModalOpen(false);
            fetchShipments();
            toast.success('Shipment created successfully');
          }}
        />
      )}
    </>
  );
}
