import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { BUSINESS_INFO, SERVICES, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Bixby | Tax Preparation & Accounting Services',
  description: 'Professional CPA services for Bixby residents and businesses. Expert tax preparation, bookkeeping, and financial planning. Former IRS manager with 20+ years experience.',
  canonical: '/cpa-bixby'
});

export default function BixbyCPAPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA Bixby', url: '/cpa-bixby' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.filter(s =>
    ['business-tax-accounting', 'tax-planning-preparation', 'bookkeeping-bixby',
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
            alt="Professional CPA Services in Bixby"
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
              BIXBY'S TRUSTED CPA FIRM
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services in
              <span className="block text-white">Bixby, Oklahoma</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for Bixby residents and businesses. 
              Located just 20 minutes away in Tulsa, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 20 Minutes from Bixby
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
              Professional CPA Services for Bixby
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              From individual tax preparation to comprehensive business accounting, we provide 
              full-service CPA solutions for the Bixby community.
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
                  'bookkeeping-bixby': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'bookkeeping-broken-arrow': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'bookkeeping-owasso': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
                  'quickbooks-cleanup': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
                  'quickbooks-setup-training': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
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
              Why Bixby Residents Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Small Town Values, Big City Expertise
                </h3>
                <p className="text-gray-700">
                  We understand Bixby's close-knit community values while providing sophisticated 
                  CPA services that rival any major metropolitan firm.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Convenient Access
                </h3>
                <p className="text-gray-700">
                  Our Tulsa office is easily accessible from Bixby, and we offer flexible scheduling 
                  to accommodate your busy lifestyle.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Educational Excellence Support
                </h3>
                <p className="text-gray-700">
                  Many Bixby families value education. We help educators with specialized tax 
                  deductions and retirement planning for school district employees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Growing Business Community
                </h3>
                <p className="text-gray-700">
                  As Bixby continues to grow, we support new and established businesses with 
                  formation, tax planning, and ongoing financial management.
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
              Contact Your Bixby CPA
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
                        <span className="text-sm text-gray-600">20 minutes from Bixby</span>
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
              Your Trusted CPA in Bixby, Oklahoma
            </h2>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg mb-6 opacity-90">
                Bixby is one of the fastest-growing communities in the Tulsa metropolitan area, with over 28,000 residents who value quality education, family-friendly neighborhoods, and strong community ties. As your dedicated <strong>CPA in Bixby</strong>, we understand the unique financial needs of this thriving community and provide comprehensive accounting and tax services tailored to local residents and businesses.
              </p>

              <p className="text-base mb-6 opacity-90">
                Our firm serves the diverse economic landscape of Bixby, from educators working in the highly-rated Bixby Public Schools to retail business owners along Memorial Drive, and from small family-owned enterprises to growing professional services firms. As a <strong>Bixby tax preparation</strong> specialist, we recognize that this community's growth brings both opportunities and financial planning challenges that require expert guidance.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Serving Bixby's Growing Business Community</h3>

              <p className="text-base mb-4 opacity-90">
                Bixby's economic expansion has created a vibrant business environment, particularly in retail, education, healthcare, and small business sectors. Whether you're opening a new retail store in downtown Bixby, managing a service-based business, or operating a home-based enterprise, our <strong>business accountant near Bixby</strong> services provide the financial expertise you need to succeed. We help local entrepreneurs with business entity selection, tax planning strategies, bookkeeping services, and financial statement preparation.
              </p>

              <p className="text-base mb-6 opacity-90">
                Many Bixby businesses operate in the retail and service industries, serving the community's growing population. From restaurants and specialty shops to professional services and contractors, we understand the specific tax considerations and deduction opportunities available to local business owners. Our team helps you maximize deductions for inventory, equipment purchases, home office expenses, vehicle usage, and employee benefits while ensuring full compliance with federal and Oklahoma state tax regulations.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Specialized Tax Services for Bixby Educators</h3>

              <p className="text-base mb-6 opacity-90">
                Bixby Public Schools is one of the area's premier school districts, employing hundreds of teachers, administrators, and staff members. As a <strong>CPA in Bixby</strong>, we specialize in helping educators maximize their tax deductions for classroom supplies, continuing education, professional development, and unreimbursed employee expenses. We also provide retirement planning guidance for Teachers' Retirement System (TRS) participants and help educators make informed decisions about 403(b) contributions, Roth IRAs, and other tax-advantaged retirement savings options.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Personal Tax Preparation for Bixby Families</h3>

              <p className="text-base mb-6 opacity-90">
                Bixby families benefit from our comprehensive <strong>Bixby tax preparation</strong> services, which address everything from straightforward W-2 returns to complex situations involving investment income, rental properties, side businesses, and multi-state tax obligations. We help families plan for major life events including marriage, home purchases, college savings through 529 plans, and retirement planning. Our proactive approach to tax planning helps Bixby residents minimize their tax burden while building long-term wealth.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Our Bixby CPA Services</h3>

              <p className="text-base mb-4 opacity-90">
                Led by Matt Klingeman, a former IRS Revenue Officer with over 20 years of experience, our firm brings big-city expertise with a personal touch that resonates with Bixby's community values. We understand the importance of building long-term relationships with our clients, providing year-round support rather than just appearing at tax time. Our Tulsa office is conveniently located just 20 minutes from Bixby, making it easy for you to schedule in-person consultations while maintaining the accessibility and responsiveness you expect from a trusted financial advisor.
              </p>

              <p className="text-base mb-6 opacity-90">
                Whether you need assistance with individual tax returns, business accounting, IRS audit representation, estate planning, or ongoing financial guidance, our comprehensive services are designed to meet the diverse needs of the Bixby community. We stay current with constantly changing tax laws and regulations to ensure you receive accurate, up-to-date advice that protects your interests and maximizes your financial success.
              </p>

              <p className="text-base opacity-90">
                Contact us today to schedule your free consultation and discover how our <strong>Bixby tax preparation</strong> and accounting services can help you achieve your financial goals. We're committed to serving this wonderful community with integrity, expertise, and personalized attention to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Common questions from Bixby clients about our CPA services
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you serve small businesses in Bixby?
                </h3>
                <p className="text-gray-700">
                  Yes, we specialize in serving small businesses throughout Bixby, including retail shops, restaurants, service providers, contractors, and professional practices. We offer comprehensive services including business tax preparation, bookkeeping, payroll processing, QuickBooks setup and cleanup, and strategic tax planning. Our team understands the unique challenges facing Bixby's growing business community and provides personalized solutions to help you succeed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What industries do you specialize in for Bixby clients?
                </h3>
                <p className="text-gray-700">
                  We serve a diverse range of industries prominent in the Bixby area, including education (teachers and school district employees), retail businesses, restaurants and hospitality, healthcare providers, construction and contracting, real estate professionals, and service-based businesses. Our experience spans both individual tax preparation and business accounting across these sectors, allowing us to provide industry-specific guidance and maximize available deductions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can you help educators with tax deductions?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We have extensive experience working with Bixby Public Schools educators and understand the unique tax situations teachers face. We help maximize deductions for classroom supplies (up to $300 for eligible educators), continuing education expenses, professional development, home office expenses for remote work, and unreimbursed employee expenses where applicable. We also provide guidance on retirement planning for Teachers' Retirement System participants and help optimize 403(b) contributions and other tax-advantaged savings strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How far is your office from Bixby?
                </h3>
                <p className="text-gray-700">
                  Our office is conveniently located in Tulsa, approximately 20 minutes from Bixby via Highway 64 or Memorial Drive. We offer flexible scheduling to accommodate your busy lifestyle, including evening and Saturday appointments during tax season. We also provide virtual consultation options for clients who prefer remote meetings, along with secure document upload capabilities for your convenience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes your firm different from other CPAs serving Bixby?
                </h3>
                <p className="text-gray-700">
                  Our firm is led by Matt Klingeman, a former IRS Revenue Officer with over 20 years of experience, giving us unique insights into IRS procedures and audit processes. This inside knowledge allows us to provide superior tax planning strategies and unparalleled audit representation. We combine sophisticated tax expertise with personalized service, offering year-round support rather than just appearing during tax season. Our deep understanding of both Bixby's community values and complex tax regulations sets us apart.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer services beyond tax preparation for Bixby businesses?
                </h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive financial services including monthly bookkeeping, payroll processing, QuickBooks setup and training, financial statement preparation, business entity formation and selection, strategic tax planning, cash flow management, and ongoing financial advisory services. We serve as a trusted partner to help your Bixby business grow and thrive, providing the expertise you need at every stage of your business journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              CPA Services Throughout the Tulsa Metro Area
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              In addition to serving Bixby, we proudly provide expert CPA and accounting services to neighboring communities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/cpa-broken-arrow"
                className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">
                  CPA Services in Broken Arrow
                </h3>
                <p className="text-gray-600 mb-3">
                  Comprehensive tax and accounting services for Broken Arrow residents and businesses
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-jenks"
                className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">
                  CPA Services in Jenks
                </h3>
                <p className="text-gray-600 mb-3">
                  Expert tax preparation and business accounting for the Jenks community
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-owasso"
                className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">
                  CPA Services in Owasso
                </h3>
                <p className="text-gray-600 mb-3">
                  Professional accounting and tax services for Owasso families and businesses
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/cpa-sand-springs"
                className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700">
                  CPA Services in Sand Springs
                </h3>
                <p className="text-gray-600 mb-3">
                  Trusted CPA services for Sand Springs individuals and small businesses
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Explore our comprehensive range of accounting and tax services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  View All Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact Us Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Bixby's Trusted CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}