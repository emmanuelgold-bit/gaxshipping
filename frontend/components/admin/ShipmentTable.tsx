'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, AlertTriangle } from 'lucide-react';

interface Shipment {
  id: string;
  trackingNumber: string;
  origin: string;
  destination: string;
  status: string;
  statusLabel: string;
  statusColor: string;
  cargoType: string;
  weightKg: number;
  createdAt: string;
  estimatedDelivery: string;
}

interface ShipmentTableProps {
  limit?: number;
}

export default function ShipmentTable({ limit }: ShipmentTableProps) {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const token = localStorage.getItem('gax_token');
      const url = limit ? `/api/shipments?limit=${limit}` : '/api/shipments';
      const response = await fetch(url, {
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

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-slate-100 rounded-lg" />
        ))}
      </div>
    );
  }

  if (shipments.length === 0) {
    return (
      <div className="text-center py-8">
        <AlertTriangle className="w-8 h-8 text-slate-300 mx-auto mb-2" aria-hidden="true" />
        <p className="text-accent">No shipments found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" aria-label="Shipments table">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 font-medium text-accent">Tracking #</th>
            <th className="text-left py-3 px-4 font-medium text-accent">Route</th>
            <th className="text-left py-3 px-4 font-medium text-accent">Status</th>
            <th className="text-left py-3 px-4 font-medium text-accent">Cargo</th>
            <th className="text-left py-3 px-4 font-medium text-accent">Est. Delivery</th>
            <th className="text-right py-3 px-4 font-medium text-accent">Action</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4 font-medium text-primary">{shipment.trackingNumber}</td>
              <td className="py-3 px-4 text-accent">
                {shipment.origin} → {shipment.destination}
              </td>
              <td className="py-3 px-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${shipment.statusColor}`}>
                  {shipment.statusLabel}
                </span>
              </td>
              <td className="py-3 px-4 text-accent">
                {shipment.cargoType} ({shipment.weightKg} kg)
              </td>
              <td className="py-3 px-4 text-accent">{shipment.estimatedDelivery}</td>
              <td className="py-3 px-4 text-right">
                <Link
                  href={`/tracking?ref=${shipment.trackingNumber}`}
                  className="inline-flex items-center gap-1 text-secondary hover:underline"
                  aria-label={`Track shipment ${shipment.trackingNumber}`}
                >
                  Track
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
