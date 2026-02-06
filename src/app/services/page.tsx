import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import {
  ArrowRight,
  Phone,
  Calculator,
  FileText,
  Search,
  Shield,
  Building2,
  Briefcase,
  DollarSign,
  CreditCard,
  BookOpen,
  BarChart3,
  PiggyBank,
  Wrench,
  GraduationCap,
  Receipt,
  Home,
  LucideIcon
} from 'lucide-react';

// Map service slugs to Lucide icons
const serviceIcons: Record<string, LucideIcon> = {
  'business-tax-accounting': Calculator,
  'tax-planning-preparation': FileText,
  'audit-services': Search,
  'irs-audit-representation': Shield,
  'estate-trust-tax': Building2,
  'business-entity-selection': Briefcase,
  'capital-raising-funding': DollarSign,
  'payroll-services': CreditCard,
  'bookkeeping-services': BookOpen,
  'financial-statements': BarChart3,
  'retirement-planning': PiggyBank,
  'quickbooks-cleanup': Wrench,
  'quickbooks-setup-training': GraduationCap,
  'tax-write-offs-deductions': Receipt,
  'real-estate-tax': Home,
};

export const metadata: Metadata = {
  title: 'CPA Services Tulsa | Tax, Accounting & Business Services',
  description: 'Comprehensive CPA services in Tulsa, OK. Tax planning, bookkeeping, payroll, IRS representation, and more. Former IRS management expertise.',
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero Section */}
      <section className="px-[7vw] py-16">
        <span className="section-label">Our Services</span>
        <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6 max-w-3xl">
          Comprehensive CPA Services for Tulsa Businesses
        </h1>
        <p className="text-[#6D727A] text-lg leading-relaxed mb-8 max-w-2xl">
          From tax strategy to daily bookkeeping, we provide the expertise you need
          to keep your finances accurate, compliant, and optimized for growth.
        </p>
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="btn-primary inline-flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Schedule a Consultation
        </a>
      </section>

      {/* Services Grid */}
      <section className="px-[7vw] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = serviceIcons[service.slug] || FileText;
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white p-8 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#0B1E3C] flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#C8A46E]" />
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-3 group-hover:text-[#C8A46E] transition-colors">
                  {service.title}
                </h2>
                <p className="text-[#6D727A] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#C8A46E] font-medium text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule a free consultation and we'll help you identify the best solutions
            for your unique situation.
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
              href="#contact"
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
