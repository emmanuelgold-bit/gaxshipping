import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
}

export function generateTrackingNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 900000) + 100000;
  return `GAX-${year}-${random}`;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    collection_scheduled: 'bg-blue-100 text-blue-800',
    collected: 'bg-indigo-100 text-indigo-800',
    verification_pending: 'bg-yellow-100 text-yellow-800',
    verified: 'bg-green-100 text-green-800',
    vaulted: 'bg-purple-100 text-purple-800',
    customs_processing: 'bg-orange-100 text-orange-800',
    customs_cleared: 'bg-emerald-100 text-emerald-800',
    air_transit: 'bg-sky-100 text-sky-800',
    arrived_destination: 'bg-teal-100 text-teal-800',
    final_delivery_scheduled: 'bg-cyan-100 text-cyan-800',
    delivered: 'bg-green-100 text-green-800',
    exception: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    collection_scheduled: 'Collection Scheduled',
    collected: 'Collected',
    verification_pending: 'Verification Pending',
    verified: 'Verified',
    vaulted: 'Vaulted',
    customs_processing: 'Customs Processing',
    customs_cleared: 'Customs Cleared',
    air_transit: 'Air Transit',
    arrived_destination: 'Arrived at Destination',
    final_delivery_scheduled: 'Final Delivery Scheduled',
    delivered: 'Delivered',
    exception: 'Exception',
  };
  return labels[status] || status;
}
