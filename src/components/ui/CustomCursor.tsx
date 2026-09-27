"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle custom cursor: a small dot that tracks precisely plus a larger
 * spring-eased ring. Only mounts on fine-pointer (mouse) devices and is
 * disabled entirely when the user prefers reduced motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 350, damping: 30, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 350, damping: 30, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(
        Boolean(target?.closest("a, button, [data-cursor-hover]"))
      );
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      {/* Precise dot */}
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Spring-eased ring */}
      <motion.div
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-soft/50"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
