"use client";

import React from "react";
import { portfolioData } from "./data";
import Sidebar from "@/components/Sidebar";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("about");

  // Scroll spy logic
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Component */}
      <Sidebar activeSection={activeSection} />
      <main className="flex-1 md:ml-64 min-h-screen w-full bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-32 flex flex-col bg-amber-900">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />

          <footer className="py-8 border-t border-slate-200 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} {portfolioData.personal.name}. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Operational
              </span>
              <p>Built with Next.js & Tailwind</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}