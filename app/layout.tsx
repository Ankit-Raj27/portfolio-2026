import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}