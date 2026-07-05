"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface LoaderRevealProps {
  imageSrc: string;
  title: string;
  onComplete?: () => void;
}

export function LoaderReveal({ imageSrc, title, onComplete }: LoaderRevealProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div className="fixed inset-0 z-100 text-primary-cta-text">
          <motion.div
            className="absolute inset-0 h-full w-full bg-background-accent"
            exit={{ y: "-101%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="absolute right-0 bottom-0 left-0 h-2 bg-primary-cta-text"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: introComplete ? 0 : 1 }}
              style={{ originX: introComplete ? 1 : 0 }}
              transition={{
                duration: introComplete ? 0.5 : 3,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={() => {
                if (!introComplete) {
                  setIntroComplete(true);
                } else {
                  setIsVisible(false);
                }
              }}
            />
          </motion.div>

          <motion.div
            className="relative z-2 flex h-full w-full flex-col items-center justify-center gap-4 md:gap-5"
            animate={introComplete ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card rounded-full p-px">
              <Image
                src={imageSrc}
                alt=""
                width={64}
                height={64}
                className="size-12 rounded-full object-cover md:size-16"
              />
            </div>
            <div className="relative flex items-center justify-center">
              <span className="absolute text-center text-2xl font-medium tracking-tight opacity-20 md:text-4xl">
                {title}
              </span>
              <motion.span
                className="text-2xl font-medium tracking-tight md:text-4xl"
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 3, ease: [0.76, 0, 0.24, 1] }}
              >
                {title}
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}