# Klingeman CPAs Corporate Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build clean, corporate-focused CPA website inspired by Curtin Maritime design aesthetic

**Architecture:** Next.js 14 with App Router, TypeScript, Tailwind CSS for styling, shadcn/ui for components, Framer Motion for animations. New standalone project separate from existing site.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React

---

## Task 1: Project Setup

**Files:**
- Create: `klingeman-redesign/` directory
- Create: `klingeman-redesign/package.json`
- Create: `klingeman-redesign/tsconfig.json`
- Create: `klingeman-redesign/tailwind.config.ts`
- Create: `klingeman-redesign/next.config.ts`

**Step 1: Create new Next.js project**

Run from `/mnt/c/Users/vince/tulsacpa/`:
```bash
npx create-next-app@latest klingeman-redesign --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

When prompted:
- TypeScript? Yes
- ESLint? Yes
- Tailwind CSS? Yes
- `src/` directory? No
- App Router? Yes
- Import alias? Yes (@/*)

**Step 2: Navigate to project and verify structure**

Run:
```bash
cd klingeman-redesign && ls -la
```

Expected: See app/, public/, node_modules/, package.json, etc.

**Step 3: Install additional dependencies**

Run:
```bash
npm install framer-motion class-variance-authority clsx tailwind-merge lucide-react
```

Expected: Dependencies installed successfully

**Step 4: Initialize shadcn/ui**

Run:
```bash
npx shadcn@latest init
```

When prompted:
- Style: Default
- Base color: Slate
- CSS variables: Yes

**Step 5: Install required shadcn components**

Run:
```bash
npx shadcn@latest add button card input textarea label
```

Expected: Components added to components/ui/

**Step 6: Verify installation**

Run:
```bash
npm run dev
```

Expected: Dev server starts on http://localhost:3000

**Step 7: Initial commit**

Run:
```bash
git init
git add .
git commit -m "feat: initial Next.js project setup with Tailwind and shadcn/ui"
```

---

## Task 2: Design System Configuration

**Files:**
- Modify: `klingeman-redesign/tailwind.config.ts`
- Modify: `klingeman-redesign/app/globals.css`
- Create: `klingeman-redesign/lib/fonts.ts`

**Step 1: Update Tailwind config with custom colors**

File: `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          accent: '#C40905',
          'accent-hover': '#A00704',
          dark: '#1A1D29',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

**Step 2: Update globals.css with design system**

File: `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;
    --primary: 222 47% 11%;
    --primary-foreground: 0 0% 100%;
    --secondary: 210 14% 97%;
    --secondary-foreground: 222 47% 11%;
    --muted: 210 14% 97%;
    --muted-foreground: 215 16% 47%;
    --accent: 2 94% 39%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 214 32% 91%;
    --input: 214 32% 91%;
    --ring: 222 47% 11%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 3: Set up font configuration**

File: `lib/fonts.ts`

```typescript
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

**Step 4: Apply font to layout**

File: `app/layout.tsx` - Update the entire file:

```typescript
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klingeman CPAs | Corporate Tax Expertise & Financial Advisory",
  description: "Former IRS leadership providing corporate tax planning, financial advisory, and strategic business services in Tulsa, Oklahoma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 5: Test design system**

Run:
```bash
npm run dev
```

Open browser to http://localhost:3000
Expected: See default Next.js page with Inter font

**Step 6: Commit design system**

Run:
```bash
git add .
git commit -m "feat: configure design system with custom colors and Inter font"
```

---

## Task 3: Business Constants and Data

**Files:**
- Create: `klingeman-redesign/lib/constants.ts`
- Create: `klingeman-redesign/lib/utils.ts`

**Step 1: Create constants file with business data**

File: `lib/constants.ts`

```typescript
export const BUSINESS_INFO = {
  name: 'Klingeman CPAs',
  tagline: 'Corporate Tax Expertise & Financial Advisory',
  phone: '(918) 922-1019',
  phoneRaw: '9189221019',
  email: 'Matt.Klingeman@klingemancpas.com',
  address: {
    street: '6539 E 31st St',
    city: 'Tulsa',
    state: 'Oklahoma',
    stateAbbr: 'OK',
    zip: '74145',
    full: '6539 E 31st St, Tulsa, OK 74145'
  },
  hours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed'
  },
  social: {
    linkedin: '#',
    facebook: '#',
  }
};

