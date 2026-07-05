"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { ProjectsModal } from "@/components/ProjectsModal";
import { TextAnimation } from "@/components/ui/TextAnimation";
import { featuredProjects, type Project } from "@/types/content";

gsap.registerPlugin(ScrollTrigger);

interface HeroWorkScrollStackProps {
  heroDelay?: number;
}

export function HeroWorkScrollStack({ heroDelay = 4 }: HeroWorkScrollStackProps) {
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const ctx = gsap.context(() => {
      const cardRefs = [card1Ref.current, card2Ref.current, card3Ref.current];
      const placeholder = placeholderRef.current;
      if (!placeholder) return;

      const placeholderRect = placeholder.getBoundingClientRect();
      const placeholderCenterY =
        placeholderRect.top + placeholderRect.height / 2;

      if (isDesktop) {
        const xOffsets = ["32rem", "14.5rem", "-1.8rem"];
        const yAdjustments = [0, -48, 0];
        const rotations = [-5, 0, 5];
        const scales = [1.35, 1.3, 1.25];
        const zIndexes = [30, 20, 10];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: animationRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        cardRefs.forEach((card, i) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const yOffset = placeholderCenterY - cardCenterY;

          gsap.set(card, {
            x: xOffsets[i],
            y: yOffset + yAdjustments[i],
            rotation: rotations[i],
            scale: scales[i],
            zIndex: zIndexes[i],
            willChange: "transform",
            force3D: true,
          });

          tl.to(
            card,
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 0.4,
              ease: "none",
            },
            0,
          );
          tl.to(card, { zIndex: 1, duration: 0.1, ease: "none" }, 0.3);
        });
      } else {
        const xOffsets = ["2.5rem", "0.5rem", "-1rem"];
        const yAdjustments = [-10, -30, 10];
        const rotations = [-5, 0, 5];
        const scales = [0.65, 0.7, 0.75];
        const zIndexes = [30, 20, 10];

        cardRefs.forEach((card, i) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const cardCenterY = cardRect.top + cardRect.height / 2;
          const yOffset = placeholderCenterY - cardCenterY;

          gsap.set(card, {
            x: xOffsets[i],
            y: yOffset + yAdjustments[i],
            rotation: rotations[i],
            scale: scales[i],
            zIndex: zIndexes[i],
            willChange: "transform",
            force3D: true,
          });

          gsap.to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: placeholder,
              start: "top 35%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, animationRef);

    return () => ctx.revert();
  }, []);

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <div ref={animationRef}>
      <div id="hero" data-section="hero">
        <section
          aria-label="Hero section"
          className="relative flex h-fit items-center overflow-hidden pt-30 pb-20 md:h-svh md:overflow-visible md:py-0"
        >
          <div className="w-content-width mx-auto">
            <div className="flex w-full flex-col items-center gap-10 md:flex-row md:gap-20">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: heroDelay,
                }}
                className="flex w-full flex-col items-center gap-3 md:w-[46%] md:items-start"
              >
                <div className="card flex items-center gap-2 rounded px-3 py-1 backdrop-blur">
                  <span className="size-2 animate-pulsate rounded-full bg-green-500" />
                  <p className="text-sm leading-snug font-medium text-foreground">
                    1 spot left this month
                  </p>
                </div>
                <h1 className="text-center text-6xl leading-[1.05] font-medium tracking-tight md:text-left md:text-7xl 2xl:text-8xl">
                  <span className="bg-linear-to-r -mb-[0.1em] inline bg-clip-text pb-[0.1em] text-transparent from-foreground to-primary-cta">
                    Software that{" "}
                    <span className="font-bold">ships and scales.</span>
                  </span>
                </h1>
                <p className="max-w-[95%] text-center text-base leading-snug font-medium text-balance md:text-left md:text-lg">
                  Built for performance, not just demos.{" "}
                  <span className="text-foreground/50">
                    I develop apps, automate workflows with AI, and deliver
                    production-ready systems that turn ideas into reliable
                    products.
                  </span>
                </p>
                <Link
                  href="#contact"
                  className="group primary-button mt-2 flex w-fit items-center gap-3 rounded-full py-3 pr-6 pl-3 text-primary-cta-text transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="card rounded-full p-px transition-transform duration-500 ease-out group-hover:-rotate-6">
                      <Image
                        src="/images/avatar.png"
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-[0fr] transition-all duration-500 ease-out group-hover:grid-cols-[1fr]">
                      <div className="flex items-center overflow-hidden">
                        <span className="mx-2 -translate-x-3 text-sm font-medium text-primary-cta-text transition-transform duration-500 ease-out group-hover:translate-x-0">
                          +
                        </span>
                        <div className="card shrink-0 rounded-full p-px transition-transform duration-500 ease-out -translate-x-5 group-hover:translate-x-0 group-hover:rotate-6">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full">
                            <span className="text-xs font-bold text-foreground">
                              You
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-base font-medium whitespace-nowrap">
                    Book a call with me
                  </span>
                </Link>
              </motion.div>

              <div
                ref={placeholderRef}
                className="relative h-80 w-full md:h-96 md:w-[54%]"
              >
                <div className="card absolute inset-0 rounded-2xl md:hidden" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="work" data-section="work">
        <section aria-label="Work section" className="py-20 md:pt-0">
          <div className="flex w-content-width flex-col gap-8 mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
                <p>Selected Work</p>
              </div>
              <TextAnimation
                text="Projects That Speak for Themselves"
                variant="fade"
                gradientText
                tag="h2"
                className="text-center text-6xl leading-[1.15] font-semibold text-balance md:max-w-8/10 2xl:text-7xl"
              />
              <TextAnimation
                text="A curated selection of builds that delivered measurable results for ambitious teams."
                variant="fade"
                tag="p"
                className="text-center text-lg leading-snug text-balance md:max-w-7/10 md:text-xl"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  cardRef={cardRefs[index]}
                  featured
                  onSelect={setSelectedProject}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setProjectsModalOpen(true)}
                className="secondary-button group flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-secondary-cta-text transition-all duration-300"
              >
                <span>View all my projects</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <ProjectsModal
        open={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        onProjectSelect={setSelectedProject}
      />
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}