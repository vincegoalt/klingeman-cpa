import { chromium } from 'playwright';

async function crawlSite() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const baseUrl = 'https://www.klingemancpas.com';
  const visited = new Set<string>();
  const toVisit: string[] = [baseUrl];
  const allUrls: string[] = [];

  console.log('Crawling live site: klingemancpas.com\n');

  while (toVisit.length > 0) {
    const url = toVisit.shift()!;

    if (visited.has(url)) continue;
    visited.add(url);

    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

      if (!response || response.status() >= 400) {
        console.log(`❌ ${url} - Status: ${response?.status() || 'No response'}`);
        continue;
      }

      const pathname = new URL(url).pathname;
      if (!allUrls.includes(pathname)) {
        allUrls.push(pathname);
        console.log(`✓ ${pathname}`);
      }

      // Find all internal links
      const links = await page.$$eval('a[href]', (anchors, base) => {
        return anchors
          .map(a => a.getAttribute('href'))
          .filter(href => href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:'))
          .map(href => {
            try {
              const url = new URL(href!, base);
              return url.origin === new URL(base).origin ? url.href : null;
            } catch {
              return null;
            }
          })
          .filter(Boolean) as string[];
      }, baseUrl);

      for (const link of links) {
        if (!visited.has(link) && !toVisit.includes(link)) {
          toVisit.push(link);
        }
      }
    } catch (error) {
      console.log(`❌ ${url} - Error: ${(error as Error).message}`);
    }
  }

  await browser.close();

  console.log('\n========================================');
  console.log('All URLs found on live site:');
  console.log('========================================\n');

  allUrls.sort().forEach(url => console.log(url));

  console.log(`\nTotal pages: ${allUrls.length}`);

  return allUrls;
}

crawlSite().catch(console.error);
