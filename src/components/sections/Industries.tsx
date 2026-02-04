'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { HardHat, Utensils, Fuel, Heart, Briefcase, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Expanded industries for display with icons and images
const displayIndustries = [
  {
    icon: HardHat,
    title: 'Construction & Trades',
    slug: 'construction',
    image: '/industry_construction.jpg',
  },
  {
    icon: Utensils,
    title: 'Restaurants & Food Service',
    slug: 'restaurants',
    image: '/industry_healthcare.jpg',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    slug: 'professional-services',
    image: '/industry_professional.jpg',
  },
  {
    icon: Building,
    title: 'Real Estate & Property',
    slug: 'real-estate',
    image: '/industry_realestate.jpg',
  },
  {
    icon: Fuel,
    title: 'Oil & Gas',
    slug: 'oil-gas',
    image: '/industry_manufacturing.jpg',
  },
  {
    icon: Heart,
    title: 'Nonprofits',
    slug: 'nonprofits',
    image: '/industry_nonprofit.jpg',
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      const tiles = grid.querySelectorAll('.industry-tile');

      // Header animation
      gsap.fromTo(header,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Tiles animation
      tiles.forEach((tile, i) => {
        gsap.fromTo(tile,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: tile,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.08,
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative w-full bg-[#F4F1EC] py-[10vh] z-60"
    >
      <div className="px-[7vw]">
        {/* Header */}
        <div ref={headerRef} className="mb-[6vh]">
          <span className="section-label">Industries</span>
          <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.0] text-[#0B1E3C] mb-4">
            Who we serve
          </h2>
          <p className="text-[#6D727A] text-base max-w-[500px]">
            Deep expertise across the industries that drive Tulsa's economy.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayIndustries.map((industry, index) => (
            <Link
              key={index}
              href={`/industries/${industry.slug}`}
              className="industry-tile group bg-white border border-[rgba(11,30,60,0.10)] overflow-hidden cursor-pointer hover:transform hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#0B1E3C] flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-5 h-5 text-[#C8A46E]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C]">
                  {industry.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
