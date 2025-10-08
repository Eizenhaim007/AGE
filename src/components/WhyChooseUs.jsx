import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ language }) => {
  const content = {
    fr: {
      title: 'Pourquoi Nous Choisir',
      subtitle: 'Les raisons de faire confiance à Africa Global Engineering',
      reasons: [
        {
          title: 'Expérience Éprouvée',
          description: 'Plus de 10 ans d\'expérience dans l\'ingénierie civile et le conseil technique au Maroc et en Afrique'
        },
        {
          title: 'Expertise Multidisciplinaire',
          description: 'Une équipe complète couvrant tous les aspects de l\'ingénierie et de la construction'
        },
        {
          title: 'Engagement Qualité',
          description: 'Respect rigoureux des normes et standards internationaux dans tous nos projets'
        },
        {
          title: 'Présence Régionale',
          description: 'Une connaissance approfondie du marché marocain et africain'
        },
        {
          title: 'Innovation Continue',
          description: 'Utilisation des dernières technologies et méthodologies en ingénierie'
        },
        {
          title: 'Accompagnement Personnalisé',
          description: 'Un suivi sur mesure adapté aux besoins spécifiques de chaque client'
        }
      ]
    },
    en: {
      title: 'Why Choose Us',
      subtitle: 'Reasons to trust Africa Global Engineering',
      reasons: [
        {
          title: 'Proven Experience',
          description: 'Over 10 years of experience in civil engineering and technical consulting in Morocco and Africa'
        },
        {
          title: 'Multidisciplinary Expertise',
          description: 'A complete team covering all aspects of engineering and construction'
        },
        {
          title: 'Quality Commitment',
          description: 'Rigorous compliance with international standards and norms in all our projects'
        },
        {
          title: 'Regional Presence',
          description: 'In-depth knowledge of the Moroccan and African market'
        },
        {
          title: 'Continuous Innovation',
          description: 'Use of the latest technologies and methodologies in engineering'
        },
        {
          title: 'Personalized Support',
          description: 'Customized follow-up adapted to the specific needs of each client'
        }
      ]
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A4C8B] mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A4C8B] mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;