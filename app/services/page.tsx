import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'CPA Services Tulsa | Tax, Bookkeeping & Accounting',
  description: 'Comprehensive CPA services in Tulsa including tax preparation, bookkeeping, payroll, audit, business formation, and financial planning. Former IRS expertise.',
  canonical: '/services'
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional CPA Services in Tulsa
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              From tax preparation to strategic business consulting, Klingeman CPAs provides 
              comprehensive accounting services backed by former IRS management experience.
            </p>
            
            <div className="inline-flex items-center gap-4 text-sm bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Former IRS Manager</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>20+ Years Experience</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Full-Service Firm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Our Comprehensive CPA Services
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Whatever your financial needs, we have the expertise and experience to help you succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-700 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Klingeman CPAs for Your Accounting Needs?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Unique IRS Expertise
                </h3>
                <p className="text-gray-700">
                  Our founder's experience as a former IRS manager provides invaluable insight into tax 
                  compliance, audit defense, and strategic planning that other firms simply can't match.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Personalized Service
                </h3>
                <p className="text-gray-700">
                  We take time to understand your unique situation and goals, providing customized solutions 
                  and building long-term relationships with every client.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proven Results
                </h3>
                <p className="text-gray-700">
                  With over 40 years of combined CPA experience, we've helped thousands of clients save 
                  money on taxes, grow their businesses, and achieve their financial goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Year-Round Support
                </h3>
                <p className="text-gray-700">
                  Unlike seasonal tax preparers, we're here for you all year long with ongoing support, 
                  planning, and advisory services whenever you need them.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience the Klingeman CPAs Difference?
              </h3>
              <p className="text-lg mb-6">
                Schedule your free consultation today and discover how our expertise can benefit you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Serving Businesses and Individuals Throughout Tulsa
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our office at {BUSINESS_INFO.address.street} is conveniently located to serve clients 
              throughout the Tulsa metro area including Broken Arrow, Bixby, Owasso, Jenks, and Sand Springs.
            </p>
            <Link
              href="/tulsa-cpa"
              className="text-blue-700 font-semibold hover:underline"
            >
              Learn more about our Tulsa CPA services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}