import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Collinsville | Tax Preparation & Accounting Services',
  description: 'Professional CPA services for Collinsville residents and small businesses. Expert tax preparation, bookkeeping, and financial planning. Former IRS manager with 20+ years experience.',
  canonical: '/cpa-collinsville'
});

export default function CollinsvilleCPAPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Collinsville', url: '/cpa-collinsville' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.filter(s =>
    ['business-tax-accounting', 'tax-planning-preparation', 'bookkeeping-services',
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
            alt="Professional CPA Services in Collinsville"
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
              COLLINSVILLE'S TRUSTED CPA FIRM
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services in
              <span className="block text-white">Collinsville, Oklahoma</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for Collinsville residents and small businesses.
              Located just 25 minutes south in Tulsa, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 25 Minutes from Collinsville
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
              <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11z" clipRule="evenodd"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-gray-600">Years Combined Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
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
              Your Trusted CPA Partner in Collinsville
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Collinsville is a growing bedroom community located just 25 minutes north of Tulsa, and its residents
                and business owners deserve professional CPA services that understand their unique financial needs.
                At Klingeman CPAs, we specialize in providing comprehensive tax preparation, bookkeeping, and accounting
                services tailored specifically for the Collinsville community.
              </p>
              <p>
                As a thriving community with a strong small business presence and robust retail sector, Collinsville
                presents unique opportunities and challenges for residents and entrepreneurs alike. Whether you're a
                homeowner looking to maximize your tax deductions, a small business owner managing your bookkeeping,
                or a retail shop navigating sales tax compliance, our experienced team provides the personalized attention
                and expert guidance you need to succeed financially.
              </p>
              <p>
                What sets Klingeman CPAs apart is our founder's extensive background as a former IRS manager with over
                20 years of experience. This insider knowledge gives us unique insights into tax regulations, audit
                procedures, and strategic tax planning opportunities that most CPAs simply don't possess. We understand
                how the IRS thinks and operates, which allows us to provide proactive protection and maximize your
                tax savings while ensuring full compliance.
              </p>
              <p>
                Our firm has built strong relationships with clients throughout the Tulsa metropolitan area, including
                many Collinsville residents who appreciate our accessible location, flexible appointment scheduling,
                and commitment to personalized service. We take the time to understand your specific situation, goals,
                and concerns, whether you're a young family planning for the future, a retiree managing your estate,
                or a business owner growing your operations.
              </p>
              <p>
                For Collinsville's small business community, we offer comprehensive services including business tax
                preparation, monthly bookkeeping, payroll processing, QuickBooks setup and training, and financial
                statement preparation. We work with retail shops, service providers, contractors, and professional
                practices to streamline their accounting processes and provide strategic financial insights that drive
                business growth.
              </p>
              <p>
                Individual tax preparation is another cornerstone of our practice. We help Collinsville residents navigate
                complex tax situations including rental properties, investment income, self-employment income, and
                retirement distributions. Our thorough approach ensures you claim every deduction and credit you're
                entitled to, potentially saving thousands of dollars each year while minimizing your audit risk.
              </p>
              <p>
                Beyond basic tax preparation, we provide year-round tax planning services to help you make strategic
                financial decisions throughout the year. From timing income and expenses to evaluating major purchases
                and investments, our proactive guidance helps you minimize your tax burden and achieve your financial goals.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Professional CPA Services for Collinsville
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              From individual tax preparation to comprehensive business accounting, we provide
              full-service CPA solutions for the Collinsville community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => {
                const serviceImages: Record<string, string> = {
                  'business-tax-accounting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
                  'tax-planning-preparation': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
                  'bookkeeping-services': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'quickbooks-cleanup': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
                  'payroll-services': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
                  'financial-statements': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop'
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
                    <div className="flex items-center text-blue-900 font-semibold group-hover:text-blue-700">
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
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg"
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
              Why Collinsville Residents Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Convenient Location
                </h3>
                <p className="text-gray-700">
                  Our Tulsa office is just 25 minutes south of Collinsville via Highway 169, making it easy to access
                  professional CPA services with convenient appointment times including evenings and Saturdays.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Small Business Expertise
                </h3>
                <p className="text-gray-700">
                  We specialize in serving small businesses and retail operations common in Collinsville, providing
                  bookkeeping, tax planning, and financial guidance that helps your business thrive.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Former IRS Expertise
                </h3>
                <p className="text-gray-700">
                  Our founder's experience as a former IRS manager provides unique insights that protect you from
                  audits and maximize your tax savings with strategies most CPAs don't know.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personalized Service
                </h3>
                <p className="text-gray-700">
                  Unlike large corporate firms, we provide personalized attention and build long-term relationships
                  with every Collinsville client, treating you like family rather than a number.
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
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need to travel to your Tulsa office, or can we meet remotely?
                </h3>
                <p className="text-gray-700">
                  We offer both in-person meetings at our Tulsa office and virtual consultations via video conference.
                  Many Collinsville clients prefer the convenience of remote meetings, while others appreciate meeting
                  face-to-face. We're flexible and will work with whatever arrangement suits you best.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes your firm different from other CPAs in the Tulsa area?
                </h3>
                <p className="text-gray-700">
                  Our founder's background as a former IRS manager gives us insider knowledge that most CPAs don't have.
                  We understand how the IRS evaluates returns, what triggers audits, and how to maximize your deductions
                  while staying completely compliant. Plus, we provide personalized service rather than treating you like
                  just another account number.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much do your services cost for a small business in Collinsville?
                </h3>
                <p className="text-gray-700">
                  Our fees vary based on the complexity of your needs. For small businesses, bookkeeping services typically
                  start around $200-400 per month, while tax preparation ranges from $500-2,000 depending on your business
                  structure and transaction volume. We offer a free consultation to review your situation and provide a
                  customized quote with no obligation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can you help with retail sales tax compliance and reporting?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We work with many retail businesses in the Collinsville area and can handle all aspects of
                  sales tax compliance, including monthly or quarterly reporting, nexus determinations, and dealing with
                  any sales tax audits or notices from the Oklahoma Tax Commission.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What documents do I need to bring for tax preparation?
                </h3>
                <p className="text-gray-700">
                  For individual returns, bring W-2s, 1099s, mortgage interest statements, property tax records, charitable
                  donation receipts, and any other income or expense documentation. For businesses, we'll need income
                  statements, expense records, and asset information. We'll provide a detailed checklist during your
                  consultation to ensure you have everything needed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer year-round support or just tax season services?
                </h3>
                <p className="text-gray-700">
                  We provide year-round support for all our clients. Tax planning is most effective when done throughout
                  the year, not just at tax time. We're available to answer questions, provide guidance on major financial
                  decisions, and help with bookkeeping, payroll, and other ongoing needs whenever they arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Your Collinsville CPA
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
                      <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-blue-900">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-blue-900">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>
                        {BUSINESS_INFO.address.street}<br />
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}<br />
                        <span className="text-sm text-gray-600">25 minutes from Collinsville</span>
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Serving Nearby Communities</h3>
                  <div className="space-y-2">
                    <Link href="/cpa-broken-arrow" className="block text-blue-900 hover:underline">
                      CPA Services in Broken Arrow
                    </Link>
                    <Link href="/cpa-owasso" className="block text-blue-900 hover:underline">
                      CPA Services in Owasso
                    </Link>
                    <Link href="/cpa-coweta" className="block text-blue-900 hover:underline">
                      CPA Services in Coweta
                    </Link>
                    <Link href="/cpa-bixby" className="block text-blue-900 hover:underline">
                      CPA Services in Bixby
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Collinsville Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              About Collinsville, Oklahoma
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Collinsville is a growing bedroom community located 25 minutes north of Tulsa in both Tulsa and Rogers
              Counties. With a population of approximately 7,000 residents, Collinsville offers small-town charm with
              easy access to Tulsa's amenities. The city has experienced steady growth in recent years, attracting
              young families and professionals who appreciate the excellent schools, safe neighborhoods, and strong
              sense of community.
            </p>
            <p className="text-base opacity-80">
              The local economy includes a mix of retail businesses, small professional practices, and service providers
              who serve both residents and travelers along Highway 169. Whether you're a Collinsville homeowner looking
              for expert tax preparation or a small business owner needing comprehensive accounting support, Klingeman
              CPAs provides the expertise and personalized attention you deserve. We understand the unique financial
              needs of growing communities like Collinsville and are committed to helping you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Collinsville's Trusted CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}