export const SERVICES = [
  {
    title: 'Corporate Tax & Financial Advisory',
    slug: 'corporate-tax-advisory',
    description: 'Strategic tax planning and financial advisory services for corporate clients, maximizing efficiency and ensuring compliance.',
    fullDescription: 'Comprehensive corporate tax planning and financial advisory services tailored for businesses seeking strategic guidance. We provide proactive tax strategies, financial statement analysis, and expert advisory to optimize your corporate financial position.',
    benefits: [
      'Strategic tax planning to minimize corporate tax burden',
      'Financial statement analysis and advisory',
      'Multi-state tax compliance and optimization',
      'Merger and acquisition tax planning',
    ],
    process: [
      'Initial consultation to understand business structure and goals',
      'Comprehensive financial and tax analysis',
      'Development of customized tax strategy',
      'Ongoing implementation and advisory support',
    ],
    icon: '📊',
  },
  {
    title: 'IRS Representation & Tax Compliance',
    slug: 'irs-representation',
    description: 'Expert representation in IRS audits and tax controversies, leveraging former IRS management experience.',
    fullDescription: 'When facing IRS audits or tax controversies, our team provides expert representation backed by former IRS management experience. We navigate complex tax disputes and ensure favorable outcomes.',
    benefits: [
      'Former IRS manager expertise and insider knowledge',
      'Representation in audits, appeals, and collections',
      'Penalty abatement and settlement negotiation',
      'Tax controversy resolution strategies',
    ],
    process: [
      'Case evaluation and strategy development',
      'Document preparation and review',
      'Direct representation with IRS officials',
      'Resolution and compliance follow-up',
    ],
    icon: '🛡️',
  },
  {
    title: 'Estate & Wealth Planning',
    slug: 'estate-wealth-planning',
    description: 'Sophisticated estate and wealth planning services for high-net-worth individuals and families.',
    fullDescription: 'Our estate and wealth planning services help high-net-worth individuals and families preserve wealth across generations. We provide comprehensive tax-efficient strategies for estate planning, trust administration, and wealth transfer.',
    benefits: [
      'Estate tax minimization strategies',
      'Trust and estate administration',
      'Wealth transfer planning',
      'Retirement and succession planning',
    ],
    process: [
      'Comprehensive wealth and estate analysis',
      'Custom planning strategy development',
      'Implementation of trusts and estate structures',
      'Ongoing review and adjustment',
    ],
    icon: '🏛️',
  },
  {
    title: 'Business Entity & Structuring',
    slug: 'business-structuring',
    description: 'Strategic guidance on business entity selection, restructuring, and optimization for tax efficiency.',
    fullDescription: 'We guide business owners through entity selection, restructuring, and optimization decisions. Our expertise ensures your business structure aligns with your tax, liability, and operational goals.',
    benefits: [
      'Entity selection analysis (LLC, S-Corp, C-Corp)',
      'Business restructuring for tax optimization',
      'Multi-entity structure planning',
      'Partnership and operating agreement review',
    ],
    process: [
      'Business goals and structure assessment',
      'Tax impact analysis for various entities',
      'Entity formation or restructuring execution',
      'Ongoing compliance and optimization',
    ],
    icon: '🏢',
  },
];

