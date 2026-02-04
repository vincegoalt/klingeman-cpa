import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, INDUSTRIES } from '@/lib/constants';

const footerLinks = {
  services: SERVICES.slice(0, 5).map(s => ({ label: s.title.split(' ')[0] + ' ' + (s.title.split(' ')[1] || ''), href: `/services/${s.slug}` })),
  industries: INDUSTRIES.map(i => ({ label: i.title, href: `/industries/${i.slug}` })),
  company: [
    { label: 'Our Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tulsa CPA', href: '/tulsa-cpa' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1E3C] border-t border-white/10 z-100">
      <div className="px-[7vw] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/KLINGEMANLOGO.png"
                alt={BUSINESS_INFO.name}
                width={320}
                height={90}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-[300px]">
              Tulsa's premier CPA firm led by former IRS management.
              Providing expert tax and accounting services with integrity
              and excellence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.social.linkedin}
                className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-[#C8A46E] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-[#C8A46E] transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-[#C8A46E] transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-text text-white/50 mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-[#C8A46E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="label-text text-white/50 mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-[#C8A46E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="label-text text-white/50 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-white/70 text-sm hover:text-[#C8A46E] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-[#C8A46E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
