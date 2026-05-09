export interface User {
  id: string;
  email: string;
  role: 'admin' | 'operator' | 'client' | 'viewer';
  companyName?: string;
  phone?: string;
  kycStatus: 'pending' | 'verified' | 'rejected';
  createdAt: string;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  origin: string;
  destination: string;
  corridor: 'SL-DXB' | 'SL-CH' | 'SL-HK';
  cargoType: string;
  weightKg: number;
  declaredValue: number;
  status: ShipmentStatus;
  currentLocation: string;
  securityLevel: 'standard' | 'high' | 'maximum';
  armedEscort: boolean;
  createdAt: string;
  estimatedDelivery: string;
  actualDelivery?: string;
}

export type ShipmentStatus = 
  | 'collection_scheduled'
  | 'collected'
  | 'verification_pending'
  | 'verified'
  | 'vaulted'
  | 'customs_processing'
  | 'customs_cleared'
  | 'air_transit'
  | 'arrived_destination'
  | 'final_delivery_scheduled'
  | 'delivered'
  | 'exception';

export interface TrackingEvent {
  id: string;
  shipmentId: string;
  stage: WorkflowStage;
  status: string;
  location: string;
  timestamp: string;
  notes?: string;
  verifiedBy?: string;
  documentReferences?: Record<string, string>;
}

export type WorkflowStage = 
  | 'collection'
  | 'verification'
  | 'vaulting'
  | 'customs'
  | 'air_transit'
  | 'final_delivery';

export interface ComplianceDocument {
  id: string;
  slug: string;
  title: string;
  category: string;
  content: string;
  version: string;
  effectiveDate: string;
  lastReviewed: string;
  nextReview: string;
}

export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  resourceType: string;
  resourceId?: string;
  ipAddress?: string;
  timestamp: string;
  details?: Record<string, unknown>;
  severity: 'info' | 'warning' | 'critical';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
