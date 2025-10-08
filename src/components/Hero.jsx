import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ language }) => {
  const content = {
    fr: {
      title: 'Votreg partenaire de confiance en ingénierie et conseil',
      subtitle: 'Excellence en ingénierie civile et conseil technique au Maroc et en Afrique',
      cta: 'Contactez-nous',
      stats: [
        { value: '10+', label: 'Années d\'expérience' },
        { value: '100+', label: 'Projets réalisés' },
        { value: '8', label: 'Services spécialisés' }
      ]
    },
    en: {
      title: 'Your trusted partner in engineering and consulting',
      subtitle: 'Excellence in civil engineering and technical consulting in Morocco and Africa',
      cta: 'Contact Us',
      stats: [
        { value: '10+', label: 'Years of experience' },
        { value: '8', label: 'Specialized services' }
      ]
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Modern infrastructure and construction in Morocco"
          src="assets/hero.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4C8B]/95 via-[#1A4C8B]/85 to-blue-900/75"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {content[language].title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
              {content[language].subtitle}
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-[#1A4C8B] hover:bg-blue-50 text-lg px-8 py-6 group"
            >
              {content[language].cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {content[language].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;