import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateOrganizationSchema } from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tulsa CPA | Klingeman CPAs - Former IRS Management Experience",
  description: "Professional CPA services in Tulsa, OK. Former IRS manager with 20+ years experience. Tax preparation, bookkeeping, payroll, and business consulting.",
  metadataBase: new URL('https://klingemancpa.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
