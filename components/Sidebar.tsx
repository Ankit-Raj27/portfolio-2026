"use client";

import React, { useState } from "react";
import { portfolioData } from "@/app/data";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define the props interface to fix the TS error
interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg tracking-tight text-slate-900">
          Ankit Raj K.
        </span>
        <button
          onClick={toggleMenu}
          className="text-slate-600 hover:text-blue-600 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[60px] left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xl px-6 py-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 border-r border-slate-200 bg-slate-50/50 p-8 overflow-y-auto">
        <div className="mb-10">
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-blue-200/50 shadow-lg">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="font-bold text-xl text-slate-900 tracking-tight">
            {portfolioData.personal.name}
          </h1>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
            {portfolioData.personal.role}
          </p>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest pl-3">
            Contents
          </p>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between text-sm py-2 px-3 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
              >
                {item.name}
                {isActive && <ChevronRight size={14} className="text-blue-500" />}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200">
          <p className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-widest">
            Connect
          </p>
          <div className="flex gap-4">
            {portfolioData.personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors hover:scale-110 transform duration-200"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}