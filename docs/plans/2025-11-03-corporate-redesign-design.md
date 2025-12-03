# Klingeman CPAs Corporate Website Redesign - Design Document

**Date:** November 3, 2025
**Project:** Corporate website redesign inspired by Curtin Maritime aesthetic
**Goal:** Transform local SEO-focused site into clean, corporate professional services website

## Executive Summary

Redesign Klingeman CPAs website to target corporate clients with a clean, minimal aesthetic featuring white/gray color palette, generous whitespace, and professional presentation. Remove all local SEO content, blog, and small-business focused services. Focus on 4 core high-value service categories and 2 corporate industries.

## Design Inspiration

**Reference:** https://curtinmaritime.com/

**Key Elements to Emulate:**
- Clean white/gray color palette with strategic accent colors
- Generous whitespace and breathing room
- Large, high-quality hero images
- Simple, clear navigation
- Professional corporate tone

## Content Strategy

### Pages to Remove
- All local SEO pages (cpa-bartlesville, cpa-bixby, cpa-broken-arrow, etc. - 16 pages)
- All Spanish language pages (/es/* - 6 pages)
- Blog and all blog posts (4 posts)
- Service pages: payroll-services, bookkeeping-services, quickbooks-cleanup, quickbooks-setup-training
- Industry pages: restaurants, nonprofits
- Pages: tulsa-cpa (local SEO focused)

### Pages to Keep/Create

**Core Pages (6):**
1. Home (`/`)
2. About/Team (`/about`)
3. Services overview (`/services`)
4. Industries overview (`/industries`)
5. Case Studies (`/case-studies`) - NEW
6. Contact (`/contact`)

**Service Pages (4):**
1. Corporate Tax & Financial Advisory (`/services/corporate-tax-advisory`)
2. IRS Representation & Tax Compliance (`/services/irs-representation`)
3. Estate & Wealth Planning (`/services/estate-wealth-planning`)
4. Business Entity & Structuring (`/services/business-structuring`)

**Industry Pages (2):**
1. Construction (`/industries/construction`)
2. Oil & Gas (`/industries/oil-gas`)

## Technical Architecture

### Tech Stack
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui for professional UI elements
- **Animations:** Framer Motion (subtle, professional)
- **Deployment:** Static export for hosting flexibility

### Project Structure
```
klingeman-redesign/
├── app/
│   ├── page.tsx                    # Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx                # Services overview
│   │   ├── corporate-tax-advisory/page.tsx
│   │   ├── irs-representation/page.tsx
│   │   ├── estate-wealth-planning/page.tsx
│   │   └── business-structuring/page.tsx
│   ├── industries/
│   │   ├── page.tsx                # Industries overview
│   │   ├── construction/page.tsx
│   │   └── oil-gas/page.tsx
│   ├── case-studies/page.tsx
│   ├── contact/page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── IndustryCard.tsx
│   ├── TeamMember.tsx
│   └── ContactForm.tsx
├── lib/
│   ├── constants.ts                # Business info, services, industries
│   └── utils.ts
├── public/
│   ├── logo.svg
│   └── images/
└── styles/
    └── globals.css
```

## Visual Design System

### Color Palette
```css
/* Primary Colors */
--white: #FFFFFF;           /* Main backgrounds */
--gray-50: #F8F9FA;         /* Section alternation */
--gray-800: #1A1D29;        /* Headers, dark text */
--gray-600: #6B7280;        /* Body text */
--gray-200: #E5E7EB;        /* Borders */

/* Accent */
--accent: #C40905;          /* CTAs, emphasis (deep red/burgundy) */
--accent-hover: #A00704;    /* CTA hover state */
```

### Typography
- **Font Family:** Inter (sans-serif)
- **Headings:** Bold weights (600-700)
  - H1: 3.5rem (56px) desktop, 2.5rem (40px) mobile
  - H2: 2.5rem (40px) desktop, 2rem (32px) mobile
  - H3: 1.875rem (30px) desktop, 1.5rem (24px) mobile
- **Body:** Regular (400) and medium (500)
  - Base: 1.125rem (18px)
  - Line height: 1.7

### Spacing System
- **Section Padding:** 5-6rem vertical (80-96px)
- **Container Max-Width:** 1280px
- **Element Spacing:** 2-3rem between major elements
- **Card Padding:** 2rem internal

### Component Specifications

#### Navigation
- Desktop: Horizontal menu, sticky header
- Logo: Left aligned
- Menu items: Center or right aligned
- CTA button: Right side, accent color
- Mobile: Hamburger menu with slide-in drawer
- Height: 80px on desktop, 64px on mobile

#### Buttons
- **Primary:** Accent background, white text, rounded (0.5rem)
- **Hover:** Scale 1.02, increased shadow
- **Padding:** 1rem horizontal, 0.75rem vertical
- **Font:** Medium weight (500), 1rem size

#### Cards
- **Background:** White with subtle shadow
- **Border:** None or 1px light gray
- **Border Radius:** 0.5rem
- **Hover:** Lift effect (translateY -4px) + increased shadow
- **Padding:** 2rem

#### Hero Sections
- **Homepage:** Full viewport height (100vh)
- **Other pages:** Reduced height (50-60vh)
- **Background:** Image with 40% dark overlay
- **Text:** Center aligned, white color
- **CTA:** Dual buttons (primary + secondary)

## Page Designs

### 1. Home Page

**Sections:**

1. **Hero**
   - Full viewport height
   - Background: Professional office or handshake image
   - Headline: "Corporate Tax Expertise & Financial Advisory"
   - Subheadline: "Former IRS Leadership Serving Tulsa's Corporate Community"
   - CTAs: "Schedule Consultation" + "View Services"

2. **Trust Indicators**
   - 3-4 badges in row
   - Former IRS expertise, years of experience, corporate focus
   - Icons + text, subtle background

3. **Services Overview**
   - Grid: 2x2 on desktop, 1 column mobile
   - 4 service cards with images/icons
   - Title, brief description, "Learn More" link

4. **Industries Served**
   - 2 column layout
   - Construction and Oil & Gas highlights
   - Industry-specific imagery

5. **Contact CTA**
   - Split section: text left, contact info right
   - Office address, phone, email
   - Background: Accent color or gray

### 2. Services Overview Page

**Structure:**
- Hero: "Professional CPA Services"
- 4 detailed service cards in grid
- Each card: Image, title, full description, key benefits list, CTA
- Sidebar or bottom: Contact CTA

### 3. Individual Service Pages

**Template Structure:**
- Hero: Service name + tagline
- Introduction section: What this service is
- Benefits section: Why clients need it (3-4 key benefits)
- Process section: How we deliver it (3-4 steps)
- Who it's for: Target client profile
- CTA: Schedule consultation

### 4. About/Team Page

**Sections:**
1. Firm story and philosophy
2. Team grid: Photos, names, titles, credentials, brief bios
3. Office location with map
4. Contact CTA

### 5. Case Studies Page

**Format:**
- Grid of case study cards (3-4 total)
- Each card: Industry, challenge, solution, result
- No client names or identifying information
- Professional imagery

### 6. Contact Page

**Layout:**
- Split: Form left, info right (desktop)
- Form fields: Name, email, phone, company, message
- Contact info: Address, phone, email, hours
- Map embed below

## Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

## Animation Guidelines

**Principles:**
- Subtle and professional only
- No aggressive or distracting animations
- 60fps performance target
- Respect prefers-reduced-motion

**Effects to Use:**
- Fade-in on scroll (Intersection Observer)
- Hover lifts on cards (4px translateY)
- Button hover scales (1.02)
- Smooth page transitions (150-300ms)
- Parallax on hero (subtle)

## Content Migration

### From Existing Site

**Reuse:**
- Logo
- Business info (address, phone, email, hours)
- Founder credentials (Matt Klingeman bio)
- Core service descriptions (edited for corporate focus)

**Rewrite:**
- All page headlines (remove local SEO keywords)
- Service descriptions (focus on corporate benefits)
- Remove references to "small business", "local", "Tulsa area"
- Add corporate language: "enterprise", "strategic", "advisory"

## SEO Strategy (Corporate Focus)

**Target Keywords:**
- Corporate tax planning
- Business tax advisory
- IRS audit representation
- Estate planning services
- Business entity structuring

**Remove:**
- "CPA near me"
- "Tulsa CPA"
- City/suburb names
- "cheap", "affordable"
- Small business keywords

## Brand Refresh

**Keep:**
- Klingeman CPAs name
- Logo structure (if professional)
- Contact information

**Update:**
- Color palette (new accent color)
- Typography (Inter font)
- Visual style (clean, minimal, corporate)
- Tone (from friendly/local to professional/expert)

## Success Metrics

**Qualitative:**
- Clean, uncluttered appearance
- Professional, corporate aesthetic
- Easy navigation
- Fast load times
- Mobile responsive

**Technical:**
- Lighthouse score: 90+ on all metrics
- Zero console errors
- All links functional
- Forms working correctly
- Cross-browser compatible

## Next Steps

1. Create new Next.js project (`klingeman-redesign/`)
2. Install dependencies (Next.js, Tailwind, shadcn/ui, Framer Motion)
3. Set up base configuration
4. Implement design system (colors, typography, components)
5. Build shared components (Header, Footer, Hero, Cards)
6. Build pages in order: Home → Services → Industries → About → Case Studies → Contact
7. Add content from existing site
8. Test responsive design
9. Performance optimization
10. Deploy and test

## Timeline Estimate

- Setup & configuration: 1 hour
- Design system & shared components: 2-3 hours
- Page development: 4-6 hours
- Content migration: 1-2 hours
- Testing & refinement: 1-2 hours
- **Total:** 9-14 hours of development time
