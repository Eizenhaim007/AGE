import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Building2, FileText, Eye, Calendar, Calculator, Map, Mountain } from 'lucide-react';

const Services = ({ language }) => {
  const content = {
    fr: {
      title: 'Nos Services',
      subtitle: 'Une expertise complète pour tous vos projets',
      services: [
        {
          icon: ClipboardCheck,
          title: 'Assistance à la Maîtrise d\'Ouvrage (AMO)',
          description: 'Accompagnement stratégique et technique pour la réussite de vos projets'
        },
        {
          icon: Building2,
          title: 'Maîtrise d\'Ouvrage Déléguée (MOD)',
          description: 'Gestion complète de vos projets de construction et d\'infrastructure'
        },
        {
          icon: FileText,
          title: 'Études Techniques Tout Corps d\'État',
          description: 'Études détaillées pour tous les aspects techniques de vos projets'
        },
        {
          icon: Eye,
          title: 'Suivi Technique des Travaux',
          description: 'Supervision et contrôle qualité de l\'exécution des travaux'
        },
        {
          icon: Calendar,
          title: 'Ordonnancement, Pilotage et Coordination (OPC)',
          description: 'Optimisation de la planification et coordination des travaux'
        },
        {
          icon: Calculator,
          title: 'Expertise et Économie de la Construction',
          description: 'Conseil en optimisation des coûts et expertise technique'
        },
        {
          icon: Map,
          title: 'Études Topographiques Complètes',
          description: 'Relevés et analyses topographiques de haute précision'
        },
        {
          icon: Mountain,
          title: 'Ingénierie Minière',
          description: 'Études et conseil spécialisés en exploitation minière'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Complete expertise for all your projects',
      services: [
        {
          icon: ClipboardCheck,
          title: 'Project Management Assistance (AMO)',
          description: 'Strategic and technical support for the success of your projects'
        },
        {
          icon: Building2,
          title: 'Delegated Project Ownership (MOD)',
          description: 'Complete management of your construction and infrastructure projects'
        },
        {
          icon: FileText,
          title: 'Technical Studies All Trades',
          description: 'Detailed studies for all technical aspects of your projects'
        },
        {
          icon: Eye,
          title: 'Technical Work Supervision',
          description: 'Supervision and quality control of work execution'
        },
        {
          icon: Calendar,
          title: 'Scheduling, Management and Coordination (OPC)',
          description: 'Optimization of planning and work coordination'
        },
        {
          icon: Calculator,
          title: 'Expertise and Construction Economics',
          description: 'Cost optimization consulting and technical expertise'
        },
        {
          icon: Map,
          title: 'Complete Topographic Studies',
          description: 'High-precision topographic surveys and analyses'
        },
        {
          icon: Mountain,
          title: 'Mining Engineering',
          description: 'Specialized studies and consulting in mining operations'
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#F5F5F5] to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1A4C8B] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;