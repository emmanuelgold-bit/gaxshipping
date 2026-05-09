import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Shield, AlertTriangle, ChevronLeft } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Legal Export Disclaimer',
  description: 'Legal Export Disclaimer for Global Atlantic Xpress Ltd. - Precious Metals Logistics & Secure Freight Operations, Registered in Sierra Leone.',
};

export default function ExportDisclaimerPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-12" aria-labelledby="disclaimer-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/compliance" 
              className="inline-flex items-center gap-2 text-accent-light hover:text-secondary transition-colors mb-4"
              aria-label="Back to compliance page"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              Back to Compliance
            </Link>
            <h1 id="disclaimer-heading" className="text-3xl md:text-4xl font-bold">
              Legal <span className="text-secondary">Export Disclaimer</span>
            </h1>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200">
                <FileText className="w-8 h-8 text-secondary" aria-hidden="true" />
                <div>
                  <p className="text-sm text-accent">Global Atlantic Xpress Ltd.</p>
                  <p className="text-xs text-accent-light">Registered in Sierra Leone | Precious Metals Logistics & Secure Freight Operations</p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-amber-800 font-medium">Important Notice</p>
                      <p className="text-sm text-amber-700 mt-1">
                        This disclaimer governs all export activities conducted by Global Atlantic Xpress Ltd. 
                        Clients are advised to review this document carefully before engaging our services.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. General Provisions</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Global Atlantic Xpress Ltd. ("the Company") operates as a licensed precious metals logistics 
                  and secure freight operator within the jurisdiction of the Republic of Sierra Leone. All export 
                  activities are conducted in strict compliance with the Sierra Leone Mines and Minerals Act 2009 
                  (as amended), the Sierra Leone Export Control Act, and applicable international conventions. 
                  The Company is registered at 175 Regent Road, Freetown, Sierra Leone, with operating hours of 
                  9:00 AM – 4:00 PM, Monday to Friday (GMT).
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Regulatory Compliance Framework</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company maintains active registration with the Sierra Leone Revenue Authority (SLRA) and 
                  adheres to all export declaration requirements. Precious metals shipments are subject to the 
                  following regulatory framework:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Sierra Leone Mines and Minerals Act 2009:</strong> All gold exports are subject to a 3% export duty levied on the total value of the gold, as prescribed by the Act. Export licenses are issued by the Minister of Mineral Resources on recommendation of the Director of Mines.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>National Minerals Agency (NMA):</strong> All export documentation is vetted by the Directorate of Mines (NMA) before ministerial approval. The NMA Service Delivery Charter governs processing timelines and requirements.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Precious Minerals Trading Directorate (PMTD):</strong> Gold valuation, assaying, and sealing are conducted at PMTD facilities at the Bank of Sierra Leone building, 2nd floor, Siaka Stevens Street, Freetown. Exporters must provide 24-hour notice for valuation.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Kimberley Process Certification Scheme (KPCS):</strong> Where diamonds are included in cargo, full KPCS compliance is mandatory. The Company works exclusively through PMTD-authorized channels for KPCS certificate issuance.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>LBMA Responsible Gold Guidance (RGG):</strong> The Company's operations are aligned with LBMA RGG principles, including supply chain due diligence, risk assessment, and third-party assurance standards where applicable to our logistics services.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>OECD Due Diligence Guidance:</strong> We adhere to the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas (CAHRAs), including the Supplement on Gold.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Sanctions Screening:</strong> All shipments are screened against UN, EU, OFAC (U.S. Treasury), and HMT (UK) sanctions lists prior to export authorization.</span>
                  </li>
                </ul>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Export Procedures & Documentation</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company follows the standardized PMTD export procedure for all precious metals shipments:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-6 text-sm text-accent">
                  <li>24-hour advance notice submitted to PMTD Manager or Director</li>
                  <li>Gold export license and bank statement verification by gold assayer</li>
                  <li>Assaying and purity analysis conducted in presence of exporter, Mines Monitoring Officer, and NRA Customs Officer</li>
                  <li>Weight verification using specific gravity (SG) method with London Gold Fix applied</li>
                  <li>3% export duty calculation and payment to Bank of Sierra Leone</li>
                  <li>Re-weighing and photographic documentation</li>
                  <li>Secure packaging in wooden box, wrapped and signed by Mines Monitoring Officer, Customs Officer, and PMTD Director/Manager</li>
                  <li>Internal gold certificate preparation and NMA vetting</li>
                  <li>Ministerial signature and certificate issuance (valid for one month)</li>
                  <li>Three copies distributed to: Mines Monitoring Office, Office of National Security, and Customs Department at Freetown International Airport</li>
                </ol>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Client Responsibilities & Warranties</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Clients engaging the Company's services warrant and represent that:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>All cargo is legally sourced, owned, and free from any encumbrances or claims</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Complete and accurate documentation is provided, including valid export licenses and bank statements evidencing source of funds</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cargo does not originate from conflict-affected or high-risk areas in violation of OECD Due Diligence Guidance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>All applicable taxes, royalties (2% for export license holders; 5% for small-scale license holders), and duties have been paid to Sierra Leone authorities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>All foreign currency inflows are properly documented and evidenced through accredited commercial banks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Client is not listed on any international sanctions register (UN, OFAC, EU, HMT)</span>
                  </li>
                </ul>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Limitations of Liability</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company's liability is strictly limited to the terms of the specific carriage contract 
                  and applicable insurance coverage. The Company is not liable for:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Delays caused by customs inspections, regulatory reviews, or ministerial approval processes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Force majeure events including but not limited to: acts of war, civil unrest, natural disasters, pandemic restrictions, or government actions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Regulatory changes affecting export procedures, tax rates, or licensing requirements</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Losses arising from client-provided false, incomplete, or fraudulent documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-accent">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Consequential, indirect, or punitive damages of any kind</span>
                  </li>
                </ul>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  Maximum liability shall not exceed the lesser of: (a) the declared cargo value as stated 
                  on the export certificate, or (b) the applicable insurance coverage limits as specified 
                  in the carriage contract. All claims must be submitted in writing within 30 days of delivery 
                  or scheduled delivery date.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Insurance & Risk Allocation</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company maintains comprehensive all-risk cargo insurance through internationally 
                  recognized A-rated underwriters (Lloyd's of London syndicates and equivalent). Coverage 
                  includes transit risks, theft, mysterious disappearance, and physical damage. Insurance 
                  limits are structured to match declared cargo values, with excess coverage available upon 
                  request. Clients may elect to provide their own insurance coverage, subject to Company 
                  verification of insurer credit rating and policy terms.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">7. Governing Law & Dispute Resolution</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  This disclaimer and all operations of the Company are governed by the laws of the Republic 
                  of Sierra Leone. Any disputes arising from or relating to our services shall be resolved 
                  through binding arbitration in Freetown, Sierra Leone, under the Sierra Leone Arbitration 
                  Act. The arbitration shall be conducted in English before a single arbitrator appointed 
                  by the Sierra Leone Arbitration Association. Judgment upon the award may be entered in 
                  any court having jurisdiction. Notwithstanding the foregoing, either party may seek 
                  injunctive relief in any court of competent jurisdiction.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">8. Anti-Money Laundering & Sanctions</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  The Company operates in full compliance with the Sierra Leone Anti-Money Laundering and 
                  Combating of Financing of Terrorism Act 2012, the Terrorism Prevention Regulation 2013, 
                  and FATF recommendations. We are obligated to report suspicious transactions to the 
                  Financial Intelligence Unit (FIU) of Sierra Leone. The Company will not process shipments 
                  where there is reasonable suspicion of money laundering, terrorist financing, or sanctions 
                  violations. Clients acknowledge that the Company may delay or refuse service where 
                  AML/KYC documentation is incomplete or where sanctions screening identifies potential matches.
                </p>

                <h2 className="text-xl font-bold text-primary mt-8 mb-4">9. Amendments & Updates</h2>
                <p className="text-accent mb-4 text-sm leading-relaxed">
                  This disclaimer is subject to periodic review and updates to reflect changes in applicable 
                  law, regulatory requirements, and industry standards. The current version is effective as 
                  of the date stated below. Clients are advised to review this document before each shipment. 
                  Material changes will be communicated via email to registered clients and posted on the 
                  Company website.
                </p>

                <div className="mt-12 pt-6 border-t border-slate-200">
                  <p className="text-sm text-accent">
                    <strong>Document Version:</strong> 1.0<br />
                    <strong>Effective Date:</strong> January 2024<br />
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
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
