import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { skillCategories } from './skillsData';

export default function Skills() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}