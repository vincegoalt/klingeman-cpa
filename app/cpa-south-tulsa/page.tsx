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
    question: 'Do you work with medical professionals and healthcare practices in South Tulsa?',
    answer: 'Yes! We specialize in serving South Tulsa\'s medical community including physicians, dentists, specialists, and healthcare practices. We understand the unique tax challenges of medical practices including equipment depreciation, malpractice insurance deductions, real estate holdings, and the complexities of transitioning from W-2 employment to practice ownership.'
  },
  {
    question: 'Can you help with estate planning and trust taxation for established families?',
    answer: 'Absolutely. Estate and trust taxation is a specialty area for our firm. We help South Tulsa families with estate tax planning, trust administration, gift tax strategies, generation-skipping transfers, and coordinating with estate attorneys to implement comprehensive wealth transfer plans. Our goal is to help you preserve wealth for future generations while minimizing tax liability.'
  },
  {
    question: 'How close is your office to South Tulsa neighborhoods?',
    answer: 'Our office is conveniently located at 6539 E. 31st Street, just 10-15 minutes from most South Tulsa neighborhoods. We\'re easily accessible from major South Tulsa corridors including Yale, Sheridan, and Memorial, with convenient highway access via I-44 and Highway 169.'
  },
  {
    question: 'Do you help with tax planning for retirement-age clients?',
    answer: 'Yes! Many of our South Tulsa clients are in or approaching retirement. We provide specialized guidance on required minimum distributions (RMDs), Social Security taxation strategies, Roth conversion planning, Medicare premium management (IRMAA), tax-efficient withdrawal strategies, and charitable giving approaches that minimize taxes while supporting causes you care about.'
  },
  {
    question: 'Can you assist with real estate investment and rental property taxation?',
    answer: 'Definitely. South Tulsa has a significant concentration of real estate investors and rental property owners. We specialize in rental property taxation including depreciation optimization, passive activity loss rules, Section 199A deductions, 1031 exchange planning, and the complexities of vacation rentals versus long-term rentals. We help investors maximize tax benefits while maintaining proper documentation.'
  },
  {
    question: 'What retail and business services do you provide for South Tulsa companies?',
    answer: 'We serve numerous South Tulsa retail businesses, medical practices, professional services firms, and established companies. Our services include business tax preparation, monthly bookkeeping, payroll processing, sales tax compliance, financial statement preparation, succession planning, and strategic tax advisory services. We understand the business landscape in South Tulsa and provide personalized solutions for local business owners.'
  }
];

export const metadata: Metadata = generateSEO({
  title: 'CPA South Tulsa | Tax Services for Families & Medical Professionals',
  description: 'Expert CPA services for South Tulsa families, medical professionals, and established businesses. Specializing in estate planning, retirement strategies, and wealth management. Call (918) 922-1019.',
  canonical: '/cpa-south-tulsa'
});

