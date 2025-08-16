'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { testimonialsData } from '@/lib/data/mockData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-spiritual-purple/5 to-spiritual-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-spiritual-purple/10 text-spiritual-purple rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Transformative Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Hear from clients whose lives have been transformed through spiritual guidance, 
            healing, and astrological insights
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                  <CardContent className="p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <Quote className="w-12 h-12 text-spiritual-gold" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-spiritual-gold fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <motion.blockquote 
                      className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{currentTestimonial.text}"
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-600">{currentTestimonial.location}</p>
                      <div className="inline-block px-3 py-1 bg-spiritual-purple/10 text-spiritual-purple text-sm rounded-full">
                        {currentTestimonial.service}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              onClick={prevTestimonial}
              size="sm"
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-spiritual-purple/20 hover:bg-spiritual-purple hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              onClick={nextTestimonial}
              size="sm"
              variant="outline"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-spiritual-purple/20 hover:bg-spiritual-purple hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-spiritual-purple w-8' 
                    : 'bg-gray-300 hover:bg-spiritual-purple/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-spiritual-purple">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-spiritual-purple">200+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-spiritual-purple">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}