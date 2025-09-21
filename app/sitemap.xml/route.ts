import { SUBURBS } from '@/lib/constants';
import { serviceContent } from '@/lib/service-content';
import { industryContent } from '@/lib/industry-content';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.klingemancpas.com';
  
  const staticPages = [
    '',
    '/services',
    '/industries',
    '/contact',
    '/blog',
    '/tulsa-cpa',
    '/es',
    '/es/preparacion-impuestos-tulsa',
    '/es/contabilidad-empresarial-tulsa',
    '/es/servicios-nomina-tulsa',
    '/es/consultoria-negocios-tulsa',
    '/es/alivio-fiscal-irs-tulsa',
    '/es/planificacion-financiera-tulsa'
  ];

  const servicePages = Object.keys(serviceContent).map(slug => `/services/${slug}`);
  const industryPages = Object.keys(industryContent).map(slug => `/industries/${slug}`);
  const suburbPages = SUBURBS.map(suburb => `/${suburb.slug}`);
  
  const blogPosts = [
    '/blog/cpa-near-me-choose-accountant-tulsa',
    '/blog/tulsa-small-business-tax-checklist', 
    '/blog/top-10-tax-deadlines-oklahoma',
    '/blog/guia-impuestos-pequenos-negocios-tulsa'
  ];

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...suburbPages,
    ...blogPosts
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page.startsWith('/blog/') ? 'monthly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/blog/') ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}