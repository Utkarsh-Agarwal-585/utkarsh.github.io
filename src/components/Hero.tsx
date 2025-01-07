import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      
      <div className="relative text-center space-y-6 max-w-3xl mx-auto px-4"
      style={{
        background: "radial-gradient(closest-side, rgba(81, 185, 200, 0.4) 0%, rgba(81, 185, 200, 0.1) 50%, rgba(81, 185, 200, 0) 100%)",
      }}>
        <p className="text-gray-400 uppercase tracking-wider">BASED IN INDIA</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Software Engineer
          <br />
          <span className="text-blue-500">Specializing In Full Stack</span>
          <br />
          Applications
        </h1>
        <p className="text-gray-300 text-xl">
          Hi, I'm Utkarsh, I create solutions across all layers of software engineering.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            See My Work
          </a>
          <a href="/Utkarsh_CV.pdf" download="Utkarsh_CV.pdf" className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}