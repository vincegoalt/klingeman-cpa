import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateFAQSchema, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES } from '@/lib/constants';

const faqs = [
  {
    question: 'Do you specialize in corporate accounting for Downtown Tulsa businesses?',
    answer: 'Yes! We provide comprehensive corporate accounting services for downtown businesses including financial statement preparation, corporate tax planning, entity structuring, and strategic financial consulting. Our experience with corporate clients includes law firms, financial services companies, professional services firms, and downtown headquarters operations.'
  },
  {
    question: 'Can you help with partnership and multi-member LLC tax returns?',
    answer: 'Absolutely. We specialize in partnership taxation (Form 1065) and multi-member LLC returns, including complex partner distributions, guaranteed payments, capital account management, and K-1 preparation. Many downtown professional service firms rely on us for accurate partnership tax compliance and strategic planning.'
  },
  {
    question: 'How can your former IRS experience benefit my downtown business?',
    answer: 'Our founder\'s background as a former IRS manager provides unique insights into audit triggers, documentation requirements, and IRS procedures. For downtown businesses under heightened scrutiny due to size or complexity, this insider knowledge offers proactive protection and confidence that your tax positions will withstand examination.'
  },
  {
    question: 'Do you work with law firms and professional service organizations?',
    answer: 'Yes! Professional services firms are a specialty of ours. We understand the unique accounting needs of law firms, consulting firms, and other professional service organizations including trust account management, time and billing integration, partner compensation structures, and professional liability considerations.'
  },
  {
    question: 'What tax planning services do you offer for high-income professionals?',
    answer: 'We provide sophisticated tax planning for downtown executives and high-income professionals including bonus deferral strategies, stock option planning, retirement contribution optimization, investment tax efficiency, real estate tax strategies, and estate tax planning. Our proactive approach ensures you\'re not paying more tax than necessary.'
  },
  {
    question: 'How quickly can you respond to urgent tax or financial questions?',
    answer: 'We understand that downtown businesses often need quick answers for time-sensitive decisions. We prioritize responsive communication and typically respond to urgent client questions within hours during business days. For complex matters requiring research, we provide preliminary guidance quickly followed by detailed analysis.'
  }
];

export const metadata: Metadata = generateSEO({
  title: 'CPA Downtown Tulsa | Corporate & Professional Tax Services',
  description: 'Expert CPA services for Downtown Tulsa businesses and professionals. Serving corporate offices, law firms, finance companies, and executives. Former IRS manager. Call (918) 922-1019.',
  canonical: '/cpa-downtown-tulsa'
});

