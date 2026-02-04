import { MetadataRoute } from 'next';
import { SERVICES, INDUSTRIES, SUBURBS } from '@/lib/constants';

// Blog posts
const blogSlugs = [
  'cpa-near-me-choose-accountant-tulsa',
  'tulsa-small-business-tax-checklist',
  'top-10-tax-deadlines-oklahoma',
  'guia-impuestos-pequenos-negocios-tulsa',
];

// Spanish service pages
const spanishServiceSlugs = [
  'preparacion-impuestos-tulsa',
  'contabilidad-empresarial-tulsa',
  'servicios-nomina-tulsa',
  'consultoria-negocios-tulsa',
  'alivio-fiscal-irs-tulsa',
  'planificacion-financiera-tulsa',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.klingemancpas.com';

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/tulsa-cpa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/es`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  // Service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Industry pages
  const industryPages = INDUSTRIES.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location pages (suburbs)
  const locationPages = SUBURBS.map((suburb) => ({
    url: `${baseUrl}/${suburb.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Spanish service pages
  const spanishServicePages = spanishServiceSlugs.map((slug) => ({
    url: `${baseUrl}/es/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...locationPages, ...blogPages, ...spanishServicePages];
}
