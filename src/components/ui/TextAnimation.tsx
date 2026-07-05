"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { cls } from "@/lib/utils";

type TextVariant = "slide-up" | "fade-blur" | "fade";

const VARIANTS: Record<TextVariant, Variants> = {
  "slide-up": {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "none" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const EASING: Record<TextVariant, [number, number, number, number]> = {
  "slide-up": [0.25, 0.46, 0.45, 0.94],
  "fade-blur": [0.45, 0, 0.55, 1],
  fade: [0.45, 0, 0.55, 1],
};

interface TextAnimationProps {
  text: string;
  variant: TextVariant;
  gradientText?: boolean;
  tag?: "p" | "h1" | "h2" | "h3" | "span";
  className?: string;
}

export function TextAnimation({
  text,
  variant,
  gradientText = false,
  tag = "p",
  className = "",
}: TextAnimationProps) {
  const Tag = motion[tag];
  const words = text.split(" ");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [reverted, setReverted] = useState(false);
  const gradientClass = gradientText
    ? "bg-linear-to-r from-foreground to-primary-cta bg-clip-text text-transparent pb-[0.1em] -mb-[0.1em]"
    : "";

  useEffect(() => {
    if (animationComplete && !reverted) {
      const delay = variant === "fade-blur" && gradientText ? 0 : 700;
      const timer = setTimeout(() => setReverted(true), delay);
      return () => clearTimeout(timer);
    }
  }, [animationComplete, reverted, variant, gradientText]);

  if (reverted) {
    return (
      <Tag className={cls("leading-[1.2]", gradientClass, className)} initial={false}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      className={cls(
        "leading-[1.2] transition-all duration-700",
        animationComplete && gradientClass,
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      transition={{ staggerChildren: 0.04 }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          <motion.span
            className="inline-block"
            variants={VARIANTS[variant]}
            transition={{ duration: 0.6, ease: EASING[variant] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}