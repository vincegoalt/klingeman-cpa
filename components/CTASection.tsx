import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

interface CTASectionProps {
  title?: string;
  description?: string;
  showPhone?: boolean;
  showForm?: boolean;
  bgColor?: 'blue' | 'gray' | 'white';
}

export default function CTASection({
  title = 'Ready to Get Started?',
  description = 'Schedule your free consultation with our experienced CPAs today.',
  showPhone = true,
  showForm = true,
  bgColor = 'blue'
}: CTASectionProps) {
  const bgClasses = {
    blue: 'bg-blue-900 text-white',
    gray: 'bg-gray-100 text-gray-900',
    white: 'bg-white text-gray-900'
  };

  return (
    <section className={`py-16 ${bgClasses[bgColor]}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {showPhone && (
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </a>
          )}
          
          {showForm && (
            <Link
              href="/contact"
              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-600 transition inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </Link>
          )}
        </div>

        <p className="mt-6 text-sm opacity-75">
          Former IRS Management • 20+ Years Experience • Serving All of Tulsa Metro
        </p>
      </div>
    </section>
  );
}