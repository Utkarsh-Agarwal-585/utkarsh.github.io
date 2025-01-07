import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    icon: string;
  }[];
  index: number;
}

export default function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-black/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg transition-all duration-300 group-hover:bg-blue-500/20">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}