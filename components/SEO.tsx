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
    '@type': ['AccountingService', 'LocalBusiness'],
    '@id': 'https://www.klingemancpas.com/#organization',
    name: BUSINESS_INFO.name,
    url: 'https://www.klingemancpas.com',
    logo: 'https://www.klingemancpas.com/logo.png',
    image: 'https://www.klingemancpas.com/office-photo.jpg',
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
    areaServed: [
      {'@type': 'City', 'name': 'Tulsa'},
      {'@type': 'City', 'name': 'Broken Arrow'},
      {'@type': 'City', 'name': 'Owasso'},
      {'@type': 'City', 'name': 'Bixby'},
      {'@type': 'City', 'name': 'Jenks'},
      {'@type': 'City', 'name': 'Sand Springs'}
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    makesOffer: [
      {'@type': 'Offer', 'itemOffered': {'@type': 'Service', 'name': 'Monthly Bookkeeping'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Service', 'name': 'QuickBooks Cleanup'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Service', 'name': 'QuickBooks Training'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Service', 'name': 'Tax Preparation'}},
      {'@type': 'Offer', 'itemOffered': {'@type': 'Service', 'name': 'IRS Audit Representation'}}
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CPA Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tax Preparation',
            description: 'Professional tax preparation for individuals and businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bookkeeping',
            description: 'Monthly bookkeeping and financial statement preparation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Payroll Services',
            description: 'Complete payroll processing and tax compliance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IRS Representation',
            description: 'Expert IRS audit defense and tax resolution'
          }
        }
      ]
    }
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
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
    areaServed: service.areaServed ? {
      '@type': 'City',
      name: service.areaServed
    } : [
      {'@type': 'City', 'name': 'Tulsa'},
      {'@type': 'City', 'name': 'Broken Arrow'},
      {'@type': 'City', 'name': 'Owasso'},
      {'@type': 'City', 'name': 'Bixby'}
    ],
    description: service.description,
    url: service.url,
    offers: {
      '@type': 'Offer',
      priceRange: '$$',
      availability: 'https://schema.org/InStock'
    }
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
      item: `https://www.klingemancpas.com${item.url}`
    }))
  };
}