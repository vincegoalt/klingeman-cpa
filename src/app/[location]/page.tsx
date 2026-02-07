import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SUBURBS, SERVICES, BUSINESS_INFO, FOUNDER_INFO, TRUST_BADGES } from '@/lib/constants';
import { Phone, MapPin, Clock, ChevronRight, Check, Shield } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schemas';

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateStaticParams() {
  return SUBURBS.map((suburb) => ({
    location: suburb.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const suburb = SUBURBS.find(s => s.slug === location);

  if (!suburb) {
    return {
      title: 'Page Not Found',
    };
  }

  const title = `CPA Services ${suburb.name} | Klingeman CPAs`;
  const description = `Professional CPA services for ${suburb.name} businesses and residents. Tax preparation, bookkeeping, payroll, and IRS representation from former IRS management. ${suburb.distance}.`;

  return {
    title,
    description,
    alternates: { canonical: `/${location}` },
    openGraph: {
      title,
      description,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const suburb = SUBURBS.find(s => s.slug === location);

  if (!suburb) {
    notFound();
  }

  const topServices = SERVICES.slice(0, 6);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: `CPA ${suburb.name}`, url: `/${location}` },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">CPA {suburb.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <span className="section-label">Serving {suburb.name}</span>
            <h1 className="text-[clamp(32px,4vw,56px)] leading-[1.0] text-[#0B1E3C] mb-6">
              CPA Services for {suburb.name} Businesses & Residents
            </h1>
            <p className="text-[#6D727A] text-lg leading-relaxed mb-6">
              Klingeman CPAs provides comprehensive tax and accounting services to {suburb.name} businesses and individuals.
              Located just {suburb.distance.toLowerCase()}, our team of experienced CPAs—including former IRS management—delivers
              the expertise you need for tax planning, preparation, and representation.
            </p>
            {suburb.population && (
              <p className="text-[#6D727A] text-base mb-6">
                Serving the {suburb.name} community (population: {suburb.population}) with personalized CPA services
                tailored to local businesses and residents.
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Schedule a Consultation
              </a>
              <Link
                href="/services"
                className="btn-outline inline-flex items-center gap-2"
              >
                View All Services
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-[#0B1E3C] p-8">
              <h3 className="text-white font-['Cormorant_Garamond'] text-2xl mb-6">
                Contact Our {suburb.name} Team
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C8A46E]" />
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#C8A46E]">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white">{BUSINESS_INFO.address.full}</p>
                    <p className="text-white/60 text-sm">{suburb.distance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#C8A46E]" />
                  <p className="text-white/80 text-sm">Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                </div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-[7vw] py-8 bg-white">
        <div className="flex flex-wrap justify-center gap-4">
          {TRUST_BADGES.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2"
            >
              <Shield className="w-4 h-4 text-[#C8A46E]" />
              <span className="text-sm text-[#0B1E3C]">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services for Location */}
      <section className="px-[7vw] py-12">
        <span className="section-label">Services</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-4">
          CPA Services Available in {suburb.name}
        </h2>
        <p className="text-[#6D727A] text-base mb-8 max-w-2xl">
          Our full range of tax and accounting services is available to {suburb.name} clients,
          with convenient access from your location.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group bg-white p-6 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all"
            >
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] group-hover:text-[#C8A46E] mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6D727A] text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="text-[#C8A46E] font-medium hover:underline">
            View all {SERVICES.length} services →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-[7vw] py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="section-label">Why Choose Us</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-6">
            Why {suburb.name} Businesses Choose Klingeman CPAs
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-[#0B1E3C]">Former IRS Management Expertise</h3>
                <p className="text-[#6D727A] text-sm">{FOUNDER_INFO.experience}—giving you an insider's perspective on tax compliance and audit defense.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-[#0B1E3C]">Convenient Location</h3>
                <p className="text-[#6D727A] text-sm">Our Tulsa office is {suburb.distance.toLowerCase()}, making in-person consultations easy when you need them.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-[#0B1E3C]">225+ Years Combined Experience</h3>
                <p className="text-[#6D727A] text-sm">Our team brings deep expertise across tax, accounting, payroll, and business advisory services.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#C8A46E] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-[#0B1E3C]">100% IRS Audit Success Rate</h3>
                <p className="text-[#6D727A] text-sm">Our insider knowledge means we know how to protect your interests when the IRS comes calling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Ready to Get Started in {suburb.name}?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule a free consultation with our team to discuss your tax and accounting needs.
            We're just {suburb.distance.toLowerCase()}.
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
