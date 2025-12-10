import React from 'react';
import { Header, Footer, FixedFooter } from '@/components/layout/HeaderFooter';
import { 
  Hero, 
  Campaign, 
  Plan, 
  StudioSearch, 
  Reason, 
  Voice, 
  TrialFlow 
} from '@/components/sections/MainSections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-main antialiased pb-safe">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Campaign />
        <Plan />
        <StudioSearch />
        <Reason />
        <Voice />
        <TrialFlow />
      </main>
      <Footer />
      <FixedFooter />
    </div>
  );
}