export default function DowntownTulsaCPAPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Downtown Tulsa', url: '/cpa-downtown-tulsa' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.filter(s =>
    ['business-tax-accounting', 'tax-planning-preparation', 'financial-statements',
     'business-entity-selection', 'retirement-planning', 'real-estate-tax'].includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Downtown Tulsa Business District"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              DOWNTOWN TULSA'S PREMIER CPA FIRM
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services for
              <span className="block text-white">Downtown Tulsa</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Corporate accounting and tax services for Downtown Tulsa's business district. Serving corporate
              offices, law firms, financial services, and professionals. Just 5 minutes away, led by a former IRS manager with 20+ years experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg border border-white/30"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="group bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg border border-white/30"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Location and Hours */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 inline-block">
              <p className="font-semibold text-white flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {BUSINESS_INFO.address.full} • 5 Minutes from Downtown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-white py-6 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-900">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11z" clipRule="evenodd"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-gray-600">Years Combined Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs text-gray-600">IRS Audit Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Downtown Tulsa's Trusted Corporate CPA Partner
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Downtown Tulsa stands as the financial and professional heart of northeastern Oklahoma. From the
                gleaming office towers housing law firms and financial institutions to the historic buildings now home
                to modern corporate headquarters, downtown represents the epicenter of business sophistication in our
                region. At Klingeman CPAs, we specialize in serving the complex accounting and tax needs of downtown's
                corporate community and professional workforce.
              </p>

              <p>
                Located just 5 minutes from the central business district at 6539 E. 31st Street, our firm provides the
                perfect balance of accessibility and expertise. Our founder, Matt Klingeman, brings a distinguished
                background as a former IRS manager combined with over 20 years of CPA experience and a Master's degree
                in Business Taxation. This unique credential set positions us to serve downtown's most sophisticated
                clients—from C-suite executives requiring strategic tax planning to law firms needing partnership
                accounting expertise to financial services companies demanding meticulous compliance.
              </p>

              <p>
                Downtown Tulsa's business environment demands accounting services that match its professional caliber.
                Law firms operating downtown require specialized knowledge of partnership taxation, trust account
                management, and the ethical considerations unique to legal practice. Financial services firms need CPAs
                who understand investment reporting, regulatory compliance, and the complex compensation structures
                common in the industry. Corporate headquarters demand sophisticated financial statement preparation,
                multi-state tax compliance, and strategic planning that aligns with corporate objectives.
              </p>

              <p>
                For downtown executives and high-income professionals, tax planning becomes increasingly complex as
                compensation structures grow more sophisticated. Stock options, restricted stock units, deferred
                compensation plans, executive bonuses, and investment income all require strategic planning to minimize
                tax liability while maintaining compliance. Our experience working with downtown professionals means we
                understand these complexities and provide proactive guidance throughout the year—not just at tax time.
              </p>

              <p>
                Partnership and multi-member LLC taxation represents a specialty area where many CPAs fall short.
                Downtown professional service firms—including law firms, consulting firms, architecture firms, and
                engineering practices—operate as partnerships requiring sophisticated tax expertise. We handle complex
                partner distributions, guaranteed payments, capital account management, K-1 preparation, and basis
                tracking with precision. Our clients appreciate our deep knowledge of partnership taxation and our
                ability to explain complex concepts in understandable terms.
              </p>

              <p>
                Corporate tax planning for downtown businesses extends far beyond compliance. Strategic entity
                structure selection, expansion planning, acquisition due diligence, multi-state tax optimization, and
                succession planning all require experienced guidance. Our former IRS perspective provides unique
                insights into audit risk assessment and positions that will withstand IRS scrutiny, giving downtown
                clients confidence in aggressive but defensible tax strategies.
              </p>

              <p>
                Real estate investment has become increasingly popular among downtown professionals, with many executives
                and attorneys building wealth through rental properties and commercial real estate ventures. We
                specialize in real estate taxation including depreciation strategies, 1031 exchanges, passive activity
                loss rules, and the complexities of mixed-use properties. Whether you're a passive investor in
                commercial property or actively managing a portfolio of rental properties, we provide the specialized
                knowledge you need.
              </p>

              <p>
                Retirement planning takes on added importance for high-income downtown professionals. Beyond traditional
                401(k) plans, we help clients evaluate defined benefit plans, cash balance plans, backdoor Roth IRA
                strategies, mega backdoor Roth conversions, and business owner retirement strategies that maximize
                tax-deferred growth. Our comprehensive approach considers your entire financial picture to develop
                retirement strategies aligned with your long-term goals.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Professional CPA Services for Downtown Tulsa
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Sophisticated accounting and tax services for corporate offices, law firms, financial
              services, and downtown professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => {
                const serviceImages: Record<string, string> = {
                  'business-tax-accounting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
                  'tax-planning-preparation': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
                  'financial-statements': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
                  'business-entity-selection': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
                  'retirement-planning': 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800&h=600&fit=crop',
                  'real-estate-tax': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
                };
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={serviceImages[service.slug] || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white text-center px-4">{service.title}</h3>
                      </div>
                    </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-gray-800 font-semibold group-hover:text-gray-700">
                      Learn More
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              >
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Downtown Professionals Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Corporate & Professional Expertise
                </h3>
                <p className="text-gray-700">
                  We specialize in serving downtown's corporate offices, law firms, financial services companies,
                  and professional service organizations. Our experience with sophisticated business structures and
                  complex tax situations sets us apart.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Former IRS Manager Insight
                </h3>
                <p className="text-gray-700">
                  Our founder's background as an IRS manager provides unparalleled knowledge of audit procedures,
                  documentation requirements, and tax position defense—critical for downtown businesses facing
                  higher scrutiny.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategic Tax Planning
                </h3>
                <p className="text-gray-700">
                  We provide year-round strategic tax planning for executives and high-income professionals,
                  addressing stock options, deferred compensation, real estate investments, and retirement
                  optimization.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Responsive Professional Service
                </h3>
                <p className="text-gray-700">
                  Downtown businesses need quick answers for time-sensitive decisions. We prioritize responsive
                  communication and provide the sophisticated service level that downtown professionals expect
                  and deserve.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <TrustBadges showAll />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions About Downtown Tulsa CPA Services
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Links */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              We Also Serve These Tulsa Neighborhoods and Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cpa-midtown-tulsa" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Midtown Tulsa
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cpa-south-tulsa" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                South Tulsa
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cpa-cherry-street-tulsa" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Cherry Street
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cpa-broken-arrow" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Broken Arrow
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cpa-jenks" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Jenks
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cpa-bixby" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Bixby
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Your Downtown Tulsa CPA
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Schedule Your Consultation</h3>
                <ContactForm compact />
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Office Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-gray-700">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gray-700">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-800 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>
                        {BUSINESS_INFO.address.street}<br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}<br />
                        <span className="text-sm text-gray-600">5 minutes from Downtown Tulsa</span>
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        {BUSINESS_INFO.hours.weekdays}<br />
                        Saturday: {BUSINESS_INFO.hours.saturday}<br />
                        Sunday: {BUSINESS_INFO.hours.sunday}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Downtown Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              About Downtown Tulsa
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Downtown Tulsa serves as the financial, legal, and professional center of northeastern Oklahoma.
              Home to corporate headquarters, prestigious law firms, financial services companies, and the region's
              most accomplished professionals, downtown demands accounting services that match its sophisticated
              business environment.
            </p>
            <p className="text-base opacity-80">
              Whether you're a corporate executive requiring strategic tax planning, a law firm partner managing
              complex partnership taxation, or a financial services professional navigating intricate compensation
              structures, Klingeman CPAs provides the expertise and service quality that downtown professionals expect.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Downtown Tulsa's Expert CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}
