"use client";

import React from "react";
import { portfolioData } from "@/app/data";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-300 transition-all duration-300 text-center"
          >
            <div className="p-8 flex-1 flex flex-col items-center">
              <div className="mb-4 w-full">
                <div className="flex justify-center gap-3 mb-4 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    className="text-slate-400 hover:text-slate-900 bg-white p-2 rounded-full shadow-sm border border-slate-100"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.link}
                    className="text-slate-400 hover:text-blue-600 bg-white p-2 rounded-full shadow-sm border border-slate-100"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-2 uppercase tracking-wider">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-sm">
                {project.description}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-100 w-full">
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};