import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Divye Maingi — Full Stack Web Developer",
  description:
    "Portfolio of Divye Maingi, a Full Stack Web Developer and Computer Science student building modern, AI-powered web applications.",
  keywords: [
    "Divye Maingi",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Divye Maingi" }],
  openGraph: {
    title: "Divye Maingi — Full Stack Web Developer",
    description:
      "Portfolio of Divye Maingi, a Full Stack Web Developer building modern, AI-powered web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
