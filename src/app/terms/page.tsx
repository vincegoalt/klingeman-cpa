import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText, Shield, Users } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Terms of Service | Klingeman CPAs',
  description: 'Terms of service for Klingeman CPAs. Understanding our professional service agreement, client responsibilities, and terms for CPA services in Tulsa.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">Terms of Service</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl">
          <span className="section-label">Professional Terms</span>
          <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6">
            Terms of Service
          </h1>
          <p className="text-[#6D727A] text-lg leading-relaxed max-w-2xl">
            Professional service agreement outlining the terms and conditions for our
            comprehensive CPA and accounting services.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <FileText className="w-4 h-4 text-[#C8A46E]" />
              <span>Professional Standards</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <Shield className="w-4 h-4 text-[#C8A46E]" />
              <span>Client Protection</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <Users className="w-4 h-4 text-[#C8A46E]" />
              <span>Clear Expectations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 border border-[rgba(11,30,60,0.10)]">
            <p className="text-[#6D727A] text-center mb-8 italic">
              Effective Date: January 1, 2024 | Last Updated: January 1, 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-[#6D727A] leading-relaxed mb-4">
                  By engaging Klingeman CPAs for professional accounting services, visiting our website, or using any of our
                  services, you agree to be bound by these Terms of Service. These terms constitute a binding agreement
                  between you ("Client" or "you") and Klingeman CPAs ("we," "us," or "our").
                </p>
                <p className="text-[#6D727A] leading-relaxed">
                  If you do not agree with these terms, please do not use our services or website. We reserve the right
                  to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Services Description
                </h2>
                <p className="text-[#6D727A] mb-4">Klingeman CPAs provides professional accounting services including:</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#F4F1EC] p-4">
                    <h4 className="font-medium text-[#0B1E3C] mb-2">Tax Services</h4>
                    <ul className="text-sm text-[#6D727A] space-y-1">
                      <li>Individual tax preparation</li>
                      <li>Business tax returns</li>
                      <li>Tax planning and strategy</li>
                      <li>IRS audit representation</li>
                    </ul>
                  </div>
                  <div className="bg-[#F4F1EC] p-4">
                    <h4 className="font-medium text-[#0B1E3C] mb-2">Business Services</h4>
                    <ul className="text-sm text-[#6D727A] space-y-1">
                      <li>Bookkeeping and accounting</li>
                      <li>Financial statement preparation</li>
                      <li>Business consulting</li>
                      <li>Payroll services</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#6D727A]">
                  Specific services will be outlined in individual engagement letters or service agreements.
                  The scope of work may vary based on your specific needs and our professional recommendations.
                </p>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Client Responsibilities
                </h2>
                <p className="text-[#6D727A] mb-4">As our client, you agree to:</p>
                <ul className="list-disc pl-6 text-[#6D727A] space-y-2">
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
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Professional Standards
                </h2>
                <p className="text-[#6D727A] mb-4">
                  We adhere to the highest professional standards and are bound by:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#F4F1EC]">
                    <div className="w-12 h-12 bg-[#C8A46E]/20 flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-[#C8A46E]" />
                    </div>
                    <h4 className="font-medium text-[#0B1E3C]">AICPA Standards</h4>
                    <p className="text-sm text-[#6D727A]">Professional ethics and conduct</p>
                  </div>
                  <div className="text-center p-4 bg-[#F4F1EC]">
                    <div className="w-12 h-12 bg-[#C8A46E]/20 flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-[#C8A46E]" />
                    </div>
                    <h4 className="font-medium text-[#0B1E3C]">State Regulations</h4>
                    <p className="text-sm text-[#6D727A]">Oklahoma licensing requirements</p>
                  </div>
                  <div className="text-center p-4 bg-[#F4F1EC]">
                    <div className="w-12 h-12 bg-[#C8A46E]/20 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-[#C8A46E]" />
                    </div>
                    <h4 className="font-medium text-[#0B1E3C]">Confidentiality</h4>
                    <p className="text-sm text-[#6D727A]">Strict privacy protection</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Fees and Payment Terms
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#0B1E3C] mb-2">Fee Structure</h3>
                    <p className="text-[#6D727A] mb-2">Our fees are based on:</p>
                    <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
                      <li>Complexity and scope of services required</li>
                      <li>Time and resources necessary to complete the work</li>
                      <li>Professional expertise and experience required</li>
                      <li>Specific fee arrangements outlined in engagement letters</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-[#0B1E3C] mb-2">Payment Terms</h3>
                    <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
                      <li>Payment is due upon receipt of invoice unless otherwise agreed</li>
                      <li>Past due accounts may be subject to interest charges</li>
                      <li>We reserve the right to suspend services for non-payment</li>
                      <li>Client is responsible for collection costs and attorney fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Limitation of Liability
                </h2>
                <div className="bg-[#C8A46E]/10 border-l-4 border-[#C8A46E] p-4 mb-4">
                  <p className="text-[#0B1E3C] font-medium">
                    Important: This section limits our liability for professional services.
                  </p>
                </div>
                <p className="text-[#6D727A] mb-4">
                  Our liability for any claim arising from our professional services is limited to the fees paid
                  for the specific service giving rise to the claim. We will not be liable for:
                </p>
                <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
                  <li>Indirect, special, consequential, or punitive damages</li>
                  <li>Lost profits, revenue, or business opportunities</li>
                  <li>Damages arising from third-party claims</li>
                  <li>Actions taken based on information provided by the client</li>
                  <li>Changes in tax laws or regulations after service completion</li>
                </ul>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Termination
                </h2>
                <p className="text-[#6D727A] mb-4">Either party may terminate services:</p>
                <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
                  <li>With written notice as specified in the engagement letter</li>
                  <li>Immediately for non-payment or breach of agreement</li>
                  <li>Upon completion of agreed-upon services</li>
                  <li>For professional or ethical reasons as determined by us</li>
                </ul>
                <p className="text-[#6D727A] mt-4">
                  Upon termination, you remain responsible for fees incurred through the termination date,
                  and we will provide your records upon payment of outstanding balances.
                </p>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Governing Law
                </h2>
                <p className="text-[#6D727A]">
                  These terms are governed by the laws of the State of Oklahoma. Any disputes will be resolved
                  in the appropriate courts of Tulsa County, Oklahoma. If any provision is deemed unenforceable,
                  the remainder of these terms will remain in full effect.
                </p>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Contact Information
                </h2>
                <p className="text-[#6D727A] mb-4">
                  Questions about these Terms of Service should be directed to:
                </p>
                <div className="bg-[#F4F1EC] p-6">
                  <p className="font-medium text-[#0B1E3C]">Klingeman CPAs</p>
                  <p className="text-[#6D727A]">{BUSINESS_INFO.address.street}</p>
                  <p className="text-[#6D727A]">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}</p>
                  <p className="text-[#6D727A]">
                    Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#C8A46E] hover:underline">{BUSINESS_INFO.phone}</a>
                  </p>
                  <p className="text-[#6D727A]">
                    Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#C8A46E] hover:underline">{BUSINESS_INFO.email}</a>
                  </p>
                </div>
              </div>

              <div className="bg-[#0B1E3C] p-6">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-white mb-2">Professional Commitment</h3>
                <p className="text-white/80">
                  At Klingeman CPAs, we are committed to providing exceptional service while maintaining the highest
                  professional and ethical standards. These terms ensure clear expectations and protect both our
                  clients and our practice. We look forward to serving your accounting and tax needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
