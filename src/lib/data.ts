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
export const RESUME_PATH = "/Divye_Maingi_Resume.pdf";

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
