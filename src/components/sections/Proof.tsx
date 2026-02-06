'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Users, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Proof() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const stats = statsRef.current;
    const bg = bgRef.current;
    const counter = counterRef.current;

    if (!section || !headline || !stats || !bg || !counter) return;

    const ctx = gsap.context(() => {
      const statCards = stats.querySelectorAll('.stat-card');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // Phase 1 (0-30%): Entrance
      scrollTl.fromTo(headline,
        { x: '-45vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      statCards.forEach((card, i) => {
        scrollTl.fromTo(card,
          { x: '50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.08 + i * 0.08
        );
      });

      // Counter animation
      scrollTl.fromTo(counter,
        { textContent: '0' },
        {
          textContent: '3',
          duration: 0.3,
          ease: 'none',
          snap: { textContent: 1 },
        },
        0.15
      );

      // Phase 3 (70-100%): Exit
      scrollTl.fromTo(headline,
        { x: 0, opacity: 1 },
        { x: '-26vw', opacity: 0, ease: 'power2.in' },
        0.70
      );

      statCards.forEach((card, i) => {
        scrollTl.fromTo(card,
          { x: 0, opacity: 1 },
          { x: '26vw', opacity: 0, ease: 'power2.in' },
          0.72 + i * 0.04
        );
      });

      scrollTl.fromTo(bg,
        { scale: 1 },
        { scale: 1.06, ease: 'none' },
        0.70
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen overflow-hidden z-50"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/team_meeting.jpg"
          alt="Team meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full flex flex-col lg:flex-row lg:items-center px-4 py-20 lg:py-0 lg:px-0">
        {/* Left Headline */}
        <div
          ref={headlineRef}
          className="lg:absolute lg:left-[7vw] lg:top-[16vh] w-full lg:w-[38vw] lg:max-w-[480px] mb-8 lg:mb-0"
        >
          <span className="section-label text-white">Results</span>
          <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.0] text-white mb-4 lg:mb-6">
            Real outcomes. Real relationships.
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-6 lg:mb-8">
            We measure success by the time we save you, the risk we reduce,
            and the growth we help enable.
          </p>
          <Link
            href="/team"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Meet the team
          </Link>
        </div>

        {/* Right Stats */}
        <div
          ref={statsRef}
          className="lg:absolute lg:left-[56vw] lg:top-[16vh] w-full lg:w-[36vw] lg:max-w-[450px] flex flex-col gap-4 lg:gap-6"
        >
          {/* Big Stat Card */}
          <div className="stat-card bg-white lg:bg-[rgba(244,241,236,0.96)] p-6 lg:p-8">
            <div className="flex items-baseline gap-1 mb-2 lg:mb-3">
              <span
                ref={counterRef}
                className="text-[clamp(48px,6vw,84px)] font-['Cormorant_Garamond'] font-bold text-[#0B1E3C] leading-none"
              >
                3
              </span>
              <span className="text-[clamp(28px,4vw,56px)] font-['Cormorant_Garamond'] font-bold text-[#C8A46E] leading-none">
                B+
              </span>
            </div>
            <p className="text-[#6D727A] text-sm">
              Client assets under advisory
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="stat-card bg-white lg:bg-[rgba(244,241,236,0.96)] p-6 lg:p-8">
            <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-[#C8A46E] mb-3 lg:mb-4" />
            <blockquote className="text-[#0B1E3C] text-base lg:text-lg leading-relaxed mb-4 lg:mb-6 font-['Cormorant_Garamond'] italic">
              "They don't just file returns—they help us make better business decisions."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0B1E3C] flex items-center justify-center">
                <span className="text-white text-sm font-medium">AR</span>
              </div>
              <div>
                <p className="text-[#0B1E3C] text-sm font-medium">A. Reynolds</p>
                <p className="text-[#6D727A] text-xs">CEO, Reynolds Supply Co.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
