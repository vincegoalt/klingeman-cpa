import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { BUSINESS_INFO, FOUNDER_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.klingemancpas.com'),
  title: {
    default: "Tulsa CPA | Klingeman CPAs - Former IRS Management Experience",
    template: "%s | Klingeman CPAs"
  },
  description: `Professional CPA services in Tulsa, OK. ${FOUNDER_INFO.experience}. Tax preparation, bookkeeping, payroll, and business consulting.`,
  keywords: ['CPA Tulsa', 'Tax Preparation Tulsa', 'Bookkeeping Tulsa', 'IRS Audit Help', 'Business Tax Services', 'Oklahoma CPA'],
  authors: [{ name: 'Klingeman CPAs' }],
  creator: 'Klingeman CPAs',
  publisher: 'Klingeman CPAs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.klingemancpas.com',
    siteName: BUSINESS_INFO.name,
    title: 'Tulsa CPA | Klingeman CPAs - Former IRS Management Experience',
    description: `Professional CPA services in Tulsa, OK. ${FOUNDER_INFO.experience}. Tax preparation, bookkeeping, payroll, and business consulting.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa CPA | Klingeman CPAs - Former IRS Management Experience',
    description: `Professional CPA services in Tulsa, OK. ${FOUNDER_INFO.experience}. Tax preparation, bookkeeping, payroll, and business consulting.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['AccountingService', 'LocalBusiness'],
  '@id': 'https://www.klingemancpas.com/#organization',
  name: BUSINESS_INFO.name,
  url: 'https://www.klingemancpas.com',
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1156,
    longitude: -95.9016,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Tulsa' },
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'City', name: 'Owasso' },
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'City', name: 'Sand Springs' },
    { '@type': 'State', name: 'Oklahoma' },
  ],
  founder: {
    '@type': 'Person',
    name: FOUNDER_INFO.name,
    jobTitle: FOUNDER_INFO.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B1E3C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <div className="grain-overlay" />
      </body>
    </html>
  );
}
