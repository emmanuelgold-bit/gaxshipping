import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { SocketProvider } from '@/components/providers/SocketProvider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Global Atlantic Xpress Ltd. | Secure Precious Metals Logistics',
    template: '%s | Global Atlantic Xpress Ltd.',
  },
  description: 'Global Atlantic Xpress Ltd. provides institutional-grade secure freight operations for precious metals. Registered in Sierra Leone. Trusted across MENA, Dubai, Switzerland, and Hong Kong. Exceptional operational safety record.',
  keywords: [
    'precious metals logistics',
    'gold shipping',
    'secure freight',
    'Sierra Leone',
    'Dubai',
    'Switzerland',
    'Hong Kong',
    'bullion transport',
    'armed escort protocols',
    'LBMA compliance',
  ],
  authors: [{ name: 'Global Atlantic Xpress Ltd.' }],
  creator: 'Global Atlantic Xpress Ltd.',
  publisher: 'Global Atlantic Xpress Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://globalatlanticxpress.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globalatlanticxpress.com',
    siteName: 'Global Atlantic Xpress Ltd.',
    title: 'Global Atlantic Xpress Ltd. | Secure Precious Metals Logistics',
    description: 'Institutional-grade secure freight operations for precious metals. Registered in Sierra Leone.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Atlantic Xpress Ltd. - Secure Precious Metals Logistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Atlantic Xpress Ltd. | Secure Precious Metals Logistics',
    description: 'Institutional-grade secure freight operations for precious metals.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A1628" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Global Atlantic Xpress Ltd.',
              alternateName: 'GAX',
              url: 'https://globalatlanticxpress.com',
              logo: 'https://globalatlanticxpress.com/logo.png',
              description: 'Precious Metals Logistics & Secure Freight Operations',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '175 Regent Road',
                addressLocality: 'Freetown',
                addressCountry: 'SL',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+23272269319',
                contactType: 'customer service',
                availableLanguage: ['English'],
                areaServed: 'Global',
              },
              sameAs: [
                'https://wa.me/23272269319',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <AuthProvider>
          <SocketProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-secondary text-primary px-4 py-2 rounded-lg z-50"
            >
              Skip to main content
            </a>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#0A1628',
                  color: '#fff',
                },
              }}
            />
          </SocketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
