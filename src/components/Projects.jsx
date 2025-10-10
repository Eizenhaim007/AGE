import React from 'react';
import { motion } from 'framer-motion';
import InfraUrbai_Ecole_AlBoustane from  '../../assets/InfraUrbai_Ecole_AlBoustane.jpg';
import Commerciaux_TourCFC from '../../assets/Commerciaux_TourCFC.png';


const Projects = ({ language }) => {
  const content = {
    fr: {
      title: 'Nos Projets',
      subtitle: 'Une expertise démontrée à travers nos réalisations',
      categories: [
        {
          title: 'Infrastructure Urbaine',
          description: 'Projets d\'aménagement urbain et développement d\'infrastructures',
          image: InfraUrbai_Ecole_AlBoustane // Urban
        },
        {
          title: 'Bâtiments Commerciaux',
          description: 'Conception et réalisation de complexes commerciaux modernes',
          image: Commerciaux_TourCFC // Commercial
        },
        {
          title: 'Projets Industriels',
          description: 'Installations industrielles et zones d\'activité économique',
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' // Industrial
        },
        {
          title: 'Projets Miniers',
          description: 'Études et développement de sites d\'exploitation minière',
          image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b' // Mining
        }
      ]
    },
    en: {
      title: 'Our Projects',
      subtitle: 'Proven expertise through our achievements',
      categories: [
        {
          title: 'Urban Infrastructure',
          description: 'Urban development projects and infrastructure development',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' // Urban
        },
        {
          title: 'Commercial Buildings',
          description: 'Design and construction of modern commercial complexes',
          image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b' // Commercial
        },
        {
          title: 'Industrial Projects',
          description: 'Industrial facilities and economic activity zones',
          image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' // Industrial
        },
        {
          title: 'Mining Projects',
          description: 'Studies and development of mining sites',
          image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b' // Mining
        }
      ]
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#F5F5F5]">
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

        <div className="grid md:grid-cols-2 gap-8">
          {content[language].categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            >
              <div className="relative h-80">
                <img 
                  className="w-full h-full object-cover"
                  alt={`${category.title} project showcase`}
                  src={category.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A4C8B]/90 via-[#1A4C8B]/50 to-transparent group-hover:from-[#1A4C8B]/95 transition-all"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-blue-100">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
