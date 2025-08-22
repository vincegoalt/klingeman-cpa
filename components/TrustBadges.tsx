import { TRUST_BADGES } from '@/lib/constants';

interface TrustBadgesProps {
  showAll?: boolean;
  className?: string;
}

export default function TrustBadges({ showAll = false, className = '' }: TrustBadgesProps) {
  const badges = showAll ? TRUST_BADGES : TRUST_BADGES.slice(0, 3);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
        >
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold text-gray-800">{badge}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TrustBadgesCompact() {
  return (
    <div className="bg-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-bold text-gray-800">Former IRS Manager</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold text-gray-800">20+ Years CPA Experience</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="font-bold text-gray-800">Master's in Business Taxation</span>
          </div>
        </div>
      </div>
    </div>
  );
}