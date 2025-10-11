import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

const About = ({ language }) => {
  const content = {
    fr: {
      title: 'À Propos',
      subtitle: 'Excellence et Innovation en Ingénierie Civile',
      description: 'Africa Global Engineering est un cabinet d\'ingénierie et de conseil de premier plan. Nous offrons une expertise multidisciplinaire en ingénierie civile, avec une présence forte au Maroc et à travers l\'Afrique.',
      vision: 'Notre vision est de devenir le partenaire de référence pour tous les projets d\'infrastructure et de construction, en combinant expertise technique, innovation et engagement envers la qualité.',
      values: [
        {
          icon: Award,
          title: 'Excellence',
          description: 'Nous visons l\'excellence dans chaque projet que nous entreprenons'
        },
        {
          icon: Users,
          title: 'Expertise',
          description: 'Une équipe multidisciplinaire de professionnels expérimentés'
        },
        {
          icon: Target,
          title: 'Engagement',
          description: 'Engagement total envers la satisfaction de nos clients'
        }
      ]
    },
    en: {
      title: 'About Us',
      subtitle: 'Excellence and Innovation in Engineering',
      description: 'Africa Global Engineering is a leading engineering and consulting firm, led by Soufiane Lahlou. We offer multidisciplinary expertise in civil engineering, with a strong presence in Morocco and across Africa.',
      vision: 'Our vision is to become the reference partner for all infrastructure and construction projects, combining technical expertise, innovation and commitment to quality.',
      values: [
        {
          icon: Award,
          title: 'Excellence',
          description: 'We aim for excellence in every project we undertake'
        },
        {
          icon: Users,
          title: 'Expertise',
          description: 'A multidisciplinary team of experienced professionals'
        },
        {
          icon: Target,
          title: 'Commitment',
          description: 'Total commitment to customer satisfaction'
        }
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F5F5F5]">
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              alt="Africa Global Engineering team and office"
             src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              {content[language].description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              {content[language].vision}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content[language].values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A4C8B] mb-3">{value.title}</h3>
                {value.description}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;