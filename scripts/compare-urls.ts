// URLs found on live site klingemancpas.com
const liveUrls = [
  '/',
  '/blog',
  '/blog/cpa-near-me-choose-accountant-tulsa',
  '/blog/guia-impuestos-pequenos-negocios-tulsa',
  '/blog/top-10-tax-deadlines-oklahoma',
  '/blog/tulsa-small-business-tax-checklist',
  '/contact',
  '/cpa-bartlesville',
  '/cpa-bixby',
  '/cpa-broken-arrow',
  '/cpa-cherry-street-tulsa',
  '/cpa-claremore',
  '/cpa-collinsville',
  '/cpa-coweta',
  '/cpa-downtown-tulsa',
  '/cpa-jenks',
  '/cpa-midtown-tulsa',
  '/cpa-muskogee',
  '/cpa-okmulgee',
  '/cpa-owasso',
  '/cpa-sand-springs',
  '/cpa-sapulpa',
  '/cpa-south-tulsa',
  '/es',
  '/es/alivio-fiscal-irs-tulsa',
  '/es/consultoria-negocios-tulsa',
  '/es/contabilidad-empresarial-tulsa',
  '/es/planificacion-financiera-tulsa',
  '/es/preparacion-impuestos-tulsa',
  '/es/servicios-nomina-tulsa',
  '/industries/construction',
  '/industries/nonprofits',
  '/industries/oil-gas',
  '/industries/restaurants',
  '/privacy',
  '/services',
  '/services/audit-services',
  '/services/bookkeeping-services',
  '/services/business-entity-selection',
  '/services/business-tax-accounting',
  '/services/capital-raising-funding',
  '/services/estate-trust-tax',
  '/services/financial-statements',
  '/services/irs-audit-representation',
  '/services/payroll-services',
  '/services/quickbooks-cleanup',
  '/services/quickbooks-setup-training',
  '/services/real-estate-tax',
  '/services/retirement-planning',
  '/services/tax-planning-preparation',
  '/services/tax-write-offs-deductions',
  '/team',
  '/terms',
  '/tulsa-cpa',
];

// New site pages (from build output)
const newSitePages = [
  '/',
  '/blog',
  '/blog/cpa-near-me-choose-accountant-tulsa',
  '/blog/tulsa-small-business-tax-checklist',
  '/blog/top-10-tax-deadlines-oklahoma',
  '/blog/guia-impuestos-pequenos-negocios-tulsa',
  '/contact',
  '/es',
  '/es/preparacion-impuestos-tulsa',
  '/es/contabilidad-empresarial-tulsa',
  '/es/servicios-nomina-tulsa',
  '/es/consultoria-negocios-tulsa',
  '/es/alivio-fiscal-irs-tulsa',
  '/es/planificacion-financiera-tulsa',
  '/industries',
  '/industries/construction',
  '/industries/restaurants',
  '/industries/oil-gas',
  '/industries/real-estate',
  '/industries/professional-services',
  '/industries/nonprofits',
  '/privacy',
  '/services',
  '/services/business-tax-accounting',
  '/services/tax-planning-preparation',
  '/services/audit-services',
  '/services/irs-audit-representation',
  '/services/estate-trust-tax',
  '/services/business-entity-selection',
  '/services/capital-raising-funding',
  '/services/payroll-services',
  '/services/bookkeeping-services',
  '/services/financial-statements',
  '/services/retirement-planning',
  '/services/quickbooks-cleanup',
  '/services/quickbooks-setup-training',
  '/services/tax-write-offs-deductions',
  '/services/real-estate-tax',
  '/team',
  '/terms',
  '/tulsa-cpa',
  // Location pages
  '/cpa-broken-arrow',
  '/cpa-bixby',
  '/cpa-owasso',
  '/cpa-jenks',
  '/cpa-sand-springs',
  '/cpa-claremore',
  '/cpa-sapulpa',
  '/cpa-collinsville',
  '/cpa-coweta',
  '/cpa-muskogee',
  '/cpa-bartlesville',
  '/cpa-okmulgee',
  '/cpa-midtown-tulsa',
  '/cpa-downtown-tulsa',
  '/cpa-south-tulsa',
  '/cpa-cherry-street-tulsa',
];

console.log('Comparing live site URLs with new site...\n');

// Check which live URLs are missing from new site
const missingFromNew: string[] = [];
for (const url of liveUrls) {
  if (!newSitePages.includes(url)) {
    missingFromNew.push(url);
  }
}

// Check which new URLs don't exist on live site (new pages)
const newPages: string[] = [];
for (const url of newSitePages) {
  if (!liveUrls.includes(url)) {
    newPages.push(url);
  }
}

if (missingFromNew.length === 0) {
  console.log('✅ All live site URLs exist in new site!\n');
} else {
  console.log('❌ Missing from new site:');
  missingFromNew.forEach(url => console.log(`   ${url}`));
  console.log('');
}

if (newPages.length > 0) {
  console.log('📝 New pages (not on live site):');
  newPages.forEach(url => console.log(`   ${url}`));
  console.log('');
}

console.log(`Live site pages: ${liveUrls.length}`);
console.log(`New site pages: ${newSitePages.length}`);
