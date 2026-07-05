"use client";

import { motion, type Variants } from "framer-motion";

type ScrollVariant = "slide-up" | "fade-blur" | "fade";

const VARIANTS: Record<ScrollVariant, Variants> = {
  "slide-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant: ScrollVariant;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={VARIANTS[variant]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}