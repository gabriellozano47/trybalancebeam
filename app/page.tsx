import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <FAQSection />
    </main>
  );
} 