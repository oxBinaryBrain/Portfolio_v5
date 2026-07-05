"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cls } from "@/lib/utils";

interface ButtonStaggerProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

export function ButtonStagger({
  text,
  variant = "primary",
  href = "#",
  animate = true,
  animationDelay = 0,
  className = "",
}: ButtonStaggerProps) {
  const button = (
    <Link
      href={href}
      className={cls(
        "group flex h-10 cursor-pointer items-center justify-center rounded px-6 text-sm",
        variant === "primary"
          ? "primary-button text-primary-cta-text"
          : "secondary-button text-secondary-cta-text",
        className,
      )}
    >
      <span className="truncate overflow-hidden">
        {[...text].map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-400 ease-out md:group-hover:-translate-y-[1.25em]"
            style={{
              textShadow: "0 1.25em currentColor",
              transitionDelay: `${index * 0.01}s`,
              whiteSpace: char === " " ? "pre" : undefined,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </Link>
  );

  if (!animate) return button;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
    >
      {button}
    </motion.div>
  );
}