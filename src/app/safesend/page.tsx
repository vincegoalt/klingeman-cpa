import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schemas';
import {
  ShieldCheck,
  Mail,
  KeyRound,
  FileSignature,
  Download,
  Lock,
  Smartphone,
  PenTool,
  Clock,
  FolderOpen,
  Users,
  ChevronRight,
  Phone,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SafeSend Returns - Secure Tax Return Delivery',
  description:
    'Receive your tax returns securely with SafeSend Returns. No passwords, no printing — review, e-sign, and download from any device.',
  alternates: { canonical: '/safesend' },
};

const steps = [
  {
    icon: Mail,
    title: 'Receive Your Link',
    description:
      'When your return is ready, you\'ll receive an email from SafeSend with a secure link to access your documents.',
  },
  {
    icon: KeyRound,
    title: 'Verify Your Identity',
    description:
      'Enter the last four digits of your Social Security number and answer a few identity verification questions.',
  },
  {
    icon: FileSignature,
    title: 'Review & E-Sign',
    description:
      'Review your tax return and electronically sign your e-file authorization forms (Form 8879) — no printing or mailing required.',
  },
  {
    icon: Download,
    title: 'Download Your Return',
    description:
      'Download a complete copy of your tax return for your records. You\'ll also receive payment reminders if applicable.',
  },
];

const benefits = [
  'Bank-level encryption protects your documents',
  'No accounts or passwords to remember',
  'Works on any device — computer, tablet, or phone',
  'E-sign Form 8879 digitally from home',
  'Timely email reminders for tax payments',
  'Download and save copies of your return',
  'Businesses can distribute K-1s electronically',
  'Multi-factor identity verification',
  'No sensitive documents sent as email attachments',
];

const faqs = [
  {
    question: 'What is SafeSend Returns?',
    answer:
      'SafeSend Returns is a secure, electronic tax return delivery system. Instead of picking up paper copies or receiving documents through less secure methods, you\'ll get your completed tax return delivered directly to you via a secure link.',
  },
  {
    question: 'Is SafeSend secure?',
    answer:
      'Yes. SafeSend uses bank-level encryption and multi-factor identity verification to protect your documents. Your sensitive tax information is never sent as an email attachment.',
  },
  {
    question: 'Do I need to create an account or remember a password?',
    answer:
      'No. SafeSend verifies your identity using the last four digits of your Social Security number and a verification code sent to your email or phone. There\'s no account to set up or password to remember.',
  },
  {
    question: 'What is Form 8879?',
    answer:
      'Form 8879 is the IRS e-file authorization form. It authorizes us to electronically file your tax return on your behalf. With SafeSend, you can sign this form digitally instead of printing, signing, and mailing it back.',
  },
  {
    question: 'Can I access my return on my phone?',
    answer:
      'Yes. SafeSend works on computers, tablets, and smartphones. You can review and sign your tax return from any device with a web browser.',
  },
  {
    question: 'What if I have trouble accessing my return?',
    answer:
      'Contact our office and we\'ll help you through the process. You can reach us by phone or email and we\'ll make sure you can access your documents.',
  },
];

export default function SafeSendPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'SafeSend Returns', url: '/safesend' },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">SafeSend Returns</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="w-16 h-16 bg-[#0B1E3C] flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#C8A46E]" />
            </div>
            <h1 className="text-[clamp(32px,4vw,56px)] leading-[1.0] text-[#0B1E3C] mb-6">
              SafeSend Returns
            </h1>
            <p className="text-[#6D727A] text-lg leading-relaxed mb-8">
              Your tax returns, delivered securely. We use SafeSend Returns to deliver
              your completed tax returns electronically. Review, e-sign, and download
              from any device — no passwords or paper required.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS_INFO.safeSendPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                Access SafeSend Portal
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-outline inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-[#0B1E3C] p-8">
              <h3 className="text-white font-['Cormorant_Garamond'] text-2xl mb-4">
                Quick Contact
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Need help accessing your tax return through SafeSend?
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full btn-primary flex items-center justify-center gap-2 mb-4"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
              <p className="text-white/50 text-xs text-center">
                Mon-Fri: {BUSINESS_INFO.hours.weekdays}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">How It Works</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Four Simple Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <span className="text-[#C8A46E] text-6xl font-['Cormorant_Garamond'] font-bold opacity-30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-3 -mt-4 mb-2">
                <step.icon className="w-5 h-5 text-[#C8A46E]" />
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C]">
                  {step.title}
                </h3>
              </div>
              <p className="text-[#6D727A] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-[7vw] py-12">
        <span className="section-label">Benefits</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Why SafeSend?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#C8A46E] flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#0B1E3C] text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">FAQ</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Common Questions
        </h2>
        <div className="max-w-3xl space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#F4F1EC] p-6">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3">
                {faq.question}
              </h3>
              <p className="text-[#6D727A] text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Need Help With SafeSend?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            If you have questions about accessing your tax return or using
            SafeSend, our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/#contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#0B1E3C]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