export const INDUSTRIES = [
  {
    title: 'Construction',
    slug: 'construction',
    description: 'Specialized tax and accounting services for construction contractors, builders, and development firms.',
    challenges: [
      'Complex project accounting and job costing',
      'Multi-state tax compliance for project locations',
      'Cash flow management and bonding requirements',
      'Equipment depreciation and tax strategies',
    ],
    solutions: [
      'Percentage of completion accounting expertise',
      'Multi-state tax planning and compliance',
      'Strategic tax planning for equipment purchases',
      'CFO-level advisory for growth planning',
    ],
  },
  {
    title: 'Oil & Gas',
    slug: 'oil-gas',
    description: 'Expert tax planning and financial advisory for Oklahoma\'s oil and gas industry.',
    challenges: [
      'Complex depletion and depreciation calculations',
      'Mineral rights and royalty taxation',
      'Joint venture and partnership accounting',
      'Volatile commodity pricing impacts',
    ],
    solutions: [
      'Oil and gas tax expertise including IDC deductions',
      'Mineral rights valuation and planning',
      'Partnership and joint venture structuring',
      'Financial modeling for production planning',
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Matt Klingeman',
    title: 'CPA, Founder',
    credentials: [
      'Certified Public Accountant',
      'Former IRS Manager',
      'Master\'s in Business Taxation',
      '20+ Years Experience',
    ],
    bio: 'With over 20 years of experience in tax and accounting, including time as an IRS manager, Matt founded Klingeman CPAs to provide businesses and high-net-worth individuals with the insider expertise they need to navigate complex tax situations confidently.',
    image: '/images/team/matt-klingeman.jpg',
  },
];

export const TRUST_INDICATORS = [
  {
    stat: '20+',
    label: 'Years of CPA Experience',
  },
  {
    stat: 'Former',
    label: 'IRS Management',
  },
  {
    stat: 'Master\'s',
    label: 'in Business Taxation',
  },
  {
    stat: 'Corporate',
    label: 'Focus & Expertise',
  },
];
```

**Step 2: Verify utils.ts exists with cn helper**

File: `lib/utils.ts` should already exist from shadcn setup. Verify it contains:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Step 3: Test import**

Create temporary test file to verify imports work:

Run:
```bash
echo "import { BUSINESS_INFO } from './lib/constants'; console.log(BUSINESS_INFO.name);" | npx tsx --eval
```

Expected: No TypeScript errors

**Step 4: Commit constants**

Run:
```bash
git add lib/
git commit -m "feat: add business constants and service data"
```

---

## Task 4: Shared Header Component

**Files:**
- Create: `klingeman-redesign/components/Header.tsx`

**Step 1: Create Header component**

File: `components/Header.tsx`

```typescript
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-dark">
              {BUSINESS_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-brand-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-dark" />
            ) : (
              <Menu className="w-6 h-6 text-brand-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-accent transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Schedule Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
```

**Step 2: Test Header component**

Update `app/page.tsx` temporarily to test:

```typescript
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <h1 className="text-4xl p-8">Test Header</h1>
      </div>
    </main>
  );
}
```

**Step 3: Run and verify**

Run:
```bash
npm run dev
```

Open browser to http://localhost:3000
Expected: See header with navigation, mobile menu works

**Step 4: Commit Header**

Run:
```bash
git add components/Header.tsx app/page.tsx
git commit -m "feat: add responsive Header component with mobile menu"
```

---

## Task 5: Shared Footer Component

**Files:**
- Create: `klingeman-redesign/components/Footer.tsx`

**Step 1: Create Footer component**

File: `components/Footer.tsx`

```typescript
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-300 mb-4">{BUSINESS_INFO.tagline}</p>
            <p className="text-gray-300">
              Corporate tax planning and financial advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{BUSINESS_INFO.address.full}</li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="mt-4">
                <p className="font-semibold">Hours:</p>
                <p>Weekdays: {BUSINESS_INFO.hours.weekdays}</p>
                <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Add Footer to page for testing**

