import { Metadata } from 'next';
import { BUSINESS_INFO, FOUNDER_INFO } from '@/lib/constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: any;
  hreflang?: {
    en?: string;
    es?: string;
  };
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  hreflang
}: SEOProps): Metadata {
  const fullTitle = `${title} | Klingeman CPAs`;
  
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonical || '/',
      languages: hreflang
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Klingeman CPAs',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Klingeman CPAs - Tulsa CPA Firm'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': 'https://klingemancpa.com/#organization',
    name: BUSINESS_INFO.name,
    url: 'https://klingemancpa.com',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.stateAbbr,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1156,
      longitude: -95.9016
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    founder: {
      '@type': 'Person',
      name: FOUNDER_INFO.name,
      jobTitle: FOUNDER_INFO.title,
      description: FOUNDER_INFO.description,
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Business Taxation Program'
      }
    },
    sameAs: [
      BUSINESS_INFO.social.linkedin,
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.google
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Tulsa',
        containedInPlace: {
          '@type': 'State',
          name: 'Oklahoma'
        }
      },
      {
        '@type': 'City',
        name: 'Broken Arrow'
      },
      {
        '@type': 'City',
        name: 'Bixby'
      },
      {
        '@type': 'City',
        name: 'Owasso'
      },
      {
        '@type': 'City',
        name: 'Jenks'
      },
      {
        '@type': 'City',
        name: 'Sand Springs'
      }
    ]
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'AccountingService',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.stateAbbr,
        postalCode: BUSINESS_INFO.address.zip
      }
    },
    areaServed: {
      '@type': 'City',
      name: 'Tulsa'
    },
    description: service.description,
    url: service.url
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://klingemancpa.com${item.url}`
    }))
  };
}