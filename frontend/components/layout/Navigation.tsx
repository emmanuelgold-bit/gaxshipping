'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-primary text-white sticky top-0 z-40 shadow-lg">
      {/* Top bar */}
      <div className="bg-primary-light border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-accent-light">
              <Clock className="w-3 h-3" aria-hidden="true" />
              Mon–Fri, 9AM–4PM GMT
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+23272269319"
              className="flex items-center gap-1 hover:text-secondary transition-colors"
              aria-label="Call us at +232 72 269 319"
            >
              <Phone className="w-3 h-3" aria-hidden="true" />
              +232 72 269 319
            </a>
            <a
              href="mailto:globalatlanticxpress@gmail.com"
              className="flex items-center gap-1 hover:text-secondary transition-colors"
              aria-label="Email us at globalatlanticxpress@gmail.com"
            >
              <Mail className="w-3 h-3" aria-hidden="true" />
              globalatlanticxpress@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Global Atlantic Xpress Ltd. Home"
          >
            <Shield className="w-8 h-8 text-secondary" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">Global Atlantic Xpress</span>
              <span className="text-xs text-accent-light">Ltd. | Precious Metals Logistics</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-secondary/10 text-secondary'
                    : 'hover:bg-white/5 hover:text-secondary'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tracking"
              className="ml-2 px-4 py-2 bg-secondary text-primary rounded-lg text-sm font-semibold hover:bg-secondary-light transition-colors"
            >
              Track Shipment
            </Link>
            <Link
              href="/login"
              className="ml-2 px-4 py-2 border border-secondary text-secondary rounded-lg text-sm font-semibold hover:bg-secondary/10 transition-colors"
            >
              Client Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-secondary/10 text-secondary'
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/tracking"
                className="mt-2 px-4 py-3 bg-secondary text-primary rounded-lg text-sm font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Track Shipment
              </Link>
              <Link
                href="/login"
                className="mt-1 px-4 py-3 border border-secondary text-secondary rounded-lg text-sm font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Portal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
