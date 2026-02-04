'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#F4F1EC] shadow-sm">
        <div className="px-4 lg:px-[4vw] py-2 lg:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/KLINGEMANLOGO.png"
              alt="Klingeman CPAs"
              width={360}
              height={100}
              className="h-14 md:h-20 lg:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              link.href.startsWith('#') ? (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#0B1E3C] transition-colors hover:text-[#C8A46E]"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-[#0B1E3C] transition-colors hover:text-[#C8A46E]"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-[#C8A46E] text-[#C8A46E] hover:bg-[#C8A46E] hover:text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B1E3C]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0B1E3C] z-[99] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            link.href.startsWith('#') ? (
              <button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="text-white text-2xl font-['Cormorant_Garamond'] hover:text-[#C8A46E] transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-2xl font-['Cormorant_Garamond'] hover:text-[#C8A46E] transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="mt-8 btn-primary flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </>
  );
}
