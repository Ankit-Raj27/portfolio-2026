import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Ankit Raj ",
  lastName: "Kushwaha",
  displayName: "Ankit Raj",
  username: "switchengeek",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Full Stack Developer",
    "Open Source Contributor",
  ],
  address: "Ranchi,Jharkhand, India",
  phoneNumber: "ODIxMDIyNjg2MQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YW5raXRyYWprMjdAZ21haWwuY29t", // base64 encoded
  website: "https://github.com/Ankit-Raj27/",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Vegapro.AI",
      website: "https://simplamo.com?ref=IN-926722",
    },

  ],
about: `
- **Full Stack Developer** with hands-on experience building production-ready web platforms, focused on clean architecture, performance, and polished UI/UX.
- Strong expertise in **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and modern full-stack tooling; building scalable, user-centric web and mobile applications.
- Experienced in designing **serverless APIs**, authentication flows, payment systems, and data-driven dashboards using **Node.js**, **Flask**, and cloud-native patterns.
- Co-creator of **Portbuilder** (2024–2025): a zero-code portfolio PaaS enabling users to generate, customize, and deploy professional portfolios
  - Drag-and-drop layout builder with modular component architecture (20+ reusable UI components)
  - Integrated **Clerk OAuth**, **Razorpay payments**, and secure webhook verification on Vercel serverless functions
  - Reduced preview latency by **40%** using in-memory caching and optimized API routes
`,

  avatar: "https://i.ibb.co/cSTYyD2T/profile-portfolio.png",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User;
