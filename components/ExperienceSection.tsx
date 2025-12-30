"use client";

import React from "react";
import { portfolioData } from "@/app/data";
import { Briefcase } from "lucide-react";
import { Timeline } from "@/components/ui/Timeline"

export const ExperienceSection = () => {
  // Transform portfolio data to match Timeline format
  const timelineData = portfolioData.experience.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            {exp.role}
            </h3>
            <span className="hidden sm:block text-slate-300">•</span>
            <span className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            {exp.company}
            </span>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
            <Briefcase size={14} />
            <span>{exp.type}</span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="scroll-mt-24 w-full">
      <Timeline data={timelineData} />
    </section>
  );
};