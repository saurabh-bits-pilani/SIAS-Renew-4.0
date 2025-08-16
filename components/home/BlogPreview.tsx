'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getFeaturedBlogs } from '@/lib/data/mockData';

export function BlogPreview() {
  const featuredBlogs = getFeaturedBlogs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-spiritual-gold/10 text-spiritual-gold rounded-full text-sm font-medium mb-4">
            Spiritual Wisdom
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Latest Insights & Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Discover ancient wisdom and modern spiritual insights to guide your journey 
            toward enlightenment and personal transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {featuredBlogs.map((blog, index) => (
            <motion.div key={blog.id} variants={cardVariants}>
              <Card className="h-full card-hover border-0 shadow-lg overflow-hidden bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-spiritual-purple/90 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full mt-4 border-spiritual-purple text-spiritual-purple hover:bg-spiritual-purple hover:text-white transition-all duration-300"
                  >
                    <Link href={`/blog/${blog.slug}`} className="flex items-center justify-center">
                      Read Full Article
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-spiritual-gradient text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link href="/blog" className="flex items-center space-x-2">
              <span>Explore All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}