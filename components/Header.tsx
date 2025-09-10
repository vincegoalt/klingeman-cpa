'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BUSINESS_INFO, SERVICES, INDUSTRIES } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Former IRS Management
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="hidden sm:inline">40+ Years Combined Experience</span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="font-bold hover:text-gray-300 transition flex items-center gap-2 mt-2 sm:mt-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/KLINGEMANLOGO.png"
                alt="Klingeman CPAs & Advisors"
                width={320}
                height={96}
                className="h-24 w-auto"
                priority
              />
            </Link>

            <button
              className="lg:hidden relative z-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>

            <ul className="hidden lg:flex items-center gap-1">
              <li>
                <Link href="/tulsa-cpa" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium">
                  Tulsa CPA
                </Link>
              </li>
              <li className="relative group">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-72 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                >
                  {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition"
                      >
                        {service.title}
                      </Link>
                    ))}
                </div>
              </li>
              <li className="relative group">
                <button
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  Industries
                  <svg className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                  className={`absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-64 transition-all duration-200 ${isIndustriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                >
                  {INDUSTRIES.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="block px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link href="/team" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium">
                  Contact
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md hover:shadow-lg font-semibold"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 lg:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex justify-between items-center text-white">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="overflow-y-auto h-full pb-20">
            <ul className="py-4">
              <li>
                <Link href="/" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tulsa-cpa" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Tulsa CPA
                </Link>
              </li>
              <li className="border-t border-gray-100">
                <div className="px-6 py-3 font-semibold text-gray-900">Services</div>
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-8 py-2 hover:bg-blue-50 hover:text-blue-600 transition text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </li>
              <li className="border-t border-gray-100">
                <div className="px-6 py-3 font-semibold text-gray-900">Industries</div>
                {INDUSTRIES.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="block px-8 py-2 hover:bg-blue-50 hover:text-blue-600 transition text-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.title}
                  </Link>
                ))}
              </li>
              <li className="border-t border-gray-100">
                <Link href="/team" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-6 py-3 hover:bg-blue-50 hover:text-blue-600 transition font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="p-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}