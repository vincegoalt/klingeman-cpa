'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We learn your business, risks, and goals before we recommend a plan.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We implement clean books, smart structures, and a compliant tax strategy.',
  },
  {
    number: '03',
    title: 'Support',
    description: 'We stay close—monthly reviews, proactive alerts, and year-round answers.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !cards || !bg) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.process-card');

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
        { y: '-18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      cardElements.forEach((card, i) => {
        scrollTl.fromTo(card,
          { y: '40vh', opacity: 0, rotateZ: -1.5 },
          { y: 0, opacity: 1, rotateZ: 0, ease: 'power2.out' },
          0.05 + i * 0.06
        );
      });

      // Phase 3 (70-100%): Exit
      scrollTl.fromTo(headline,
        { y: 0, opacity: 1 },
        { y: '-12vh', opacity: 0, ease: 'power2.in' },
        0.70
      );

      cardElements.forEach((card, i) => {
        scrollTl.fromTo(card,
          { y: 0, opacity: 1 },
          { y: '22vh', opacity: 0, ease: 'power2.in' },
          0.72 + i * 0.03
        );
      });

      scrollTl.fromTo(bg,
        { scale: 1 },
        { scale: 1.07, ease: 'none' },
        0.70
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-40"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/process_corridor.jpg"
          alt="Modern office corridor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full">
        {/* Headline */}
        <div
          ref={headlineRef}
          className="absolute left-[7vw] top-[12vh] w-[40vw] max-w-[500px]"
        >
          <span className="section-label text-white">How We Work</span>
          <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.0] text-white">
            A process that protects your time.
          </h2>
        </div>

        {/* Step Cards */}
        <div
          ref={cardsRef}
          className="absolute left-[7vw] right-[7vw] bottom-[10vh] flex gap-[3vw]"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card flex-1 bg-[rgba(244,241,236,0.96)] p-8 min-h-[34vh] flex flex-col"
            >
              <span className="text-[#C8A46E] text-[clamp(48px,5vw,72px)] font-['Cormorant_Garamond'] font-bold leading-none mb-6">
                {step.number}
              </span>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0B1E3C] mb-4">
                {step.title}
              </h3>
              <p className="text-[#6D727A] text-sm leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
