'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Heart, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mantraData } from '@/lib/data/mockData';

export default function MantraPage() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [playingAudio, setPlayingAudio] = useState<HTMLAudioElement | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const handlePlayPause = (mantraId: string, audioUrl: string) => {
    // If same audio is playing, pause it
    if (currentlyPlaying === mantraId && playingAudio) {
      playingAudio.pause();
      setCurrentlyPlaying(null);
      setPlayingAudio(null);
      return;
    }

    // Stop any currently playing audio
    if (playingAudio) {
      playingAudio.pause();
      playingAudio.currentTime = 0;
    }

    // Create new audio or use existing reference
    let audio = audioRefs.current[mantraId];
    if (!audio) {
      // For demo purposes, we'll use a placeholder audio file
      // In production, this would be the actual mantra audio from Cloudflare R2
      audio = new Audio('/audio/placeholder-mantra.mp3'); // Demo file
      audio.loop = false;
      audioRefs.current[mantraId] = audio;
      
      audio.addEventListener('ended', () => {
        setCurrentlyPlaying(null);
        setPlayingAudio(null);
      });
    }

    audio.play().then(() => {
      setCurrentlyPlaying(mantraId);
      setPlayingAudio(audio);
    }).catch((error) => {
      console.log('Audio playback failed:', error);
      // Fallback: show visual indication that mantra is "playing"
      setCurrentlyPlaying(mantraId);
      setTimeout(() => {
        setCurrentlyPlaying(null);
      }, 30000); // Auto-stop after 30 seconds for demo
    });
  };

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
              Sacred Mantras
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-balance">
              Planetary Mantras
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 text-balance">
              Harness the power of sacred Sanskrit vibrations to balance planetary influences 
              and enhance your spiritual journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              The Science of Mantras
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mantras are sacred sounds that create specific vibrations to align your energy with 
              cosmic forces. Each planetary mantra helps balance the influence of specific planets 
              in your birth chart, promoting harmony, healing, and spiritual growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-3">
                <Volume2 className="w-8 h-8 text-spiritual-purple mx-auto" />
                <h3 className="font-semibold text-gray-900">Sacred Vibrations</h3>
                <p className="text-sm text-gray-600">
                  Each mantra creates specific sound frequencies that resonate with planetary energies
                </p>
              </div>
              <div className="text-center space-y-3">
                <Heart className="w-8 h-8 text-spiritual-purple mx-auto" />
                <h3 className="font-semibold text-gray-900">Healing Power</h3>
                <p className="text-sm text-gray-600">
                  Regular chanting promotes physical, mental, and spiritual well-being
                </p>
              </div>
              <div className="text-center space-y-3">
                <Info className="w-8 h-8 text-spiritual-purple mx-auto" />
                <h3 className="font-semibold text-gray-900">Ancient Wisdom</h3>
                <p className="text-sm text-gray-600">
                  Mantras are based on thousands of years of Vedic knowledge and spiritual practice
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mantras Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mantraData.map((mantra) => (
              <motion.div key={mantra.id} variants={cardVariants}>
                <Card className="h-full card-hover border-0 shadow-lg bg-white overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-gradient rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {mantra.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {mantra.planet} Mantra
                    </CardTitle>
                    <p className="text-spiritual-purple font-medium">
                      {mantra.translation}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Sanskrit Text */}
                    <div className="text-center p-4 bg-spiritual-purple/5 rounded-lg">
                      <p className="text-lg font-serif text-gray-900 leading-relaxed">
                        {mantra.sanskrit}
                      </p>
                    </div>

                    {/* Audio Player */}
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handlePlayPause(mantra.id, mantra.audioUrl)}
                        size="lg"
                        className={`bg-spiritual-gradient text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ${
                          currentlyPlaying === mantra.id ? 'animate-pulse' : ''
                        }`}
                      >
                        {currentlyPlaying === mantra.id ? (
                          <Pause className="w-6 h-6 mr-2" />
                        ) : (
                          <Play className="w-6 h-6 mr-2" />
                        )}
                        {currentlyPlaying === mantra.id ? 'Playing...' : 'Listen'}
                      </Button>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Benefits:</h4>
                      <ul className="space-y-1">
                        {mantra.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-spiritual-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Chanting Rules */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Chanting Guidelines:</h4>
                      <ul className="space-y-1">
                        {mantra.chantingRules.slice(0, 2).map((rule, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-spiritual-purple rounded-full mt-2 mr-2 flex-shrink-0" />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instructions Section */}
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
                How to Practice Mantras
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-spiritual-purple">General Guidelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-spiritual-purple text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span className="text-gray-600">Choose a quiet, clean space for practice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-spiritual-purple text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span className="text-gray-600">Sit comfortably with spine erect</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-spiritual-purple text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span className="text-gray-600">Use a mala (prayer beads) for counting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-spiritual-purple text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span className="text-gray-600">Maintain regular practice time</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-spiritual-purple">Best Times to Chant</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-spiritual-gold rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600"><strong>Brahma Muhurta:</strong> 4:00-6:00 AM (most powerful)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-spiritual-gold rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600"><strong>Sunrise:</strong> As the sun rises</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-spiritual-gold rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600"><strong>Sunset:</strong> During twilight hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-spiritual-gold rounded-full flex-shrink-0"></span>
                    <span className="text-gray-600"><strong>Before Sleep:</strong> For peaceful rest</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-spiritual-purple/5 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Remember:</strong> Consistency is more important than duration. Even 10 minutes 
                of daily practice with devotion and proper pronunciation will bring profound benefits. 
                Start slowly and gradually increase your practice as you feel comfortable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}