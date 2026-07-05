"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { ProjectsGallery } from "@/components/ProjectsGallery";

interface ProjectsModalProps {
  open: boolean;
  onClose: () => void;
}

export function ProjectsModal({ open, onClose }: ProjectsModalProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;

    lenis?.stop();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      lenis?.start();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, lenis]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-1100 flex items-start justify-center">
          <motion.button
            type="button"
            aria-label="Close projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 cursor-default bg-foreground/25 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-modal-title"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 48 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto my-6 flex max-h-[calc(100vh-3rem)] w-[calc(100%-2rem)] max-w-[calc(var(--width-content-width)+8rem)] flex-col overflow-hidden rounded-2xl bg-background shadow-2xl md:my-10"
            data-lenis-prevent
          >
            <div className="card flex shrink-0 items-center justify-between gap-4 border-b border-foreground/5 px-5 py-4 md:px-8 md:py-5">
              <div className="min-w-0">
                <p
                  id="projects-modal-title"
                  className="text-sm font-medium text-foreground/60"
                >
                  Portfolio
                </p>
                <p className="truncate text-xl font-semibold text-foreground md:text-2xl">
                  All Projects
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href="/projects"
                  onClick={onClose}
                  className="hidden rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground sm:inline-block"
                >
                  Open full page
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="primary-button flex size-9 cursor-pointer items-center justify-center rounded-full text-primary-cta-text"
                >
                  <X className="size-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-8 md:px-8 md:py-10">
              <ProjectsGallery showHeader={false} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}