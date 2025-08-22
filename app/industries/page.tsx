import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateOrganizationSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { INDUSTRIES, BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Industry-Specific CPA Services Tulsa | Restaurant, Construction, Oil & Gas',
  description: 'Specialized CPA services for Tulsa industries including restaurants, construction, oil & gas, and nonprofits. Expert accounting solutions tailored to your industry needs.',
  canonical: '/industries'
});

export default function IndustriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' }
  ]);

  const organizationSchema = generateOrganizationSchema();

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
              Industry-Specific CPA Services in Tulsa
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Every industry has unique financial challenges. Our specialized CPA services are tailored 
              to the specific needs of your business sector, ensuring compliance and maximizing profitability.
            </p>
            
            <div className="inline-flex items-center gap-4 text-sm bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Industry Expertise</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Former IRS Experience</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Tailored Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Specialized CPA Services by Industry
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We understand that each industry has unique accounting requirements, tax considerations, 
              and compliance challenges. Our expertise ensures you get industry-specific solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-8 group"
                >
                  <div className="text-5xl mb-6 text-center">
                    {industry.slug === 'restaurants' && '🍽️'}
                    {industry.slug === 'construction' && '🏗️'}
                    {industry.slug === 'oil-gas' && '⚡'}
                    {industry.slug === 'nonprofits' && '🤝'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition text-center">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">{industry.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {industry.slug === 'restaurants' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>POS System Integration</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Tip Reporting Compliance</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Food Cost Management</span>
                        </div>
                      </>
                    )}
                    
                    {industry.slug === 'construction' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Job Costing & Project Tracking</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>WIP Reporting</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Bonding Assistance</span>
                        </div>
                      </>
                    )}
                    
                    {industry.slug === 'oil-gas' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Depletion Calculations</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Joint Venture Accounting</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Severance Tax Compliance</span>
                        </div>
                      </>
                    )}
                    
                    {industry.slug === 'nonprofits' && (
                      <>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Form 990 Preparation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Grant Compliance</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Fund Accounting</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-center text-blue-700 font-semibold">
                    Learn More About {industry.title}
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
              Why Industry Expertise Matters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Specialized Knowledge
                </h3>
                <p className="text-gray-700">
                  Each industry has unique accounting standards, tax requirements, and best practices. 
                  Our specialized knowledge ensures you're compliant while maximizing opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-700">
                  Stay ahead of industry-specific regulations and reporting requirements with experts 
                  who understand your sector's compliance landscape.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Maximized Deductions
                </h3>
                <p className="text-gray-700">
                  Industry-specific tax strategies and deductions can significantly reduce your tax burden. 
                  We identify opportunities others might miss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Benchmarking & Insights
                </h3>
                <p className="text-gray-700">
                  Compare your performance against industry standards and get insights that help you 
                  improve operations and profitability.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Get Industry-Specific CPA Services Today
              </h3>
              <p className="text-lg mb-6">
                Don't trust your specialized industry needs to generalists. Work with CPAs who understand your business.
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
                  Schedule Industry Consultation
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
              Serving All Industries Throughout Tulsa
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              While we specialize in these key industries, our comprehensive CPA services support 
              businesses across all sectors in Tulsa and the surrounding metro area.
            </p>
            <Link
              href="/services"
              className="text-blue-700 font-semibold hover:underline"
            >
              View all our CPA services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}