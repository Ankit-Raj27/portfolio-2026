import React from "react";

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center mb-12">
    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
      {children}
    </h2>
    <div className="h-1 w-12 bg-blue-600 rounded-full mt-4"></div>
  </div>
);