Update `app/page.tsx`:

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-20 min-h-screen">
        <h1 className="text-4xl p-8">Test Header and Footer</h1>
      </div>
      <Footer />
    </main>
  );
}
```

**Step 3: Run and verify**

Run:
```bash
npm run dev
```

Expected: See footer at bottom with company info, links, and contact details

**Step 4: Commit Footer**

Run:
```bash
git add components/Footer.tsx app/page.tsx
git commit -m "feat: add Footer component with company info and links"
```

---

## Task 6: Hero Component

**Files:**
- Create: `klingeman-redesign/components/Hero.tsx`

**Step 1: Create Hero component**

File: `components/Hero.tsx`

```typescript
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  height?: 'full' | 'large' | 'medium';
  showCTA?: boolean;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function Hero({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&h=1080&fit=crop',
  height = 'full',
  showCTA = true,
  primaryCTA = { label: 'Schedule Consultation', href: '/contact' },
  secondaryCTA = { label: 'View Services', href: '/services' },
}: HeroProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[70vh]',
    medium: 'h-[50vh]',
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-balance">
            {subtitle}
          </p>

          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-accent hover:bg-brand-accent-hover text-lg px-8 py-6"
              >
                <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
              </Button>
              {secondaryCTA && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-brand-dark"
                >
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Test Hero component**

Update `app/page.tsx`:

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        title="Corporate Tax Expertise & Financial Advisory"
        subtitle="Former IRS Leadership Serving Tulsa's Corporate Community"
      />
      <Footer />
    </main>
  );
}
```

**Step 3: Run and verify**

Run:
```bash
npm run dev
```

Expected: See full-height hero with title, subtitle, and CTA buttons

**Step 4: Commit Hero**

Run:
```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero component with Framer Motion animations"
```

---

## Task 7: ServiceCard Component

**Files:**
- Create: `klingeman-redesign/components/ServiceCard.tsx`

**Step 1: Create ServiceCard component**

File: `components/ServiceCard.tsx`

```typescript
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export function ServiceCard({ title, description, icon, slug }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="text-4xl mb-4">{icon}</div>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="ghost" className="group px-0">
          <Link href={`/services/${slug}`} className="flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
```

**Step 2: Test ServiceCard**

Update `app/page.tsx` to test card:

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        title="Corporate Tax Expertise & Financial Advisory"
        subtitle="Former IRS Leadership Serving Tulsa's Corporate Community"
      />

      {/* Test Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 3: Run and verify**

Run:
```bash
npm run dev
```

Expected: See service cards in grid with hover effects

**Step 4: Commit ServiceCard**

Run:
```bash
git add components/ServiceCard.tsx app/page.tsx
git commit -m "feat: add ServiceCard component with hover animations"
```

---

## Task 8: Complete Home Page

**Files:**
- Modify: `klingeman-redesign/app/page.tsx`
- Create: `klingeman-redesign/components/TrustIndicators.tsx`

**Step 1: Create TrustIndicators component**

File: `components/TrustIndicators.tsx`

```typescript
import { TRUST_INDICATORS } from '@/lib/constants';

export function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_INDICATORS.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-brand-accent mb-2">
                {indicator.stat}
              </div>
              <div className="text-gray-600 font-medium">{indicator.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Complete home page**

File: `app/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TrustIndicators } from '@/components/TrustIndicators';
import { Button } from '@/components/ui/button';
import { SERVICES, INDUSTRIES, BUSINESS_INFO } from '@/lib/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />

      <Hero
        title="Corporate Tax Expertise & Financial Advisory"
        subtitle="Former IRS Leadership Serving Tulsa's Corporate Community"
      />

      <TrustIndicators />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax and financial services for corporate clients and high-net-worth individuals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized expertise in high-value corporate sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.slug}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Button asChild variant="ghost">
                  <Link href={`/industries/${industry.slug}`}>Learn More →</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Schedule a consultation to discuss your tax and financial advisory needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent-hover"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>Call {BUSINESS_INFO.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 3: Run and verify complete home page**

Run:
```bash
npm run dev
```

Expected: See complete home page with hero, trust badges, services, industries, and CTA

**Step 4: Commit complete home page**

Run:
```bash
git add .
git commit -m "feat: complete home page with all sections"
```

---

## Task 9: Services Overview Page

**Files:**
- Create: `klingeman-redesign/app/services/page.tsx`

**Step 1: Create services overview page**

File: `app/services/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPA Services | Klingeman CPAs',
  description: 'Corporate tax planning, IRS representation, estate planning, and business structuring services.',
};

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Professional CPA Services"
        subtitle="Strategic tax planning and financial advisory for corporate clients"
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600">
              We provide comprehensive tax and financial advisory services tailored to the needs
              of corporate clients and high-net-worth individuals. Our team combines deep
              technical expertise with strategic thinking to optimize your financial position.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 2: Test services page**

Run:
```bash
npm run dev
```

Navigate to: http://localhost:3000/services
Expected: See services overview page with hero and service cards

**Step 3: Commit services page**

Run:
```bash
git add app/services/page.tsx
git commit -m "feat: add services overview page"
```

---

## Task 10: Individual Service Pages

**Files:**
- Create: `klingeman-redesign/app/services/[slug]/page.tsx`

**Step 1: Create dynamic service page**

File: `app/services/[slug]/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Metadata } from 'next';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Klingeman CPAs`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header />

      <Hero
        title={service.title}
        subtitle={service.description}
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Full Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation to discuss how we can help with your {service.title.toLowerCase()} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-hover">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 2: Test service pages**

Run:
```bash
npm run dev
```

Navigate to: http://localhost:3000/services/corporate-tax-advisory
Expected: See detailed service page with benefits and process

Test other service pages:
- http://localhost:3000/services/irs-representation
- http://localhost:3000/services/estate-wealth-planning
- http://localhost:3000/services/business-structuring

**Step 3: Commit service pages**

Run:
```bash
git add app/services/
git commit -m "feat: add dynamic individual service pages"
```

---

## Task 11: Industries Pages

**Files:**
- Create: `klingeman-redesign/app/industries/page.tsx`
- Create: `klingeman-redesign/app/industries/[slug]/page.tsx`

**Step 1: Create industries overview page**

File: `app/industries/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { INDUSTRIES } from '@/lib/constants';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | Klingeman CPAs',
  description: 'Specialized CPA services for construction and oil & gas industries in Oklahoma.',
};

export default function IndustriesPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Industries We Serve"
        subtitle="Specialized expertise in high-value corporate sectors"
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600">
              We provide specialized tax and financial advisory services tailored to the unique
              challenges of construction and oil & gas industries. Our deep sector knowledge
              ensures you receive expert guidance specific to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.slug}
                className="bg-white border rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h3 className="text-3xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{industry.description}</p>
                <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover">
                  <Link href={`/industries/${industry.slug}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 2: Create dynamic industry page**

File: `app/industries/[slug]/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { INDUSTRIES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.title} CPA Services | Klingeman CPAs`,
    description: industry.description,
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <main>
      <Header />

      <Hero
        title={`${industry.title} CPA Services`}
        subtitle={industry.description}
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Challenges */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Industry Challenges</h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">How We Help</h2>
              <div className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Discuss Your {industry.title} Business</h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation to learn how our specialized expertise can benefit your company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-hover">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 3: Test industry pages**

Run:
```bash
npm run dev
```

Navigate to:
- http://localhost:3000/industries
- http://localhost:3000/industries/construction
- http://localhost:3000/industries/oil-gas

Expected: See industries overview and detailed pages with challenges/solutions

**Step 4: Commit industry pages**

Run:
```bash
git add app/industries/
git commit -m "feat: add industries overview and dynamic industry pages"
```

---

## Task 12: About/Team Page

**Files:**
- Create: `klingeman-redesign/app/about/page.tsx`
- Create: `klingeman-redesign/components/TeamMember.tsx`

**Step 1: Create TeamMember component**

File: `components/TeamMember.tsx`

```typescript
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  image?: string;
}

export function TeamMember({ name, title, credentials, bio, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-square bg-gray-200 relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-6xl text-gray-500">👤</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-brand-accent font-semibold mb-4">{title}</p>

        <div className="mb-4">
          <p className="font-semibold text-sm text-gray-700 mb-2">Credentials:</p>
          <ul className="space-y-1">
            {credentials.map((credential, index) => (
              <li key={index} className="text-sm text-gray-600">• {credential}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
```

**Step 2: Create About page**

File: `app/about/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TeamMember } from '@/components/TeamMember';
import { Button } from '@/components/ui/button';
import { TEAM_MEMBERS, BUSINESS_INFO } from '@/lib/constants';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Klingeman CPAs',
  description: 'Meet our team of experienced CPAs with former IRS expertise serving corporate clients.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      <Hero
        title="About Klingeman CPAs"
        subtitle="Corporate tax expertise backed by former IRS leadership"
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop"
      />

      {/* Firm Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Klingeman CPAs was founded with a clear mission: to provide corporate clients and
                high-net-worth individuals with the insider expertise needed to navigate complex
                tax situations confidently.
              </p>
              <p>
                With former IRS management experience and over 20 years in the field, we bring a
                unique perspective to tax planning and financial advisory. We understand both sides
                of the table, which allows us to develop strategies that are both aggressive and
                defensible.
              </p>
              <p>
                Our firm focuses exclusively on corporate clients and sophisticated financial matters,
                ensuring our clients receive expert-level attention and strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals behind Klingeman CPAs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                credentials={member.credentials}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Office</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                <div className="space-y-3 text-gray-600">
                  <p>{BUSINESS_INFO.address.full}</p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-brand-accent hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-accent hover:underline">
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold mb-2">Office Hours:</p>
                    <p>Weekdays: {BUSINESS_INFO.hours.weekdays}</p>
                    <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                    <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Contact us today to schedule a consultation
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-hover">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 3: Test About page**

Run:
```bash
npm run dev
```

Navigate to: http://localhost:3000/about
Expected: See about page with firm story, team members, and office info

**Step 4: Commit About page**

Run:
```bash
git add app/about/ components/TeamMember.tsx
git commit -m "feat: add About page with team member profiles"
```

---

## Task 13: Case Studies Page

**Files:**
- Create: `klingeman-redesign/app/case-studies/page.tsx`

**Step 1: Create Case Studies page**

File: `app/case-studies/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Klingeman CPAs',
  description: 'Success stories and results from our corporate tax and financial advisory work.',
};

