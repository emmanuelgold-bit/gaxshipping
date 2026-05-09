import type { Metadata } from 'next';
import Link from 'next/link';
import { Plane, MapPin, Shield, Clock, ChevronRight, Globe, FileCheck } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Sierra Leone to Hong Kong Corridor',
  description: 'Secure precious metals logistics corridor from Sierra Leone to Hong Kong. Asia-Pacific market access, Hong Kong Customs compliance, 48-72 hour transit.',
};

export default function HongKongCorridorPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="hk-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-secondary font-mono text-sm">SL-HK</span>
              <span className="text-accent-light">|</span>
              <span className="text-accent-light text-sm">International Corridor</span>
            </div>
            <h1 id="hk-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Sierra Leone <span className="text-secondary">→</span> Hong Kong
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              Air freight coordination to Hong Kong International Airport, connecting 
              to Asia-Pacific precious metals markets. Secure cross-border operations.
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
                      <p className="text-xs text-accent-light">Private client and mining sector support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Plane className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Air Transit</h3>
                      <p className="text-sm text-accent">Lungi International Airport (FNA) → Hong Kong International Airport (HKG)</p>
                      <p className="text-xs text-accent-light">Via Middle East or European hub</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Destination</h3>
                      <p className="text-sm text-accent">Hong Kong SAR</p>
                      <p className="text-xs text-accent-light">Hong Kong vault facilities or client-designated location</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-primary mb-4">Transit Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Typical Duration</p>
                      <p className="text-lg font-semibold text-primary">48–72 Hours</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Security Level</p>
                      <p className="text-lg font-semibold text-primary">High / Maximum</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Market Access</p>
                      <p className="text-lg font-semibold text-primary">Asia-Pacific</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Customs</p>
                      <p className="text-lg font-semibold text-primary">HK C&ED</p>
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
                      <h3 className="font-semibold text-primary">Hong Kong Customs & Excise</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Full compliance with Hong Kong Customs and Excise Department (C&ED) requirements 
                      for precious metals import. Advance notification and documentation submission 
                      to expedite clearance.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">Asia-Pacific Market Coordination</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Established relationships with Hong Kong vault operators and logistics partners 
                      for onward distribution to mainland China, Singapore, and other Asia-Pacific markets.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">Sierra Leone Export Compliance</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Complete PMTD valuation, NMA vetting, and ministerial certification. All export 
                      duties and royalties paid in accordance with Mines and Minerals Act 2009.
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
              Asia-Pacific <span className="text-secondary">Operations</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Shield className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Secure Cross-Border Operations</h3>
                <p className="text-sm text-accent-light">
                  Multi-leg secure transport with custody transfers at each transit point, 
                  maintaining unbroken chain-of-custody documentation.
                </p>
              </div>
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Clock className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Time Zone Coordination</h3>
                <p className="text-sm text-accent-light">
                  24/7 operations center managing time zone differences between Sierra Leone (GMT) 
                  and Hong Kong (HKT) for seamless coordination.
                </p>
              </div>
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Globe className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Market Intelligence</h3>
                <p className="text-sm text-accent-light">
                  Real-time market intelligence on Asia-Pacific precious metals demand, pricing, 
                  and regulatory changes affecting shipments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-4">Connect to Asia-Pacific Markets</h2>
            <p className="text-accent mb-8">
              Secure cross-border operations connecting Sierra Leone to Hong Kong and 
              the broader Asia-Pacific precious metals market.
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
