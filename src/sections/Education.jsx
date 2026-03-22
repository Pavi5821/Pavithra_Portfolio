import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Scroll } from 'lucide-react';

const education = [
  {
    degree: 'B.E. Electronics and Communication Engineering',
    institution: 'College/University Name',
    year: '2022 – 2026',
    score: 'CGPA: 8.39',
    icon: <GraduationCap size={24} className="text-accent" />
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'School Name',
    year: 'Completed',
    score: 'Percentage: 89.3%',
    icon: <BookOpen size={24} className="text-blue-500" />
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'School Name',
    year: 'Completed',
    score: 'Percentage: 90%',
    icon: <Scroll size={24} className="text-emerald-500" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative z-10 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-center"
        >
          My <span className="text-gradient">Education</span>
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {education.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass-card p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.degree}</h3>
            <p className="text-slate-400 text-sm mb-4 flex-grow">{item.institution}</p>
            <div className="w-full bg-slate-800/50 rounded-lg py-2 mb-2">
              <p className="text-accent font-semibold">{item.score}</p>
            </div>
            <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">{item.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
