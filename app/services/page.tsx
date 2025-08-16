'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { servicesData, serviceCategories } from '@/lib/data/mockData';

const categories = Object.entries(serviceCategories);

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header Section */}
      <section className="py-20 bg-spiritual-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
              Professional Services
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance">
              Spiritual Services & Guidance
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 text-balance">
              Transform your life through our comprehensive range of spiritual services, 
              from ancient Vedic wisdom to modern healing techniques
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border-gray-300 focus:ring-spiritual-purple focus:border-spiritual-purple"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-spiritual-purple text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-spiritual-purple/10 hover:text-spiritual-purple'
                }`}
              >
                All Services
              </button>
              {categories.map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-spiritual-purple text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-spiritual-purple/10 hover:text-spiritual-purple'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-gray-600">
            Showing {filteredServices.length} of {servicesData.length} services
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <Card className="h-full card-hover border-0 shadow-lg bg-white overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {service.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-spiritual-gold text-black text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-spiritual-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-spiritual-purple/10 text-spiritual-purple text-xs font-medium rounded">
                        {serviceCategories[service.category]?.title}
                      </span>
                      <span className="text-2xl font-bold text-spiritual-purple">
                        {service.price}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
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
                    
                    <div className="flex gap-2 pt-4">
                      <Button 
                        asChild
                        className="flex-1 bg-spiritual-gradient text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <Link href={`/services/${service.category}/${service.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                      <Button 
                        asChild
                        variant="outline"
                        className="border-spiritual-purple text-spiritual-purple hover:bg-spiritual-purple hover:text-white"
                      >
                        <Link href="/contact">
                          Book Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                variant="outline"
                className="border-spiritual-purple text-spiritual-purple hover:bg-spiritual-purple hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spiritual-purple to-spiritual-indigo text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book a consultation today and discover the transformative power of spiritual guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-spiritual-gold text-black hover:bg-yellow-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-spiritual-purple"
            >
              <Link href="/about">Learn About Saurabh</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}