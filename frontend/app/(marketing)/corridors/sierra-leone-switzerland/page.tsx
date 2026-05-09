import type { Metadata } from 'next';
import Link from 'next/link';
import { Plane, MapPin, Shield, Clock, ChevronRight, Globe, FileCheck } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Sierra Leone to Switzerland Corridor',
  description: 'Secure precious metals logistics corridor from Sierra Leone to Switzerland. Swiss Freeport coordination, FINMA-aligned due diligence, 36-72 hour transit.',
};

export default function SwitzerlandCorridorPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="swiss-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-secondary font-mono text-sm">SL-CH</span>
              <span className="text-accent-light">|</span>
              <span className="text-accent-light text-sm">International Corridor</span>
            </div>
            <h1 id="swiss-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Sierra Leone <span className="text-secondary">→</span> Switzerland
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              Secure transit corridor to Zurich Airport, with Swiss Freeport and Zurich 
              vault facility coordination. Exceptional operational safety record.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background" aria-labelledby="route-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 id="route-heading" className="section-title mb-6">Route Overview</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Origin</h3>
                      <p className="text-sm text-accent">Freetown, Sierra Leone</p>
                      <p className="text-xs text-accent-light">Collection with armed escort where permitted</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Plane className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Air Transit</h3>
                      <p className="text-sm text-accent">Lungi International Airport (FNA) → Zurich Airport (ZRH)</p>
                      <p className="text-xs text-accent-light">Via European hub with secure cargo handling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Destination</h3>
                      <p className="text-sm text-accent">Zurich, Switzerland</p>
                      <p className="text-xs text-accent-light">Swiss Freeport or Zurich vault facilities</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-primary mb-4">Transit Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Typical Duration</p>
                      <p className="text-lg font-semibold text-primary">36–72 Hours</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Security Level</p>
                      <p className="text-lg font-semibold text-primary">Maximum</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Customs</p>
                      <p className="text-lg font-semibold text-primary">Swiss EZV Pre-clearance</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Vault Standard</p>
                      <p className="text-lg font-semibold text-primary">Swiss Freeport / LBMA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="section-title mb-6">Regulatory Compliance</h2>
                <div className="space-y-4">
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">Swiss Federal Customs (EZV)</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Compliance with Swiss Federal Customs Administration (Eidgenössische Zollverwaltung) 
                      import procedures for precious metals. Pre-clearance documentation to expedite processing.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">FINMA-Aligned Due Diligence</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Anti-money laundering procedures aligned with Swiss Financial Market Supervisory 
                      Authority (FINMA) guidelines for precious metals dealers and logistics operators.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">Swiss Freeport Coordination</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Established relationships with Swiss Freeport facilities and Zurich vault operators 
                      for secure storage and onward distribution within Switzerland and the EU.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white" aria-labelledby="security-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="security-heading" className="text-3xl font-bold mb-8 text-center">
              Swiss <span className="text-secondary">Security Standards</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Shield className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Maximum Security Protocol</h3>
                <p className="text-sm text-accent-light">
                  Highest security classification with armed escort protocols where permitted, 
                  dedicated transport vehicles, and continuous surveillance.
                </p>
              </div>
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Clock className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Time-Critical Handling</h3>
                <p className="text-sm text-accent-light">
                  Expedited processing for time-sensitive shipments with dedicated handling 
                  teams at both origin and destination.
                </p>
              </div>
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Globe className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">EU Market Access</h3>
                <p className="text-sm text-accent-light">
                  Swiss corridor provides access to EU precious metals markets with harmonized 
                  customs procedures and VAT arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-4">Ship to Switzerland</h2>
            <p className="text-accent mb-8">
              Trusted across the Middle East and Africa (MENA) for secure international 
              freight coordination to Swiss markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-light transition-colors"
              >
                Contact Operations
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/tracking"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Track a Shipment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
