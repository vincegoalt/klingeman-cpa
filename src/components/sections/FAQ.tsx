'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { generateFAQSchema } from '@/lib/schemas';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Do you work with individuals or only businesses?',
    answer: 'We serve both business owners and individuals. Many of our clients are business owners who need personal tax planning alongside their business services. We also work with professionals, real estate investors, and retirees who need specialized tax guidance.',
  },
  {
    question: 'How do you price your services?',
    answer: 'Our pricing is transparent and based on the scope of work, not hidden hourly rates. After an initial consultation, we provide a fixed fee quote so you know exactly what to expect. We offer monthly retainer packages for ongoing services and project-based pricing for one-time needs.',
  },
  {
    question: 'What accounting software do you support?',
    answer: 'We work with all major accounting platforms including QuickBooks Online, Xero, Sage, and NetSuite. Our team can help you choose the right software for your business and provide training and ongoing support to ensure you get the most out of your system.',
  },
  {
    question: 'Can you help with IRS notices or audits?',
    answer: 'Absolutely. With former IRS management on our team, we have insider knowledge of the audit process. We handle IRS correspondence, represent you during audits, and negotiate settlements when needed. Our 100% audit success rate speaks to our expertise in this area.',
  },
  {
    question: 'How soon can we get started?',
    answer: 'We can typically schedule an initial consultation within one week. During that meeting, we will learn about your situation and outline a plan. For urgent matters like IRS deadlines or audit responses, we prioritize immediate support.',
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      const items = right.querySelectorAll('.faq-item');

      // Left column animation
      gsap.fromTo(left,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: left,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // FAQ items animation
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.06,
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F4F1EC] py-[10vh] z-80"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="px-[7vw]">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Sticky */}
          <div
            ref={leftRef}
            className="lg:w-[34vw] lg:sticky lg:top-[10vh] lg:self-start"
          >
            <span className="section-label">FAQ</span>
            <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.0] text-[#0B1E3C] mb-4">
              What to expect when you work with us.
            </h2>
            <p className="text-[#6D727A] text-base leading-relaxed mb-8">
              Transparency is part of the plan. Here are answers to the questions we hear most.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Ask a question
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div ref={rightRef} className="lg:w-[52vw]">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item border-b border-[rgba(11,30,60,0.18)]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <span className="text-[#0B1E3C] font-medium pr-4 group-hover:text-[#C8A46E] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-[#C8A46E] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[#6D727A] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
