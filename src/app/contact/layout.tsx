import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Klingeman CPAs',
  description: 'Schedule a consultation with our experienced Tulsa CPAs. Call (918) 922-1019 or send us a message.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
