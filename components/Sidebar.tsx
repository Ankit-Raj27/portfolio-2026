"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex justify-between items-center">
        <span className="font-bold text-lg tracking-tight">Ankit Raj K.</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
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
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xl p-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 border-r border-slate-200 bg-slate-50/50 p-8 overflow-y-auto">
        <div className="mb-10">
          <h1 className="font-bold text-xl text-slate-900 tracking-tight">
            Ankit Raj K.
          </h1>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
            Full-Stack Dev
          </p>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-widest">
            Contents
          </p>

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 py-2 px-3 rounded-md transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-auto pt-6 border-t border-slate-200 flex gap-4">
          <a
            href="https://github.com/ankitrajk27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-raj-kushwaha-840b931aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-700 transition-colors"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:ankitrajk27@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-red-500 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </aside>
    </>
  );
}
