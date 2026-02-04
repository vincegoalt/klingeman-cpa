'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const bg = bgRef.current;
    const scrollCue = scrollCueRef.current;

    if (!section || !panel || !headline || !subhead || !cta || !bg || !scrollCue) return;

    const ctx = gsap.context(() => {
      // Load animation (auto-play on mount)
      const loadTl = gsap.timeline();

      loadTl
        .fromTo(bg,
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo(panel,
          { x: '-6vw', opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.8'
        )
        .fromTo(headline,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(subhead,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(cta,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(scrollCue,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );

      // Scroll-driven animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=70%',
          pin: true,
          scrub: 0.3,
          onLeaveBack: () => {
            gsap.set([panel, headline, subhead, cta], { opacity: 1, x: 0, y: 0 });
            gsap.set(bg, { scale: 1, y: 0 });
          }
        }
      });

      // Phase 1 (0-30%): Hold visible with subtle background scale
      scrollTl.fromTo(bg,
        { scale: 1 },
        { scale: 1.02, ease: 'none' },
        0
      );

      // Phase 3 (70-100%): Exit
      scrollTl.fromTo(panel,
        { x: 0, opacity: 1 },
        { x: '-55vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(bg,
        { scale: 1.02, y: 0 },
        { scale: 1.08, y: '-6vh', ease: 'none' },
        0.70
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-10"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero_office.jpg"
          alt="Modern office lounge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* Content Panel */}
      <div
        ref={panelRef}
        className="absolute left-[7vw] top-[28vh] w-[44vw] max-w-[600px] bg-[rgba(244,241,236,0.95)] p-8 lg:p-10"
        style={{ opacity: 0 }}
      >
        <span className="section-label">{FOUNDER_INFO.experience}</span>

        <h1
          ref={headlineRef}
          className="text-[clamp(36px,4.5vw,64px)] leading-[0.95] text-[#0B1E3C] mb-6"
          style={{ opacity: 0 }}
        >
          Clarity in every number.
        </h1>

        <p
          ref={subheadRef}
          className="text-[#6D727A] text-base lg:text-lg leading-relaxed mb-8"
          style={{ opacity: 0 }}
        >
          Tulsa-based CPAs specializing in tax strategy, compliance, and advisory
          for business owners and professionals. Led by former IRS management with
          225+ years of combined experience.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ opacity: 0 }}>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="btn-primary flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS_INFO.phone}
          </a>
          <a
            href="#services"
            className="btn-outline flex items-center gap-2"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Cue */}
      <div
        ref={scrollCueRef}
        className="absolute right-[6vw] bottom-[6vh] flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <div className="w-8 h-[1px] bg-[#C8A46E]" />
        <span className="label-text text-[#0B1E3C]">Scroll</span>
      </div>
    </section>
  );
}
