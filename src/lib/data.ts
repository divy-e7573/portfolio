import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Braces,
  FileCode2,
  Atom,
  Server,
  Database,
  GitBranch,
  Container,
  Terminal,
  Boxes,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/divy-e7573", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divye-maingi-11d/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:divyemaingi88@gmail.com", icon: Mail },
];

export const CONTACT_EMAIL = "divyemaingi88@gmail.com";
export const CONTACT_PHONE = "+91 7901842930";
export const RESUME_PATH = "/resume.pdf";

export type SkillCategory = {
  title: string;
  skills: { name: string; icon: LucideIcon }[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: Braces },
      { name: "JavaScript", icon: FileCode2 },
      { name: "TypeScript", icon: FileCode2 },
      { name: "Python", icon: Terminal },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Boxes },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
    ],
  },
];

export type Education = {
  institution: string;
  degree: string;
  detail: string;
  period: string;
  location: string;
};

export const EDUCATION: Education = {
  institution: "Lovely Professional University",
  degree: "B.Tech — Computer Science and Engineering",
  detail: "CGPA: 8.91",
  period: "2024 – 2028 (Expected)",
  location: "Phagwara, Punjab",
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  /** Replace with the real repository URL when available. */
  repoUrl: string | null;
  /** Replace with the real live-demo URL when available. */
  liveUrl: string | null;
};

export const PROJECTS: Project[] = [
  {
    title: "DevHub",
    tagline: "Developer Social Platform",
    description:
      "A production-grade developer platform built with a layered architecture and strict TypeScript.",
    highlights: [
      "Secure auth using HTTP-only cookie-based JWTs with centralized Zod validation",
      "Real-time 1-on-1 messaging with presence detection via Socket.io",
      "Event-driven notifications and Redis caching",
      "Docker Compose multi-service architecture",
    ],
    tech: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Socket.io",
      "Redis",
      "Docker",
      "Tailwind CSS",
    ],
    repoUrl: null,
    liveUrl: null,
  },
  {
    title: "Snitch",
    tagline: "Full-Stack E-Commerce Platform",
    description:
      "A scalable full-stack e-commerce application with a modern, responsive UI.",
    highlights: [
      "Email/password auth with bcrypt & JWT, plus Google OAuth via Passport.js",
      "Razorpay payment gateway integration",
      "Asset uploads with Multer and ImageKit",
      "Centralized state management with Redux Toolkit",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Razorpay",
      "ImageKit",
      "JWT",
      "OAuth 2.0",
    ],
    repoUrl: null,
    liveUrl: null,
  },
  {
    title: "AI Chat Assistant",
    tagline: "RAG-Powered MERN Chat App",
    description:
      "A full-stack MERN chat application with secure authentication and persistent multi-conversation history.",
    highlights: [
      "JWT-based authentication with persistent conversation history",
      "RAG pipeline using ChromaDB with document chunking and embeddings",
      "Real-time streaming chat via Server-Sent Events",
      "Provider-agnostic architecture supporting Claude, GPT and Gemini",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "ChromaDB",
      "JWT",
      "Tailwind CSS",
      "Zustand",
    ],
    repoUrl: null,
    liveUrl: null,
  },
];

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Artificial Intelligence: From Basics to Agentic AI",
    organization: "Lovely Professional University",
    period: "June 2026 – July 2026",
    points: [
      "Learned core AI concepts including embeddings, vector databases and prompt context.",
      "Gained practical experience integrating AI models into web applications.",
      "Developed a full-stack AI Chat Assistant using the MERN stack.",
      "Built a RAG pipeline for uploaded documents and context-aware AI responses.",
      "Used MongoDB for conversation storage and ChromaDB for vector search.",
    ],
  },
];

export type Metric = {
  value: string;
  label: string;
};

export const ACHIEVEMENT_METRICS: Metric[] = [
  { value: "350+", label: "DSA Problems" },
  { value: "8.91", label: "CGPA" },
  { value: "2028", label: "Expected Graduation" },
];

export type Achievement = {
  title: string;
  detail: string;
  period?: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "350+ DSA Problems Solved",
    detail:
      "Solved 350+ problems across LeetCode and GeeksforGeeks in Data Structures and Algorithms.",
  },
  {
    title: "Event Manager — Coding Blocks Club",
    period: "August 2024 – March 2025",
    detail:
      "Supported event planning and communication for student-led events.",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  /**
   * Optional image, e.g. "/certificates/oracle.png". Drop files into
   * /public/certificates/ and set this path. Falls back to a designed card.
   */
  image: string | null;
};

export const CERTIFICATES: Certificate[] = [
  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "September 2026",
    image: "/certificates/oracle.png",
  },
  {
    title: "Decode DSA with C++",
    issuer: "PW Skills",
    date: "February 2026",
    image: "/certificates/dsa_cpp.jpg",
  },
  {
    title: "Web Development | React",
    issuer: "Coding Ninjas",
    date: "March 2025",
    image: "/certificates/react.png",
  },
  {
    title: "Java Programming",
    issuer: "Coding Ninjas",
    date: "August 2025",
    image: "/certificates/java_f.jpg",
  },
];
