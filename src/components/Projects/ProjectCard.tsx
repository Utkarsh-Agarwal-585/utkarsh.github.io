import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Technology {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string[];
  technologies: Technology[];
  links?: {
    demo?: string;
    github?: string;
  };
}

export default function ProjectCard({ title, description, impact, technologies, links }: ProjectCardProps) {
  return (
    <div className="bg-black/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-blue-400 mb-2">Impact</h4>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {impact.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center gap-1 text-sm text-gray-500">
            <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      {links && (
        <div className="flex gap-4">
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
              <Github size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}