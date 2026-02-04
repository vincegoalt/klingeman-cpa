'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ChevronRight, Check, Send, MessageSquare, FileText, Users } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 bg-[#F4F1EC]">
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">Contact</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl">
          <span className="section-label">Get In Touch</span>
          <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6">
            Contact Your Tulsa CPA
          </h1>
          <p className="text-[#6D727A] text-lg leading-relaxed max-w-2xl">
            Ready to work with experienced CPAs who understand your needs? Schedule your free
            consultation today and discover how our former IRS expertise can benefit you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-[7vw] py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 border border-[rgba(11,30,60,0.10)]">
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#C8A46E]/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#C8A46E]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#6D727A]">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[rgba(11,30,60,0.10)] bg-[#F4F1EC] focus:outline-none focus:border-[#C8A46E] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-[rgba(11,30,60,0.10)] bg-[#F4F1EC] focus:outline-none focus:border-[#C8A46E] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[rgba(11,30,60,0.10)] bg-[#F4F1EC] focus:outline-none focus:border-[#C8A46E] transition-colors"
                      placeholder="(918) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-[rgba(11,30,60,0.10)] bg-[#F4F1EC] focus:outline-none focus:border-[#C8A46E] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="tax-preparation">Tax Preparation</option>
                      <option value="business-accounting">Business Accounting</option>
                      <option value="bookkeeping">Bookkeeping</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="irs-representation">IRS Representation</option>
                      <option value="consulting">Business Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0B1E3C] mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-[rgba(11,30,60,0.10)] bg-[#F4F1EC] focus:outline-none focus:border-[#C8A46E] transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0B1E3C] p-8">
              <h3 className="text-white font-['Cormorant_Garamond'] text-2xl mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C8A46E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#C8A46E] transition-colors text-lg">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C8A46E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#C8A46E] transition-colors">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C8A46E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Office Address</p>
                    <p className="text-white">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C8A46E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Office Hours</p>
                    <p className="text-white">
                      Mon-Fri: {BUSINESS_INFO.hours.weekdays}<br />
                      Sat: {BUSINESS_INFO.hours.saturday}<br />
                      Sun: {BUSINESS_INFO.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-8 border border-[rgba(11,30,60,0.10)]">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-4 bg-[#F4F1EC] hover:bg-[#C8A46E]/10 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#C8A46E]" />
                  <span className="text-[#0B1E3C] group-hover:text-[#C8A46E] transition-colors">
                    Call Now
                  </span>
                </a>
                <Link
                  href="/services"
                  className="flex items-center gap-3 p-4 bg-[#F4F1EC] hover:bg-[#C8A46E]/10 transition-colors group"
                >
                  <FileText className="w-5 h-5 text-[#C8A46E]" />
                  <span className="text-[#0B1E3C] group-hover:text-[#C8A46E] transition-colors">
                    View Our Services
                  </span>
                </Link>
                <Link
                  href="/team"
                  className="flex items-center gap-3 p-4 bg-[#F4F1EC] hover:bg-[#C8A46E]/10 transition-colors group"
                >
                  <Users className="w-5 h-5 text-[#C8A46E]" />
                  <span className="text-[#0B1E3C] group-hover:text-[#C8A46E] transition-colors">
                    Meet Our Team
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-[7vw] py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="section-label">What to Expect</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            During Your Consultation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#C8A46E] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#0B1E3C] mb-2">Free Discovery Call</h3>
                <p className="text-[#6D727A] text-sm">
                  We'll discuss your current situation, challenges, and goals to understand how we can best serve you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#C8A46E] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#0B1E3C] mb-2">Situation Analysis</h3>
                <p className="text-[#6D727A] text-sm">
                  We'll review your financial situation and tax history to identify opportunities for improvement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#C8A46E] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#0B1E3C] mb-2">Strategic Recommendations</h3>
                <p className="text-[#6D727A] text-sm">
                  Based on our analysis, we'll provide specific recommendations for tax savings and business improvements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#C8A46E] flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#0B1E3C] mb-2">Clear Next Steps</h3>
                <p className="text-[#6D727A] text-sm">
                  We'll outline a clear path forward, including service options, and transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-6xl mx-auto">
          <span className="section-label">Visit Us</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Our Tulsa Office
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-[rgba(11,30,60,0.10)]">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-4">
                Convenient Tulsa Location
              </h3>
              <p className="text-[#6D727A] mb-6">
                Our office is conveniently located on East 31st Street in Tulsa, easily accessible
                from anywhere in the metro area. We serve clients throughout Tulsa and surrounding
                communities including Broken Arrow, Bixby, Owasso, Jenks, and Sand Springs.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C8A46E]" />
                  <span className="text-[#0B1E3C]">Free parking available on-site</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C8A46E]" />
                  <span className="text-[#0B1E3C]">ADA-compliant building with elevator access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C8A46E]" />
                  <span className="text-[#0B1E3C]">Easy access from Highway 169 and I-44</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(11,30,60,0.10)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.8947!2d-95.9016!3d36.1156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6eb5bb5bb5bb5%3A0x1234567890abcdef!2s6539%20E%2031st%20St%2C%20Tulsa%2C%20OK%2074145!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klingeman CPAs Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
