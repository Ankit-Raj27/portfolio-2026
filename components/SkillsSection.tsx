"use client";

import React from "react";
import { portfolioData } from "@/app/data";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {portfolioData.skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4 border-b border-slate-100 pb-3 w-full">
              <skillGroup.icon className="text-blue-600" size={20} />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                {skillGroup.category}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};