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
          title: "Assistance à la Maîtrise d'Ouvrage (AMO)",
          description:
            "Assister la maîtrise d’ouvrage depuis le lancement du projet jusqu’à la réalisation de l’ouvrage, en passant par la définition des besoins, le montage financier, l’expertise technique et la proposition de solutions innovantes pour les différentes problématiques.",
        },
        {
          icon: Building2,
          title: "Maîtrise d'Ouvrage Déléguée (MOD)",
          description:
            "Les maîtres d’ouvrage publics ou privés peuvent nous mandater d’exécuter en leurs noms et pour leurs comptes la totalité de leurs projets TCE. Nous assurons ainsi une gestion complète et proactive des parties prenantes, des coûts, des délais et de la qualité de vos projets.",
        },
        {
          icon: FileText,
          title: "Études Techniques Tout Corps d'État",
          description:
            "Apporter une solution sur mesure, efficace, cohérente et globale assurant la réussite du projet dans les meilleures conditions de coûts, délais et qualité. Ces études concernent : Bâtiment et Structures, Charpente Métallique, Plomberie et Fluides, Électricité courant fort et courant faible, lots architecturaux, VRD, Barrages et Ports.",
        },
        {
          icon: Eye,
          title: "Suivi Technique des Travaux",
          description:
            "Assurer la mission de suivi des travaux d’exécution TCE en veillant sur le respect des exigences techniques du projet en contrôlant les travaux réalisés par rapport aux plans d’exécution et documents contractuels.",
        },
        {
          icon: Calendar,
          title: "Ordonnancement, Pilotage et Coordination (OPC)",
          description:
            "Piloter et planifier les études et les travaux TCE. Suivre l’avancement, coordonner l’interface entre les différents intervenants, rendre compte au maître d’ouvrage, vérifier les attachements et décomptes tout en respectant le délai et les exigences des marchés.",
        },
        {
          icon: Calculator,
          title: "Expertise, Conseil et Économie de la Construction",
          description:
            "Optimiser les études et réduire le coût de la construction pour tous les corps d’états, de la conception au DCE, choisir les meilleures solutions et variantes techniques, décrire les matériaux à utiliser, estimer leurs impacts financiers et assurer le suivi financier au cours des travaux.",
        },
        {
          icon: Map,
          title: "Études Topographiques Complètes",
          description:
            "Réaliser toutes les études topographiques (Bâtiment, VRD, Routes, Pistes, Barrages, Ouvrages d’Art).",
        },
        {
          icon: Mountain,
          title: "Ingénierie Minière",
          description:
            "Conseils et études techniques en ingénierie minière souterraine et à ciel ouvert.",
        },
      ],
    },
    en: {
      title: 'Our Services',
      subtitle: 'Complete expertise for all your projects',
      services: [
        {
          icon: ClipboardCheck,
          title: 'Project Management Assistance (AMO)',
          description: 'Assist the project owner from launch to completion, including needs definition, financial setup, technical expertise, and innovative solutions for various challenges.',
        },
        {
          icon: Building2,
          title: 'Delegated Project Ownership (MOD)',
          description: 'Public or private project owners can mandate us to execute all their TCE projects. We ensure complete and proactive management of stakeholders, costs, deadlines, and quality.',
        },
        {
          icon: FileText,
          title: 'Technical Studies All Trades',
          description: 'Provide tailored, effective, coherent, and comprehensive solutions ensuring project success under optimal cost, time, and quality conditions. These studies include: Building and Structures, Metal Framework, Plumbing and Fluids, High and Low Voltage Electricity, Architectural lots, VRD, Dams, and Ports.',
        },
        {
          icon: Eye,
          title: 'Technical Work Supervision',
          description: 'Ensure supervision of TCE execution works, monitoring compliance with technical requirements by checking work against execution plans and contractual documents.',
        },
        {
          icon: Calendar,
          title: 'Scheduling, Management and Coordination (OPC)',
          description: 'Manage and schedule TCE studies and works. Track progress, coordinate interfaces between stakeholders, report to the project owner, verify attachments and statements, all while respecting deadlines and market requirements.',
        },
        {
          icon: Calculator,
          title: 'Expertise and Construction Economics',
          description: 'Optimize studies and reduce construction costs for all trades, from design to DCE, select the best solutions and technical variants, describe materials to be used, estimate their financial impact, and ensure financial monitoring during works.',
        },
        {
          icon: Map,
          title: 'Complete Topographic Studies',
          description: 'Carry out all topographic studies (Building, VRD, Roads, Tracks, Dams, Engineering Structures).',
        },
        {
          icon: Mountain,
          title: 'Mining Engineering',
          description: 'Consulting and technical studies in underground and open-pit mining engineering.',
        },
      ],
    },
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