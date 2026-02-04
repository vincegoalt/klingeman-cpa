'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import SignatureService from '@/components/sections/SignatureService';
import Process from '@/components/sections/Process';
import Proof from '@/components/sections/Proof';
import Industries from '@/components/sections/Industries';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SignatureService />
      <Process />
      <Proof />
      <Industries />
      <FAQ />
      <Contact />
    </>
  );
}
