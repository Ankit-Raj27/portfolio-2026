import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "vegapro",
    companyName: "Vegapro.ai",
    companyLogo: "images/companies/vegapro.jfif",
    positions: [
      {
        id: "vegapro-intern",
        title: "Full Stack Intern",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Built production-ready features across web and mobile platforms using Next.js and React Native.
- Developed backend APIs using Flask and Python to support real-time data fetching, authentication, and analytics.
- Worked on data-driven dashboards with optimized state management and responsive UI/UX.
- Collaborated with cross-functional agile teams to deliver scalable, maintainable solutions tailored to business workflows.`,
        skills: [
          "Next.js",
          "React Native",
          "TypeScript",
          "Tailwind CSS",
          "Flask",
          "Python",
          "REST APIs",
          "Git",
          "Postman",
          "Agile",
        ],
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "mlsa",
    companyName: "Microsoft Learn Student Ambassador",
    companyLogo: "images/companies/mlsa.jfif",
    positions: [
      {
        id: "mlsa-web",
        title: "Web Development Specialist",
        employmentPeriod: {
          start: "01.2024",
          end: "12.2024",
        },
        employmentType: "Community",
        icon: "education",
        description: `- Led hands-on workshops on React.js, Node.js, and Git workflows for 30+ students.
- Created starter templates and open-source learning materials to support peer learning.
- Increased student engagement and participation by 40% across workshops and hackathons.`,
        skills: [
          "React",
          "Node.js",
          "Git",
          "Public Speaking",
          "Mentorship",
          "Community Building",
          "Technical Writing",
        ],
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "kiit",
        title: "Kalinga Institute of Industrial Technology (KIIT University)",
        employmentPeriod: {
          start: "08.2021",
          end: "05.2025",
        },
        icon: "education",
        description: `- Bachelor of Technology in Computer Science and Engineering.
- CGPA: 7.93.
- Focus areas: Data Structures & Algorithms, Software Engineering, Databases, and System Design.`,
        skills: [
          "Data Structures",
          "Algorithms",
          "Java",
          "Python",
          "Databases",
          "Software Engineering",
          "System Design",
        ],
      },
    ],
  },
];
