import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 w-full">
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass-card p-14 mb-18 mt-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Mail className="text-accent" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Email</p>
              <a href="mailto:pavithraraj538@gmail.com" className="text-white hover:text-accent transition-colors font-medium">
                pavithraraj538@gmail.com
              </a>
            </div>
          </div>

          {/* <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Phone className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Phone</p>
              <a href="tel:+919940878267" className="text-white hover:text-blue-400 transition-colors font-medium">
                +91 9940878267
              </a>
            </div>
          </div> */}

          <div className="glass-card p-14 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <MapPin className="text-emerald-500" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Location</p>
              <p className="text-white font-medium">Namakkal, Tamil Nadu, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-card p-8"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
              <textarea
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
