import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-darker/80 backdrop-blur-md py-8 mt-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tighter text-gradient mb-2">Pavithra R</span>
          <p className="text-slate-400 text-sm text-center md:text-left">
            Building scalable web applications and assistive technologies.
          </p>
        </div>

        <div className="flex space-x-5">
          <a href="https://github.com/Pavi5821" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/pavithra48" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:pavithraraj538@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      <div className="mt-8 border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-center gap-2 text-slate-500 text-sm">
        <p>&copy; {currentYear} Pavithra R. All rights reserved.</p>
        <span className="hidden md:inline">•</span>
        <p className="flex items-center gap-1">
          Made with <Heart size={14} className="text-red-500 animate-pulse" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
