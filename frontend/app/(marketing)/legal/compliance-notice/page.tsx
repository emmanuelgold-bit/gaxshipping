import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, FileText, ChevronLeft, Lock, Globe, Scale, BookOpen } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Compliance Notice',
  description: 'Compliance Notice for Global Atlantic Xpress Ltd. - AML/KYC, chain-of-custody, data protection, and regulatory compliance standards.',
};

export default function ComplianceNoticePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-12" aria-labelledby="notice-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/compliance" 
              className="inline-flex items-center gap-2 text-accent-light hover:text-secondary transition-colors mb-4"
              aria-label="Back to compliance page"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              Back to Compliance
            </Link>
            <h1 id="notice-heading" className="text-3xl md:text-4xl font-bold">
              Compliance <span className="text-secondary">Notice</span>
            </h1>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200">
                <Shield className="w-8 h-8 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-sm text-accent font-semibold">Global Atlantic Xpress Ltd.</p>
                  <p className="text-xs text-accent-light">Registered in Sierra Leone | Precious Metals Logistics & Secure Freight Operations</p>
                  <p className="text-xs text-accent-light">175 Regent Road, Freetown, Sierra Leone | Mon–Fri, 9AM–4PM GMT</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-amber-800 font-medium">Regulatory Compliance Notice</p>
                      <p className="text-sm text-amber-700 mt-1">
                        This notice outlines the compliance standards, policies, and procedures that govern 
                        all operations of Global Atlantic Xpress Ltd. It is binding on all clients, partners, 
                        and employees.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-secondary" aria-hidden="true" />
                  1. Anti-Money Laundering (AML) & Counter-Terrorist Financing (CTF)
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company maintains a risk-based AML/CTF program aligned with the Financial Action Task 
                  Force (FATF) Recommendations and the Sierra Leone Anti-Money Laundering and Combating of 
                  Financing of Terrorism Act 2012 (AMLCFTA). The program is supervised by the Financial 
                  Intelligence Unit (FIU) of Sierra Leone, established pursuant to Section 2 of the AMLCFTA 
                  as an autonomous entity with wide investigatory powers.
                </p>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Our AML/CTF program includes the following mandatory components:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Customer Due Diligence (CDD):</strong> Verification of client identity, beneficial ownership, and source of funds for all transactions exceeding threshold values</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Enhanced Due Diligence (EDD):</strong> Additional verification for high-risk clients, including politically exposed persons (PEPs), clients from high-risk jurisdictions, and complex ownership structures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Ongoing Transaction Monitoring:</strong> Continuous monitoring of all shipments and financial flows for suspicious patterns, with automated alerts for unusual activity</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Suspicious Activity Reporting (SAR):</strong> Mandatory reporting to the FIU within 24 hours of identifying suspicious transactions, as required by the AMLCFTA</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Sanctions Screening:</strong> Real-time screening against UN Security Council, OFAC (U.S. Treasury), EU, and HMT (UK) sanctions lists before processing any shipment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Record Retention:</strong> Minimum 5-year retention of all AML/KYC records, transaction documentation, and screening results, as mandated by the AMLCFTA</span>
                  </li>
                </ul>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-secondary" aria-hidden="true" />
                  2. Know Your Customer (KYC) Requirements
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  All clients must provide the following documentation before any service engagement:
                </p>
                <div className="bg-slate-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-primary mb-3">Individual Clients</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Valid government-issued photo identification (passport, national ID, or driver's license)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Proof of address (utility bill, bank statement, or official correspondence, not older than 3 months)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Source of funds declaration for shipments exceeding USD 50,000 equivalent
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Bank reference letter or 3 months of bank statements
                    </li>
                  </ul>
                  <h4 className="font-semibold text-primary mb-3">Corporate Clients</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Certificate of incorporation and corporate registration documents
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Memorandum and Articles of Association
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Board resolution authorizing the shipment and designating authorized signatories
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Beneficial ownership information (individuals owning 25% or more)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-accent">
                      <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      Audited financial statements (where available)
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary" aria-hidden="true" />
                  3. Chain-of-Custody & Security Standards
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company implements unbroken chain-of-custody protocols that meet or exceed 
                  international precious metals logistics standards:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Tamper-Evident Systems:</strong> Unique serial-numbered seals applied at collection, with seal integrity verified at every handling point</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Dual-Control Verification:</strong> No single individual has unsupervised access to cargo; all handling requires two authorized personnel</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>GPS Tracking:</strong> Real-time satellite tracking of ground transport with geofencing alerts and route deviation notifications</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Armed Escort Protocols:</strong> Armed escort arrangements where permitted by jurisdictional authorities, with licensed security personnel</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Secure Vaulting:</strong> LBMA-aligned vault facilities with 24/7 monitoring, biometric access, and UL-rated security systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Photographic Documentation:</strong> High-resolution imaging of cargo condition and packaging at every stage</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Comprehensive Insurance:</strong> All-risk cargo insurance through Lloyd's of London and A-rated underwriters, with coverage matching declared values</span>
                  </li>
                </ul>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-secondary" aria-hidden="true" />
                  4. Customs & Export Control Compliance
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  All shipments are processed exclusively through authorized customs channels with complete 
                  documentation. The Company strictly prohibits and will not facilitate:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Undervaluation of cargo for duty evasion or tax avoidance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>False country-of-origin declarations or misrepresentation of cargo source</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Shipment to sanctioned entities, individuals, or jurisdictions (UN, OFAC, EU, HMT)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Transport of unlicensed, illicit, or conflict-sourced precious metals</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Any activity that would constitute a violation of the Sierra Leone Mines and Minerals Act 2009 or AMLCFTA 2012</span>
                  </li>
                </ul>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company charges a 3% export duty on the total value of gold shipments, as prescribed 
                  by the Mines and Minerals Act 2009. This duty is collected on behalf of the Sierra Leone 
                  government and remitted to the Bank of Sierra Leone through the Precious Minerals Trading 
                  Directorate (PMTD). Additional fees may include: 0.5% valuation fee, 0.5% monitoring fee, 
                  and 0.5% Gold Area Community Development Fund contribution.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-secondary" aria-hidden="true" />
                  5. Data Protection & Privacy
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Client data is processed in accordance with the Sierra Leone Data Protection Act 2021 and 
                  applicable international privacy standards. Personal data is collected only for legitimate 
                  business purposes, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Identity verification and KYC compliance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Shipment tracking and operational coordination</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Regulatory reporting to SLRA, NMA, PMTD, and FIU</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Insurance and risk management purposes</span>
                  </li>
                </ul>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Data is stored securely with encryption at rest and in transit. Access is restricted to 
                  authorized personnel on a need-to-know basis. Data is retained only as long as legally 
                  necessary (minimum 5 years for AML records, per AMLCFTA requirements). Clients have the 
                  right to request access to their personal data and to request correction of inaccurate information.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary" aria-hidden="true" />
                  6. Third-Party Assurance & Audit
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company is committed to transparency and accountability in its operations. We engage 
                  independent third-party auditors to review our compliance with LBMA Responsible Gold 
                  Guidance principles, AML/CFT requirements, and internal control standards. Audit findings 
                  are reported to senior management and the Board of Directors, with corrective action 
                  plans implemented within 90 days for any identified non-conformances.
                </p>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Our assurance program follows the ISAE 3000 standard for assurance engagements, with 
                  reasonable assurance conducted annually and limited assurance in intervening years. This 
                  aligns with LBMA requirements for Good Delivery List refiners and demonstrates our 
                  commitment to maintaining the highest standards of supply chain integrity.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-secondary" aria-hidden="true" />
                  7. Reporting Concerns & Whistleblower Protection
                </h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Concerns regarding compliance violations, unethical conduct, or suspicious activities 
                  may be reported through the following channels:
                </p>
                <div className="bg-slate-50 rounded-lg p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-primary text-sm">Compliance Officer</p>
                        <p className="text-sm text-accent">globalatlanticxpress@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-primary text-sm">Phone</p>
                        <p className="text-sm text-accent">+232 72 269 319 (Mon–Fri, 9AM–4PM GMT)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-primary text-sm">Physical Address</p>
                        <p className="text-sm text-accent">175 Regent Road, Freetown, Sierra Leone</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company maintains a strict non-retaliation policy for good-faith whistleblowers. 
                  Reports may be submitted anonymously where permitted by law. All reports are investigated 
                  promptly and confidentially.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">8. Amendments & Review</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  This compliance notice is subject to periodic review and updates to reflect changes in 
                  applicable law, regulatory guidance, and industry best practices. The Company reviews this 
                  notice at minimum annually and whenever there are significant regulatory changes. Clients 
                  will be notified of material changes via email and through updates posted on the Company 
                  website.
                </p>

                <div className="mt-12 pt-6 border-t border-slate-200">
                  <p className="text-sm text-accent">
                    <strong>Document Version:</strong> 1.0<br />
                    <strong>Effective Date:</strong> January 2024<br />
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
                    <strong>Next Review Date:</strong> January 2025<br />
                    <strong>Company:</strong> Global Atlantic Xpress Ltd.<br />
                    <strong>Registered Address:</strong> 175 Regent Road, Freetown, Sierra Leone<br />
                    <strong>Contact:</strong> +232 72 269 319 | globalatlanticxpress@gmail.com
                  </p>
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
