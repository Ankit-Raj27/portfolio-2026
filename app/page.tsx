"use client";
import { portfolioData } from "./data";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="space-y-24 mt-16 md:mt-0">
      {/* Hero Section */}
      <motion.section 
        id="about" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        <span className="text-blue-600 font-medium tracking-wide text-sm mb-2 block">Hello, I am</span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          {portfolioData.personal.name}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          {portfolioData.personal.tagline}
        </p>
        <div className="mt-8 text-slate-600 leading-7 max-w-3xl">
            <p>{portfolioData.about.summary}</p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <span className="w-8 h-[1px] bg-slate-300 mr-4"></span>
          Experience
        </h2>
        <div className="space-y-12 border-l border-slate-200 ml-3 pl-8 relative">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-slate-300 bg-white"></span>
              <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
              <div className="flex items-center text-sm text-slate-500 mb-2 mt-1">
                <span className="font-medium text-slate-700">{exp.company}</span>
                <span className="mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              <p className="text-slate-600 leading-relaxed max-w-2xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <span className="w-8 h-[1px] bg-slate-300 mr-4"></span>
          Selected Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="group border border-slate-200 bg-white rounded-lg p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">{project.subtitle}</p>
                </div>
                <div className="flex gap-2">
                    <a href={project.github} className="text-slate-400 hover:text-slate-900"><Github size={18} /></a>
                    <a href={project.link} className="text-slate-400 hover:text-blue-600"><ArrowUpRight size={18} /></a>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
         <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
          <span className="w-8 h-[1px] bg-slate-300 mr-4"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="text-sm text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
        className="mb-20"
      >
        <div className="bg-slate-900 rounded-xl p-8 md:p-12 text-center md:text-left md:flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Ready to collaborate?</h2>
            <p className="text-slate-400">Feel free to reach out for opportunities or just to say hi.</p>
          </div>
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="mt-6 md:mt-0 inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.section>
    </div>
  );
}