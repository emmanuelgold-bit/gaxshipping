'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Loader2, Package } from 'lucide-react';
import toast from 'react-hot-toast';

const shipmentSchema = z.object({
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  corridor: z.enum(['SL-DXB', 'SL-CH', 'SL-HK']),
  cargoType: z.string().min(1, 'Cargo type is required'),
  weightKg: z.number().min(0.001, 'Weight must be greater than 0'),
  declaredValue: z.number().min(1, 'Declared value is required'),
  securityLevel: z.enum(['standard', 'high', 'maximum']).default('high'),
  armedEscort: z.boolean().default(false),
  clientEmail: z.string().email('Valid client email is required'),
});

type ShipmentFormData = z.infer<typeof shipmentSchema>;

interface CreateShipmentModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateShipmentModal({ onClose, onSuccess }: CreateShipmentModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShipmentFormData>({
    resolver: zodResolver(shipmentSchema),
    defaultValues: {
      corridor: 'SL-DXB',
      securityLevel: 'high',
      armedEscort: false,
    },
  });

  const onSubmit = async (data: ShipmentFormData) => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('gax_token');
      const response = await fetch('/api/shipments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create shipment');
      }

      onSuccess();
    } catch (error: any) {
      toast.error(error.message || 'Failed to create shipment');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-secondary" aria-hidden="true" />
            <h2 id="modal-title" className="text-xl font-bold text-primary">Create New Shipment</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-primary mb-1">
                Origin <span className="text-error">*</span>
              </label>
              <input
                id="origin"
                {...register('origin')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Freetown, Sierra Leone"
                aria-invalid={errors.origin ? 'true' : 'false'}
                aria-describedby={errors.origin ? 'origin-error' : undefined}
              />
              {errors.origin && (
                <p id="origin-error" className="mt-1 text-sm text-error" role="alert">{errors.origin.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-primary mb-1">
                Destination <span className="text-error">*</span>
              </label>
              <input
                id="destination"
                {...register('destination')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Dubai, UAE"
                aria-invalid={errors.destination ? 'true' : 'false'}
                aria-describedby={errors.destination ? 'destination-error' : undefined}
              />
              {errors.destination && (
                <p id="destination-error" className="mt-1 text-sm text-error" role="alert">{errors.destination.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="corridor" className="block text-sm font-medium text-primary mb-1">
                Corridor <span className="text-error">*</span>
              </label>
              <select
                id="corridor"
                {...register('corridor')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="SL-DXB">Sierra Leone → Dubai (SL-DXB)</option>
                <option value="SL-CH">Sierra Leone → Switzerland (SL-CH)</option>
                <option value="SL-HK">Sierra Leone → Hong Kong (SL-HK)</option>
              </select>
            </div>

            <div>
              <label htmlFor="cargoType" className="block text-sm font-medium text-primary mb-1">
                Cargo Type <span className="text-error">*</span>
              </label>
              <select
                id="cargoType"
                {...register('cargoType')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                aria-invalid={errors.cargoType ? 'true' : 'false'}
                aria-describedby={errors.cargoType ? 'cargo-error' : undefined}
              >
                <option value="">Select cargo type</option>
                <option value="Gold Bullion">Gold Bullion</option>
                <option value="Refined Gold">Refined Gold</option>
                <option value="Gold Dore">Gold Dore</option>
                <option value="Silver">Silver</option>
                <option value="Platinum">Platinum</option>
                <option value="Palladium">Palladium</option>
              </select>
              {errors.cargoType && (
                <p id="cargo-error" className="mt-1 text-sm text-error" role="alert">{errors.cargoType.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="weightKg" className="block text-sm font-medium text-primary mb-1">
                Weight (kg) <span className="text-error">*</span>
              </label>
              <input
                id="weightKg"
                type="number"
                step="0.001"
                {...register('weightKg', { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="0.000"
                aria-invalid={errors.weightKg ? 'true' : 'false'}
                aria-describedby={errors.weightKg ? 'weight-error' : undefined}
              />
              {errors.weightKg && (
                <p id="weight-error" className="mt-1 text-sm text-error" role="alert">{errors.weightKg.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="declaredValue" className="block text-sm font-medium text-primary mb-1">
                Declared Value (USD) <span className="text-error">*</span>
              </label>
              <input
                id="declaredValue"
                type="number"
                step="0.01"
                {...register('declaredValue', { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="0.00"
                aria-invalid={errors.declaredValue ? 'true' : 'false'}
                aria-describedby={errors.declaredValue ? 'value-error' : undefined}
              />
              {errors.declaredValue && (
                <p id="value-error" className="mt-1 text-sm text-error" role="alert">{errors.declaredValue.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="securityLevel" className="block text-sm font-medium text-primary mb-1">
                Security Level
              </label>
              <select
                id="securityLevel"
                {...register('securityLevel')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="standard">Standard</option>
                <option value="high">High</option>
                <option value="maximum">Maximum</option>
              </select>
            </div>

            <div>
              <label htmlFor="clientEmail" className="block text-sm font-medium text-primary mb-1">
                Client Email <span className="text-error">*</span>
              </label>
              <input
                id="clientEmail"
                type="email"
                {...register('clientEmail')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="client@company.com"
                aria-invalid={errors.clientEmail ? 'true' : 'false'}
                aria-describedby={errors.clientEmail ? 'client-error' : undefined}
              />
              {errors.clientEmail && (
                <p id="client-error" className="mt-1 text-sm text-error" role="alert">{errors.clientEmail.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="armedEscort"
              type="checkbox"
              {...register('armedEscort')}
              className="w-4 h-4 text-secondary border-slate-300 rounded focus:ring-secondary"
            />
            <label htmlFor="armedEscort" className="text-sm text-accent">
              Armed escort protocols where permitted
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 text-primary rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary-light transition-colors disabled:opacity-50 inline-flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  Creating...
                </>
              ) : (
                'Create Shipment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
