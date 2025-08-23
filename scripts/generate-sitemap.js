const fs = require('fs');
const path = require('path');

// Define all the static routes
const staticRoutes = [
  '',
  '/services',
  '/industries',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/tulsa-cpa',
  '/cpa-broken-arrow',
  '/cpa-bixby',
  '/cpa-jenks',
  '/cpa-owasso',
  '/cpa-sand-springs'
];

// Define service routes
const serviceRoutes = [
  '/services/tax-preparation-tulsa',
  '/services/bookkeeping-tulsa',
  '/services/payroll-tulsa',
  '/services/business-consulting-tulsa',
  '/services/irs-tax-relief-tulsa'
];

// Define industry routes
const industryRoutes = [
  '/industries/restaurants',
  '/industries/construction',
  '/industries/oil-gas',
  '/industries/nonprofits'
];

// Define blog routes
const blogRoutes = [
  '/blog/cpa-near-me-choose-accountant-tulsa',
  '/blog/tulsa-small-business-tax-checklist',
  '/blog/top-10-tax-deadlines-oklahoma',
  '/blog/guia-impuestos-pequenos-negocios-tulsa'
];

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...industryRoutes,
  ...blogRoutes
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://klingemancpa.com';
  const today = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allRoutes.map(route => {
  const url = route === '' ? baseUrl : `${baseUrl}${route}`;
  const priority = route === '' ? '1.0' : 
                   route.includes('/services/') || route.includes('/industries/') ? '0.9' :
                   route === '/services' || route === '/industries' ? '0.8' :
                   route.includes('/blog/') ? '0.7' :
                   route.includes('/cpa-') || route === '/tulsa-cpa' ? '0.8' :
                   '0.6';
  const changefreq = route === '' ? 'weekly' :
                     route.includes('/blog/') ? 'monthly' :
                     route === '/contact' ? 'yearly' :
                     'monthly';
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(publicPath, sitemap, 'utf8');
console.log('✅ Sitemap generated successfully at public/sitemap.xml');

// Also generate a sitemap index for better organization
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://klingemancpa.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

const indexPath = path.join(__dirname, '..', 'public', 'sitemap-index.xml');
fs.writeFileSync(indexPath, sitemapIndex, 'utf8');
console.log('✅ Sitemap index generated successfully at public/sitemap-index.xml');