import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="w-full flex flex-col items-center justify-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-accent font-medium tracking-wide"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">Pavithra R</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6 h-12 md:h-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            <Typewriter
              words={[
                'Full Stack Developer',
                'MERN Stack Enthusiast',
              ]}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web applications and developing impactful assistive technologies to solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-accent rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <span className="mr-2">View Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white glass-card rounded-full transition-all hover:bg-slate-800 hover:text-white"
          >
            <Mail size={20} className="mr-2 text-slate-400 group-hover:text-white transition-colors" />
            <span>Contact Me</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
