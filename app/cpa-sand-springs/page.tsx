import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Sand Springs | Tax Preparation & Accounting Services',
  description: 'Professional CPA services for Sand Springs residents and businesses. Expert tax preparation, bookkeeping, and financial planning. Former IRS manager with 20+ years experience.',
  canonical: '/cpa-sand-springs'
});

export default function SandSpringsCPAPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Sand Springs', url: '/cpa-sand-springs' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.slice(0, 6);

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
            src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1920&h=1080&fit=crop"
            alt="Professional CPA Services in Sand Springs"
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
              SAND SPRINGS' TRUSTED CPA FIRM
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services in
              <span className="block text-white">Sand Springs, Oklahoma</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for Sand Springs residents and businesses. 
              Located just 10 minutes away in Tulsa, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 10 Minutes from Sand Springs
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
                <div className="text-2xl font-bold">225+</div>
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
              Professional CPA Services for Sand Springs
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              From individual tax preparation to comprehensive business accounting, we provide 
              full-service CPA solutions for the Sand Springs community.
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
                  'financial-statements': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
                  'retirement-planning': 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800&h=600&fit=crop'
                };;
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
              Why Sand Springs Residents Choose Klingeman CPAs
            </h2>

            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Sand Springs has a rich industrial heritage rooted in oil and gas production, manufacturing, and heavy industry that continues to drive the local economy today. As a dedicated CPA firm serving Sand Springs businesses and residents, we understand the unique accounting challenges facing industrial operations, manufacturing companies, energy sector businesses, and the hardworking families who call this community home. Our comprehensive tax preparation, business accounting, bookkeeping, and financial consulting services are specifically designed to meet the needs of Sand Springs' diverse economic base.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The oil and gas industry remains a cornerstone of Sand Springs' economy, with many residents working in exploration, production, refining, and related services. Our accounting firm provides specialized tax services for oil and gas professionals including depletion deductions, intangible drilling cost analysis, working interest versus royalty interest taxation, joint venture accounting, and energy sector retirement planning. We help independent operators, working interest owners, and energy industry employees navigate complex tax regulations while maximizing legitimate deductions and maintaining full compliance with IRS requirements specific to the petroleum industry.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Manufacturing businesses in Sand Springs face unique accounting challenges including inventory valuation methods, cost accounting systems, equipment depreciation strategies, Section 179 and bonus depreciation optimization, and production tax credits. Our CPA team works extensively with manufacturers to implement robust cost accounting systems that track raw materials, work-in-progress, and finished goods inventory. We help manufacturing clients understand their true production costs, optimize pricing strategies, manage cash flow effectively, and structure their operations to minimize tax liability while supporting business growth and workforce expansion.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Beyond industrial businesses, Sand Springs is home to construction companies, transportation firms, retail establishments, healthcare providers, and professional service businesses that require expert accounting support. We provide comprehensive business services including monthly bookkeeping and financial statements, payroll processing and tax compliance, sales tax collection and remittance, QuickBooks setup and training, business entity formation and structuring, succession planning for family businesses, and strategic tax planning that keeps more money in your pocket. Our personalized approach means you work directly with experienced CPAs who understand your industry and care about your success, not junior staff or automated software systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Close to Home
                </h3>
                <p className="text-gray-700">
                  At just 10 minutes from Sand Springs, we're your closest professional CPA firm,
                  making it convenient to access expert accounting services when you need them.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Small Town Understanding
                </h3>
                <p className="text-gray-700">
                  We appreciate Sand Springs' tight-knit community feel and provide the personal
                  attention and long-term relationships that small town values deserve.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Industrial & Manufacturing Expertise
                </h3>
                <p className="text-gray-700">
                  With Sand Springs' industrial heritage, we understand manufacturing and
                  industrial business accounting needs, from equipment depreciation to inventory management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Affordable Professional Service
                </h3>
                <p className="text-gray-700">
                  We provide big-firm expertise with small-town pricing, ensuring Sand Springs
                  residents and businesses get exceptional value for professional CPA services.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Sand Springs CPA Services
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you provide accounting services for manufacturing companies in Sand Springs?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in manufacturing accounting and understand the unique challenges facing Sand Springs industrial businesses. Our services include cost accounting system implementation, inventory valuation and tracking (FIFO, LIFO, weighted average), equipment depreciation strategies including Section 179 and bonus depreciation, production overhead allocation, job costing analysis, and manufacturing tax credit identification. We help manufacturers optimize their accounting systems to track production costs accurately, manage inventory efficiently, and maximize tax deductions through strategic planning and proper documentation of all business expenses.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How can your CPA firm help oil and gas industry professionals?
                </h3>
                <p className="text-gray-700">
                  We have extensive experience serving oil and gas professionals in Sand Springs including independent operators, working interest owners, royalty interest holders, and energy sector employees. Our specialized services include depletion deduction calculations, intangible drilling cost (IDC) analysis and optimization, lease operating expense tracking, joint venture accounting and tax reporting, percentage depletion versus cost depletion analysis, and passive activity loss limitation strategies. We understand the complex tax rules governing oil and gas operations and help clients structure their investments and operations to minimize tax liability while maintaining full IRS compliance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What accounting services do you provide for Sand Springs small businesses?
                </h3>
                <p className="text-gray-700">
                  We provide comprehensive accounting services for Sand Springs small businesses across all industries including monthly bookkeeping and reconciliation, accounts payable and receivable management, payroll processing and quarterly tax filings, sales tax compliance and remittance, financial statement preparation (balance sheet, income statement, cash flow), budget development and variance analysis, QuickBooks setup and ongoing support, year-end tax planning and preparation, and CFO advisory services for growing businesses. Our goal is to handle your accounting needs efficiently and accurately so you can focus on running and growing your business.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you help with succession planning for family-owned businesses?
                </h3>
                <p className="text-gray-700">
                  Yes, succession planning is critical for family-owned businesses in Sand Springs, and we provide comprehensive guidance throughout the transition process. Our services include business valuation for estate and gift tax purposes, entity restructuring to facilitate ownership transfers, buy-sell agreement design and implementation, estate tax minimization strategies, gifting strategies using annual exclusions and lifetime exemptions, trust formation and funding, and coordination with attorneys and financial advisors. We help business owners develop tax-efficient succession plans that preserve family wealth, minimize tax burdens, and ensure smooth transitions to the next generation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes your firm a good fit for Sand Springs businesses?
                </h3>
                <p className="text-gray-700">
                  Our firm combines the expertise of large accounting firms with the personalized service and competitive pricing that Sand Springs businesses expect. We're located just 10 minutes away in Tulsa, making in-person meetings convenient when needed. Our lead CPA has over 20 years of experience including time as an IRS manager, giving us unique insight into tax law interpretation and IRS procedures. We understand Sand Springs' industrial and manufacturing base because we work with these businesses daily. Most importantly, we're committed to building long-term relationships with our clients, not just completing transactions, and we measure our success by your financial success.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do I get started with your CPA services?
                </h3>
                <p className="text-gray-700">
                  Getting started is simple and begins with a free consultation. Call our office or complete the contact form on our website to schedule an initial meeting. During this consultation, we'll discuss your specific accounting and tax needs, explain our services in detail, review our pricing structure, and answer all your questions. If we're a good fit, we'll outline next steps including document collection, engagement letter signing, and service timeline. Many Sand Springs businesses and individuals have worked with us for years, and those long-term relationships often begin with a simple phone call. We look forward to learning about your needs and showing you how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              CPA Services in Nearby Communities
            </h2>

            <p className="text-lg text-gray-700 text-center mb-8">
              We proudly serve clients throughout the greater Tulsa area. Explore our CPA services in these nearby cities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/cpa-tulsa"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">CPA Tulsa</h3>
                <p className="text-gray-600 mb-3">
                  Comprehensive accounting and tax services in downtown Tulsa and surrounding areas.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-broken-arrow"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">CPA Broken Arrow</h3>
                <p className="text-gray-600 mb-3">
                  Expert CPA services for Broken Arrow families and businesses.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-sapulpa"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">CPA Sapulpa</h3>
                <p className="text-gray-600 mb-3">
                  Professional accounting solutions for Sapulpa residents and businesses.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-jenks"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">CPA Jenks</h3>
                <p className="text-gray-600 mb-3">
                  Specialized services for Jenks hospitality, retail, and education professionals.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-owasso"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">CPA Owasso</h3>
                <p className="text-gray-600 mb-3">
                  Trusted tax and accounting services for Owasso residents and businesses.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-bixby"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">CPA Bixby</h3>
                <p className="text-gray-600 mb-3">
                  Quality accounting and financial planning for Bixby area clients.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Your Sand Springs CPA
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
                        <span className="text-sm text-gray-600">10 minutes from Sand Springs</span>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              About Sand Springs, Oklahoma
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Sand Springs is a proud community west of Tulsa with nearly 20,000 residents who 
              value hard work, community spirit, and authentic relationships. Known for its 
              industrial heritage and beautiful parks along the Arkansas River, Sand Springs 
              combines small-town charm with convenient metropolitan access.
            </p>
            <p className="text-base opacity-80">
              Whether you've called Sand Springs home for generations or are new to this 
              welcoming community, our CPA services help you build financial security and 
              achieve your family's dreams.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Sand Springs' Trusted CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}