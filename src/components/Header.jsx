import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    fr: {
      nav: ['Accueil', 'À Propos', 'Services', 'Projets', 'Pourquoi Nous', 'Contact'],
      contact: 'Contactez-nous'
    },
    en: {
      nav: ['Home', 'About', 'Services', 'Projects', 'Why Us', 'Contact'],
      contact: 'Contact Us'
    }
  };

  const scrollToSection = (index) => {
    const sections = ['hero', 'about', 'services', 'projects', 'why-choose-us', 'contact'];
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AGE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1A4C8B]">Africa Global Engineering</h1>
              <p className="text-xs text-gray-600">Engineering & Consulting</p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {content[language].nav.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="text-gray-700 hover:text-[#1A4C8B] font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'fr' ? 'EN' : 'FR'}</span>
            </Button>
            <Button
              onClick={() => scrollToSection(5)}
              className="bg-[#1A4C8B] hover:bg-blue-700 text-white"
            >
              {content[language].contact}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t pt-4"
          >
            <nav className="flex flex-col space-y-4">
              {content[language].nav.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="text-gray-700 hover:text-[#1A4C8B] font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center space-x-2 justify-start"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'fr' ? 'English' : 'Français'}</span>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;