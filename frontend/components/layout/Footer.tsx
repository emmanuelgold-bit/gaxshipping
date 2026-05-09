import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-secondary" aria-hidden="true" />
              <span className="font-bold">Global Atlantic Xpress Ltd.</span>
            </div>
            <p className="text-accent-light text-sm mb-4">
              Precious Metals Logistics & Secure Freight Operations. Registered in Sierra Leone.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>175 Regent Road, Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                <span>Mon–Fri, 9AM–4PM GMT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-secondary transition-colors">Compliance</Link>
              </li>
              <li>
                <Link href="/tracking" className="hover:text-secondary transition-colors">Track Shipment</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/export-disclaimer" className="hover:text-secondary transition-colors">
                  Export Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/compliance-notice" className="hover:text-secondary transition-colors">
                  Compliance Notice
                </Link>
              </li>
              <li>
                <Link href="/compliance/aml-kyc" className="hover:text-secondary transition-colors">
                  AML/KYC Policy
                </Link>
              </li>
              <li>
                <Link href="/compliance/chain-of-custody" className="hover:text-secondary transition-colors">
                  Chain of Custody
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+23272269319"
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                +232 72 269 319
              </a>
              <a
                href="mailto:globalatlanticxpress@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                globalatlanticxpress@gmail.com
              </a>
              <a
                href="https://wa.me/23272269319?text=Hello%20Global%20Atlantic%20Xpress,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors mt-2"
                aria-label="Chat with us on WhatsApp"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-accent-light">
          <p>
            © {new Date().getFullYear()} Global Atlantic Xpress Ltd. All rights reserved.
            Registered in Sierra Leone. Precious Metals Logistics & Secure Freight Operations.
          </p>
        </div>
      </div>
    </footer>
  );
}
