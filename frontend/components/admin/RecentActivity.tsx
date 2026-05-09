'use client';

import { useState, useEffect } from 'react';
import { Clock, Package, User, Shield, AlertTriangle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'shipment' | 'user' | 'compliance' | 'security';
  action: string;
  details: string;
  timestamp: string;
  user?: string;
}

const typeIcons = {
  shipment: Package,
  user: User,
  compliance: Shield,
  security: AlertTriangle,
};

const typeColors = {
  shipment: 'bg-blue-100 text-blue-700',
  user: 'bg-green-100 text-green-700',
  compliance: 'bg-purple-100 text-purple-700',
  security: 'bg-red-100 text-red-700',
};

export default function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem('gax_token');
      const response = await fetch('/api/admin/activity?limit=10', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setActivities(data.activities || []);
      }
    } catch (error) {
      console.error('Failed to fetch activities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-14 bg-slate-100 rounded-lg" />
        ))}
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="text-center py-8">
        <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" aria-hidden="true" />
        <p className="text-accent">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="space-y-3" role="list" aria-label="Recent activity">
      {activities.map((activity) => {
        const Icon = typeIcons[activity.type];
        return (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
            role="listitem"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${typeColors[activity.type]}`}>
              <Icon className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-primary">{activity.action}</p>
              <p className="text-xs text-accent truncate">{activity.details}</p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-3 h-3 text-accent-light" aria-hidden="true" />
                <span className="text-xs text-accent-light">
                  {new Date(activity.timestamp).toLocaleString('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })}
                </span>
                {activity.user && (
                  <span className="text-xs text-accent-light">by {activity.user}</span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
