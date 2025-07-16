import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AstrologyWheelSection } from './components/AstrologyWheelSection';
import { ZodiacCompatibilitySection } from './components/ZodiacCompatibilitySection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/20 to-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <AstrologyWheelSection />
        <ZodiacCompatibilitySection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}