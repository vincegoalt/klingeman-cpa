'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Check, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Multi-entity and cross-state filings',
  'Quarterly estimates and cash-flow planning',
  'IRS correspondence and resolution support',
];

export default function SignatureService() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const panel = panelRef.current;
    const content = contentRef.current;

    if (!section || !image || !panel || !content) return;

    const ctx = gsap.context(() => {
      const textElements = content.querySelectorAll('.animate-text');

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
      scrollTl.fromTo(image,
        { x: '-70vw', scale: 1.10, opacity: 0.7 },
        { x: 0, scale: 1, opacity: 1, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(panel,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.05
      );

      textElements.forEach((el, i) => {
        scrollTl.fromTo(el,
          { y: '8vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1 + i * 0.04
        );
      });

      // Phase 3 (70-100%): Exit
      scrollTl.fromTo(image,
        { x: 0, scale: 1, opacity: 1 },
        { x: '-18vw', scale: 1.06, opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(panel,
        { x: 0, opacity: 1 },
        { x: '22vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen overflow-hidden z-30"
    >
      {/* Left Image */}
      <div
        ref={imageRef}
        className="relative lg:absolute lg:left-0 lg:top-0 w-full lg:w-[62vw] h-[50vh] lg:h-full"
      >
        <img
          src="/matt-klingeman.png"
          alt="Matt Klingeman, CPA - Founder of Klingeman CPAs"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F4F1EC]/20" />
      </div>

      {/* Right Panel */}
      <div
        ref={panelRef}
        className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-[38vw] lg:h-full bg-[#F4F1EC] flex items-center"
      >
        <div
          ref={contentRef}
          className="px-4 py-8 md:px-8 md:py-12 lg:px-[4vw] lg:py-[10vh]"
        >
          <span className="animate-text section-label">Tax & Advisory</span>

          <h2 className="animate-text text-[clamp(28px,3vw,44px)] leading-[1.05] text-[#0B1E3C] mb-4 lg:mb-6">
            A clearer path through complex returns.
          </h2>

          <p className="animate-text text-[#6D727A] text-base leading-relaxed mb-6 lg:mb-8">
            We combine technical precision with practical advice—so you file with
            confidence and keep more of what you earn.
          </p>

          <ul className="animate-text space-y-3 lg:space-y-4 mb-8 lg:mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-[#C8A46E] flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[#0B1E3C] text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="animate-text btn-primary inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
