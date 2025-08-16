'use client';

import React from 'react';
import Link from 'next/link';
import { Star, Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

const services = [
  { name: 'Vedic Astrology', href: '/services/vedic-astrology' },
  { name: 'Crystal Healing', href: '/services/healing/crystal-healing' },
  { name: 'Tarot Reading', href: '/services/western-astrology/tarot-reading' },
  { name: 'Pranic Healing', href: '/services/healing/pranic-healing' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'Sitemap', href: '/sitemap' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-spiritual-gold" />
              <div>
                <h3 className="text-xl font-serif font-bold">Soul Infinity</h3>
                <p className="text-sm text-gray-400">Spiritual Guidance</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover your spiritual path through expert astrology readings, healing services, 
              and sacred mantras. Professional guidance for your soul's journey.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/soulinfinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919079053840"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-spiritual-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-spiritual-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-spiritual-gold">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-spiritual-gold transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-spiritual-gold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-spiritual-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a
                    href="tel:+919079053840"
                    className="text-white hover:text-spiritual-gold transition-colors duration-300"
                  >
                    +91 9079053840
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-spiritual-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a
                    href="mailto:contact@soul-infinity.com"
                    className="text-white hover:text-spiritual-gold transition-colors duration-300"
                  >
                    contact@soul-infinity.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-spiritual-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="text-white">India</p>
                </div>
              </div>

              <Button 
                asChild
                className="w-full bg-spiritual-gradient hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 mt-4"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Practitioner Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-spiritual-gold">Saurabh Jain</h3>
            <p className="text-gray-300 text-sm">
              Professional Astrologer & Spiritual Healer with over 10 years of experience in 
              Vedic Astrology, KP System, Crystal Healing, and Pranic Healing
            </p>
            <div className="flex justify-center space-x-2 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9/5 (200+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Soul Infinity. All rights reserved. Made with ♥ for spiritual seekers.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-spiritual-gold transition-colors duration-300 text-xs"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}