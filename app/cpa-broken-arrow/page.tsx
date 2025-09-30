import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Broken Arrow | Tax Preparation & Accounting Services',
  description: 'Professional CPA services for Broken Arrow residents and businesses. Expert tax preparation, bookkeeping, and financial planning. Former IRS manager with 20+ years experience.',
  canonical: '/cpa-broken-arrow'
});

export default function BrokenArrowCPAPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Broken Arrow', url: '/cpa-broken-arrow' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.filter(s =>
    ['business-tax-accounting', 'tax-planning-preparation', 'bookkeeping-broken-arrow',
     'quickbooks-cleanup', 'payroll-services', 'financial-statements'].includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section with Professional CPA Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=1080&fit=crop"
            alt="Professional CPA Services in Broken Arrow"
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
              BROKEN ARROW'S TRUSTED CPA FIRM
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services in
              <span className="block text-white">Broken Arrow, Oklahoma</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for Broken Arrow residents and businesses. 
              Located just 15 minutes away in Tulsa, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 15 Minutes from Broken Arrow
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
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11z" clipRule="evenodd"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-gray-600">Years Combined Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Professional CPA Services for Broken Arrow
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              From individual tax preparation to comprehensive business accounting, we provide 
              full-service CPA solutions for the Broken Arrow community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => {
                // Define specific images for each service
                const serviceImages: Record<string, string> = {
                  'business-tax-accounting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
                  'tax-planning-preparation': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
                  'tax-write-offs-deductions': 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=600&fit=crop',
                  'irs-audit-representation': 'https://images.unsplash.com/photo-1732767751346-cb97d4eee70d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop',
                  'estate-trust-tax': 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&h=600&fit=crop',
                  'business-entity-selection': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
                  'real-estate-tax': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
                  'payroll-services': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
                  'bookkeeping-services': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
                  'bookkeeping-broken-arrow': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'bookkeeping-owasso': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'bookkeeping-bixby': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'quickbooks-cleanup': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
                  'quickbooks-setup-training': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                  'financial-statements': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
                  'retirement-planning': 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800&h=600&fit=crop'
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
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
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
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
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

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Broken Arrow Residents Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Convenient Location
                </h3>
                <p className="text-gray-700">
                  Our Tulsa office is just 15 minutes from Broken Arrow, making it easy to access 
                  professional CPA services without the big city hassle.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Local Market Knowledge
                </h3>
                <p className="text-gray-700">
                  We understand the unique needs of Broken Arrow residents and businesses, from 
                  local tax considerations to regional economic factors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Former IRS Expertise
                </h3>
                <p className="text-gray-700">
                  Our founder's experience as a former IRS manager provides unique insights that 
                  protect you from audits and maximize your tax savings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personalized Service
                </h3>
                <p className="text-gray-700">
                  Unlike large corporate firms, we provide personalized attention and build 
                  long-term relationships with every Broken Arrow client.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <TrustBadges showAll />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Your Broken Arrow CPA
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
                        <span className="text-sm text-gray-600">15 minutes from Broken Arrow</span>
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

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Your Trusted CPA in Broken Arrow, Oklahoma
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                As Broken Arrow continues to grow and thrive as one of Oklahoma's premier communities, local residents and business owners need reliable, expert financial guidance. Klingeman CPAs brings over 20 years of professional accounting experience to serve the Broken Arrow community, offering comprehensive tax preparation, business accounting, and financial planning services tailored to your unique needs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Serving Broken Arrow's Diverse Business Community
              </h3>

              <p>
                Broken Arrow's economy is built on a diverse foundation of retail businesses, service industries, small businesses, and professional services. From the bustling commercial corridors along Kenosha Street and Elm Place to the thriving restaurant and hospitality sector, we understand the unique financial challenges facing Broken Arrow business owners. Whether you're running a local retail shop, managing a growing service company, or operating a healthcare practice, our team provides specialized <strong>business accountant services near Broken Arrow</strong> that help you navigate complex tax regulations while maximizing profitability.
              </p>

              <p>
                Our <strong>Broken Arrow tax preparation</strong> services extend beyond simple form filing. We take a proactive approach to tax planning, helping small business owners identify strategic deductions, optimize their entity structure, and plan for quarterly estimated payments. With our founder's background as a former IRS manager, we bring insider knowledge that helps protect your business from audits while ensuring full compliance with federal and state tax laws.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Comprehensive Personal Tax Services for Broken Arrow Residents
              </h3>

              <p>
                Broken Arrow homeowners face unique tax situations, from property tax considerations to Oklahoma state tax credits and deductions. Whether you're a first-time homebuyer taking advantage of mortgage interest deductions, a growing family maximizing child tax credits, or a professional managing complex investment income, our <strong>CPA in Broken Arrow</strong> services provide the expertise you need. We stay current on Oklahoma-specific tax benefits and ensure you're taking advantage of every available deduction and credit.
              </p>

              <p>
                For Broken Arrow residents with multiple income sources, rental properties, or side businesses, tax preparation becomes increasingly complex. Our team specializes in multi-state tax filings for clients who work remotely or own property in multiple states, ensuring proper tax allocation and avoiding double taxation. We also provide year-round tax planning services, not just seasonal preparation, helping you make informed financial decisions throughout the year that positively impact your tax situation.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Why Location Matters: Convenient Access from Broken Arrow
              </h3>

              <p>
                Located just 15 minutes from Broken Arrow in midtown Tulsa, Klingeman CPAs offers the perfect balance of accessibility and expertise. We're close enough for convenient in-person meetings when needed, yet far enough from the corporate chains to provide truly personalized service. Many of our clients appreciate the ease of scheduling appointments during their commute or combining their visit with other errands in Tulsa. We also offer flexible meeting options, including virtual consultations for busy professionals who prefer the convenience of remote services.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Specialized Services for Broken Arrow's Growing Economy
              </h3>

              <p>
                As Broken Arrow continues to attract new businesses and residents, the demand for specialized accounting services grows. We provide comprehensive bookkeeping services for local businesses, QuickBooks setup and cleanup, payroll processing, and financial statement preparation. For retail businesses dealing with inventory management and sales tax compliance, we offer targeted solutions that simplify complex accounting requirements. Service industry professionals benefit from our expertise in expense tracking, contractor management, and profit optimization strategies.
              </p>

              <p>
                Real estate investors and property managers in Broken Arrow require specialized tax planning to maximize depreciation deductions, properly categorize rental income and expenses, and navigate 1031 exchanges. Our team brings deep expertise in real estate taxation, helping property owners build wealth while minimizing tax liability. Whether you own a single rental property or manage a portfolio of investment properties, we provide the guidance you need to succeed.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">
                Building Long-Term Relationships with Broken Arrow Clients
              </h3>

              <p>
                At Klingeman CPAs, we don't view our role as simply preparing tax returns each April. Instead, we strive to build lasting relationships with Broken Arrow families and businesses, serving as trusted financial advisors who understand your goals and help you achieve them. Our clients appreciate our responsive communication, proactive planning approach, and commitment to delivering exceptional value. When you work with a <strong>CPA in Broken Arrow</strong> from our firm, you gain a financial partner dedicated to your long-term success.
              </p>

              <p>
                Whether you're launching a new business in Broken Arrow, growing an existing company, planning for retirement, or simply looking for more strategic tax preparation, Klingeman CPAs has the expertise and local market knowledge to serve you well. Contact us today to schedule a free consultation and discover how professional accounting services can benefit your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you work with small businesses in Broken Arrow?
                </h3>
                <p className="text-gray-700">
                  Absolutely! We specialize in serving small businesses throughout Broken Arrow, including retail shops, restaurants, service providers, professional practices, and home-based businesses. We understand the unique challenges facing local entrepreneurs and provide comprehensive business accounting, tax preparation, bookkeeping, and financial planning services. Our team helps Broken Arrow business owners navigate complex tax regulations, optimize their entity structure, and implement accounting systems that support growth.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How far is your office from Broken Arrow?
                </h3>
                <p className="text-gray-700">
                  Our office is located in midtown Tulsa, just 15 minutes from Broken Arrow via Highway 51 or the BA Expressway. The convenient location makes it easy for Broken Arrow residents and business owners to visit us for in-person consultations. We're accessible from all parts of Broken Arrow, whether you're coming from the historic downtown area, south Broken Arrow, or the growing east side of the city. We also offer virtual consultations for clients who prefer remote meetings.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can you help with multi-state tax filings?
                </h3>
                <p className="text-gray-700">
                  Yes, we regularly assist Broken Arrow clients with multi-state tax situations. Whether you work remotely for an out-of-state employer, own rental properties in multiple states, operate a business across state lines, or relocated during the tax year, we have the expertise to handle complex multi-state filings. We ensure proper tax allocation, help you avoid double taxation, and identify opportunities to minimize your overall tax burden while maintaining full compliance with each state's requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes your firm different from other CPAs serving Broken Arrow?
                </h3>
                <p className="text-gray-700">
                  Our founder's background as a former IRS manager sets us apart from other accounting firms. This insider perspective allows us to provide proactive audit protection strategies and maximize legitimate tax deductions with confidence. We combine this specialized expertise with personalized service that large corporate firms can't match. Unlike seasonal tax preparation chains, we build long-term relationships with our clients and provide year-round support. We're locally owned, understand the Broken Arrow community, and treat every client's financial situation with the attention it deserves.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer bookkeeping services for Broken Arrow businesses?
                </h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive bookkeeping services tailored to Broken Arrow businesses. Our services include monthly bookkeeping, QuickBooks setup and training, QuickBooks cleanup and catch-up services, accounts payable and receivable management, bank reconciliation, financial statement preparation, and payroll processing. We work with businesses of all sizes, from sole proprietors and startups to established companies with complex accounting needs. Our goal is to provide accurate, timely financial information that helps you make better business decisions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  When should I start working with a CPA for my Broken Arrow business?
                </h3>
                <p className="text-gray-700">
                  The best time to engage a CPA is before you launch your business. We can help you select the optimal business entity structure (LLC, S-Corp, C-Corp, or Partnership), set up proper accounting systems from day one, and establish tax planning strategies that support long-term success. However, it's never too late to get professional help. If you're already in business and struggling with bookkeeping, missing tax deadlines, or unsure about your financial position, reaching out now can help you get back on track and avoid costly mistakes. Many Broken Arrow business owners find that the money saved through strategic tax planning more than pays for our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              CPA Services in Nearby Communities
            </h2>

            <p className="text-lg text-gray-700 text-center mb-8">
              In addition to serving Broken Arrow, we provide professional CPA and accounting services to clients throughout the greater Tulsa area. Explore our location-specific pages to learn more about our services in your community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Link href="/cpa-bixby" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  CPA Services in Bixby
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
                <p className="text-gray-600">
                  Professional tax and accounting services for Bixby residents and businesses, just minutes from our Tulsa office.
                </p>
              </Link>

              <Link href="/cpa-jenks" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  CPA Services in Jenks
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
                <p className="text-gray-600">
                  Expert CPA services for Jenks families and businesses, including tax preparation, bookkeeping, and financial planning.
                </p>
              </Link>

              <Link href="/cpa-owasso" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  CPA Services in Owasso
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
                <p className="text-gray-600">
                  Comprehensive accounting and tax services for Owasso's growing community of residents and business owners.
                </p>
              </Link>

              <Link href="/cpa-sand-springs" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  CPA Services in Sand Springs
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
                <p className="text-gray-600">
                  Local CPA expertise for Sand Springs businesses and individuals, with personalized service and tax strategies.
                </p>
              </Link>
            </div>

            <div className="text-center space-y-4">
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-md"
                >
                  Explore All Our Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-md"
                >
                  Contact Us Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Broken Arrow's Trusted CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}