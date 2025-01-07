import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold text-white font-['Dancing_Script']">
          Utkarsh
        </a>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/utkarshagarwal585/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Utkarsh-Agarwal-585" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:utkarshagarwal585@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}