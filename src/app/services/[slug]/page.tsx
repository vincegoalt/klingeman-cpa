import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';
import { serviceContent } from '@/lib/service-content';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import {
  Phone,
  Check,
  ArrowRight,
  ChevronRight,
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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent[slug];
  const service = SERVICES.find(s => s.slug === slug);

  if (!content || !service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const content = serviceContent[slug];
  const service = SERVICES.find(s => s.slug === slug);

  if (!content || !service) {
    notFound();
  }

  const IconComponent = serviceIcons[slug] || FileText;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${slug}` },
  ]);

  const relatedServices = content.relatedServices
    .map(rs => SERVICES.find(s => s.slug === rs))
    .filter(Boolean);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <Link href="/services" className="text-[#6D727A] hover:text-[#C8A46E]">Services</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="w-16 h-16 bg-[#0B1E3C] flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-[#C8A46E]" />
            </div>
            <h1 className="text-[clamp(32px,4vw,56px)] leading-[1.0] text-[#0B1E3C] mb-6">
              {content.h1}
            </h1>
            <p className="text-[#6D727A] text-lg leading-relaxed mb-8">
              {content.heroDescription}
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Schedule a Consultation
            </a>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-[#0B1E3C] p-8">
              <h3 className="text-white font-['Cormorant_Garamond'] text-2xl mb-4">
                Quick Contact
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Ready to discuss your {service.title.toLowerCase()} needs?
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

      {/* Overview Section */}
      <section className="px-[7vw] py-12 bg-white">
        <div className="max-w-4xl">
          <span className="section-label">Overview</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-6">
            How We Can Help
          </h2>
          <p className="text-[#6D727A] text-lg leading-relaxed">
            {content.overview}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-[7vw] py-12">
        <span className="section-label">Benefits</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          What You Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#C8A46E] flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#0B1E3C] text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">Our Process</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          How We Work Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.process.map((step, index) => (
            <div key={index} className="relative">
              <span className="text-[#C8A46E] text-6xl font-['Cormorant_Garamond'] font-bold opacity-30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-2 -mt-4">
                {step.step}
              </h3>
              <p className="text-[#6D727A] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-[7vw] py-12">
        <span className="section-label">FAQ</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Common Questions
        </h2>
        <div className="max-w-3xl space-y-6">
          {content.faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6">
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="px-[7vw] py-12 bg-white">
          <span className="section-label">Related Services</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            You May Also Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rs, index) => {
              if (!rs) return null;
              const RelatedIcon = serviceIcons[rs.slug] || FileText;
              return (
                <Link
                  key={index}
                  href={`/services/${rs.slug}`}
                  className="group bg-[#F4F1EC] p-6 hover:bg-[#0B1E3C] transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-[#0B1E3C] group-hover:bg-[#C8A46E] flex items-center justify-center mb-3 transition-colors">
                    <RelatedIcon className="w-6 h-6 text-[#C8A46E] group-hover:text-[#0B1E3C] transition-colors" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] group-hover:text-white mb-2 transition-colors">
                    {rs.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[#C8A46E] font-medium text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contact us today for a free consultation about your {service.title.toLowerCase()} needs.
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
