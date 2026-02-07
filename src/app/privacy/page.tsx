import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Shield, Lock, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Privacy Policy | Klingeman CPAs',
  description: 'Privacy policy for Klingeman CPAs. Learn how we protect your personal and financial information in accordance with professional accounting standards.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl">
          <span className="section-label">Privacy Protection</span>
          <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#6D727A] text-lg leading-relaxed max-w-2xl">
            Your privacy and confidentiality are our highest priorities. Learn how we protect
            and safeguard your personal and financial information.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <Shield className="w-4 h-4 text-[#C8A46E]" />
              <span>Confidential & Secure</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <Lock className="w-4 h-4 text-[#C8A46E]" />
              <span>AICPA Standards</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <FileText className="w-4 h-4 text-[#C8A46E]" />
              <span>Professional Protection</span>
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
                  Introduction
                </h2>
                <p className="text-[#6D727A] leading-relaxed">
                  At Klingeman CPAs, we understand that your privacy is paramount. This Privacy Policy explains how we collect,
                  use, protect, and disclose your personal information when you visit our website or use our services. As a
                  professional accounting firm, we are committed to maintaining the highest standards of confidentiality and
                  data protection in accordance with professional accounting ethics and applicable laws.
                </p>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#0B1E3C] mb-2">Personal Information</h3>
                    <p className="text-[#6D727A] mb-2">We may collect the following personal information:</p>
                    <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
                      <li>Name, address, phone number, and email address</li>
                      <li>Social Security Number and Tax Identification Numbers</li>
                      <li>Financial information including income, expenses, and asset details</li>
                      <li>Banking and investment account information</li>
                      <li>Business information and records</li>
                      <li>Employment and payroll information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-[#0B1E3C] mb-2">Website Usage Information</h3>
                    <p className="text-[#6D727A] mb-2">When you visit our website, we automatically collect:</p>
                    <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
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
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-[#6D727A] mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-[#6D727A] space-y-2">
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
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Information Security
                </h2>
                <p className="text-[#6D727A] mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#F4F1EC] p-4">
                    <h4 className="font-medium text-[#0B1E3C] mb-2">Physical Security</h4>
                    <ul className="text-sm text-[#6D727A] space-y-1">
                      <li>Secure office facilities</li>
                      <li>Locked filing systems</li>
                      <li>Restricted access controls</li>
                    </ul>
                  </div>
                  <div className="bg-[#F4F1EC] p-4">
                    <h4 className="font-medium text-[#0B1E3C] mb-2">Digital Security</h4>
                    <ul className="text-sm text-[#6D727A] space-y-1">
                      <li>Encryption of sensitive data</li>
                      <li>Secure data transmission</li>
                      <li>Regular security updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-[#6D727A] mb-4">
                  We maintain strict confidentiality and will only share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-[#6D727A] space-y-2">
                  <li><strong className="text-[#0B1E3C]">With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  <li><strong className="text-[#0B1E3C]">Legal Requirements:</strong> When required by law, regulation, or court order</li>
                  <li><strong className="text-[#0B1E3C]">Professional Services:</strong> With trusted third-party service providers under confidentiality agreements</li>
                  <li><strong className="text-[#0B1E3C]">Government Agencies:</strong> For tax filings and regulatory compliance</li>
                  <li><strong className="text-[#0B1E3C]">Emergency Situations:</strong> To protect your vital interests or those of others</li>
                </ul>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-[#6D727A] mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-[#6D727A] space-y-1">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request deletion of personal information (subject to legal requirements)</li>
                  <li>File a complaint regarding privacy practices</li>
                </ul>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Data Retention
                </h2>
                <p className="text-[#6D727A]">
                  We retain your information for as long as necessary to provide services and comply with legal
                  obligations. Tax records and related documents are typically retained for seven years or as
                  required by applicable law.
                </p>
              </div>

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Contact Information
                </h2>
                <p className="text-[#6D727A] mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
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

              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-[#6D727A]">
                  We may update this Privacy Policy periodically to reflect changes in our practices or applicable law.
                  We will notify you of material changes by posting the updated policy on our website and updating
                  the "Last Updated" date. Your continued use of our services constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
