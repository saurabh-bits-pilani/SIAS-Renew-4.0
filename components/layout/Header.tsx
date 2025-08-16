'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Mantras', href: '/mantra' },
  { name: 'Pitra Dosh', href: '/pitra-dosh' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0)' },
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.95)' }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md shadow-lg' : ''
        }`}
        variants={headerVariants}
        initial="initial"
        animate={isScrolled ? 'scrolled' : 'initial'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Star className="w-8 h-8 text-spiritual-purple group-hover:text-spiritual-gold transition-colors duration-300" />
                <div className="absolute inset-0 bg-spiritual-gold opacity-20 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-gray-900 group-hover:text-spiritual-purple transition-colors duration-300">
                  Soul Infinity
                </span>
                <span className="text-xs text-gray-600 -mt-1">Spiritual Guidance</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    pathname === item.href
                      ? 'text-spiritual-purple bg-purple-50'
                      : 'text-gray-700 hover:text-spiritual-purple hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-spiritual-gold transform origin-left transition-transform duration-300 ${
                    pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+91 9079053840</span>
              </div>
              <Button 
                asChild
                className="bg-spiritual-gradient text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-spiritual-purple hover:bg-purple-50 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-200"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? 'text-spiritual-purple bg-purple-50'
                        : 'text-gray-700 hover:text-spiritual-purple hover:bg-purple-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-2 px-4 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 9079053840</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>contact@soul-infinity.com</span>
                  </div>
                  <div className="px-4">
                    <Button 
                      asChild
                      className="w-full bg-spiritual-gradient text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/contact">Book Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-spiritual-gradient origin-left z-50"
        style={{ scaleX: 0 }}
        animate={{ 
          scaleX: typeof window !== 'undefined' ? 
            window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0 
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}