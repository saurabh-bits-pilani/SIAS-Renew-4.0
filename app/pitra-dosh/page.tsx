'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Heart, Flame, Shield, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PitraDoshPage() {
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
              Ancestral Karma
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance">
              Pitra Dosh
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 text-balance">
              Understanding and healing ancestral karmic debts for spiritual liberation 
              and family harmony
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Pitra Dosh Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              What is Pitra Dosh?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Pitra Dosh is a karmic debt in Vedic astrology that occurs when our ancestors' 
              souls are not at peace due to unfulfilled desires, improper funeral rites, or 
              unresolved karmic issues. This ancestral affliction can create obstacles in the 
              descendants' lives until proper remedies are performed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center space-y-4">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900">Karmic Debt</h3>
                <p className="text-gray-600">
                  Unresolved ancestral karma affecting current and future generations
                </p>
              </div>
              <div className="text-center space-y-4">
                <Heart className="w-16 h-16 text-spiritual-purple mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900">Family Healing</h3>
                <p className="text-gray-600">
                  Healing ancestral wounds brings harmony and prosperity to the family lineage
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Causes of Pitra Dosh
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Improper Funeral Rites",
                description: "When proper funeral ceremonies and rituals are not performed for deceased ancestors"
              },
              {
                title: "Disrespect to Parents",
                description: "Ill-treatment, neglect, or disrespect shown to parents and elderly family members"
              },
              {
                title: "Unfulfilled Promises",
                description: "Ancestors' unfulfilled desires, dreams, or promises that remain incomplete"
              },
              {
                title: "Family Disputes",
                description: "Ongoing conflicts, property disputes, or disharmony within the family lineage"
              },
              {
                title: "Neglecting Traditions",
                description: "Not following family traditions, customs, or performing ancestral remembrance rituals"
              },
              {
                title: "Past Life Karma",
                description: "Karmic debts carried forward from previous births affecting the ancestral line"
              }
            ].map((cause, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <Flame className="w-12 h-12 mx-auto mb-4 text-red-500" />
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {cause.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {cause.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Effects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Effects of Pitra Dosh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pitra Dosh can manifest in various aspects of life, creating persistent 
              challenges and obstacles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Personal Life Effects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Delayed or problematic marriage</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Childlessness or fertility issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Recurring health problems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Mental stress and anxiety</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Lack of peace and happiness</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Professional & Financial Effects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Career obstacles and job instability</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Financial difficulties and losses</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Business failures or setbacks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Property disputes and legal issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Blocked opportunities and growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remedies Section */}
      <section className="py-16 bg-gradient-to-br from-spiritual-purple/5 to-spiritual-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Effective Remedies for Pitra Dosh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful spiritual practices and rituals to heal ancestral karma and 
              bring peace to your lineage
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Pitra Paksha Rituals",
                description: "Perform Shraddha and Pind Daan during the sacred 15-day period",
                icon: <Star className="w-8 h-8" />
              },
              {
                title: "Gaya Shraddha",
                description: "Visit Gaya and perform sacred rituals for ancestral liberation",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "Mahamrityunjaya Mantra",
                description: "Chant healing mantras for ancestral peace and family protection",
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: "Brahmin Feeding",
                description: "Feed Brahmins and donate food in the name of ancestors",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "Narayan Bali Puja",
                description: "Perform this powerful ritual to release ancestral souls",
                icon: <Flame className="w-8 h-8" />
              },
              {
                title: "Ancestral Meditation",
                description: "Regular prayers and meditation for forgiveness and healing",
                icon: <Star className="w-8 h-8" />
              }
            ].map((remedy, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full card-hover border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-gradient rounded-full flex items-center justify-center text-white">
                      {remedy.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {remedy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {remedy.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Auspicious Times for Pitra Dosh Remedies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-spiritual-purple">
                    Pitra Paksha (Annual)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    The most powerful 15-day period (usually September-October) dedicated 
                    to ancestral worship and Shraddha rituals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-spiritual-gold" />
                      <span className="text-gray-600">Perform daily Shraddha</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-spiritual-gold" />
                      <span className="text-gray-600">Offer food to ancestors</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-spiritual-gold" />
                      <span className="text-gray-600">Donate to the needy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-spiritual-purple">
                    Monthly Amavasya
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    New moon days are especially powerful for ancestral prayers 
                    and offering water to ancestors.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-spiritual-gold" />
                      <span className="text-gray-600">Offer water (Arghya)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-spiritual-gold" />
                      <span className="text-gray-600">Light sesame oil lamps</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-spiritual-gold" />
                      <span className="text-gray-600">Recite ancestral mantras</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-spiritual-purple/5 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Remember:</strong> Pitra Dosh remedies require sincere devotion, 
                proper guidance, and consistent practice. The key is to approach these 
                rituals with genuine respect for ancestors and a pure heart seeking 
                forgiveness and healing for the entire family lineage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spiritual-purple to-spiritual-indigo text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Guidance for Pitra Dosh Remedies?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get personalized astrological analysis and proper guidance for performing 
            Pitra Dosh remedies effectively
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-spiritual-gold text-black hover:bg-yellow-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                <Shield className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-spiritual-purple"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}