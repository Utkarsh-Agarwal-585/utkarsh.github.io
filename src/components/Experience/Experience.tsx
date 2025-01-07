import React from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "LunaJoy",
      position: "Full Stack Developer",
      duration: "Sep 2024 - Present",
      description: "LunaJoy, a rapidly growing startup in US backed by Y Combinator is a precision mental health care platform that is specialized in women's mental health through all phases of life.",
      impact: [
        "Reduced appointment scheduling time by 60%",
        "Enhanced analytics and tracking through automation and data integration",
        "Streamlined website navigation across multiple subdomains",
        "Optimized secure secret retrieval in AWS infrastructure",
        "Increased revenue by 30% with improved patient assessment tracking",
        "Improved application speed by 20% through performance optimization"
      ],
      companyUrl: "https://hellolunajoy.com"
    },
    {
      company: "Rhizicube Technologies",
      position: "Software Developent Engineer",
      duration: "June 2022 - Sep 2024", 
      description: "Rhizicube stands as an advanced technology enterprise, dedicated to delivering holistic solutions for both startups and enterprises.",
      impact: [
        "Designed scalable and robust architectures, enabling systems to handle increased demands effectively",
        "Increased email delivery volume from 20M/day to 50M/day by addressing DNS challenges and enhancing the MTA UI",
        "Improved data visualization and analysis by integrating advanced statistical graphs in Grafana",
        "Boosted customer engagement by 30% through a secure WhatsApp chatbot using Botpress, with seamless integration and intuitive conversation paths",
        "Reduced data upload time by 35% and improved processing efficiency by 30% for Google Ads Customer Match uploads",
        "Enhanced user profile consolidation by 30%, creating a scalable MVP similar to Linktree",
        "Escalated email campaign engagement by 25% with an advanced email editor supporting drag-and-drop features for HTML and AMP templates"
      ],
      companyUrl: "https://www.rhizicube.ai"
    },
    {
      company: "InfoSync IT Solutions Pvt",
      position: "Mobile App Developer",
      duration: "May 2021 - May 2022",
      description: "Built a product called Lynks (TMS) is a multi-functional, Cloud based(TMS) designed for carriers,shippers, customers, receivers, dispatchers and brokers of all sizes",
      impact: [
        "Reduced app size by 20%, improving performance and efficiency",
        "Implemented deep linking, search functionality, multi-document upload, and payment gateways to enhance application functionality",
        "Enhanced user experience with dispatcher features and support systems for drivers",
        "Streamlined onboarding for shippers and carriers with standardized templates and workflows"
      ],
    },
  ];

  return (
    <section id='work' className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12"
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}