import { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata as generateSEO } from '@/components/SEO';
import { TEAM_MEMBERS } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Our Team | Expert CPAs & Tax Professionals in Tulsa',
  description: 'Meet our experienced team of CPAs, tax professionals, and accountants. Led by Matt Klingeman, former IRS manager with over 20 years of CPA experience.',
  canonical: '/team'
});

// Badge color mapping for different credential types
const getBadgeColor = (credential: string): string => {
  if (credential.includes('Attorney') || credential.includes('JD')) {
    return 'bg-blue-100 text-blue-800 border-blue-200';
  }
  if (credential.includes('Fraud')) {
    return 'bg-red-100 text-red-800 border-red-200';
  }
  if (credential.includes('IRS')) {
    return 'bg-green-100 text-green-800 border-green-200';
  }
  if (credential.includes('Super Lawyer')) {
    return 'bg-purple-100 text-purple-800 border-purple-200';
  }
  return 'bg-gray-100 text-gray-800 border-gray-200';
};

export default function TeamPage() {
  // Separate featured members (first 4 with special credentials) from others
  const featuredMembers = TEAM_MEMBERS.filter(m => m.featured);
  const otherMembers = TEAM_MEMBERS.filter(m => !m.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Experienced CPAs and tax professionals dedicated to your financial success
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Overview Section */}
            <div className="mb-16 text-center">
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Firm</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Klingeman CPAs is a full-service Certified Public Accounting (CPA) firm located in Tulsa, Oklahoma.
                  We specialize in small to large business tax planning, tax preparation, and financial planning.
                  Our mission is to deliver exceptional service and contribute positively to your bottom-line results.
                </p>

                {/* Highlight special team capabilities */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span className="font-semibold text-blue-800">Attorney on Staff</span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-semibold text-red-800">Certified Fraud Examiner</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold text-green-800">Former IRS Managers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Team Members - Founder First */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[500px] lg:h-[600px]">
                    {featuredMembers[0].image && (
                      <Image
                        src={featuredMembers[0].image}
                        alt={featuredMembers[0].name}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {featuredMembers[0].name}
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {featuredMembers[0].title}
                    </p>

                    {/* Credential Badges */}
                    {featuredMembers[0].credentials && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredMembers[0].credentials.map((cred, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium border ${getBadgeColor(cred)}`}
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {featuredMembers[0].bio}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="mailto:contact@klingemancpas.com"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Email Matt Klingeman"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">Email</span>
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn profile for Matt Klingeman"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Featured Members (Lawyer, Fraud Examiner, IRS Veteran) */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Specialists</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredMembers.slice(1).map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-gray-700"
                  >
                    {/* Initials Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4 text-center">
                      {member.title}
                    </p>

                    {/* Credential Badges */}
                    {member.credentials && (
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {member.credentials.map((cred, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium border ${getBadgeColor(cred)}`}
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {member.bio.length > 200 ? member.bio.substring(0, 200) + '...' : member.bio}
                    </p>
                    <div className="flex gap-4 justify-center pt-4 border-t border-gray-200">
                      <a
                        href="mailto:contact@klingemancpas.com"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium">Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Team Members */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">
                      {member.title}
                    </p>

                    {/* Credential Badges */}
                    {member.credentials && member.credentials.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.credentials.map((cred, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium border ${getBadgeColor(cred)}`}
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex gap-4 pt-4 border-t border-gray-200">
                      <a
                        href="mailto:contact@klingemancpas.com"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium">Email</span>
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={`LinkedIn profile for ${member.name}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Schedule your free consultation today and discover how our experienced professionals can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9189221019"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (918) 922-1019
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2 border-2 border-gray-300"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
