# SEO Setup Guide - Klingeman CPA Website

## Important: Action Required Before Launch

This guide contains critical setup steps that must be completed before launching your website.

---

## 🚨 Immediate Actions Required

### 1. Google Analytics Setup
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for klingemancpa.com
3. Get your Measurement ID (looks like: G-XXXXXXXXXX)
4. Replace `GA_MEASUREMENT_ID` in `/app/layout.tsx` (lines 45 and 52) with your actual ID

### 2. Google Search Console Setup
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: https://klingemancpa.com
3. Choose HTML tag verification method
4. Copy the verification code
5. Replace `your-google-verification-code` in `/app/layout.tsx` (line 26) with your actual code
6. Verify ownership
7. Submit sitemap: https://klingemancpa.com/sitemap.xml

### 3. Create Favicon Files
You need to create these image files and add them to the `/public` folder:
- `favicon.ico` - 48x48 pixels
- `favicon-16x16.png` - 16x16 pixels
- `favicon-32x32.png` - 32x32 pixels
- `apple-touch-icon.png` - 180x180 pixels
- `favicon-192x192.png` - 192x192 pixels (for Android)
- `favicon-512x512.png` - 512x512 pixels (for Android)

**Recommended Tool**: Use [Favicon Generator](https://favicon.io/) to create all sizes from your logo

### 4. Create Open Graph Image
Create an image file named `og-image.jpg` (1200x630 pixels) and add to `/public` folder.
This image appears when your site is shared on social media.

**Design should include:**
- Klingeman CPAs logo
- Tagline: "Former IRS Management Experience"
- Contact: (918) 922-1019
- Professional blue/yellow color scheme

### 5. Create Logo Image
Add a logo file named `logo.png` to the `/public` folder for schema markup.
Recommended size: 600x600 pixels (square format works best)

---

## 📊 Monitoring Setup

### Weekly Tasks
1. **Google Search Console**
   - Check Coverage report for errors
   - Review Performance data
   - Monitor Core Web Vitals

2. **Google Analytics**
   - Review traffic sources
   - Check user behavior flow
   - Monitor conversion goals

### Monthly Tasks
1. Update sitemap if new pages added (run `npm run generate-sitemap`)
2. Check for 404 errors in Analytics
3. Review search queries in Search Console
4. Update meta descriptions based on CTR data

---

## 🎯 Local SEO Setup

### Google Business Profile
1. Claim/verify your business at [Google Business](https://business.google.com)
2. Ensure NAP (Name, Address, Phone) matches website exactly:
   - Klingeman CPAs
   - 6539 E. 31st Street, Tulsa, OK 74135
   - (918) 922-1019

### Bing Places
1. Add business to [Bing Places](https://www.bingplaces.com)
2. Use same NAP information

### Local Directories
Submit to these important directories:
- Yelp for Business
- Yellow Pages
- Better Business Bureau
- Tulsa Chamber of Commerce
- Oklahoma Society of CPAs directory

---

## 🔧 Technical Checklist

### Before Launch
- [ ] Replace GA_MEASUREMENT_ID with actual Google Analytics ID
- [ ] Replace Google verification code
- [ ] Add all favicon files
- [ ] Create and add og-image.jpg
- [ ] Create and add logo.png
- [ ] Test 404 page by visiting a non-existent URL
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt is working

### After Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics goals
- [ ] Configure Search Console email alerts
- [ ] Test all meta tags with [Meta Tags Tool](https://metatags.io)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) test
- [ ] Check mobile-friendliness

---

## 📈 Performance Targets

### Core Web Vitals Goals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO Metrics to Track
- Organic traffic growth: +20% monthly
- Average position improvement: Top 10 for "Tulsa CPA"
- Click-through rate: > 5% for branded searches
- Bounce rate: < 40%

---

## 🚀 Ongoing Optimization

### Content Strategy
1. Add 2-4 blog posts monthly
2. Update service pages quarterly
3. Add client testimonials/reviews
4. Create location-specific landing pages

### Technical Improvements
1. Implement lazy loading for images
2. Add WebP image formats
3. Set up CDN for static assets
4. Implement AMP for blog posts

---

## 📞 Support Resources

### Free Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Schema Markup Validator](https://validator.schema.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Documentation
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

---

## Emergency Contacts

If you need help with SEO setup:
1. Google Support: [Google Help](https://support.google.com/)
2. Analytics Community: [GA Community](https://support.google.com/analytics/community)

---

Last Updated: 2025-08-22
Next Review: Monthly