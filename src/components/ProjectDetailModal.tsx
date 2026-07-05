"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GitHubIcon } from "@/components/icons";
import type { Project } from "@/types/content";
import { socialLinks } from "@/lib/socials";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const lenis = useLenis();
  const open = project !== null;

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
      {project && (
        <div className="fixed inset-0 z-1100 flex items-start justify-center">
          <motion.button
            type="button"
            aria-label="Close project details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-default bg-foreground/25 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto my-6 flex max-h-[calc(100vh-3rem)] w-[calc(100%-2rem)] max-w-[calc(var(--width-content-width)+4rem)] flex-col overflow-hidden rounded-2xl bg-background shadow-2xl md:my-10"
            data-lenis-prevent
          >
            <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden md:aspect-[21/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="primary-button absolute top-4 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full text-primary-cta-text"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
              <span className="absolute bottom-4 left-4 rounded-full border border-primary-cta-text/20 bg-primary-cta-text/15 px-3 py-1.5 text-xs font-medium text-primary-cta-text backdrop-blur-xl">
                {project.category}
              </span>
            </div>

            <div className="overflow-y-auto px-6 py-8 md:px-10 md:py-10">
              <h2
                id="project-detail-title"
                className="text-3xl leading-[1.15] font-semibold text-balance md:text-4xl"
              >
                {project.title}
              </h2>
              <p className="mt-3 text-lg leading-snug text-foreground/75 md:text-xl">
                {project.overview}
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="card rounded-lg p-5">
                  <p className="text-sm font-medium text-foreground/50">Role</p>
                  <p className="mt-1 text-base leading-snug">{project.role}</p>
                </div>
                <div className="card rounded-lg p-5">
                  <p className="text-sm font-medium text-foreground/50">Outcome</p>
                  <p className="mt-1 text-base leading-snug">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-foreground/50">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="card rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={project.githubUrl ?? socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-cta-text"
                >
                  <GitHubIcon className="size-4" />
                  View on GitHub
                  <ArrowUpRight className="size-4" />
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-secondary-cta-text"
                  >
                    Live demo
                    <ArrowUpRight className="size-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}