// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ankit Raj Kushwaha | Full-Stack Developer",
  description: "Documentation-style portfolio of Ankit Raj Kushwaha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased`}>
        <div className="flex min-h-screen flex-col md:flex-row max-w-7xl mx-auto">
          {/* Fixed Sidebar for Desktop, Top for Mobile logic inside Sidebar component */}
          <Sidebar />
          
          <main className="flex-1 p-6 md:p-12 md:ml-64 w-full">
            {children}
            
            <footer className="mt-20 py-8 border-t border-slate-200 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Ankit Raj Kushwaha. </p>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}