export default function SouthTulsaCPAPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'CPA South Tulsa', url: '/cpa-south-tulsa' }
  ]);

  const organizationSchema = generateOrganizationSchema();

  const featuredServices = SERVICES.filter(s =>
    ['tax-planning-preparation', 'estate-trust-tax', 'retirement-planning',
     'real-estate-tax', 'business-tax-accounting', 'financial-statements'].includes(s.slug)
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
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop"
            alt="South Tulsa Residential Area"
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
              SOUTH TULSA'S TRUSTED CPA FIRM
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert CPA Services for
              <span className="block text-white">South Tulsa</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional accounting and tax services for South Tulsa families, medical professionals,
              and established businesses. Specializing in estate planning, retirement strategies, and wealth management.
              Just 10-15 minutes away, led by a former IRS manager with 20+ years experience.
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
                {BUSINESS_INFO.address.full} • 10-15 Minutes from South Tulsa
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
                <div className="text-2xl font-bold">40+</div>
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
              South Tulsa's Premier CPA for Families and Professionals
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                South Tulsa represents the established heart of Tulsa's residential and professional community. From
                the tree-lined neighborhoods along Yale and Sheridan to the thriving medical corridor and upscale
                retail centers, South Tulsa is home to accomplished professionals, established families, and successful
                business owners who value quality and expertise. At Klingeman CPAs, we specialize in serving South
                Tulsa's sophisticated tax and accounting needs.
              </p>

              <p>
                Located just 10-15 minutes from South Tulsa at 6539 E. 31st Street, our firm provides convenient
                access combined with the high-level expertise South Tulsa clients expect. Our founder, Matt Klingeman,
                brings distinguished credentials as a former IRS manager with over 20 years of CPA experience and a
                Master's degree in Business Taxation. This unique combination of insider IRS knowledge and advanced
                tax expertise positions us to serve South Tulsa's most complex financial situations.
              </p>

              <p>
                South Tulsa's medical community represents a significant portion of our client base. Physicians,
                dentists, specialists, and healthcare practice owners face unique tax challenges that require
                specialized expertise. From navigating the transition from hospital employment to private practice,
                understanding complex equipment depreciation schedules, optimizing medical practice entity structures,
                and managing the intersection of professional income with real estate holdings, we provide the
                comprehensive guidance medical professionals need.
              </p>

              <p>
                Estate planning and wealth transfer strategies take on particular importance for South Tulsa's
                established families. Many of our clients have accumulated significant wealth and seek to preserve it
                for future generations while minimizing estate and gift taxes. We work closely with estate planning
                attorneys to implement comprehensive strategies including lifetime gifting, trust structures,
                generation-skipping transfers, and charitable giving vehicles that accomplish family legacy goals while
                optimizing tax efficiency.
              </p>

              <p>
                Retirement planning represents another core service area for South Tulsa clients. Whether you're a
                professional approaching retirement age, a business owner planning succession, or already retired and
                managing complex distribution strategies, we provide sophisticated guidance. Our retirement planning
                encompasses required minimum distributions, Social Security taxation strategies, Roth conversion
                analysis, tax-efficient withdrawal sequencing, Medicare premium management, and charitable distribution
                strategies that minimize taxes while supporting causes you care about.
              </p>

              <p>
                Real estate investment has proven popular among South Tulsa professionals and families. Many of our
                clients own rental properties, commercial real estate, or have participated in 1031 exchanges to defer
                capital gains. We specialize in real estate taxation including cost segregation studies, bonus
                depreciation strategies, passive activity loss optimization, Section 199A qualified business income
                deductions, and the documentation requirements that protect you in an IRS audit. Our former IRS
                perspective ensures your real estate tax positions are defensible.
              </p>

              <p>
                South Tulsa's retail and service business community also benefits from our comprehensive business
                accounting services. From the retail centers along Utica and Yale to professional service firms and
                established family businesses, we provide bookkeeping, payroll processing, financial statement
                preparation, tax planning, and strategic business advisory services. We understand the challenges of
                managing seasonal cash flow, inventory complexities, and the importance of accurate financial data for
                decision-making.
              </p>

              <p>
                For multi-generational South Tulsa families, we often serve as the family CPA across generations—
                helping parents with retirement and estate planning while assisting adult children with career
                transitions, home purchases, and starting their own families. This continuity allows us to provide
                comprehensive family financial guidance that considers the entire family's tax situation and financial
                goals.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Professional CPA Services for South Tulsa
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive tax and accounting services for South Tulsa families, medical professionals,
              and established businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => {
                const serviceImages: Record<string, string> = {
                  'tax-planning-preparation': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop',
                  'estate-trust-tax': 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&h=600&fit=crop',
                  'retirement-planning': 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=800&h=600&fit=crop',
                  'real-estate-tax': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
                  'business-tax-accounting': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
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
              Why South Tulsa Families Choose Klingeman CPAs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Medical Professional Expertise
                </h3>
                <p className="text-gray-700">
                  We specialize in serving South Tulsa's medical community with deep expertise in physician
                  taxation, practice management accounting, equipment depreciation, and the unique challenges
                  of transitioning from employment to practice ownership.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Estate & Retirement Planning
                </h3>
                <p className="text-gray-700">
                  South Tulsa families with accumulated wealth need sophisticated estate planning and retirement
                  strategies. We provide comprehensive guidance on wealth transfer, trust taxation, retirement
                  distributions, and legacy planning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Former IRS Manager Protection
                </h3>
                <p className="text-gray-700">
                  Our founder's background as an IRS manager provides unique insights into audit protection,
                  documentation requirements, and tax position defense—especially valuable for high-income
                  professionals and real estate investors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multi-Generational Service
                </h3>
                <p className="text-gray-700">
                  We serve many South Tulsa families across generations, providing continuity and comprehensive
                  family financial guidance that considers everyone's tax situation and coordinates strategies
                  for maximum benefit.
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
              Frequently Asked Questions About South Tulsa CPA Services
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
              <Link href="/cpa-cherry-street-tulsa" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Cherry Street
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
              <Link href="/cpa-owasso" className="text-blue-900 hover:text-blue-700 font-semibold underline">
                Owasso
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
              Contact Your South Tulsa CPA
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
                        <span className="text-sm text-gray-600">10-15 minutes from South Tulsa</span>
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

      {/* About South Tulsa Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              About South Tulsa
            </h2>
            <p className="text-lg mb-6 opacity-90">
              South Tulsa represents the established residential and professional heart of the Tulsa metropolitan
              area. Known for mature tree-lined neighborhoods, excellent schools, a thriving medical corridor, and
              upscale retail centers, South Tulsa is home to accomplished professionals, established families, and
              successful business owners who value quality and expertise.
            </p>
            <p className="text-base opacity-80">
              Whether you're a medical professional building your practice, an established family planning your
              legacy, a real estate investor growing your portfolio, or a business owner seeking comprehensive
              accounting services, Klingeman CPAs provides the sophisticated expertise South Tulsa clients expect.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with South Tulsa's Trusted CPA?"
        description="Schedule your free consultation today and discover how our expertise can benefit your financial future."
      />
    </>
  );
}
