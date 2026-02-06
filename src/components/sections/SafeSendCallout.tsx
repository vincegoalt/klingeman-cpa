'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Lock, PenTool, Smartphone, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Lock,
    title: 'Bank-Level Encryption',
    description: 'Your returns are delivered with the same security used by financial institutions.',
  },
  {
    icon: PenTool,
    title: 'E-Sign From Home',
    description: 'Sign your e-file authorization forms digitally — no printing or mailing.',
  },
  {
    icon: Smartphone,
    title: 'Any Device',
    description: 'Review and sign your returns from your computer, tablet, or phone.',
  },
];

export default function SafeSendCallout() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 lg:py-24 bg-white z-30"
    >
      <div ref={contentRef} className="px-[7vw]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[6vw] items-center">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <span className="section-label">SafeSend Returns</span>
            <h2 className="text-[clamp(28px,3.2vw,48px)] leading-[1.0] text-[#0B1E3C] mb-4">
              Your returns, delivered securely
            </h2>
            <p className="text-[#6D727A] text-base leading-relaxed mb-6">
              We use SafeSend Returns to deliver your completed tax returns
              electronically. No passwords to remember, no paper to handle —
              just a secure link to review, sign, and download.
            </p>
            <Link
              href="/safesend"
              className="btn-outline inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4 bg-[#F4F1EC] p-5">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0B1E3C] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#C8A46E]" />
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#0B1E3C] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#6D727A] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
