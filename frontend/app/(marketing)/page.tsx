import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Globe, Lock, Plane, MapPin, ChevronRight, Phone, Mail, ExternalLink } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Secure Precious Metals Logistics | Global Atlantic Xpress Ltd.',
  description: 'Global Atlantic Xpress Ltd. provides institutional-grade secure freight operations for precious metals. Trusted across the Middle East and Africa (MENA), with international freight coordination to Dubai, Switzerland, and Hong Kong.',
  openGraph: {
    title: 'Global Atlantic Xpress Ltd. | Secure Precious Metals Logistics',
    description: 'Institutional-grade secure freight operations for precious metals.',
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative bg-primary text-white py-20 md:py-32 overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light opacity-90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Secure Precious Metals{' '}
                <span className="text-secondary">Logistics</span>
              </h1>
              <p className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl">
                Global Atlantic Xpress Ltd. provides institutional-grade secure freight operations 
                for precious metals. Trusted across the Middle East and Africa (MENA), with 
                international freight coordination to key global markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tracking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-light transition-colors"
                  aria-label="Track your shipment"
                >
                  Track Shipment
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/5 transition-colors"
                  aria-label="Contact us for inquiries"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white border-b border-slate-200" aria-label="Trust indicators">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">Sierra Leone</div>
                <div className="text-sm text-accent">Registered & Licensed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">MENA</div>
                <div className="text-sm text-accent">Regional Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">3</div>
                <div className="text-sm text-accent">International Corridors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                <div className="text-sm text-accent">Monitoring Systems</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="section-title">Our Services</h2>
              <p className="section-subtitle mx-auto">
                Comprehensive precious metals logistics solutions tailored to institutional 
                and private clients across the MENA region and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Secure Transport',
                  description: 'Armed escort protocols where permitted, with tamper-evident packaging and GPS-tracked vehicles for ground transport.',
                },
                {
                  icon: Plane,
                  title: 'Air Freight Coordination',
                  description: 'International freight coordination via certified air carriers, with secure chain-of-custody documentation from origin to destination.',
                },
                {
                  icon: Lock,
                  title: 'Vaulting & Storage',
                  description: 'Secure cross-border operations with accredited vaulting facilities and comprehensive insurance coverage.',
                },
                {
                  icon: Globe,
                  title: 'Customs Brokerage',
                  description: 'Expert navigation of Sierra Leone export procedures, Kimberley Process compliance, and destination country import regulations.',
                },
                {
                  icon: MapPin,
                  title: 'Private Client Support',
                  description: 'Private client and mining sector support with discreet handling, personalized service, and dedicated account management.',
                },
                {
                  icon: Shield,
                  title: 'Compliance Advisory',
                  description: 'Guidance on AML/KYC requirements, LBMA Responsible Gold Guidance alignment, and OECD Due Diligence standards.',
                },
              ].map((service, index) => (
                <div key={index} className="card group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-accent text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corridors Section */}
        <section className="py-20 bg-primary text-white" aria-labelledby="corridors-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="corridors-heading" className="text-3xl md:text-4xl font-bold mb-4">
                International <span className="text-secondary">Corridors</span>
              </h2>
              <p className="text-accent-light max-w-2xl mx-auto">
                Exceptional operational safety record across our primary shipping routes, 
                connecting Sierra Leone to key precious metals markets worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  route: 'Sierra Leone → Dubai',
                  code: 'SL-DXB',
                  description: 'Direct air freight to Dubai International Airport, with onward coordination to DMCC-approved vaulting facilities. Transit time: 24–48 hours.',
                  href: '/corridors/sierra-leone-dubai',
                },
                {
                  route: 'Sierra Leone → Switzerland',
                  code: 'SL-CH',
                  description: 'Secure transit to Zurich Airport, with Swiss Freeport and Zurich vault facility coordination. Transit time: 36–72 hours.',
                  href: '/corridors/sierra-leone-switzerland',
                },
                {
                  route: 'Sierra Leone → Hong Kong',
                  code: 'SL-HK',
                  description: 'Air freight coordination to Hong Kong International Airport, connecting to Asia-Pacific precious metals markets. Transit time: 48–72 hours.',
                  href: '/corridors/sierra-leone-hong-kong',
                },
              ].map((corridor, index) => (
                <Link
                  key={index}
                  href={corridor.href}
                  className="group bg-primary-light rounded-xl p-6 border border-slate-700 hover:border-secondary/50 transition-colors"
                  aria-label={`Learn more about ${corridor.route} corridor`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-secondary font-mono text-sm">{corridor.code}</span>
                    <ChevronRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{corridor.route}</h3>
                  <p className="text-accent-light text-sm">{corridor.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Preview */}
        <section className="py-20 bg-background" aria-labelledby="compliance-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="compliance-heading" className="section-title">Regulatory Compliance</h2>
                <p className="text-accent mb-6">
                  Global Atlantic Xpress Ltd. maintains rigorous compliance with international 
                  precious metals standards, including LBMA Responsible Gold Guidance, OECD Due 
                  Diligence Guidance, and Sierra Leone regulatory requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Sierra Leone Mines and Minerals Act 2009 compliance',
                    'Kimberley Process Certification Scheme (KPCS) alignment',
                    'Anti-Money Laundering (AML) & Counter-Terrorist Financing (CTF) protocols',
                    'OECD Due Diligence Guidance for Responsible Supply Chains',
                    'LBMA Responsible Gold Guidance (RGG) alignment',
                    'Comprehensive chain-of-custody documentation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
                  aria-label="View full compliance information"
                >
                  View Full Compliance
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-primary mb-4">Operating Standards</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Security Protocol', value: 'Armed escort where permitted' },
                    { label: 'Insurance Coverage', value: 'All-risk cargo insurance' },
                    { label: 'Documentation', value: 'Unbroken chain-of-custody' },
                    { label: 'Compliance Audit', value: 'Annual third-party review' },
                    { label: 'Record Retention', value: 'Minimum 5 years' },
                    { label: 'Staff Vetting', value: 'Background-checked handlers' },
                  ].map((standard, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm text-accent">{standard.label}</span>
                      <span className="text-sm font-medium text-primary">{standard.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your <span className="text-secondary">Shipment?</span>
            </h2>
            <p className="text-accent-light mb-8 max-w-2xl mx-auto">
              Contact our operations team to discuss your precious metals logistics requirements. 
              We provide tailored solutions for institutional and private clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/23272269319?text=Hello%20Global%20Atlantic%20Xpress,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                aria-label="Chat with us on WhatsApp"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
              <a
                href="mailto:globalatlanticxpress@gmail.com?subject=Inquiry%20-%20Global%20Atlantic%20Xpress"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-light transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email Us
              </a>
              <a
                href="tel:+23272269319"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/5 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
