'use client';

import { MapPin } from 'lucide-react';

interface TrackingMapProps {
  location: string;
}

export default function TrackingMap({ location }: TrackingMapProps) {
  return (
    <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center border border-slate-200">
      <div className="text-center">
        <MapPin className="w-10 h-10 text-secondary mx-auto mb-2" aria-hidden="true" />
        <p className="text-primary font-semibold">{location}</p>
        <p className="text-xs text-accent mt-1">
          Interactive map available via Mapbox/Google Maps API integration
        </p>
      </div>
    </div>
  );
}
