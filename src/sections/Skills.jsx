import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Layers, Database, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Terminal size={24} className="text-blue-400" />,
    skills: ['Java', 'Python'],
    color: 'border-blue-500/30 hover:border-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Frontend',
    icon: <Layout size={24} className="text-pink-400" />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    color: 'border-pink-500/30 hover:border-pink-500',
    bg: 'bg-pink-500/10'
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Layers size={24} className="text-accent" />,
    skills: ['React.js', 'Node.js', 'Express.js'],
    color: 'border-accent/30 hover:border-accent',
    bg: 'bg-accent/10'
  },
  {
    title: 'Databases',
    icon: <Database size={24} className="text-emerald-400" />,
    skills: ['MySQL', 'MongoDB'],
    color: 'border-emerald-500/30 hover:border-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Soft Skills',
    icon: <Sparkles size={24} className="text-amber-400" />,
    skills: ['Teamwork', 'Time Management', 'Critical Thinking', 'Problem Solving'],
    color: 'border-amber-500/30 hover:border-amber-500',
    bg: 'bg-amber-500/10'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`glass-card p-6 border-t-2 ${category.color} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group`}
          >
            <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{category.title}</h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:bg-slate-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
