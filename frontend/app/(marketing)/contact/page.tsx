import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, ExternalLink, Send, MessageCircle } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Global Atlantic Xpress Ltd. at 175 Regent Road, Freetown, Sierra Leone. Phone: +232 72 269 319. Email: globalatlanticxpress@gmail.com',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        <section className="bg-primary text-white py-16" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-accent-light max-w-2xl text-lg">
              Reach out to our operations team for inquiries, shipment coordination, 
              or partnership discussions.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background" aria-labelledby="contact-info-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 id="contact-info-heading" className="section-title mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Office Address</h3>
                      <p className="text-accent text-sm">
                        Global Atlantic Xpress Ltd.<br />
                        175 Regent Road<br />
                        Freetown, Sierra Leone
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <a
                        href="tel:+23272269319"
                        className="text-accent text-sm hover:text-secondary transition-colors"
                        aria-label="Call us at +232 72 269 319"
                      >
                        +232 72 269 319
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:globalatlanticxpress@gmail.com?subject=Inquiry%20-%20Global%20Atlantic%20Xpress"
                        className="text-accent text-sm hover:text-secondary transition-colors"
                        aria-label="Send email to globalatlanticxpress@gmail.com"
                      >
                        globalatlanticxpress@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Operating Hours</h3>
                      <p className="text-accent text-sm">
                        Monday – Friday<br />
                        9:00 AM – 4:00 PM (GMT)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-3">
                  <a
                    href="https://wa.me/23272269319?text=Hello%20Global%20Atlantic%20Xpress,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Chat on WhatsApp
                    <ExternalLink className="w-4 h-4 ml-auto" aria-hidden="true" />
                  </a>
                  <a
                    href="mailto:globalatlanticxpress@gmail.com?subject=Inquiry%20-%20Global%20Atlantic%20Xpress"
                    className="inline-flex items-center gap-2 w-full md:w-auto px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary-light transition-colors ml-0 md:ml-2"
                    aria-label="Send us an email"
                  >
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Send Email
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-primary mb-4">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white" aria-labelledby="location-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="location-heading" className="section-title text-center mb-8">Our Location</h2>
            <div className="bg-slate-100 rounded-xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" aria-hidden="true" />
                <p className="text-primary font-semibold">175 Regent Road, Freetown</p>
                <p className="text-accent text-sm mt-2">Sierra Leone</p>
                <p className="text-accent text-xs mt-4">
                  Interactive map integration available via Mapbox/Google Maps API
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
