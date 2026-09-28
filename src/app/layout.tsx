import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://divye.vercel.app";
const TITLE = "Divye Maingi | Full Stack Web Developer";
const DESCRIPTION =
  "Divye Maingi is a Full Stack Web Developer and Computer Science student at Lovely Professional University, building modern full-stack and AI-powered web applications with React, Next.js, Node.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Divye Maingi",
  },
  description: DESCRIPTION,
  applicationName: "Divye Maingi Portfolio",
  keywords: [
    "Divye Maingi",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MERN",
    "Portfolio",
    "Lovely Professional University",
  ],
  authors: [{ name: "Divye Maingi", url: SITE_URL }],
  creator: "Divye Maingi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Divye Maingi",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-surface-800 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
