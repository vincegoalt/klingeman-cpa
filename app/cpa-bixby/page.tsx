import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import LeadMagnet from '@/components/LeadMagnet';
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

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CPA Services in Bixby, Oklahoma
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Professional accounting and tax services for Bixby residents and businesses. 
              Located just 20 minutes away in Tulsa, we provide personalized CPA services with 
              former IRS management experience.
            </p>
            
            <div className="inline-flex items-center gap-4 text-sm bg-white px-6 py-3 rounded-lg shadow-md mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>20 minutes from Bixby</span>
              </div>
              <span className="text-gray-400">•</span>
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
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
              {featuredServices.map((service) => (
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

            <div className="text-center mt-8">
              <Link
                href="/services"
                className="text-blue-700 font-semibold hover:underline"
              >
                View all our CPA services →
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

      <section className="py-16">
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
                <LeadMagnet />
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Office Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-blue-700">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-blue-700">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              About Bixby, Oklahoma
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Bixby is a charming community south of Tulsa with over 28,000 residents who value 
              quality education, family-friendly neighborhoods, and strong community ties. Known for 
              excellent schools and a growing business district, Bixby represents the best of 
              Oklahoma living.
            </p>
            <p className="text-base opacity-80">
              Whether you're a longtime Bixby resident or new to the community, our CPA services 
              help you navigate tax obligations, plan for retirement, and make sound financial 
              decisions for your family's future.
            </p>
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