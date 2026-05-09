'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Package, Clock, MapPin, Shield, AlertCircle, ChevronRight, Loader2 } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TrackingTimeline from '@/components/tracking/TrackingTimeline';
import TrackingMap from '@/components/tracking/TrackingMap';

export default function TrackingPage() {
  const searchParams = useSearchParams();
  const initialRef = searchParams.get('ref') || '';

  const [trackingNumber, setTrackingNumber] = useState(initialRef);
  const [isLoading, setIsLoading] = useState(false);
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    setError('');
    setShipment(null);

    try {
      const response = await fetch(`/api/tracking/public?ref=${encodeURIComponent(trackingNumber)}`);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Shipment not found. Please verify your tracking number and try again.');
        } else {
          setError('Unable to retrieve tracking information. Please try again later.');
        }
        return;
      }
      const data = await response.json();
      setShipment(data);
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="tracking-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="tracking-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Track Your <span className="text-secondary">Shipment</span>
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              Enter your tracking number to view the current status and location of your precious metals shipment.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background" aria-label="Tracking search">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleTrack} className="relative">
              <label htmlFor="tracking-input" className="sr-only">
                Enter your tracking number
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" aria-hidden="true" />
                  <input
                    id="tracking-input"
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number (e.g., GAX-2024-001234)"
                    className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-lg"
                    aria-describedby="tracking-help"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !trackingNumber.trim()}
                  className="px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  aria-label={isLoading ? 'Searching for shipment' : 'Track shipment'}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" aria-hidden="true" />
                      Track
                    </>
                  )}
                </button>
              </div>
              <p id="tracking-help" className="mt-2 text-sm text-accent">
                Tracking numbers follow the format: GAX-YYYY-XXXXXX
              </p>
            </form>

            {error && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {shipment && (
          <section className="py-12 bg-white" aria-label="Shipment details">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Shipment Header */}
              <div className="bg-primary text-white rounded-xl p-6 mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-accent-light text-sm">Tracking Number</p>
                    <p className="text-2xl font-bold">{shipment.trackingNumber}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg px-4 py-2">
                    <p className="text-sm text-accent-light">Status</p>
                    <p className="font-semibold">{shipment.statusLabel}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-xs text-accent-light">Origin</p>
                    <p className="font-medium">{shipment.origin}</p>
                  </div>
                  <div>
                    <p className="text-xs text-accent-light">Destination</p>
                    <p className="font-medium">{shipment.destination}</p>
                  </div>
                  <div>
                    <p className="text-xs text-accent-light">Corridor</p>
                    <p className="font-medium">{shipment.corridor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-accent-light">Est. Delivery</p>
                    <p className="font-medium">{shipment.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Tracking Timeline */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-bold text-primary mb-6">Shipment Timeline</h2>
                  <TrackingTimeline events={shipment.events} currentStatus={shipment.status} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-6">Current Location</h2>
                  <TrackingMap location={shipment.currentLocation} />
                  <div className="mt-6 bg-slate-50 rounded-lg p-4">
                    <h3 className="font-semibold text-primary mb-3">Shipment Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-accent">Cargo Type</span>
                        <span className="font-medium">{shipment.cargoType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent">Weight</span>
                        <span className="font-medium">{shipment.weightKg} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent">Security Level</span>
                        <span className="font-medium">{shipment.securityLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-accent">Armed Escort</span>
                        <span className="font-medium">{shipment.armedEscort ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {!shipment && !isLoading && !error && (
          <section className="py-12 bg-white" aria-label="Tracking information">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Shield className="w-16 h-16 text-secondary/30 mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-primary mb-2">How Tracking Works</h2>
              <p className="text-accent mb-8">
                Our tracking system provides real-time updates as your precious metals shipment 
                progresses through each stage of our secure logistics pipeline.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Package, title: 'Enter Tracking Number', desc: 'Use the tracking number provided at shipment creation' },
                  { icon: Clock, title: 'Real-Time Updates', desc: 'View current status and estimated delivery time' },
                  { icon: MapPin, title: 'Location Tracking', desc: 'Monitor your shipment's current location and route' },
                ].map((item, i) => (
                  <div key={i} className="bg-background rounded-lg p-6">
                    <item.icon className="w-8 h-8 text-secondary mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-accent">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
