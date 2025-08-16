'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance">
              Contact Soul Infinity
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 text-balance">
              Ready to begin your spiritual journey? Reach out for personalized guidance 
              and transformative experiences
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-serif text-spiritual-purple">
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-spiritual-purple mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <a
                          href="tel:+919079053840"
                          className="text-gray-600 hover:text-spiritual-purple transition-colors duration-300"
                        >
                          +91 9079053840
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Available 9 AM - 8 PM IST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-spiritual-purple mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a
                          href="mailto:contact@soul-infinity.com"
                          className="text-gray-600 hover:text-spiritual-purple transition-colors duration-300"
                        >
                          contact@soul-infinity.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-spiritual-purple mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Location</h3>
                        <p className="text-gray-600">India</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Online consultations worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-spiritual-purple mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                          <p>Sunday: 10:00 AM - 6:00 PM</p>
                          <p className="text-spiritual-purple">IST (Indian Standard Time)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* WhatsApp Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">WhatsApp Support</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Get instant response for quick questions
                        </p>
                        <Button
                          asChild
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          <a
                            href="https://wa.me/919079053840"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat on WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-serif text-spiritual-purple">
                      Book Your Consultation
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full focus:ring-spiritual-purple focus:border-spiritual-purple"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full focus:ring-spiritual-purple focus:border-spiritual-purple"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full focus:ring-spiritual-purple focus:border-spiritual-purple"
                              placeholder="+91 9876543210"
                            />
                          </div>
                          <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                              Service Interest
                            </label>
                            <Select value={formData.service} onValueChange={handleSelectChange}>
                              <SelectTrigger className="focus:ring-spiritual-purple focus:border-spiritual-purple">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="vedic-astrology">Vedic Astrology</SelectItem>
                                <SelectItem value="western-astrology">Western Astrology</SelectItem>
                                <SelectItem value="crystal-healing">Crystal Healing</SelectItem>
                                <SelectItem value="pranic-healing">Pranic Healing</SelectItem>
                                <SelectItem value="tarot-reading">Tarot Reading</SelectItem>
                                <SelectItem value="astro-vastu">Astro Vastu</SelectItem>
                                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full focus:ring-spiritual-purple focus:border-spiritual-purple resize-none"
                            placeholder="Tell us about your spiritual needs, questions you have, or what you'd like to achieve through our services..."
                          />
                        </div>

                        <div className="bg-spiritual-purple/5 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <strong>Note:</strong> All consultations are confidential and conducted with utmost care. 
                            We respect your privacy and will never share your personal information.
                          </p>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-spiritual-gradient text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12 space-y-4"
                      >
                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
                        <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                          Thank you for reaching out. We've received your message and will respond within 24 hours.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
                          <p className="text-green-800 text-sm">
                            <strong>What's Next?</strong><br />
                            We'll review your request and send you a detailed response with next steps for your spiritual journey.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How long is a typical consultation?</h3>
                <p className="text-gray-600 text-sm">
                  Consultations range from 45-120 minutes depending on the service. Detailed readings typically take 90 minutes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you offer online consultations?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we conduct consultations worldwide via video call, phone, or WhatsApp based on your preference.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What information do I need for astrology reading?</h3>
                <p className="text-gray-600 text-sm">
                  You'll need your date, time, and place of birth for accurate chart calculation and analysis.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are your services confidential?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely. All consultations are completely confidential and your personal information is kept secure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide remedies and solutions?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we provide practical remedies including gemstones, mantras, rituals, and lifestyle recommendations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I get a free consultation?</h3>
                <p className="text-gray-600 text-small">
                  We offer a 15-minute free consultation for first-time clients to understand your needs and our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}