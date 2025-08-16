import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { BlogPreview } from '@/components/home/BlogPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <BlogPreview />
      <TestimonialsSection />
    </>
  );
}