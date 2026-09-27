"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Direction the element eases in from. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Render as a list container that staggers its <Reveal> children. */
  as?: "div" | "section" | "ul";
};

const OFFSET = 24;

function getOffset(direction: RevealProps["direction"]) {
  switch (direction) {
    case "down":
      return { y: -OFFSET };
    case "left":
      return { x: OFFSET };
    case "right":
      return { x: -OFFSET };
    case "none":
      return {};
    case "up":
    default:
      return { y: OFFSET };
  }
}

/**
 * Smooth on-scroll reveal wrapper. Respects prefers-reduced-motion by
 * rendering content statically with no transform.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.98, ...getOffset(direction) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
