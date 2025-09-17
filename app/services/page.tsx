import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/components/SEO';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Services in Tulsa, OK | Tax Planning, Accounting & IRS Representation',
  description: 'Full-service CPA firm in Tulsa offering business tax & accounting, IRS audit representation, estate planning, payroll, bookkeeping & more. Former IRS expertise. Free consultation.',
  canonical: '/services'
});

// Service images mapping
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
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  // Schema markup for services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "AccountingService",
      "name": "Klingeman CPAs",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "addressRegion": BUSINESS_INFO.address.stateAbbr,
        "postalCode": BUSINESS_INFO.address.zip
      },
      "telephone": BUSINESS_INFO.phone
    },
    "areaServed": {
      "@type": "City",
      "name": "Tulsa, Oklahoma"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CPA Services",
      "itemListElement": SERVICES.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our CPA Services in Tulsa: Tax Planning, Audit Representation & More
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Full-service accounting firm with former IRS management expertise helping businesses and individuals achieve financial success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Former IRS Management</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>40+ Years Combined Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Full-Service CPA Firm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive CPA & Tax Services for Tulsa Businesses and Individuals
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From strategic tax planning to IRS representation, our experienced CPAs provide the expertise and guidance you need to maximize savings and ensure compliance.
              </p>
            </div>

            {/* Service Categories */}
            <div className="space-y-16">
              {/* Business Tax & Accounting */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={serviceImages['business-tax-accounting']}
                      alt="Business Tax & Accounting Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Business Tax & Accounting Services
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our comprehensive business tax and accounting services provide monthly financial statements with expert advisory to ensure your business maintains compliance and achieves financial stability. We work closely with businesses of all sizes to optimize their financial operations.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Monthly financial statements advisory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Ensuring compliance and financial stability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Strategic business financial planning</span>
                      </li>
                    </ul>
                    <Link
                      href="/services/business-tax-accounting"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tax Planning & Preparation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto md:order-2">
                    <Image
                      src={serviceImages['tax-planning-preparation']}
                      alt="Tax Planning & Preparation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Tax Planning & Preparation
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our expert CPAs develop customized tax strategies for both individuals and businesses, focusing on maximizing deductions and significantly reducing tax liabilities. We stay current with tax law changes to ensure you benefit from every available opportunity.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Tax strategies for individuals & businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Maximizing deductions and reducing tax liabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Year-round tax planning and advisory</span>
                      </li>
                    </ul>
                    <Link
                      href="/services/tax-planning-preparation"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Get Started
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* IRS Audit Representation */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg overflow-hidden border-2 border-red-100">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={serviceImages['irs-audit-representation']}
                      alt="IRS Audit Representation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-red-900/20"></div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        IRS Audit Representation
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      <strong>If you're facing an IRS or state tax audit, our experienced CPA team provides expert representation throughout the process.</strong> We negotiate with tax authorities on your behalf, working to secure favorable settlements and reduce penalties.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Expert CPA guidance in IRS & state tax audits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Securing favorable settlements and penalty reductions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Former IRS management insight</span>
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Get Immediate Help
                      </a>
                      <Link
                        href="/services/irs-audit-representation"
                        className="inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Services Grid */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                All Our Professional CPA Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={serviceImages[service.slug] || 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                        Learn More
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Tulsa's Most Trusted CPAs?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule your free consultation today and discover how our expertise can help you save on taxes and achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book a Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Serving Businesses Throughout the Tulsa Metro Area
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Conveniently located at {BUSINESS_INFO.address.street} in Tulsa, we serve clients throughout Oklahoma including Broken Arrow, Bixby, Owasso, Jenks, Sand Springs, and surrounding communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tulsa-cpa"
                className="text-blue-600 font-semibold hover:underline"
              >
                Tulsa CPA Services
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/cpa-broken-arrow"
                className="text-blue-600 font-semibold hover:underline"
              >
                Broken Arrow CPA
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/cpa-bixby"
                className="text-blue-600 font-semibold hover:underline"
              >
                Bixby CPA
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/cpa-owasso"
                className="text-blue-600 font-semibold hover:underline"
              >
                Owasso CPA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}