import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "portbuilder",
    title: "Portbuilder",
    period: {
      start: "12.2024",
      end: "04.2025",
    },
    link: "https://portbuilder.vercel.app",
    skills: [
      "Full Stack",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Serverless",
      "Clerk Auth",
      "Razorpay",
      "Webhooks",
      "System Design",
      "In-memory Caching",
    ],
    description: `Zero-code portfolio creation PaaS enabling users to generate, customize, and deploy professional portfolios.
- Drag-and-drop layout builder with customizable templates
- Modular component library with 20+ reusable UI components
- Integrated Clerk OAuth authentication and session handling
- Reduced preview latency by 40% using in-memory caching
- Integrated Razorpay payments with secure webhook verification
- Deployed on Vercel using scalable serverless APIs`,
    logo: "/images/projects/portbuilder.webp",
    isExpanded: true,
  },

  {
    id: "codeomen",
    title: "CodeOmen",
    period: {
      start: "09.2024",
      end: "11.2024",
    },
    link: "https://codeomen.vercel.app",
    skills: [
      "Full Stack",
      "Next.js",
      "React",
      "TypeScript",
      "CodeMirror",
      "Firebase",
      "Firestore",
      "Authentication",
      "Data Visualization",
      "Performance Optimization",
    ],
    description: `Online coding and DSA practice platform with an integrated web-based IDE.
- Custom CodeMirror editor with syntax highlighting and error handling
- Reduced compilation errors by 25% and improved execution speed by 40%
- Implemented Firebase authentication and Firestore persistence
- Built analytics and submission tracking dashboards
- Optimized read/write patterns for low-latency data access`,
    logo: "images/projects/codeomen.png",
  },


];
