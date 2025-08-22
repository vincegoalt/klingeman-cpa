import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Terms of Service',
  description: 'Terms of service for Klingeman CPAs. Understanding our professional service agreement, client responsibilities, and terms for CPA services in Tulsa.',
  canonical: '/terms'
});

export default function TermsPage() {
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
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
              PROFESSIONAL TERMS
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Terms of
              <span className="block text-yellow-400">Service</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Professional service agreement outlining the terms and conditions for our 
              comprehensive CPA and accounting services.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Professional Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Client Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Clear Expectations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl p-8 mb-8">
              <p className="text-gray-600 mb-8 text-center italic">
                Effective Date: January 1, 2024 | Last Updated: January 1, 2024
              </p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By engaging Klingeman CPAs for professional accounting services, visiting our website, or using any of our 
                    services, you agree to be bound by these Terms of Service. These terms constitute a binding agreement 
                    between you ("Client" or "you") and Klingeman CPAs ("we," "us," or "our").
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you do not agree with these terms, please do not use our services or website. We reserve the right 
                    to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Description</h2>
                  <p className="text-gray-700 mb-4">Klingeman CPAs provides professional accounting services including:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Tax Services</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>Individual tax preparation</li>
                        <li>Business tax returns</li>
                        <li>Tax planning and strategy</li>
                        <li>IRS audit representation</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Business Services</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>Bookkeeping and accounting</li>
                        <li>Financial statement preparation</li>
                        <li>Business consulting</li>
                        <li>Payroll services</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Specific services will be outlined in individual engagement letters or service agreements. 
                    The scope of work may vary based on your specific needs and our professional recommendations.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                  <p className="text-gray-700 mb-4">As our client, you agree to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide complete, accurate, and timely information necessary for service delivery</li>
                    <li>Maintain organized records and documentation as requested</li>
                    <li>Respond promptly to requests for information or clarification</li>
                    <li>Pay fees and expenses according to agreed terms</li>
                    <li>Inform us of any changes that may affect our services</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Review all work product carefully and notify us of any questions or concerns</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Standards</h2>
                  <p className="text-gray-700 mb-4">
                    We adhere to the highest professional standards and are bound by:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">AICPA Standards</h4>
                      <p className="text-sm text-gray-600">Professional ethics and conduct</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a1 1 0 100-2 2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v11z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">State Regulations</h4>
                      <p className="text-sm text-gray-600">Oklahoma licensing requirements</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">Confidentiality</h4>
                      <p className="text-sm text-gray-600">Strict privacy protection</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Fees and Payment Terms</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fee Structure</h3>
                      <p className="text-gray-700 mb-2">Our fees are based on:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Complexity and scope of services required</li>
                        <li>Time and resources necessary to complete the work</li>
                        <li>Professional expertise and experience required</li>
                        <li>Specific fee arrangements outlined in engagement letters</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Terms</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Payment is due upon receipt of invoice unless otherwise agreed</li>
                        <li>Past due accounts may be subject to interest charges</li>
                        <li>We reserve the right to suspend services for non-payment</li>
                        <li>Client is responsible for collection costs and attorney fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800 font-medium">
                      Important: This section limits our liability for professional services.
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our liability for any claim arising from our professional services is limited to the fees paid 
                    for the specific service giving rise to the claim. We will not be liable for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Indirect, special, consequential, or punitive damages</li>
                    <li>Lost profits, revenue, or business opportunities</li>
                    <li>Damages arising from third-party claims</li>
                    <li>Actions taken based on information provided by the client</li>
                    <li>Changes in tax laws or regulations after service completion</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Disclaimer</h2>
                  <p className="text-gray-700 mb-4">
                    While we strive to provide accurate and reliable service, please understand:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Tax laws and regulations are complex and subject to change</li>
                    <li>Our advice is based on information available at the time of service</li>
                    <li>Results cannot be guaranteed, and outcomes may vary</li>
                    <li>You should seek legal counsel for legal matters beyond our scope</li>
                    <li>Investment advice is not provided unless specifically engaged</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
                  <p className="text-gray-700 mb-4">Either party may terminate services:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>With written notice as specified in the engagement letter</li>
                    <li>Immediately for non-payment or breach of agreement</li>
                    <li>Upon completion of agreed-upon services</li>
                    <li>For professional or ethical reasons as determined by us</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Upon termination, you remain responsible for fees incurred through the termination date, 
                    and we will provide your records upon payment of outstanding balances.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-gray-700">
                    These terms are governed by the laws of the State of Oklahoma. Any disputes will be resolved 
                    in the appropriate courts of Tulsa County, Oklahoma. If any provision is deemed unenforceable, 
                    the remainder of these terms will remain in full effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    Questions about these Terms of Service should be directed to:
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

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Professional Commitment</h3>
                  <p className="text-blue-800">
                    At Klingeman CPAs, we are committed to providing exceptional service while maintaining the highest 
                    professional and ethical standards. These terms ensure clear expectations and protect both our 
                    clients and our practice. We look forward to serving your accounting and tax needs.
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