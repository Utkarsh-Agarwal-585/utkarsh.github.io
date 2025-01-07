import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  impact: string[];
  companyUrl?: string;
  index: number;
}

export default function ExperienceCard({ company, position, duration, description, impact, companyUrl, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-black/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {companyUrl ? (
              <a 
                href={companyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {company}
              </a>
            ) : company}
          </h3>
          <p className="text-blue-400">{position}</p>
        </div>
        <div className="flex items-center text-gray-400 text-sm bg-blue-500/10 px-3 py-1 rounded-full">
          <Calendar size={16} className="mr-2" />
          {duration}
        </div>
      </div>

      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

      <div>
        <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements</h4>
        <ul className="list-none text-gray-400 space-y-2">
          {impact.map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
              viewport={{ once: true }}
              className="flex items-start space-x-2"
            >
              <span className="text-blue-500 mt-1.5">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}