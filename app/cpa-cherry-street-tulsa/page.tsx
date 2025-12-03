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
    question: 'Do you specialize in restaurant and hospitality accounting for Cherry Street businesses?',
    answer: 'Absolutely! Cherry Street\'s vibrant restaurant and hospitality scene is well-represented in our client base. We understand restaurant-specific challenges including tip reporting, inventory management, point-of-sale reconciliation, sales tax compliance, seasonal revenue fluctuations, and labor cost optimization. Our expertise helps restaurant owners maximize profitability while maintaining compliance.'
  },
  {
    question: 'Can you help small business owners and boutique retailers with bookkeeping?',
    answer: 'Yes! We specialize in serving Cherry Street\'s small business community including boutique retailers, specialty shops, and service providers. Our bookkeeping services include monthly reconciliation, QuickBooks setup and training, sales tax filing, cash flow management, and financial statement preparation. We make accounting simple so you can focus on serving your customers.'
  },
  {
    question: 'Do you work with freelancers, artists, and creative professionals?',
    answer: 'Definitely! Cherry Street attracts many creative professionals, freelancers, consultants, and artists. We help with quarterly estimated tax calculations, home office deductions, equipment and supply expense tracking, retirement planning for self-employed individuals, and maximizing deductions specific to creative professions. We understand irregular income patterns and project-based work.'
  },
  {
    question: 'How can you help young professionals just starting their careers?',
    answer: 'We provide guidance tailored to young professionals including student loan interest deduction optimization, first-time homebuyer considerations, starting a side business, retirement account selection (Traditional vs. Roth IRA), and building good financial habits. Our goal is to help you establish a strong financial foundation early in your career.'
  },
  {
    question: 'Do you offer virtual services for busy Cherry Street business owners?',
    answer: 'Yes! We understand Cherry Street business owners have demanding schedules, especially in the restaurant and retail industries. We offer virtual consultations, secure online document sharing, electronic signatures, and remote bookkeeping services. You can work with us entirely virtually or combine virtual convenience with occasional in-person meetings at our nearby office.'
  },
  {
    question: 'What makes your firm a good fit for the Cherry Street business community?',
    answer: 'We appreciate Cherry Street\'s entrepreneurial spirit and community-focused atmosphere. Our firm combines the expertise of a former IRS manager with personalized service and genuine understanding of small business challenges. We\'re small enough to care about every client but experienced enough to handle complex situations. Plus, we\'re just 10 minutes away, making us truly your neighborhood CPA firm.'
  }
];

export const metadata: Metadata = generateSEO({
  title: 'CPA Cherry Street Tulsa | Tax Services for Small Business & Creatives',
  description: 'Expert CPA services for Cherry Street / Brookside Tulsa. Serving restaurants, boutiques, small businesses, and young professionals. Bookkeeping, tax prep, and business planning. Call (918) 922-1019.',
  canonical: '/cpa-cherry-street-tulsa'
});

export default function CherryStreetTulsaCPAPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Cherry Street Tulsa', url: '/cpa-cherry-street-tulsa' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.filter(s =>
    ['business-tax-accounting', 'tax-planning-preparation', 'bookkeeping-services',
     'quickbooks-cleanup', 'payroll-services', 'business-entity-selection'].includes(s.slug)
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
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop"
            alt="Cherry Street District Tulsa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              CHERRY STREET'S NEIGHBORHOOD CPA
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services for
              <span className="block text-white">Cherry Street & Brookside</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for Cherry Street's restaurants, boutiques, small businesses,
              and young professionals. Your neighborhood CPA just 10 minutes away, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 10 Minutes from Cherry Street
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
                <div className="text-2xl font-bold">225+</div>
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
              Your Neighborhood CPA for Cherry Street & Brookside
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Cherry Street and Brookside represent Tulsa's most walkable, community-oriented neighborhoods where
                locally-owned restaurants, boutique retailers, specialty shops, and creative professionals thrive side
                by side with young professionals and families who appreciate urban living with neighborhood charm. At
                Klingeman CPAs, we embrace the entrepreneurial spirit and community focus that defines Cherry Street,
                providing personalized CPA services to the businesses and residents who make this area special.
              </p>

              <p>
                Located just 10 minutes from Cherry Street at 6539 E. 31st Street, our firm perfectly balances
                neighborhood accessibility with professional expertise. Our founder, Matt Klingeman, brings exceptional
                credentials as a former IRS manager with over 20 years of CPA experience and a Master's degree in
                Business Taxation. This combination of insider IRS knowledge and advanced tax expertise benefits Cherry
                Street's diverse mix of small business owners, young professionals, and creative entrepreneurs.
              </p>

              <p>
                Cherry Street's restaurant and hospitality scene represents a core specialty for our firm. From
                breakfast cafes to upscale dinner destinations, craft cocktail bars to casual gathering spots, we
                understand the unique accounting challenges restaurant owners face. Tip reporting compliance, inventory
                cost management, point-of-sale system reconciliation, sales tax filing, labor cost optimization, and
                seasonal cash flow planning all require specialized knowledge. Our restaurant clients appreciate our
                practical guidance on maximizing profitability while maintaining compliance with complex regulations.
              </p>

              <p>
                Boutique retailers and specialty shops along Cherry Street benefit from our retail-focused accounting
                services. Whether you're operating a clothing boutique, home decor shop, vintage store, or specialty
                retailer, we help with inventory management, sales tax compliance, point-of-sale integration,
                QuickBooks setup and training, and financial statement preparation. We understand retail seasonality,
                the importance of cash flow management, and how to structure your accounting to provide actionable
                insights for purchasing and pricing decisions.
              </p>

              <p>
                Creative professionals, freelancers, and consultants who gravitate to Cherry Street's collaborative
                atmosphere find us particularly valuable. Artists, designers, photographers, writers, marketing
                consultants, and independent contractors face unique tax situations including quarterly estimated tax
                calculations, home office deductions, equipment expense tracking, mileage documentation, and retirement
                planning for self-employed individuals. We help you navigate the tax complexities of irregular income
                and project-based work while maximizing legitimate business deductions.
              </p>

              <p>
                Young professionals choosing to live in Cherry Street and Brookside for the walkable lifestyle and
                community atmosphere often face their own financial questions. Student loan interest deductions,
                first-time homebuyer considerations, whether to start a side business, Traditional versus Roth IRA
                decisions, and establishing good financial habits all require guidance. We help young professionals
                build a strong financial foundation early in their careers, making tax planning accessible and
                understandable.
              </p>

              <p>
                For Cherry Street business owners, entity selection represents a critical early decision. Should you
                operate as a sole proprietor, form an LLC, elect S-Corporation status, or consider a partnership? Each
                structure carries different tax implications, liability considerations, and administrative requirements.
                We provide comprehensive business entity selection guidance, handle formation paperwork, and ensure you
                start with the structure that best supports your business model and growth plans.
              </p>

              <p>
                Many Cherry Street businesses operate with lean teams where the owner wears multiple hats. Bookkeeping
                often gets pushed aside until tax time creates crisis. We offer flexible bookkeeping solutions including
                full-service monthly bookkeeping, catch-up services to get you current, QuickBooks cleanup and training,
                and hybrid approaches where we handle complex transactions while you manage daily entries. Our goal is
                making bookkeeping manageable so you can focus on serving customers and growing your business.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Professional CPA Services for Cherry Street & Brookside
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive accounting and tax services for restaurants, boutiques, creative professionals,
              and young professionals in Cherry Street and Brookside.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => {
                const serviceImages: Record<string, string> = {
                  'business-tax-accounting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
                  'tax-planning-preparation': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
                  'bookkeeping-services': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'quickbooks-cleanup': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
                  'payroll-services': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
                  'business-entity-selection': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop'
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
              Why Cherry Street Businesses Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Restaurant & Retail Expertise
                </h3>
                <p className="text-gray-700">
                  We specialize in serving Cherry Street's restaurant and retail community with deep knowledge of
                  tip reporting, inventory management, sales tax compliance, and the unique challenges of hospitality
                  and retail accounting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Small Business Focus
                </h3>
                <p className="text-gray-700">
                  Unlike large corporate firms, we appreciate Cherry Street's entrepreneurial spirit and
                  community-oriented businesses. We provide personalized attention and build genuine relationships
                  with every client.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Creative Professional Support
                </h3>
                <p className="text-gray-700">
                  We understand the unique tax situations facing freelancers, consultants, artists, and creative
                  professionals including irregular income patterns, home office deductions, and self-employment
                  tax optimization.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Former IRS Manager Protection
                </h3>
                <p className="text-gray-700">
                  Our founder's background as an IRS manager provides unique insights into documentation requirements
                  and audit protection—especially valuable for cash-intensive businesses and self-employed
                  professionals.
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
              Frequently Asked Questions About Cherry Street CPA Services
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
              <Link href="/cpa-downtown-tulsa" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Downtown Tulsa
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/cpa-south-tulsa" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                South Tulsa
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
              Contact Your Cherry Street CPA
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
                        <span className="text-sm text-gray-600">10 minutes from Cherry Street</span>
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

      {/* About Cherry Street Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              About Cherry Street & Brookside
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Cherry Street and Brookside represent Tulsa's most vibrant walkable neighborhoods, known for locally-owned
              restaurants, boutique retailers, specialty shops, and a strong sense of community. This area attracts
              young professionals, creative entrepreneurs, and families who appreciate urban living with neighborhood
              charm and locally-focused businesses.
            </p>
            <p className="text-base opacity-80">
              Whether you're a restaurant owner navigating hospitality accounting challenges, a boutique retailer
              managing seasonal inventory, a creative professional building your freelance career, or a young
              professional establishing your financial foundation, Klingeman CPAs provides the neighborhood expertise
              and professional service Cherry Street businesses and residents deserve.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Cherry Street's Neighborhood CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}
