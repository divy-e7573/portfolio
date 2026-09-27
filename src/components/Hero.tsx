"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { SOCIALS, RESUME_PATH } from "@/lib/data";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24"
    >
      <div className="container-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex max-w-3xl flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-foreground/70"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">Divye Maingi</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl font-medium text-foreground/80 sm:text-2xl"
          >
            Full Stack Web Developer
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg"
          >
            I build modern, end-to-end web applications and enjoy bringing
            AI-powered experiences to life — crafting clean interfaces on the
            front end and reliable, well-structured systems behind them.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href={RESUME_PATH} download className="btn-secondary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-2 flex items-center gap-4"
          >
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-foreground/50 transition-colors hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-foreground/70"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
