import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Database,
  Cloud,
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Ankit Raj Kushwaha",
    role: "Full-Stack Developer",
    location: "Bhubaneswar, Odisha",
    email: "ankitrajk27@gmail.com",
    tagline:
      "Building scalable software solutions and intuitive user experiences.",
    socials: [
      { name: "GitHub", icon: Github, url: "https://github.com/ankitrajk27" },
      { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ankit-raj-kushwaha-840b931aa/" },
      { name: "Email", icon: Mail, url: "mailto:ankitrajk27@gmail.com" },
    ],
  },
  about: {
    summary:
      "I'm available for full-time roles & freelance projects. I thrive on crafting dynamic web applications, and delivering seamless user experiences.",
  },
  experience: [
    {
      company: "Vegapro.ai",
      role: "FullStack Intern",
      period: "April 2025 - Present",
      type: "Remote",
      description:
        "Building production-ready features across web and mobile using Next.js and React Native. Developed integrated backend APIs using Flask and Python to support real-time data fetching and actionable operational insights.",
      tags: ["Next.js", "React Native", "Flask", "Python"],
    },
    {
      company: "Microsoft Learn Student Ambassador",
      role: "Web Development Specialist",
      period: "Jan 2024 - Dec 2024",
      type: "Community",
      description:
        "Led multiple technical workshops on modern web development (React.js, Node.js). Developed comprehensive learning materials and starter templates, increasing student engagement by 40%.",
      tags: ["Public Speaking", "Mentorship", "React", "Git"],
    },
  ],
  projects: [
    {
      title: "Portbuilder",
      subtitle: "Zero-code Portfolio PaaS",
      tech: ["Next.js", "Clerk Auth", "Redis", "Razorpay"],
      description:
        "A comprehensive PaaS allowing users to create portfolios via drag-and-drop. Features modular component libraries, reducing preview latency by 40% via in-memory caching. Integrated Razorpay for premium features.",
      link: "https://portbuilder.vercel.app/",
      github: "https://github.com/Ankit-Raj27/port-builder",
    },
    {
      title: "CodeOmen",
      subtitle: "Online Coding Platform",
      tech: ["Next.js", "CodeMirror", "Firestore", "Firebase"],
      description:
        "Specialized online IDE with curated DSA problems. Integrated CodeMirror with custom syntax highlighting, reducing compilation errors by 25%. Added analytics to track usage patterns.",
      link: "https://codeomen.vercel.app/",
      github: "https://github.com/Ankit-Raj27/Code-omen",
    },
  ],
  skills: [
    {
      category: "Frontend",
      icon: Code2,
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "React Native"],
    },
    {
      category: "Backend",
      icon: Terminal,
      items: ["Node.js", "Express.js", "Flask", "RESTful APIs", "WebRTC"],
    },
    {
      category: "Database",
      icon: Database,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firestore", "Prisma ORM"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["Docker", "CI/CD", "Redis", "Vercel Serverless"],
    },
  ],
};
