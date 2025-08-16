'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getServiceBySlug, serviceCategories } from '@/lib/data/mockData';

interface ServicePageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }

  const categoryInfo = serviceCategories[service.category as keyof typeof serviceCategories];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Breadcrumb */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-spiritual-purple transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-spiritual-purple transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link 
              href={`/services?category=${service.category}`}
              className="hover:text-spiritual-purple transition-colors"
            >
              {categoryInfo?.title}
            </Link>
            <span>/</span>
            <span className="text-spiritual-purple">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Service Header */}
      <section className="py-16 bg-spiritual-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                  {categoryInfo?.title}
                </span>
                {service.featured && (
                  <span className="px-3 py-1 bg-spiritual-gold text-black rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                {service.title}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">{service.price}</span>
                </div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-spiritual-gold fill-current" />
                  ))}
                </div>
              </div>

              <Button 
                asChild
                size="lg"
                className="bg-spiritual-gold text-black hover:bg-yellow-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-spiritual-purple mb-4">
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Experience transformative results through this powerful spiritual service:
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-spiritual-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-spiritual-purple mb-4">
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-6">
                    Our structured approach ensures you receive maximum value from your consultation:
                  </p>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-spiritual-gradient text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 mt-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spiritual-purple to-spiritual-indigo text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Experience {service.title}?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your consultation today and take the first step toward spiritual transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-spiritual-gold text-black hover:bg-yellow-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Book Consultation - {service.price}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-spiritual-purple"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}