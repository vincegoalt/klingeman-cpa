import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/components/SEO';

export const metadata: Metadata = generateSEO({
  title: 'Contact Your Tulsa CPA',
  description: 'Contact Klingeman CPAs for expert tax preparation and business consulting services in Tulsa. Schedule your free consultation with our former IRS manager today.',
  canonical: '/contact'
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}