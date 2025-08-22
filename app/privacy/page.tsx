import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Privacy policy for Klingeman CPAs. Learn how we protect your personal and financial information in accordance with professional accounting standards.',
  canonical: '/privacy'
});

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
              PRIVACY PROTECTION
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy
              <span className="block text-yellow-400">Policy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your privacy and confidentiality are our highest priorities. Learn how we protect 
              and safeguard your personal and financial information.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Confidential & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AICPA Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Professional Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
            <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
              <p className="text-gray-600 mb-8 text-center italic">
                Effective Date: January 1, 2024 | Last Updated: January 1, 2024
              </p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Klingeman CPAs, we understand that your privacy is paramount. This Privacy Policy explains how we collect, 
                    use, protect, and disclose your personal information when you visit our website or use our services. As a 
                    professional accounting firm, we are committed to maintaining the highest standards of confidentiality and 
                    data protection in accordance with professional accounting ethics and applicable laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                      <p className="text-gray-700 mb-2">We may collect the following personal information:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Name, address, phone number, and email address</li>
                        <li>Social Security Number and Tax Identification Numbers</li>
                        <li>Financial information including income, expenses, and asset details</li>
                        <li>Banking and investment account information</li>
                        <li>Business information and records</li>
                        <li>Employment and payroll information</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Usage Information</h3>
                      <p className="text-gray-700 mb-2">When you visit our website, we automatically collect:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring websites and search terms</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Providing tax preparation, accounting, and consulting services</li>
                    <li>Communicating with you about your account and services</li>
                    <li>Filing tax returns and other required documents with government agencies</li>
                    <li>Maintaining accurate financial records and documentation</li>
                    <li>Complying with legal and regulatory requirements</li>
                    <li>Improving our services and website functionality</li>
                    <li>Marketing our services (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement comprehensive security measures to protect your information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Physical Security</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>Secure office facilities</li>
                        <li>Locked filing systems</li>
                        <li>Restricted access controls</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Digital Security</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>Encryption of sensitive data</li>
                        <li>Secure data transmission</li>
                        <li>Regular security updates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 mb-4">
                    We maintain strict confidentiality and will only share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                    <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                    <li><strong>Professional Services:</strong> With trusted third-party service providers under confidentiality agreements</li>
                    <li><strong>Government Agencies:</strong> For tax filings and regulatory compliance</li>
                    <li><strong>Emergency Situations:</strong> To protect your vital interests or those of others</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies and similar technologies to enhance your experience and provide analytics. 
                    You can control cookie settings through your browser preferences. Disabling cookies may affect 
                    website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                  <p className="text-gray-700">
                    Our website may contain links to third-party websites. We are not responsible for the privacy 
                    practices of these external sites. We encourage you to review the privacy policies of any 
                    third-party websites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request deletion of personal information (subject to legal requirements)</li>
                    <li>File a complaint regarding privacy practices</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
                  <p className="text-gray-700">
                    We retain your information for as long as necessary to provide services and comply with legal 
                    obligations. Tax records and related documents are typically retained for seven years or as 
                    required by applicable law.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Klingeman CPAs</strong></p>
                      <p>{BUSINESS_INFO.address.street}</p>
                      <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}</p>
                      <p>Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-blue-600 hover:underline">{BUSINESS_INFO.phone}</a></p>
                      <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-blue-600 hover:underline">{BUSINESS_INFO.email}</a></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. 
                    We will notify you of material changes by posting the updated policy on our website and updating 
                    the "Last Updated" date. Your continued use of our services constitutes acceptance of the revised policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}