import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = ({ language }) => {
  const content = {
    fr: {
      rights: 'Tous droits réservés',
      director: 'Directeur: Soufiane Lahlou'
    },
    en: {
      rights: 'All rights reserved',
      director: 'Director: Soufiane Lahlou'
    }
  };

  return (
    <footer className="bg-[#1A4C8B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1A4C8B] font-bold text-xl">AGE</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Africa Global Engineering</h3>
                <p className="text-sm text-blue-200">Engineering & Consulting</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm">{content[language].director}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-blue-200 text-sm mb-2">45 Rue Atlas, étage 4, Numéro 16</p>
            <p className="text-blue-200 text-sm mb-2">Maarif, Casablanca, Maroc</p>
            <p className="text-blue-200 text-sm">+212 6 62 600 529</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Suivez-nous / Follow Us</h4>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Africa Global Engineering. {content[language].rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;