import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileText, Lock, Globe, ClipboardCheck, AlertTriangle, ChevronRight, Scale, BookOpen } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Compliance',
  description: 'Global Atlantic Xpress Ltd. compliance framework including export compliance, customs procedures, AML/KYC, chain-of-custody standards, and LBMA alignment.',
};

export default function CompliancePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="compliance-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="compliance-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Regulatory <span className="text-secondary">Compliance</span>
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              Our operations adhere to the highest international standards for precious metals 
              logistics, including LBMA Responsible Gold Guidance, OECD Due Diligence, and 
              Sierra Leone regulatory requirements.
            </p>
          </div>
        </section>

        {/* Compliance Cards */}
        <section className="py-16 bg-background" aria-labelledby="framework-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="framework-heading" className="section-title text-center mb-12">
              Compliance Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: 'Export Compliance',
                  summary: 'All exports adhere to the Sierra Leone Mines and Minerals Act 2009, National Minerals Agency (NMA) requirements, and destination country import regulations.',
                  link: '/compliance/export-compliance',
                },
                {
                  icon: ClipboardCheck,
                  title: 'Customs Procedures',
                  summary: 'Comprehensive customs brokerage services ensuring accurate classification, valuation, and documentation for all precious metals shipments through SLRA and PMTD.',
                  link: '/compliance/customs-procedures',
                },
                {
                  icon: Lock,
                  title: 'AML/KYC Program',
                  summary: 'Robust Anti-Money Laundering and Know Your Customer protocols aligned with FATF recommendations and Sierra Leone Financial Intelligence Unit requirements.',
                  link: '/compliance/aml-kyc',
                },
                {
                  icon: Shield,
                  title: 'Chain-of-Custody Standards',
                  summary: 'Unbroken chain-of-custody documentation from collection through final delivery, with tamper-evident protocols and dual-control verification.',
                  link: '/compliance/chain-of-custody',
                },
                {
                  icon: Scale,
                  title: 'Insurance & Liability',
                  summary: 'Comprehensive cargo insurance coverage through internationally recognized underwriters, with coverage limits appropriate to declared cargo values.',
                  link: '/compliance/insurance',
                },
                {
                  icon: BookOpen,
                  title: 'Legal Documents',
                  summary: 'Access our Export Disclaimer and Compliance Notice for detailed legal and regulatory information governing our operations.',
                  link: '/legal',
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="card group hover:border-secondary/50 transition-colors"
                  aria-label={`Learn more about ${item.title}`}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-accent mb-4">{item.summary}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-secondary font-medium">
                    Read More
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Bodies */}
        <section className="py-16 bg-white" aria-labelledby="regulators-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="regulators-heading" className="section-title">Regulatory Alignment</h2>
              <p className="section-subtitle mx-auto">
                Our compliance program aligns with internationally recognized standards and 
                Sierra Leone regulatory bodies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  body: 'Sierra Leone NMA',
                  description: 'National Minerals Agency export permit and regulatory compliance.',
                },
                {
                  body: 'Sierra Leone SLRA',
                  description: 'Sierra Leone Revenue Authority customs and tax compliance.',
                },
                {
                  body: 'LBMA RGG',
                  description: 'London Bullion Market Association Responsible Gold Guidance alignment.',
                },
                {
                  body: 'OECD Guidance',
                  description: 'OECD Due Diligence Guidance for Responsible Mineral Supply Chains.',
                },
                {
                  body: 'FATF Standards',
                  description: 'Financial Action Task Force AML/CFT recommendations.',
                },
                {
                  body: 'Kimberley Process',
                  description: 'Kimberley Process Certification Scheme for diamond exports.',
                },
                {
                  body: 'Sierra Leone FIU',
                  description: 'Financial Intelligence Unit suspicious activity reporting.',
                },
                {
                  body: 'PMTD',
                  description: 'Precious Minerals Trading Directorate valuation and licensing.',
                },
              ].map((regulator, index) => (
                <div key={index} className="bg-background rounded-lg p-6 border border-slate-200">
                  <Globe className="w-6 h-6 text-secondary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-primary text-sm mb-1">{regulator.body}</h3>
                  <p className="text-xs text-accent">{regulator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Notice CTA */}
        <section className="py-16 bg-primary text-white" aria-labelledby="notice-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="w-12 h-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h2 id="notice-heading" className="text-3xl font-bold mb-4">
              Important <span className="text-secondary">Legal Notices</span>
            </h2>
            <p className="text-accent-light mb-8">
              Please review our Export Disclaimer and Compliance Notice for detailed information 
              regarding our legal obligations, client responsibilities, and operational limitations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/legal/export-disclaimer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-light transition-colors"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Export Disclaimer
              </Link>
              <Link
                href="/legal/compliance-notice"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/5 transition-colors"
              >
                <Shield className="w-4 h-4" aria-hidden="true" />
                Compliance Notice
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
