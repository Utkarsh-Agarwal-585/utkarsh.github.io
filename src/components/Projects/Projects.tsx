import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <section className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}