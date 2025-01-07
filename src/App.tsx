import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;