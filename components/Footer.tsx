import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO, SERVICES, SUBURBS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-[#101828] text-gray-300">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/KLINGEMANLOGO.png"
                  alt="Klingeman CPAs & Advisors"
                  width={320}
                  height={96}
                  className="h-24 w-auto brightness-0 invert"
                />
              </div>
              
              <p className="text-sm mb-6 leading-relaxed">
                Tulsa's premier CPA firm led by former IRS management. 
                Providing expert tax and accounting services with integrity and excellence since establishment.
              </p>
              
              {/* Professional Association Badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-semibold text-gray-300">Licensed CPAs</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-semibold text-gray-300">BBB A+ Rated</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-300">OK Bar Association</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-300">ACFE Member</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                Services
              </h3>
              <ul className="space-y-3">
                {SERVICES.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors font-semibold flex items-center gap-2 group">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    View All Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                Service Areas
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/tulsa-cpa" className="hover:text-blue-400 transition-colors font-semibold flex items-center gap-2 group">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Tulsa CPA
                  </Link>
                </li>
                {SUBURBS.map((suburb) => (
                  <li key={suburb.slug}>
                    <Link
                      href={`/${suburb.slug}`}
                      className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {suburb.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                Get In Touch
              </h3>
              
              <div className="space-y-4 mb-6">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-[#101828] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {BUSINESS_INFO.phone}
                    </div>
                    <div className="text-xs">Call for Free Consultation</div>
                  </div>
                </a>
                
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-[#101828] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors break-all">
                      {BUSINESS_INFO.email}
                    </div>
                    <div className="text-xs">Email Us Anytime</div>
                  </div>
                </a>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#101828] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <address className="not-italic">
                    <div className="text-white font-semibold">{BUSINESS_INFO.address.street}</div>
                    <div className="text-xs">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
                    </div>
                  </address>
                </div>
              </div>
              
              <div className="bg-[#101828] rounded-lg p-4 border border-gray-800">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Mon-Fri:</span>
                    <span className="text-white">{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white">{BUSINESS_INFO.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white">{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            {/* Call Us Today CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                Call Us Today!
              </h3>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-4xl font-bold text-white hover:text-blue-100 transition-colors inline-flex items-center gap-3"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS_INFO.phone}
              </a>
              <p className="text-white/90 mt-2 text-lg">Free Consultation • Former IRS Management</p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6">
                Schedule your free consultation today and discover how we can help you save on taxes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Klingeman CPAs. All Rights Reserved.
            </p>
            <p className="mt-2 text-gray-500">
              Professional CPA Services in Tulsa, Oklahoma | Former IRS Management Experience | Master's in Business Taxation
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-500">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <span>•</span>
              <Link href="/es" className="hover:text-blue-400 transition-colors">
                Español
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}