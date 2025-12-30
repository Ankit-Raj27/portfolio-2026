"use client";

import React, { useState } from "react";
import { portfolioData } from "@/app/data";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="min-h-[85vh] flex flex-col justify-center mb-24 pt-10 md:pt-0 bg-amber-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-700 tracking-wide uppercase">
              Available for work
            </span>
          </div>

          {/* Intro & Name */}
          <h2 className="text-lg md:text-xl text-slate-500 font-medium mb-4">
            Hello, I&apos;m <span className="text-slate-900 font-semibold">{portfolioData.personal.name}</span>
          </h2>

          {/* Main Headline (Tagline) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Building <span className="text-blue-600">scalable</span> software solutions.
          </h1>

          {/* Summary Box */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
            {portfolioData.about.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all active:scale-95"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Email Copied" : "Copy Email"}
            </button>
            <a
              href="https://drive.google.com/file/d/17_t56v1bnPxx1BdfiOkVn7exa--9PokO/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
            >
              <ArrowUpRight size={18} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual/Image Placeholder */}
        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Abstract Geometric Avatar/Graphic */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-200"></div>
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ 
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
              }}
            ></div>
            
            {/* Initials or Placeholder Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-black text-slate-300 select-none">
                AR
              </span>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute top-8 right-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 animate-bounce delay-700">
               <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <div className="absolute bottom-12 left-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 animate-pulse">
               <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};