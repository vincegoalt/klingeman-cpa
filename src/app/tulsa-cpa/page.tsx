import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Check, ChevronRight, Shield, Clock, Award, Users } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, SUBURBS, FOUNDER_INFO, TRUST_BADGES } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schemas';

const faqs = [
  {
    question: 'What makes Klingeman CPAs different from other CPA firms in Tulsa?',
    answer: 'Our founder Matt Klingeman is a former IRS manager with over 20 years of CPA experience and a Master\'s in Business Taxation. This unique combination of IRS insider knowledge and extensive tax expertise gives our clients an unmatched advantage in tax planning, audit defense, and negotiations with the IRS.'
  },
  {
    question: 'How much do CPA services cost in Tulsa?',
    answer: 'CPA fees vary based on the complexity of your needs. We offer competitive pricing for all services including tax preparation (starting at $250 for simple returns), bookkeeping, payroll, and business consulting. We provide free consultations to discuss your needs and provide transparent pricing upfront.'
  },
  {
    question: 'Do you work with small businesses or just individuals?',
    answer: 'We work with both! Klingeman CPAs specializes in small to large business tax planning and accounting, as well as individual tax preparation. Our services include business formation, bookkeeping, payroll, financial statements, and strategic tax planning for businesses of all sizes.'
  },
  {
    question: 'What areas of Tulsa do you serve?',
    answer: 'We serve all of Tulsa County including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, and surrounding communities. Our office is conveniently located at 6539 E. 31st Street in Tulsa, with easy access from Highway 169 and I-44.'
  },
  {
    question: 'Can you help if I\'m being audited by the IRS?',
    answer: 'Absolutely! With our founder\'s background as a former IRS manager, we have unique insights into IRS procedures and what auditors look for. We provide comprehensive IRS audit representation, negotiate on your behalf, and have a proven track record of successful audit resolutions.'
  }
];

export const metadata: Metadata = {
  title: 'Tulsa CPA | Expert Tax & Accounting Services | Former IRS Manager',
  description: 'Looking for a CPA in Tulsa? Klingeman CPAs offers expert tax preparation, bookkeeping, and business accounting with former IRS management experience. Call (918) 922-1019.',
};

export default function TulsaCPAPage() {
  const topServices = SERVICES.slice(0, 6);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Tulsa', url: '/tulsa-cpa' },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">Tulsa CPA</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <span className="section-label">Tulsa's Premier CPA Firm</span>
            <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6">
              Expert CPA Services in Tulsa, Oklahoma
            </h1>
            <p className="text-[#6D727A] text-lg leading-relaxed mb-6">
              Searching for "CPA near me" in Tulsa? Led by a former IRS manager with 20+ years experience,
              we provide unmatched tax expertise and strategic financial guidance for businesses and individuals.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="btn-outline inline-flex items-center gap-2"
              >
                Schedule Free Consultation
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#6D727A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8A46E]" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A46E]" />
                <span>Mon-Fri {BUSINESS_INFO.hours.weekdays}</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-[#0B1E3C] p-8">
              <h3 className="text-white font-['Cormorant_Garamond'] text-2xl mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">225+ Years</p>
                    <p className="text-white/60 text-sm">Combined Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">500+</p>
                    <p className="text-white/60 text-sm">Happy Tulsa Clients</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#C8A46E]" />
                  <div>
                    <p className="text-white font-medium">100%</p>
                    <p className="text-white/60 text-sm">IRS Audit Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-[7vw] py-8 bg-white">
        <div className="flex flex-wrap justify-center gap-4">
          {TRUST_BADGES.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2"
            >
              <Shield className="w-4 h-4 text-[#C8A46E]" />
              <span className="text-sm text-[#0B1E3C]">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-[7vw] py-12">
        <div className="bg-white border border-[rgba(11,30,60,0.10)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/matt-klingeman.png"
                alt={FOUNDER_INFO.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold mb-2">{FOUNDER_INFO.name}</h3>
                <p className="text-white/80">CPA, Former IRS Manager</p>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <span className="section-label">IRS Insider Expertise</span>
              <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.1] text-[#0B1E3C] mb-4">
                Your Advantage: Former IRS Management Experience
              </h2>
              <p className="text-[#6D727A] mb-6">
                "With over 20 years of experience and a Master's in Business Taxation, I founded Klingeman CPAs
                to provide Tulsa businesses and individuals with the insider expertise they need to navigate
                complex tax situations confidently."
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1E3C]">Former IRS Manager:</strong>
                    <span className="text-[#6D727A]"> Know exactly what the IRS looks for in audits</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1E3C]">Master's in Business Taxation:</strong>
                    <span className="text-[#6D727A]"> Advanced strategies for maximum tax savings</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1E3C]">100% Success Rate:</strong>
                    <span className="text-[#6D727A]"> Proven track record in IRS negotiations</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {FOUNDER_INFO.credentials.map((cred, index) => (
                  <span key={index} className="bg-[#F4F1EC] text-[#0B1E3C] px-4 py-2 text-sm">
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">Services</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-4">
          Comprehensive CPA Services in Tulsa
        </h2>
        <p className="text-[#6D727A] text-base mb-8 max-w-2xl">
          From tax preparation to business consulting, we provide the expertise Tulsa businesses need to thrive
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group bg-[#F4F1EC] p-6 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all"
            >
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] group-hover:text-[#C8A46E] mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6D727A] text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="text-[#C8A46E] font-medium hover:underline">
            View all {SERVICES.length} services →
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-[7vw] py-12">
        <span className="section-label">Service Area</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-4">
          Serving All of Tulsa County
        </h2>
        <p className="text-[#6D727A] text-base mb-8 max-w-2xl">
          Conveniently located in Tulsa, we serve businesses and individuals throughout the metro area
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Link
            href="/tulsa-cpa"
            className="group bg-[#0B1E3C] text-white p-6 text-center hover:bg-[#0B1E3C]/90 transition-all"
          >
            <MapPin className="w-6 h-6 mx-auto mb-2 text-[#C8A46E]" />
            <span className="font-medium">Tulsa</span>
            <p className="text-xs text-white/60 mt-1">Main Office</p>
          </Link>
          {SUBURBS.slice(0, 9).map((suburb) => (
            <Link
              key={suburb.slug}
              href={`/${suburb.slug}`}
              className="group bg-white p-6 text-center border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2 text-[#6D727A] group-hover:text-[#C8A46E] transition-colors" />
              <span className="font-medium text-[#0B1E3C] group-hover:text-[#C8A46E] transition-colors">{suburb.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-[7vw] py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="section-label">FAQs</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Frequently Asked Questions About Tulsa CPA Services
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F4F1EC] p-6 border border-[rgba(11,30,60,0.10)]">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#6D727A] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Ready to Work with Tulsa's Most Experienced CPA?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule your free consultation today and discover how our former IRS expertise can save you money
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#0B1E3C]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
