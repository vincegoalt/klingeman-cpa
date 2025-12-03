import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Claremore | Tax Preparation & Accounting Services',
  description: 'Professional CPA services for Claremore residents and businesses. Expert tax preparation, bookkeeping, and financial planning. Former IRS manager with 20+ years experience serving Rogers County.',
  canonical: '/cpa-claremore'
});

export default function ClaremoreCPAPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Claremore', url: '/cpa-claremore' }
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
            alt="Professional CPA Services in Claremore"
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
              CLAREMORE'S TRUSTED CPA FIRM
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services in
              <span className="block text-white">Claremore, Oklahoma</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for Claremore residents and businesses.
              Located just 30 minutes away in Tulsa, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 30 Minutes from Claremore
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
                <div className="text-2xl font-bold">225+</div>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted CPA Serving Claremore and Rogers County
            </h2>

            <p className="text-gray-700 mb-6">
              As the county seat of Rogers County, Claremore is a vibrant community with a rich history and a growing
              economy. With a population of approximately 19,000 residents, Claremore is home to a diverse mix of
              families, professionals, educators, and business owners who deserve professional CPA services tailored
              to their unique financial needs. At Klingeman CPAs, we're proud to serve the Claremore community with
              expert accounting and tax services from our nearby Tulsa office, just 30 minutes southwest.
            </p>

            <p className="text-gray-700 mb-6">
              Whether you're a Rogers State University employee, a healthcare professional at one of Claremore's
              medical facilities, a retail business owner on Will Rogers Boulevard, or a homeowner planning for
              retirement, our experienced team understands the financial challenges and opportunities specific to
              the Claremore area. Our founder's background as a former IRS manager provides clients with insider
              knowledge that maximizes tax savings while ensuring complete compliance with federal and state regulations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Comprehensive CPA Services for Claremore Businesses and Residents
            </h3>

            <p className="text-gray-700 mb-6">
              Claremore's economy is anchored by education, healthcare, retail, and government services. Rogers State
              University is one of the city's largest employers, while healthcare facilities including Claremore Indian
              Hospital and various medical clinics serve the region's healthcare needs. The historic downtown district
              features unique retail shops, restaurants, and service businesses that contribute to the local economy.
              Our CPA firm has extensive experience working with businesses and individuals across all these sectors.
            </p>

            <p className="text-gray-700 mb-6">
              For Claremore business owners, we provide complete accounting solutions including business tax preparation,
              bookkeeping services, payroll management, and QuickBooks setup and training. We help retail shops manage
              inventory accounting, assist healthcare professionals with medical practice accounting, and guide service
              businesses through entity selection and tax planning strategies. Our business clients appreciate our
              proactive approach to identifying tax deductions and ensuring accurate financial records throughout the year.
            </p>

            <p className="text-gray-700 mb-6">
              Individual tax preparation is another core service we provide to Claremore residents. Whether you're a
              university professor with educator expenses, a healthcare worker with continuing education costs, a retiree
              managing investment income, or a young professional buying your first home, we ensure you take advantage
              of every available deduction and credit. Our personalized approach means we take time to understand your
              unique financial situation and develop tax strategies that minimize your liability while keeping you
              compliant with IRS requirements.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Why Claremore Clients Choose Klingeman CPAs
            </h3>

            <p className="text-gray-700 mb-6">
              Location and accessibility matter when choosing a CPA. While our office is in Tulsa, we're just 30 minutes
              from Claremore via US-66 or State Highway 20, making in-person consultations convenient when needed.
              However, we also leverage technology to serve clients efficiently through secure online portals, video
              conferencing, and electronic document exchange. Many of our Claremore clients appreciate the flexibility
              of working remotely while knowing they can visit our office for face-to-face meetings when preferred.
            </p>

            <p className="text-gray-700 mb-6">
              What truly sets us apart is our commitment to building long-term relationships with every client. Unlike
              large national firms where you're just an account number, we provide personalized attention from experienced
              professionals who remember your name, understand your goals, and proactively communicate throughout the
              year. Our founder's former IRS experience gives clients confidence that their tax returns are prepared
              correctly and their audit risk is minimized. We've maintained a 100% success rate in IRS audit representation,
              demonstrating our expertise and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Professional CPA Services for Claremore
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              From individual tax preparation to comprehensive business accounting, we provide
              full-service CPA solutions for the Claremore community.
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About CPA Services in Claremore
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need to visit your Tulsa office, or can we work remotely?
                </h3>
                <p className="text-gray-700">
                  We offer both options based on your preference. Many Claremore clients work with us entirely remotely
                  using our secure online portal, video conferencing, and electronic document exchange. However, if you
                  prefer in-person meetings, our Tulsa office is just 30 minutes away and we're happy to schedule
                  face-to-face consultations. We're flexible and will work with you in whatever way is most convenient.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What industries do you specialize in for Claremore businesses?
                </h3>
                <p className="text-gray-700">
                  We have extensive experience serving Claremore's key industries including education (working with RSU
                  employees and educational organizations), healthcare (medical practices, clinics, and healthcare
                  professionals), retail businesses (especially downtown shops and service providers), and government
                  contractors. We understand the unique accounting and tax needs of these sectors and provide specialized
                  guidance for businesses in Rogers County.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How does your former IRS experience benefit Claremore clients?
                </h3>
                <p className="text-gray-700">
                  Our founder's experience as a former IRS manager provides invaluable insider knowledge about how the
                  IRS operates, what triggers audits, and how to structure your finances to minimize tax liability while
                  staying compliant. We know exactly what the IRS looks for during examinations, which helps us prepare
                  audit-proof tax returns. If you do receive an IRS notice, we can represent you confidently, having
                  maintained a 100% success rate in audit representation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes you different from other CPA firms serving Claremore?
                </h3>
                <p className="text-gray-700">
                  Unlike large impersonal firms, we provide personalized attention and build long-term relationships with
                  every client. You'll work directly with experienced CPAs who remember your name and understand your
                  financial goals. We're proactive about communication, reaching out throughout the year with tax-saving
                  strategies rather than just at tax time. Our combination of technical expertise, former IRS experience,
                  and personal service creates an unmatched client experience for Claremore residents and businesses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can you help with both personal and business taxes?
                </h3>
                <p className="text-gray-700">
                  Absolutely. Many of our Claremore clients are business owners who need both personal and business tax
                  services. We provide comprehensive solutions including business entity selection, business tax returns,
                  bookkeeping, payroll, personal tax preparation, and tax planning that optimizes both your business and
                  personal tax situation. We look at your complete financial picture to develop strategies that minimize
                  your overall tax burden while helping you achieve your business and personal financial goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How far in advance should I contact you before tax season?
                </h3>
                <p className="text-gray-700">
                  While we can certainly help during tax season, the best time to contact us is well before April.
                  Proactive tax planning throughout the year allows us to implement strategies that reduce your tax
                  liability before year-end. For new clients, we recommend reaching out in the fall to discuss year-end
                  planning, or immediately if you're starting a new business, facing an IRS audit, or experiencing a
                  major life change. That said, we're here to help Claremore residents year-round, so contact us whenever
                  you need professional CPA services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Claremore Residents Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Convenient Location
                </h3>
                <p className="text-gray-700">
                  Our Tulsa office is just 30 minutes from Claremore, making it easy to access
                  professional CPA services when in-person meetings are preferred. We also offer remote
                  services for maximum flexibility.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Rogers County Expertise
                </h3>
                <p className="text-gray-700">
                  We understand the unique needs of Claremore and Rogers County residents and businesses,
                  from local tax considerations to the economic factors affecting education, healthcare,
                  and retail sectors.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Former IRS Expertise
                </h3>
                <p className="text-gray-700">
                  Our founder's experience as a former IRS manager provides unique insights that
                  protect you from audits and maximize your tax savings while ensuring complete compliance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personalized Service
                </h3>
                <p className="text-gray-700">
                  Unlike large corporate firms, we provide personalized attention and build
                  long-term relationships with every Claremore client, offering proactive communication
                  year-round.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <TrustBadges showAll />
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              CPA Services in Other Communities
            </h2>
            <p className="text-gray-700 mb-8">
              In addition to serving Claremore, we also provide professional CPA services to residents and
              businesses throughout the Tulsa metropolitan area:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cpa-broken-arrow" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors shadow-md">
                CPA Broken Arrow
              </Link>
              <Link href="/cpa-sapulpa" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors shadow-md">
                CPA Sapulpa
              </Link>
              <Link href="/services" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors shadow-md">
                All Services
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
              Contact Your Claremore CPA
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Schedule Your Consultation</h3>
                <ContactForm compact />
              </div>

              <div className="space-y-6">

                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
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
                        <span className="text-sm text-gray-600">30 minutes from Claremore</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Claremore Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              About Claremore, Oklahoma
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Claremore is the county seat of Rogers County and a historic community of approximately 19,000 residents
              located 30 minutes northeast of Tulsa. Known as the home of Will Rogers, Claremore's economy is driven
              by education (Rogers State University), healthcare (Claremore Indian Hospital and regional medical centers),
              retail, and government services.
            </p>
            <p className="text-base opacity-80">
              Whether you're a Rogers State University faculty member, a healthcare professional, a downtown business
              owner, or a Claremore resident planning for your financial future, Klingeman CPAs provides the professional
              accounting and tax expertise you need. We understand the unique challenges facing the Claremore community
              and are committed to helping you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Claremore's Trusted CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}
