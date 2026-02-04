import { test, expect } from '@playwright/test';

// All pages that must exist (from live site + new pages)
const allPages = [
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
  '/industries',
  '/industries/construction',
  '/industries/nonprofits',
  '/industries/oil-gas',
  '/industries/real-estate',
  '/industries/professional-services',
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

test.describe('All pages return 200', () => {
  for (const path of allPages) {
    test(`Page ${path} loads successfully`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe('Page content checks', () => {
  test('Homepage has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Klingeman/i);
  });

  test('Services page lists services', async ({ page }) => {
    await page.goto('/services');
    await expect(page.locator('h1')).toContainText(/services/i);
  });

  test('Contact page has phone number', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('body')).toContainText('918');
  });

  test('Spanish page has Spanish content', async ({ page }) => {
    await page.goto('/es');
    await expect(page.locator('body')).toContainText('Español');
  });
});
