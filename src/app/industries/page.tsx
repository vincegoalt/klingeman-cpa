import { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES, BUSINESS_INFO } from '@/lib/constants';
import { ArrowRight, Phone, HardHat, Utensils, Fuel, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Expertise | Specialized CPA Services by Sector',
  description: 'Specialized CPA services for restaurants, construction, oil & gas, and nonprofits in Tulsa. Industry-specific tax and accounting expertise.',
};

const industryIcons: Record<string, React.ElementType> = {
  'restaurants': Utensils,
  'construction': HardHat,
  'oil-gas': Fuel,
  'nonprofits': Heart,
};

const industryImages: Record<string, string> = {
  'restaurants': '/industry_restaurant.jpg',
  'construction': '/industry_construction.jpg',
  'oil-gas': '/industry_oilgas.jpg',
  'nonprofits': '/industry_nonprofit.jpg',
};

export default function IndustriesPage() {
  return (
    <div className="pt-24 bg-[#F4F1EC]">
      {/* Hero Section */}
      <section className="px-[7vw] py-16">
        <span className="section-label">Industry Expertise</span>
        <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6 max-w-3xl">
          Specialized CPA Services by Industry
        </h1>
        <p className="text-[#6D727A] text-lg leading-relaxed mb-8 max-w-2xl">
          Every industry has unique accounting challenges. We bring deep expertise
          in the sectors that drive Tulsa's economy.
        </p>
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="btn-primary inline-flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Discuss Your Industry
        </a>
      </section>

      {/* Industries Grid */}
      <section className="px-[7vw] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industryIcons[industry.slug] || HardHat;
            return (
              <Link
                key={index}
                href={`/industries/${industry.slug}`}
                className="group bg-white overflow-hidden border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#0B1E3C] flex items-center justify-center">
                  <Icon className="w-16 h-16 text-[#C8A46E] opacity-50" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0B1E3C] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C8A46E]" />
                    </div>
                    <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] group-hover:text-[#C8A46E] transition-colors">
                      {industry.title}
                    </h2>
                  </div>
                  <p className="text-[#6D727A] text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#C8A46E] font-medium text-sm">
                    Explore {industry.title} services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="px-[7vw] py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label">Why It Matters</span>
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-[#0B1E3C] mb-6">
            Industry Expertise Makes the Difference
          </h2>
          <p className="text-[#6D727A] text-lg leading-relaxed mb-12">
            Generic accounting advice costs you money. Our industry-specific knowledge
            means we understand your challenges, speak your language, and know exactly
            where to find tax savings and efficiency improvements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#C8A46E]">225+</span>
              <p className="text-[#0B1E3C] font-medium mt-2">Years Combined Experience</p>
            </div>
            <div>
              <span className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#C8A46E]">$3B+</span>
              <p className="text-[#0B1E3C] font-medium mt-2">Client Assets Managed</p>
            </div>
            <div>
              <span className="text-5xl font-['Cormorant_Garamond'] font-bold text-[#C8A46E]">100%</span>
              <p className="text-[#0B1E3C] font-medium mt-2">IRS Audit Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Don't see your industry?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            We work with businesses across many sectors. Contact us to discuss
            your specific needs and how we can help.
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
