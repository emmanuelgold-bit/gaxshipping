'use client';

import { CheckCircle2, Circle, Clock, AlertTriangle } from 'lucide-react';

interface TrackingEvent {
  id: string;
  stage: string;
  status: string;
  location: string;
  timestamp: string;
  notes?: string;
}

interface TrackingTimelineProps {
  events: TrackingEvent[];
  currentStatus: string;
}

const stageOrder = [
  'collection',
  'verification',
  'vaulting',
  'customs',
  'air_transit',
  'final_delivery',
];

const stageLabels: Record<string, string> = {
  collection: 'Collection',
  verification: 'Verification',
  vaulting: 'Vaulting',
  customs: 'Customs',
  air_transit: 'Air Transit',
  final_delivery: 'Final Delivery',
};

export default function TrackingTimeline({ events, currentStatus }: TrackingTimelineProps) {
  const getStageStatus = (stage: string) => {
    const event = events.find(e => e.stage === stage);
    if (event) return 'completed';

    const currentStageIndex = stageOrder.indexOf(currentStatus);
    const stageIndex = stageOrder.indexOf(stage);

    if (stageIndex < currentStageIndex) return 'completed';
    if (stageIndex === currentStageIndex) return 'current';
    return 'pending';
  };

  return (
    <div className="space-y-0" role="list" aria-label="Shipment progress">
      {stageOrder.map((stage, index) => {
        const status = getStageStatus(stage);
        const event = events.find(e => e.stage === stage);
        const isLast = index === stageOrder.length - 1;

        return (
          <div key={stage} className="flex gap-4" role="listitem">
            {/* Timeline line and icon */}
            <div className="flex flex-col items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                ${status === 'completed' ? 'bg-green-100 text-green-600' : ''}
                ${status === 'current' ? 'bg-secondary/20 text-secondary ring-2 ring-secondary' : ''}
                ${status === 'pending' ? 'bg-slate-100 text-slate-400' : ''}
              `}>
                {status === 'completed' && <CheckCircle2 className="w-5 h-5" aria-hidden="true" />}
                {status === 'current' && <Clock className="w-5 h-5" aria-hidden="true" />}
                {status === 'pending' && <Circle className="w-5 h-5" aria-hidden="true" />}
              </div>
              {!isLast && (
                <div className={`
                  w-0.5 flex-1 min-h-[40px] mt-2
                  ${status === 'completed' ? 'bg-green-300' : 'bg-slate-200'}
                `} aria-hidden="true" />
              )}
            </div>

            {/* Content */}
            <div className={`pb-8 ${isLast ? '' : ''}`}>
              <h3 className={`
                font-semibold
                ${status === 'completed' ? 'text-primary' : ''}
                ${status === 'current' ? 'text-secondary' : ''}
                ${status === 'pending' ? 'text-slate-400' : ''}
              `}>
                {stageLabels[stage]}
              </h3>

              {event && (
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-accent">{event.status}</p>
                  <p className="text-xs text-accent-light">
                    {new Date(event.timestamp).toLocaleString('en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </p>
                  {event.location && (
                    <p className="text-xs text-accent-light">Location: {event.location}</p>
                  )}
                  {event.notes && (
                    <p className="text-xs text-accent mt-1">{event.notes}</p>
                  )}
                </div>
              )}

              {status === 'current' && !event && (
                <p className="text-sm text-secondary mt-2">In progress...</p>
              )}

              {status === 'pending' && (
                <p className="text-sm text-slate-400 mt-2">Pending</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
