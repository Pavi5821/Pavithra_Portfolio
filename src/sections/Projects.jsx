import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Database, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Student Management System',
    description: 'A comprehensive full-stack application featuring robust role-based access control (Admin & Student) with complete CRUD operations and secure REST API integrations.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    icon: <Database className="text-blue-400" size={32} />,
    gradient: 'from-blue-500/20 to-purple-500/20',
    // demoUrl: '#',
    // githubUrl: '#'
  },
  {
    title: 'She Count – Financial Planner',
    description: 'A specialized budget tracking web application aimed at enhancing financial awareness for women. It utilizes efficient LocalStorage-based data handling for offline capabilities.',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    icon: <Activity className="text-emerald-400" size={32} />,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'IoT Eye-Control Wheelchair',
    description: 'An advanced assistive technology system utilizing IR sensors for eye blink detection alongside Arduino-based controls and ultrasonic sensors for reliable obstacle detection.',
    tags: ['IoT', 'Arduino', 'C++', 'IR Sensors'],
    icon: <Cpu className="text-orange-400" size={32} />,
    gradient: 'from-orange-500/20 to-red-500/20',
    demoUrl: '#',
    githubUrl: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group relative h-full"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
            
            <div className="glass-card h-full p-8 flex flex-col relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-full bg-slate-800/80 flex items-center justify-center border border-slate-700/50">
                  {project.icon}
                </div>
                {/* <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div> */}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/60">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
