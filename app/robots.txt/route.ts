export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.klingemancpas.com';
  
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay (optional - be respectful to search engines)
Crawl-delay: 1

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow all pages for SEO
Allow: /services/
Allow: /industries/
Allow: /blog/
Allow: /es/
Allow: /cpa-*
Allow: /contact
Allow: /tulsa-cpa`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}