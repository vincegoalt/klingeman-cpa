'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const form = formRef.current;

    if (!section || !left || !form) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(left,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: left,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(form,
        { x: 60, opacity: 0, scale: 0.98 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#0B1E3C] py-[12vh] z-90"
    >
      <div className="px-[7vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[5vw]">
          {/* Left Column */}
          <div
            ref={leftRef}
            className="lg:w-[40vw] max-w-[500px]"
          >
            <span className="section-label">Contact</span>
            <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.0] text-white mb-6">
              Let's build a smarter tax strategy.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              Tell us what you're working on. We'll respond within one business day.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#C8A46E]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#C8A46E]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#C8A46E] transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#C8A46E]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#C8A46E]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#C8A46E] transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#C8A46E]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C8A46E]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Office</p>
                  <p className="text-white">{BUSINESS_INFO.address.full}</p>
                  <p className="text-white/50 text-sm">Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            ref={formRef}
            className="lg:w-[42vw] max-w-[550px]"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 lg:p-10"
            >
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
                  Thank you for your inquiry! We'll respond within one business day.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[#0B1E3C] text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[rgba(11,30,60,0.18)] text-[#0B1E3C] focus:outline-none focus:border-[#C8A46E] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#0B1E3C] text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[rgba(11,30,60,0.18)] text-[#0B1E3C] focus:outline-none focus:border-[#C8A46E] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[#0B1E3C] text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[rgba(11,30,60,0.18)] text-[#0B1E3C] focus:outline-none focus:border-[#C8A46E] transition-colors"
                    placeholder="(918) 555-0140"
                  />
                </div>
                <div>
                  <label className="block text-[#0B1E3C] text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[rgba(11,30,60,0.18)] text-[#0B1E3C] focus:outline-none focus:border-[#C8A46E] transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#0B1E3C] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[rgba(11,30,60,0.18)] text-[#0B1E3C] focus:outline-none focus:border-[#C8A46E] transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request a consultation
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
