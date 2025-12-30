"use client";

import React from "react";
import { portfolioData } from "@/app/data";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="mb-20 scroll-mt-24">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 md:flex justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to collaborate?
            </h2>
            <p className="text-slate-400 max-w-md">
              I&apos;m currently available for full-stack opportunities. Feel free
              to reach out to discuss how we can work together.
            </p>
          </div>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="mt-8 md:mt-0 inline-flex items-center justify-center bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-blue-900/20 group"
          >
            <Mail
              className="mr-2 group-hover:scale-110 transition-transform"
              size={18}
            />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};