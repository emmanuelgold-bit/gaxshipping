import type { Metadata } from 'next';
import { Shield, Plane, Lock, Globe, MapPin, FileCheck, Users, Truck, Warehouse, ClipboardCheck } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive precious metals logistics services including secure transport, air freight, vaulting, customs brokerage, and private client support.',
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              End-to-end precious metals logistics solutions designed for institutional 
              security standards and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-background" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="categories-heading" className="section-title text-center mb-12">
              Service Categories
            </h2>
            <div className="space-y-16">
              {/* Secure Transport */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Secure Ground Transport</h3>
                  <p className="text-accent mb-4">
                    Armed escort protocols where permitted by jurisdictional authorities, utilizing 
                    GPS-tracked vehicles with real-time monitoring. All transport personnel undergo 
                    rigorous background verification and specialized training in high-value cargo handling.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Tamper-evident vehicle sealing systems',
                      'Real-time GPS tracking with geofencing alerts',
                      'Two-person integrity protocols',
                      'Secure communication channels',
                      'Emergency response coordination',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-accent">
                        <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <h4 className="font-semibold text-primary mb-4">Transport Standards</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Vehicle Type', value: 'Armored / Secure Panel Van' },
                      { label: 'Tracking', value: 'GPS + Satellite Backup' },
                      { label: 'Communication', value: 'Encrypted Radio + Cellular' },
                      { label: 'Escort Protocol', value: 'Armed where permitted' },
                      { label: 'Insurance', value: 'All-risk transit coverage' },
                    ].map((std, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                        <span className="text-sm text-accent">{std.label}</span>
                        <span className="text-sm font-medium text-primary">{std.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Air Freight */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <h4 className="font-semibold text-primary mb-4">Air Freight Specifications</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Primary Carrier', value: 'Certified Cargo Airlines' },
                      { label: 'Cargo Hold', value: 'Secure / Bonded Area' },
                      { label: 'Documentation', value: 'Air Waybill + Customs Dec' },
                      { label: 'Transit Time', value: '24–72 hours (corridor dependent)' },
                      { label: 'Tracking', value: 'Flight-aware + Internal' },
                    ].map((std, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                        <span className="text-sm text-accent">{std.label}</span>
                        <span className="text-sm font-medium text-primary">{std.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Plane className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">International Air Freight</h3>
                  <p className="text-accent mb-4">
                    International freight coordination via certified air carriers with secure 
                    chain-of-custody documentation. All air transit operations comply with IATA 
                    dangerous goods regulations and international aviation security standards.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'IATA-compliant cargo handling procedures',
                      'Secure cargo hold placement',
                      'Bonded warehouse coordination at transit points',
                      'Customs pre-clearance where available',
                      'End-to-end shipment visibility',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-accent">
                        <Plane className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Vaulting */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Warehouse className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Vaulting & Storage</h3>
                  <p className="text-accent mb-4">
                    Secure cross-border operations with accredited vaulting facilities. Vaults maintain 
                    LBMA-aligned security standards with 24/7 monitoring, biometric access control, 
                    and comprehensive insurance coverage.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'LBMA-aligned vault security standards',
                      'Biometric access with dual-control requirements',
                      '24/7 CCTV monitoring and alarm systems',
                      'Climate-controlled storage environments',
                      'Comprehensive all-risk insurance coverage',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-accent">
                        <Lock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <h4 className="font-semibold text-primary mb-4">Vault Standards</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Security Rating', value: 'UL-rated / Equivalent' },
                      { label: 'Access Control', value: 'Biometric + PIN' },
                      { label: 'Monitoring', value: '24/7 CCTV + Guards' },
                      { label: 'Insurance', value: 'Lloyd's / A-Rated' },
                      { label: 'Audit', value: 'Continuous + Annual' },
                    ].map((std, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                        <span className="text-sm text-accent">{std.label}</span>
                        <span className="text-sm font-medium text-primary">{std.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customs Brokerage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <h4 className="font-semibold text-primary mb-4">Customs Procedures</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Export Permits', value: 'NMA + SLRA' },
                      { label: 'Valuation', value: 'PMTD / Independent' },
                      { label: 'Documentation', value: 'Certificate of Origin' },
                      { label: 'Tax Compliance', value: '3% Export Duty + 0.3% ACT' },
                      { label: 'Processing Time', value: '24–48 hours' },
                    ].map((std, i) => (
                      <div key={i} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                        <span className="text-sm text-accent">{std.label}</span>
                        <span className="text-sm font-medium text-primary">{std.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <ClipboardCheck className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Customs Brokerage</h3>
                  <p className="text-accent mb-4">
                    Expert navigation of Sierra Leone export procedures through the Precious Minerals 
                    Trading Directorate (PMTD), National Minerals Agency (NMA), and Sierra Leone 
                    Revenue Authority (SLRA). Destination country import compliance managed through 
                    established brokerage partnerships.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Sierra Leone export permit acquisition',
                      'Kimberley Process Certification (where applicable)',
                      'Certificate of Origin documentation',
                      'Customs valuation and duty compliance',
                      'Destination country import coordination',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-accent">
                        <FileCheck className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Client Support */}
        <section className="py-16 bg-primary text-white" aria-labelledby="private-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="private-heading" className="text-3xl font-bold mb-4">
                  Private Client & <span className="text-secondary">Mining Sector Support</span>
                </h2>
                <p className="text-accent-light mb-6">
                  Discreet, personalized service for private clients and mining sector operators 
                  requiring secure handling of high-value precious metals cargo. We understand the 
                  unique requirements of institutional and private clients operating in the MENA region.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: 'Dedicated Account Management',
                      description: 'Personal relationship manager for ongoing coordination and support.',
                    },
                    {
                      icon: MapPin,
                      title: 'Site Collection Services',
                      description: 'Direct collection from mining sites or client premises with secure transport.',
                    },
                    {
                      icon: Shield,
                      title: 'Discreet Operations',
                      description: 'Non-descript packaging and confidential handling protocols.',
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-accent-light">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-light rounded-xl p-8 border border-slate-700">
                <h3 className="text-lg font-semibold mb-4 text-secondary">Client Categories</h3>
                <div className="space-y-4">
                  {[
                    {
                      category: 'Mining Companies',
                      description: 'Large-scale and artisanal mining operators requiring export logistics.',
                    },
                    {
                      category: 'Refineries',
                      description: 'LBMA-aligned refineries requiring secure feedstock transport.',
                    },
                    {
                      category: 'Private Investors',
                      description: 'Individual and family office clients requiring discreet handling.',
                    },
                    {
                      category: 'Financial Institutions',
                      description: 'Banks and investment funds requiring bullion transport.',
                    },
                  ].map((client, i) => (
                    <div key={i} className="border-b border-slate-700 last:border-0 pb-4 last:pb-0">
                      <div className="font-medium mb-1">{client.category}</div>
                      <div className="text-sm text-accent-light">{client.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