const caseStudies = [
  {
    id: 1,
    industry: 'Construction',
    title: 'Multi-State Tax Optimization',
    challenge: 'A regional construction firm was facing significant tax liabilities across multiple states due to project locations. They needed strategic guidance to minimize their overall tax burden while maintaining full compliance.',
    solution: 'We implemented a comprehensive multi-state tax strategy, optimizing entity structure and apportionment methods. We also identified previously overlooked deductions specific to the construction industry.',
    result: 'Reduced overall effective tax rate by 18% and achieved $340,000 in annual tax savings while ensuring full compliance across all operating states.',
  },
  {
    id: 2,
    industry: 'Oil & Gas',
    title: 'IRS Audit Defense',
    challenge: 'An oil and gas company received an IRS audit notice questioning their intangible drilling cost deductions and depletion calculations over a three-year period.',
    solution: 'Leveraging our former IRS management experience, we represented the client throughout the audit process, providing detailed documentation and expert justification for all deductions claimed.',
    result: 'Successfully defended all challenged deductions with zero adjustments. Avoided $1.2M in proposed deficiencies and associated penalties.',
  },
  {
    id: 3,
    industry: 'Real Estate',
    title: 'Estate Planning & Wealth Transfer',
    challenge: 'A high-net-worth individual with significant real estate holdings needed a comprehensive estate plan to minimize estate taxes and facilitate smooth wealth transfer to the next generation.',
    solution: 'We designed a sophisticated estate planning strategy utilizing trusts, gifting strategies, and entity restructuring to maximize tax efficiency while maintaining the client\'s control and flexibility.',
    result: 'Projected estate tax savings of $2.8M and established a tax-efficient structure for generational wealth transfer.',
  },
  {
    id: 4,
    industry: 'Professional Services',
    title: 'Business Entity Restructuring',
    challenge: 'A professional services firm operating as a C-Corp was experiencing double taxation issues and wanted to optimize their structure for better tax efficiency.',
    solution: 'We conducted a comprehensive analysis comparing entity structures and guided the client through an S-Corp election, implementing proper compensation strategies and distribution planning.',
    result: 'Annual tax savings of $125,000 through elimination of double taxation and optimized owner compensation structure.',
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Case Studies"
        subtitle="Real results for our corporate clients"
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600">
              See how we've helped corporate clients navigate complex tax situations and achieve
              significant savings. All details have been anonymized to protect client confidentiality.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <span className="text-sm font-semibold text-brand-accent bg-red-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-700">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-green-700">Result</h4>
                      <p className="text-gray-600 font-semibold">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Similar Results?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help optimize your tax position and navigate complex financial challenges.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-hover">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 2: Test Case Studies page**

Run:
```bash
npm run dev
```

Navigate to: http://localhost:3000/case-studies
Expected: See case studies with challenge/solution/result format

**Step 3: Commit Case Studies page**

Run:
```bash
git add app/case-studies/
git commit -m "feat: add Case Studies page with client success stories"
```

---

## Task 14: Contact Page with Form

**Files:**
- Create: `klingeman-redesign/app/contact/page.tsx`
- Create: `klingeman-redesign/components/ContactForm.tsx`

**Step 1: Create ContactForm component**

File: `components/ContactForm.tsx`

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your needs..."
          className="mt-1"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg">
          Thank you for your message! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg">
          There was an error submitting your message. Please try again or call us directly.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-brand-accent hover:bg-brand-accent-hover"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
```

**Step 2: Create Contact page**

File: `app/contact/page.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Klingeman CPAs',
  description: 'Schedule a consultation with our corporate tax experts in Tulsa, Oklahoma.',
};

export default function ContactPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Contact Us"
        subtitle="Schedule a consultation to discuss your tax and financial needs"
        height="medium"
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within one business day.
                </p>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-gray-600 hover:text-brand-accent"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-gray-600 hover:text-brand-accent break-all"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">{BUSINESS_INFO.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <div className="text-gray-600">
                        <p>Weekdays: {BUSINESS_INFO.hours.weekdays}</p>
                        <p>Saturday: {BUSINESS_INFO.hours.saturday}</p>
                        <p>Sunday: {BUSINESS_INFO.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Map Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Step 3: Test Contact page**

Run:
```bash
npm run dev
```

Navigate to: http://localhost:3000/contact
Expected: See contact page with form and contact info

Test form submission (should show success message)

**Step 4: Commit Contact page**

Run:
```bash
git add app/contact/ components/ContactForm.tsx
git commit -m "feat: add Contact page with form and contact information"
```

---

## Task 15: Update Layout and Add SEO

**Files:**
- Modify: `klingeman-redesign/app/layout.tsx`
- Create: `klingeman-redesign/app/not-found.tsx`

**Step 1: Update root layout with complete metadata**

File: `app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "Klingeman CPAs | Corporate Tax Expertise & Financial Advisory",
    template: "%s | Klingeman CPAs",
  },
  description: "Former IRS leadership providing corporate tax planning, financial advisory, and strategic business services in Tulsa, Oklahoma.",
  keywords: [
    "corporate tax planning",
    "CPA Tulsa",
    "tax advisory",
    "IRS representation",
    "estate planning",
    "business tax",
    "financial advisory",
  ],
  authors: [{ name: "Klingeman CPAs" }],
  creator: "Klingeman CPAs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://klingemancpas.com",
    siteName: "Klingeman CPAs",
    title: "Klingeman CPAs | Corporate Tax Expertise & Financial Advisory",
    description: "Former IRS leadership providing corporate tax planning and financial advisory services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Create 404 page**

File: `app/not-found.tsx`

```typescript
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent-hover">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
```

**Step 3: Test 404 page**

Run:
```bash
npm run dev
```

Navigate to: http://localhost:3000/non-existent-page
Expected: See custom 404 page

**Step 4: Commit layout and 404**

Run:
```bash
git add app/layout.tsx app/not-found.tsx
git commit -m "feat: add complete SEO metadata and custom 404 page"
```

---

## Task 16: Final Testing and Build

**Files:**
- Test all pages
- Run production build

**Step 1: Test all pages systematically**

Open each page and verify:
- http://localhost:3000/ (Home)
- http://localhost:3000/services (Services overview)
- http://localhost:3000/services/corporate-tax-advisory
- http://localhost:3000/services/irs-representation
- http://localhost:3000/services/estate-wealth-planning
- http://localhost:3000/services/business-structuring
- http://localhost:3000/industries (Industries overview)
- http://localhost:3000/industries/construction
- http://localhost:3000/industries/oil-gas
- http://localhost:3000/about
- http://localhost:3000/case-studies
- http://localhost:3000/contact

Check:
- Navigation works
- Mobile menu functions
- Forms work
- All images load
- Links work correctly
- Responsive design works

**Step 2: Run production build**

Run:
```bash
npm run build
```

Expected: Build completes successfully with no errors

**Step 3: Test production build**

Run:
```bash
npm run start
```

Navigate through all pages again.
Expected: All pages work correctly in production mode

**Step 4: Final commit**

Run:
```bash
git add .
git commit -m "test: verify all pages and production build"
```

---

## Task 17: Documentation and README

**Files:**
- Create: `klingeman-redesign/README.md`

**Step 1: Create comprehensive README**

File: `README.md`

```markdown
# Klingeman CPAs - Corporate Website

Clean, corporate-focused CPA website built with Next.js, inspired by professional service firms.

## Design Philosophy

- **Clean & Minimal:** White/gray color palette with strategic accent colors
- **Professional:** Corporate tone suitable for high-value clients
- **Responsive:** Mobile-first design approach
- **Fast:** Optimized for performance and SEO

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services pages
│   ├── industries/        # Industries pages
│   ├── about/             # About page
│   ├── case-studies/      # Case studies page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── lib/                   # Utilities and constants
│   ├── constants.ts      # Business data
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Pages

- **Home** (`/`) - Hero, services overview, industries, CTA
- **Services** (`/services`) - All services overview
- **Individual Services** (`/services/[slug]`) - Detailed service pages
- **Industries** (`/industries`) - Industries overview
- **Individual Industries** (`/industries/[slug]`) - Detailed industry pages
- **About** (`/about`) - Team, firm story, office location
- **Case Studies** (`/case-studies`) - Client success stories
- **Contact** (`/contact`) - Contact form and information

## Customization

### Update Business Info

Edit `lib/constants.ts` to update:
- Business name, address, phone, email
- Services and descriptions
- Industries
- Team members

### Change Colors

Edit `tailwind.config.ts` and `app/globals.css` to modify:
- Brand colors
- Accent colors
- Typography

### Add Content

Update constants in `lib/constants.ts` for:
- New services
- New industries
- Team members
- Case studies

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting provider

## License

Private - © Klingeman CPAs
```

**Step 2: Commit README**

Run:
```bash
git add README.md
git commit -m "docs: add comprehensive README"
```

**Step 3: Final review**

Review entire project:
- All pages work
- Design matches requirements
- Clean code
- Documentation complete

---

## Completion Checklist

- [x] Project setup with Next.js and dependencies
- [x] Design system configuration
- [x] Business constants and data
- [x] Header component with navigation
- [x] Footer component
- [x] Hero component
- [x] ServiceCard component
- [x] Complete home page
- [x] Services overview page
- [x] Individual service pages
- [x] Industries pages
- [x] About/Team page
- [x] Case Studies page
- [x] Contact page with form
- [x] SEO metadata and 404 page
- [x] Production build testing
- [x] Documentation

## Next Steps After Implementation

1. **Add logo:** Replace text logo with actual logo image in Header
2. **Add team photos:** Replace placeholder with real team photos
3. **Add hero images:** Use professional photography for hero sections
4. **Set up contact form backend:** Connect form to email service or CRM
5. **Add map embed:** Replace map placeholder with Google Maps embed
6. **Configure domain:** Point domain to hosting provider
7. **Set up analytics:** Add Google Analytics or similar
8. **Test on real devices:** Mobile, tablet, desktop testing
9. **SEO optimization:** Submit sitemap, configure robots.txt
10. **Performance audit:** Run Lighthouse and optimize as needed

---

**Estimated Total Time:** 9-14 hours

**Recommended Execution:** Use superpowers:subagent-driven-development for task-by-task implementation with code review between tasks.
