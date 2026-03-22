import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Cpu } from 'lucide-react';
import profile from "../assets/profile.jpeg"

const About = () => {
  return (
    <section id="about" className=" relative z-10">
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-br from-accent to-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-blue-500/50 blur-xl block -z-10 rounded-2xl animate-pulse"></div>
            <div className="w-full h-full rounded-2xl overflow-hidden glass-card flex items-center justify-center bg-slate-900">
              {/* Profile Image Placeholder */}
              <div className="flex flex-col items-center justify-center text-slate-500">
                {/* <div className="w-24 h-24 rounded-full bg-slate-800 mb-4 flex items-center justify-center border-2 border-slate-700">
                  <span className="text-4xl text-slate-600 font-bold">P</span>
                </div> */}
                {/* <p className="font-medium text-sm tracking-wide uppercase">{profile}</p> */}
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-8 text-slate-300 leading-relaxed mb-6">
            <p className="mb-4">
              I am a passionate <strong className="text-white font-medium">Electronics and Communication Engineering Student (2022–2026)</strong> at heart, passionate about full-stack development. I have experience building MERN stack applications and developing real-world projects focused on data management, financial planning, and assistive technology.
            </p>
            <p>
               I am eager to learn, grow, and create impactful solutions through technology.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 flex items-center gap-4 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Education</p>
                <p className="text-white font-bold text-sm">B.E. ECE</p>
              </div>
            </div>

            <div className="glass-card p-4 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Performance</p>
                <p className="text-white font-bold text-sm">8.39 CGPA</p>
              </div>
            </div>

            <div className="glass-card p-4 flex items-center gap-4 hover:border-orange-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">College</p>
                <p className="text-white font-bold text-sm">Muthayammal Engineering College</p>
              </div>
            </div>

            <div className="glass-card p-4  flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Code size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Domain</p>
                <p className="text-white font-bold text-sm">Full-Stack</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
