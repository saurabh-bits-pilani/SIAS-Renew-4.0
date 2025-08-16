'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getFeaturedServices } from '@/lib/data/mockData';

export function ServicesPreview() {
  const featuredServices = getFeaturedServices();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-spiritual-purple/10 text-spiritual-purple rounded-full text-sm font-medium mb-4">
            Featured Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Transformative Spiritual Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Experience profound healing and guidance through our carefully curated spiritual services, 
            each designed to unlock your highest potential
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredServices.map((service, index) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Card className="h-full card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-spiritual-gold text-black text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-medium">{service.duration}</span>
                    <div className="flex items-center text-spiritual-gold mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <span className="text-2xl font-bold text-spiritual-purple">
                      {service.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-spiritual-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full mt-6 bg-spiritual-gradient text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Link href={`/services/${service.category}/${service.slug}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-spiritual-purple text-spiritual-purple hover:bg-spiritual-purple hover:text-white transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link href="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}