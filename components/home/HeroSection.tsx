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
      {/* Background Image - instant switch */}
      <div className="absolute inset-0 z-0">
        <img
          key={currentImage.url}
          src={currentImage.url}
          alt={currentImage.title}
          className="w-full h-full object-cover"
          style={{ transition: 'none' }} // 🚫 disable fade
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

          {/* Main Headline with Blue Background */}
          <div className="mb-6">
            <div className="inline-block bg-blue-500/80 backdrop-blur-sm rounded-xl px-6 py-4 mb-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Free Vedic Astrology Consultation in Ahmedabad –{' '}
                <span className="text-blue-200">Soul Infinity</span>
              </h2>
            </div>
          </div>

          {/* Quote Section with Blue Background */}
          <div className="mb-8">
            <div className="inline-block bg-blue-500/80 backdrop-blur-sm rounded-xl px-6 py-4 mb-4">
              <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
                One whose mind remains undisturbed in sorrow, who does not crave for pleasures, 
                who is free from attachment, fear, and anger, is called a sage of steady wisdom (Sthitadhī Muni).
              </p>
            </div>
            
            <div className="inline-block bg-blue-500/80 backdrop-blur-sm rounded-xl px-6 py-4">
              <p className="text-base md:text-lg text-white font-medium">
                दुःखेष्वनुद्विग्नमना: सुखेषु विगतस्पृह:। वीतरागभयक्रोध: स्थितधीर्मुनिरुच्यते॥
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-8 py-4 text-lg font-medium rounded-xl hover:from-blue-500 hover:to-green-500 transition-all transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Begin Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-amber-800 text-white bg-transparent px-8 py-4 text-lg font-medium rounded-xl hover:bg-amber-800/20 transition-all"
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

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-spiritual-gold' : 'bg-white/50'
            }`}
            aria-label={`Switch to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
