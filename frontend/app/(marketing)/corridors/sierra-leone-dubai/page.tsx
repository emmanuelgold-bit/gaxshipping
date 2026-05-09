import type { Metadata } from 'next';
import Link from 'next/link';
import { Plane, MapPin, Shield, Clock, ChevronRight, Globe, FileCheck } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Sierra Leone to Dubai Corridor',
  description: 'Secure precious metals logistics corridor from Sierra Leone to Dubai. DMCC-approved vaulting, UAE Federal Customs compliance, 24-48 hour transit.',
};

export default function DubaiCorridorPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="dubai-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-secondary font-mono text-sm">SL-DXB</span>
              <span className="text-accent-light">|</span>
              <span className="text-accent-light text-sm">International Corridor</span>
            </div>
            <h1 id="dubai-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Sierra Leone <span className="text-secondary">→</span> Dubai
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              Direct air freight corridor connecting Freetown to Dubai International Airport, 
              with onward coordination to DMCC-approved vaulting facilities.
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
                      <p className="text-xs text-accent-light">Collection from client premises or mining site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Plane className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Air Transit</h3>
                      <p className="text-sm text-accent">Lungi International Airport (FNA) → Dubai International Airport (DXB)</p>
                      <p className="text-xs text-accent-light">Certified cargo carriers with secure cargo hold placement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Destination</h3>
                      <p className="text-sm text-accent">Dubai, United Arab Emirates</p>
                      <p className="text-xs text-accent-light">DMCC-approved vaulting facilities or client-designated location</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-primary mb-4">Transit Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Typical Duration</p>
                      <p className="text-lg font-semibold text-primary">24–48 Hours</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Security Level</p>
                      <p className="text-lg font-semibold text-primary">High / Maximum</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Tracking</p>
                      <p className="text-lg font-semibold text-primary">GPS + Flight Aware</p>
                    </div>
                    <div>
                      <p className="text-xs text-accent uppercase tracking-wide">Insurance</p>
                      <p className="text-lg font-semibold text-primary">All-Risk Coverage</p>
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
                      <h3 className="font-semibold text-primary">UAE Federal Customs Authority</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Full compliance with UAE Federal Customs Authority import regulations for precious metals. 
                      Pre-clearance coordination where available to minimize delays at DXB.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">DMCC Approved Logistics</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Coordination with Dubai Multi Commodities Centre (DMCC) approved vaulting and logistics 
                      partners for secure storage and onward distribution within the UAE.
                    </p>
                  </div>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-secondary" aria-hidden="true" />
                      <h3 className="font-semibold text-primary">Sierra Leone Export</h3>
                    </div>
                    <p className="text-sm text-accent">
                      Complete PMTD valuation, NMA vetting, and ministerial certificate issuance before 
                      departure. 3% export duty paid to Bank of Sierra Leone.
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
              Security <span className="text-secondary">Protocols</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Shield className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Armed Escort</h3>
                <p className="text-sm text-accent-light">
                  Armed escort protocols where permitted by jurisdictional authorities, 
                  from collection point through airport handover.
                </p>
              </div>
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Clock className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-sm text-accent-light">
                  24/7 operations center monitoring with GPS tracking, geofencing alerts, 
                  and automated status updates.
                </p>
              </div>
              <div className="bg-primary-light rounded-xl p-6 border border-slate-700">
                <Plane className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                <h3 className="font-semibold mb-2">Secure Air Transit</h3>
                <p className="text-sm text-accent-light">
                  Certified cargo carriers with secure hold placement, tamper-evident 
                  sealing, and chain-of-custody documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-4">Ready to Ship to Dubai?</h2>
            <p className="text-accent mb-8">
              Contact our operations team to coordinate your precious metals shipment 
              from Sierra Leone to Dubai.
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
