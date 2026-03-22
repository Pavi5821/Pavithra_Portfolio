import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-gradient">Experience</span>
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 md:pl-0"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-[50%]"></div>
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800 translate-x-[15px]"></div>

          <div className="relative mb-12 flex flex-col md:flex-row justify-between items-center w-full">
            <div className="order-1 md:w-5/12"></div>
            
            <div className="z-20 flex items-center justify-center order-1 bg-darker w-10 h-10 rounded-full border-4 border-accent absolute left-0 md:left-[50%] -translate-x-2 md:-translate-x-[50%]">
              <Code size={16} className="text-accent" />
            </div>
            
            <div className="order-1 glass-card p-6 w-full md:w-5/12 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-accent">
                <Briefcase size={18} />
                <span className="font-semibold text-sm">Zealous Tech Corp</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Python Developer Intern</h3>
              <span className="text-sm text-slate-400 font-medium tracking-wider mb-4 block">Dec 2024 – Jan 2025</span>
              <p className="text-slate-300 text-sm leading-relaxed">
                Gained hands-on experience by mastering Python fundamentals and object-oriented programming concepts. Contributed to internal coding tasks and actively participated in technical training sessions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
