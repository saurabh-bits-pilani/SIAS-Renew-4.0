'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  {
    url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/New_Hero-image-%20banner%20/golden_hour_cinematic_temple_scene_with_a_small.webp',
    title: 'Sacred Temple Meditation',
    subtitle: 'Connect with ancient wisdom'
  },
  {
    url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/New_Hero-image-%20banner%20/cinematic_macro_shot_of_a_spiritual_ritual.webp',
    title: 'Crystal Energy Healing',
    subtitle: 'Balance your chakras'
  },
  {
    url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/New_Hero-image-%20banner%20/atmospheric_himalayan_cave_interior_lit_by_flickering.webp',
    title: 'Vedic Astrology Guidance',
    subtitle: 'Discover your destiny'
  },
  {
    url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/New_Hero-image-%20banner%20/cinematic_himalayan_cave_illuminated_by_flickering_oil.webp',
    title: 'Mystical Spiritual Journey',
    subtitle: 'Transform your life'
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentImage.url})` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div>
          {/* Logo & Brand */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="relative">
              <Star className="w-12 h-12 text-spiritual-gold" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Soul Infinity</h1>
              <p className="text-lg text-gray-200">Spiritual Guidance & Transformation</p>
            </div>
          </div>

          {/* Dynamic Headlines */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-spiritual-gold">
              {currentImage.title}
            </h2>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-balance">
              {currentImage.subtitle}
            </p>
          </div>

          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 text-balance">
            Unlock the mysteries of your destiny with expert Vedic & Western astrology, 
            transformative healing services, and powerful mantras guided by Saurabh Jain
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-spiritual-gold text-black hover:bg-yellow-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-spiritual-purple transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Explore Services</span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <div className="flex justify-center items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-spiritual-gold fill-current" />
              ))}
              <span className="text-gray-200 ml-2">4.9/5 from 200+ clients</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-2xl font-bold text-spiritual-gold">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-spiritual-gold">1000+</div>
                <div className="text-sm text-gray-300">Lives Transformed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-spiritual-gold">24/7</div>
                <div className="text-sm text-gray-300">Spiritual Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm">Discover Your Path</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-spiritual-gold' : 'bg-white/50'
            }`}
            aria-label={`Switch to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
