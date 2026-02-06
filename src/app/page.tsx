'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import SignatureService from '@/components/sections/SignatureService';
import Process from '@/components/sections/Process';
import SafeSendCallout from '@/components/sections/SafeSendCallout';
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
      <SafeSendCallout />
      <Proof />
      <Industries />
      <FAQ />
      <Contact />
    </>
  );
}
