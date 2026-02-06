'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Calculator, TrendingUp, FileCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

// Map top 3 services to display with icons
const displayServices = [
  {
    icon: Calculator,
    title: 'Tax Strategy & Compliance',
    description: 'Proactive planning and precise filing to minimize liability and risk.',
    slug: 'tax-planning-preparation',
  },
  {
    icon: TrendingUp,
    title: 'Bookkeeping & CFO Advisory',
    description: 'Monthly close, dashboards, and guidance that improves decisions.',
    slug: 'bookkeeping-services',
  },
  {
    icon: FileCheck,
    title: 'Transaction & Exit Support',
    description: 'Due diligence, structuring, and succession planning that protects value.',
    slug: 'capital-raising-funding',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !cards || !bg) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.service-card');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=70%',
          pin: true,
          scrub: 0.3,
        }
      });

      // Phase 1 (0-30%): Entrance
      scrollTl.fromTo(bg,
        { scale: 1.08, opacity: 0.6 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headline,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      cardElements.forEach((card, i) => {
        scrollTl.fromTo(card,
          { x: '50vw', opacity: 0, rotateZ: 2 },
          { x: 0, opacity: 1, rotateZ: 0, ease: 'power2.out' },
          0.05 + i * 0.05
        );
      });

      // Phase 3 (70-100%): Exit
      scrollTl.fromTo(headline,
        { x: 0, opacity: 1 },
        { x: '-30vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      cardElements.forEach((card, i) => {
        scrollTl.fromTo(card,
          { x: 0, opacity: 1 },
          { x: '30vw', opacity: 0, ease: 'power2.in' },
          0.72 + i * 0.03
        );
      });

      scrollTl.fromTo(bg,
        { scale: 1, y: 0 },
        { scale: 1.06, y: '-4vh', ease: 'none' },
        0.70
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full min-h-screen lg:h-screen overflow-hidden z-20"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/services_desk.jpg"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full flex flex-col lg:flex-row lg:items-center px-4 py-24 lg:py-0 lg:px-0">
        {/* Left Headline */}
        <div
          ref={headlineRef}
          className="lg:absolute lg:left-[7vw] lg:top-[18vh] w-full lg:w-[34vw] lg:max-w-[450px] mb-8 lg:mb-0"
        >
          <span className="section-label text-white">Services</span>
          <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.0] text-white mb-4 lg:mb-6">
            Built for business owners.
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-4 lg:mb-6">
            From day-to-day accounting to complex transactions, we keep your
            finances accurate, compliant, and optimized.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#C8A46E] font-medium hover:underline"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Cards */}
        <div
          ref={cardsRef}
          className="lg:absolute lg:left-[54vw] lg:top-[18vh] w-full lg:w-[38vw] lg:max-w-[500px] flex flex-col gap-4 lg:gap-[2.2vh]"
        >
          {displayServices.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="service-card bg-white p-4 md:p-6 flex items-start gap-4 hover:transform hover:-translate-y-1 transition-transform duration-300 shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#0B1E3C] flex items-center justify-center">
                <service.icon className="w-4 h-4 md:w-5 md:h-5 text-[#C8A46E]" />
              </div>
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-lg md:text-xl font-semibold text-[#0B1E3C] mb-1 md:mb-2">
                  {service.title}
                </h3>
                <p className="text-[#6D727A] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
