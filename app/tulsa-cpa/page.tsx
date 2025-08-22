import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateFAQSchema, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import TrustBadges from '@/components/TrustBadges';
import { SERVICES, BUSINESS_INFO, SUBURBS, FOUNDER_INFO } from '@/lib/constants';

const faqs = [
  {
    question: 'What makes Klingeman CPAs different from other CPA firms in Tulsa?',
    answer: 'Our founder Matt Klingeman is a former IRS manager with over 20 years of CPA experience and a Master\'s in Business Taxation. This unique combination of IRS insider knowledge and extensive tax expertise gives our clients an unmatched advantage in tax planning, audit defense, and negotiations with the IRS.'
  },
  {
    question: 'How much do CPA services cost in Tulsa?',
    answer: 'CPA fees vary based on the complexity of your needs. We offer competitive pricing for all services including tax preparation (starting at $250 for simple returns), bookkeeping, payroll, and business consulting. We provide free consultations to discuss your needs and provide transparent pricing upfront.'
  },
  {
    question: 'Do you work with small businesses or just individuals?',
    answer: 'We work with both! Klingeman CPAs specializes in small to large business tax planning and accounting, as well as individual tax preparation. Our services include business formation, bookkeeping, payroll, financial statements, and strategic tax planning for businesses of all sizes.'
  },
  {
    question: 'Can you help if I\'m being audited by the IRS?',
    answer: 'Absolutely. With our founder\'s background as a former IRS manager, we have unique expertise in IRS audit defense and negotiations. We\'ve successfully defended countless clients in audits, often achieving favorable outcomes and saving thousands in potential penalties.'
  },
  {
    question: 'What areas of Tulsa do you serve?',
    answer: 'We serve all of the Tulsa metro area including Tulsa, Broken Arrow, Bixby, Owasso, Jenks, Sand Springs, and surrounding communities. Our office is conveniently located at 6539 E. 31st Street in Tulsa, with easy access from anywhere in the metro.'
  },
  {
    question: 'Do you offer year-round tax services or just during tax season?',
    answer: 'We\'re a full-service CPA firm open year-round. While we handle tax preparation during tax season, we also provide ongoing services like bookkeeping, payroll, tax planning, business consulting, and IRS representation throughout the year.'
  }
];

export const metadata: Metadata = generateSEO({
  title: 'CPA Tulsa | Expert Tax & Accounting Services',
  description: 'Looking for a CPA near me in Tulsa? Klingeman CPAs offers expert tax preparation, bookkeeping, and business accounting with former IRS management experience.',
  canonical: '/tulsa-cpa'
});

export default function TulsaCPAPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Tulsa CPA', url: '/tulsa-cpa' }
  ]);

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

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CPA Tulsa - Professional Tax & Accounting Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Searching for "CPA near me" in Tulsa? Klingeman CPAs provides expert tax preparation, 
              bookkeeping, and business accounting services backed by former IRS management experience 
              and 20+ years of CPA expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                Schedule Free Consultation
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-gray-800">
                <svg className="w-5 h-5 inline mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {BUSINESS_INFO.address.full} • Open Mon-Fri {BUSINESS_INFO.hours.weekdays}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Tulsa Businesses Choose Klingeman CPAs
            </h2>
            
            <TrustBadges showAll className="mb-12" />

            {/* Founder Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-20 blur-xl"></div>
                    <Image
                      src="/matt Klingeman.png"
                      alt={FOUNDER_INFO.name}
                      width={300}
                      height={375}
                      className="relative rounded-xl shadow-xl object-cover w-full"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{FOUNDER_INFO.name}, CPA</h3>
                  <p className="text-blue-600 font-semibold mb-4">Founder & Lead CPA • Former IRS Manager</p>
                  <p className="text-gray-700 mb-4">
                    With over 20 years of experience and a Master's in Business Taxation, I founded Klingeman CPAs to provide 
                    Tulsa businesses and individuals with the insider expertise they need to navigate complex tax situations confidently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FOUNDER_INFO.credentials.map((cred, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                When searching for a <strong>CPA in Tulsa</strong>, you need more than just basic tax preparation. 
                Klingeman CPAs is a full-service CPA firm specializing in comprehensive tax planning, 
                accounting, and financial consulting for businesses and individuals throughout the Tulsa metro area.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Our mission is simple: deliver exceptional service and contribute positively to your 
                bottom-line results. Whether you need help with complex business taxes, IRS audit defense, 
                or strategic financial planning, our team combines decades of experience with personalized, 
                relationship-based service.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Comprehensive CPA Services in Tulsa, Oklahoma
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                As your trusted <strong>accountant in Tulsa</strong>, we offer a complete range of services 
                designed to meet all your financial needs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Former IRS Experience: Your Advantage
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                What sets us apart from other CPAs in Tulsa? Our founder, Matt Klingeman, brings unique 
                expertise as a <strong>former IRS manager</strong>. This insider knowledge, combined with his 
                Master's in Business Taxation and 20+ years as a practicing CPA, provides our clients with:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>Unmatched insight into IRS procedures and requirements</li>
                <li>Strategic tax planning that minimizes audit risk</li>
                <li>Expert representation in IRS audits and negotiations</li>
                <li>Proactive compliance strategies that avoid costly penalties</li>
                <li>Advanced knowledge of tax law changes and opportunities</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Serving All of Tulsa Metro
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Located at {BUSINESS_INFO.address.street} in Tulsa, we're conveniently accessible from 
                anywhere in the metro area. We proudly serve businesses and individuals in:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-blue-700 text-white p-3 rounded text-center font-semibold">
                  Tulsa
                </div>
                {SUBURBS.map((suburb) => (
                  <Link
                    key={suburb.slug}
                    href={`/${suburb.slug}`}
                    className="bg-gray-100 p-3 rounded text-center hover:bg-blue-50 transition"
                  >
                    {suburb.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Get Started with Tulsa's Most Trusted CPA Firm
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Schedule Your Free Consultation</h3>
                <ContactForm compact />
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Visit Our Tulsa Office</h3>
                  <address className="not-italic text-gray-700">
                    <p className="mb-2">{BUSINESS_INFO.address.street}</p>
                    <p className="mb-3">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}</p>
                    <p className="font-semibold">Hours:</p>
                    <p>Monday - Friday: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                    <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                  </address>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Why Wait? Call Now!</h3>
                  <p className="mb-4">Speak directly with our experienced CPAs about your tax and accounting needs.</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About CPAs in Tulsa
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Have more questions? We're here to help!
              </p>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition inline-block"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Tulsa's Top CPA Firm?"
        description="Get expert tax and accounting services from CPAs with former IRS experience."
      />
    </>
  );
}