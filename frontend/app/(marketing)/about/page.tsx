import type { Metadata } from 'next';
import { Shield, MapPin, Phone, Mail, Clock, FileText, Globe, CheckCircle } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Global Atlantic Xpress Ltd. - Registered in Sierra Leone. Precious Metals Logistics & Secure Freight Operations. 175 Regent Road, Freetown.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-white py-16" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-secondary">Global Atlantic Xpress</span>
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              A Sierra Leone-registered precious metals logistics company delivering 
              institutional-grade secure freight operations across MENA and key international markets.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-background" aria-labelledby="overview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 id="overview-heading" className="section-title">Company Profile</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-accent mb-4">
                    Global Atlantic Xpress Ltd. is a licensed precious metals logistics and secure 
                    freight operator registered in the Republic of Sierra Leone. We specialize in 
                    the secure transport of gold bullion, refined gold, and other precious metals 
                    from Sierra Leone to key international markets including Dubai, Switzerland, and 
                    Hong Kong.
                  </p>
                  <p className="text-accent mb-4">
                    Our operations are built on a foundation of strict regulatory compliance, 
                    unbroken chain-of-custody protocols, and exceptional operational safety record. 
                    We serve institutional clients, mining sector operators, and private clients 
                    requiring discreet, secure handling of high-value cargo.
                  </p>
                  <p className="text-accent">
                    Trusted across the Middle East and Africa (MENA), we provide international 
                    freight coordination with armed escort protocols where permitted, ensuring 
                    secure cross-border operations from collection through final delivery.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-primary mb-6">Company Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Legal Name</div>
                      <div className="text-sm text-accent">Global Atlantic Xpress Ltd.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Registration</div>
                      <div className="text-sm text-accent">Registered in Sierra Leone</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Business Classification</div>
                      <div className="text-sm text-accent">Precious Metals Logistics & Secure Freight Operations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Registered Address</div>
                      <div className="text-sm text-accent">175 Regent Road, Freetown, Sierra Leone</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Phone</div>
                      <div className="text-sm text-accent">+232 72 269 319</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Email</div>
                      <div className="text-sm text-accent">globalatlanticxpress@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-primary">Operating Hours</div>
                      <div className="text-sm text-accent">Monday – Friday, 9:00 AM – 4:00 PM (GMT)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Standards */}
        <section className="py-16 bg-white" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="values-heading" className="section-title">Our Standards</h2>
              <p className="section-subtitle mx-auto">
                We operate in strict accordance with international precious metals standards 
                and Sierra Leone regulatory requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Regulatory Compliance',
                  description: 'Full compliance with Sierra Leone Mines and Minerals Act 2009, National Minerals Agency (NMA) requirements, and Sierra Leone Revenue Authority (SLRA) export regulations.',
                },
                {
                  title: 'LBMA Alignment',
                  description: 'Operations aligned with LBMA Responsible Gold Guidance (RGG) principles, including supply chain due diligence, risk assessment, and third-party assurance standards.',
                },
                {
                  title: 'OECD Due Diligence',
                  description: 'Adherence to OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas (CAHRAs).',
                },
                {
                  title: 'Kimberley Process',
                  description: 'Where diamonds are included in cargo, full Kimberley Process Certification Scheme (KPCS) compliance through the Precious Minerals Trading Directorate (PMTD).',
                },
                {
                  title: 'AML/KYC Protocols',
                  description: 'Robust Anti-Money Laundering and Know Your Customer procedures aligned with FATF recommendations and Sierra Leone Financial Intelligence Unit requirements.',
                },
                {
                  title: 'Chain of Custody',
                  description: 'Unbroken chain-of-custody documentation with tamper-evident protocols, dual-control verification, and comprehensive audit trails.',
                },
              ].map((standard, index) => (
                <div key={index} className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-semibold text-primary">{standard.title}</h3>
                  </div>
                  <p className="text-sm text-accent">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Regions */}
        <section className="py-16 bg-primary text-white" aria-labelledby="regions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="regions-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Operational <span className="text-secondary">Regions</span>
              </h2>
              <p className="text-accent-light max-w-2xl mx-auto">
                Trusted across the Middle East and Africa (MENA), with secure corridors 
                connecting Sierra Leone to global precious metals markets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  region: 'Middle East & Africa (MENA)',
                  description: 'Primary operational region with comprehensive coverage of Sierra Leone, regional coordination hubs, and established relationships with local authorities and logistics partners.',
                },
                {
                  region: 'Europe (Switzerland)',
                  description: 'Direct corridor to Zurich and Swiss Freeport facilities, with Swiss Federal Customs Administration (EZV) compliance and FINMA-aligned due diligence procedures.',
                },
                {
                  region: 'Asia-Pacific (Dubai & Hong Kong)',
                  description: 'Corridors to Dubai Multi Commodities Centre (DMCC) and Hong Kong International Airport, with UAE Federal Customs Authority and Hong Kong Customs compliance.',
                },
              ].map((region, index) => (
                <div key={index} className="bg-primary-light rounded-xl p-6 border border-slate-700">
                  <Globe className="w-8 h-8 text-secondary mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold mb-2">{region.region}</h3>
                  <p className="text-accent-light text-sm">{region.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
