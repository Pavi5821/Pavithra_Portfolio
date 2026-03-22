import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-accent/30 selection:text-white">
      <ScrollProgress />
      <Background />
      <Navbar />
      
      <main className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col sm:gap-10 md:gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
