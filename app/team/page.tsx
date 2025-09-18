import { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata as generateSEO } from '@/components/SEO';

export const metadata: Metadata = generateSEO({
  title: 'Our Team | Expert CPAs & Tax Professionals in Tulsa',
  description: 'Meet our experienced team of CPAs, tax professionals, and accountants. Led by Matt Klingeman, former IRS manager with over 20 years of CPA experience.',
  canonical: '/team'
});

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Matt Klingeman',
    title: 'Founder and CPA',
    bio: 'Matt holds a Master\'s in Business Taxation and is a former IRS manager with over 20 years of experience as a practicing CPA. His leadership and expertise guide our firm\'s day-to-day operations, with a primary focus on consulting and taxes.',
    image: '/matt-klingeman.png'
  },
  {
    name: 'Mitch Ross',
    title: 'CPA',
    bio: 'Mitch brings extensive experience in tax preparation and business consulting to our team, helping clients navigate complex financial challenges.'
  },
  {
    name: 'Jeanette Ross',
    title: 'EA, CFE',
    bio: 'As an Enrolled Agent and Certified Fraud Examiner, Jeanette specializes in tax representation and fraud prevention for our clients.'
  },
  {
    name: 'Patti Hall',
    title: 'CPA',
    bio: 'Patti received her BBA, majoring in accounting, from the University of Tulsa. She is a CPA and worked for the IRS for 35 years. Her experience at the IRS included responsibility for small businesses, complex individual returns, large complex partnerships, and multi-national corporations.'
  },
  {
    name: 'Ronald J. Saffa',
    title: 'JD, CPA',
    bio: 'Ron has been a Certified Public Accountant since 1974. He received his Bachelor of Science and Master of Science in Accounting from Oklahoma State University. After his certification, he worked for 9 years for the Internal Revenue Service. In 1981, he received his Juris Doctor of Law from the University of Tulsa. In 1982, he was admitted to the Oklahoma Bar Association. In 1983, he was also admitted to the U.S. District Court, Northern and Eastern Districts of Oklahoma, the U.S. Court of Appeals, Tenth and Federal Circuits, the U.S. Tax Court and the U.S. Court of Federal Claims. Ronald was then admitted to the Supreme Court in 1985. In 2011, he was named one of the Super Lawyers of Oklahoma. His expertise lies in the areas of Federal Taxation and State Taxation.'
  },
  {
    name: 'Taylor Telford',
    title: 'Accountant and Management for Rodney Carrington',
    bio: 'Taylor graduated with a Bachelor of Science Degree in Justice Administration and a minor in Psychology from Rogers State University in 2016. Taylor recently expanded her knowledge to include accounting, bookkeeping and payroll services.'
  },
  {
    name: 'Mitch Levinson',
    title: 'Accountant',
    bio: 'Mitch graduated with a Bachelor of Economics from the University of Oklahoma in 2016. He provides bookkeeping, payroll and accounts payable services to clients and small businesses. In his spare time, Mitch enjoys supporting the OKC Thunder and OU Sooners.'
  },
  {
    name: 'Brin Bedwell',
    title: 'Accountant',
    bio: 'Brin graduated from Oklahoma State University with a Bachelor of Science in Accounting in 2025. He is currently studying to obtain his CPA license.'
  }
];

export default function TeamPage() {
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
                <p className="text-lg text-gray-700 leading-relaxed">
                  Klingeman CPAs is a full-service Certified Public Accounting (CPA) firm located in Tulsa, Oklahoma. 
                  We specialize in small to large business tax planning, tax preparation, and financial planning. 
                  Our mission is to deliver exceptional service and contribute positively to your bottom-line results.
                </p>
              </div>
            </div>

            {/* Founder - Featured */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[500px] lg:h-[600px]">
                    {teamMembers[0].image && (
                      <Image
                        src={teamMembers[0].image}
                        alt={teamMembers[0].name}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {teamMembers[0].name}
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {teamMembers[0].title}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {teamMembers[0].bio}
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

            {/* Other Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.slice(1).map((member, index) => (
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