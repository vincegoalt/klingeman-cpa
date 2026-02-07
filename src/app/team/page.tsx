import { Metadata } from 'next';
import Link from 'next/link';
import { TEAM_MEMBERS, BUSINESS_INFO, FOUNDER_INFO, TRUST_BADGES } from '@/lib/constants';
import { Phone, Award, Shield, GraduationCap } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Our Team | Meet the CPAs at Klingeman CPAs',
  description: 'Meet the experienced team at Klingeman CPAs in Tulsa. Former IRS management, CPAs, and accounting professionals with 225+ years combined experience.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  const featuredMembers = TEAM_MEMBERS.filter(m => m.featured);
  const otherMembers = TEAM_MEMBERS.filter(m => !m.featured);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Team', url: '/team' },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero Section */}
      <section className="px-[7vw] py-16">
        <span className="section-label">Our Team</span>
        <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6 max-w-3xl">
          Meet the Experts Behind Klingeman CPAs
        </h1>
        <p className="text-[#6D727A] text-lg leading-relaxed mb-8 max-w-2xl">
          Our team combines former IRS leadership with decades of public accounting experience.
          When you work with us, you get direct access to seasoned professionals who understand
          both sides of tax compliance.
        </p>
      </section>

      {/* Trust Badges */}
      <section className="px-[7vw] pb-12">
        <div className="flex flex-wrap gap-4">
          {TRUST_BADGES.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white px-4 py-2 border border-[rgba(11,30,60,0.10)]"
            >
              <Shield className="w-4 h-4 text-[#C8A46E]" />
              <span className="text-sm text-[#0B1E3C]">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Team Members */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">Leadership</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Senior Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredMembers.map((member, index) => (
            <div key={index} className="bg-[#F4F1EC] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#C8A46E] border border-transparent">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  {member.image ? (
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 flex-shrink-0 bg-[#0B1E3C] flex items-center justify-center">
                      <span className="text-white text-2xl font-['Cormorant_Garamond'] font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#C8A46E] font-medium mb-3">{member.title}</p>
                    {member.credentials && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.credentials.map((cred, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs bg-[#0B1E3C]/10 px-2 py-1"
                          >
                            <Award className="w-3 h-3 text-[#C8A46E]" />
                            {cred}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-[#6D727A] text-sm leading-relaxed mt-4">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Team Members */}
      {otherMembers.length > 0 && (
        <section className="px-[7vw] py-12">
          <span className="section-label">Team</span>
          <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
            Our Full Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#C8A46E] border border-transparent">
                <div className="w-16 h-16 bg-[#0B1E3C] flex items-center justify-center mb-4">
                  <span className="text-white text-lg font-['Cormorant_Garamond'] font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C8A46E] text-sm font-medium mb-3">{member.title}</p>
                <p className="text-[#6D727A] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Work With Us */}
      <section className="px-[7vw] py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label">Why Us</span>
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-[#0B1E3C] mb-6">
            What Sets Our Team Apart
          </h2>
          <p className="text-[#6D727A] text-lg leading-relaxed mb-12">
            Our unique combination of IRS experience and public accounting expertise
            means we can anticipate problems before they occur and navigate complex
            situations with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <Shield className="w-12 h-12 text-[#C8A46E] mx-auto mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-2">
                IRS Insider Knowledge
              </h3>
              <p className="text-[#6D727A] text-sm">
                Former IRS management knows exactly how the agency operates and what triggers audits.
              </p>
            </div>
            <div className="p-6">
              <GraduationCap className="w-12 h-12 text-[#C8A46E] mx-auto mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-2">
                Advanced Education
              </h3>
              <p className="text-[#6D727A] text-sm">
                Master's degrees in taxation and decades of continuing education keep us current.
              </p>
            </div>
            <div className="p-6">
              <Award className="w-12 h-12 text-[#C8A46E] mx-auto mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-2">
                Proven Results
              </h3>
              <p className="text-[#6D727A] text-sm">
                100% success rate on IRS audits and negotiations with millions saved for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule a free consultation to discuss your tax and accounting needs
            with one of our experienced professionals.
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
