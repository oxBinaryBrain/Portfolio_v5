"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { TextAnimation } from "@/components/ui/TextAnimation";

const socials = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.3, 1]);

  return (
    <div id="about" data-section="about">
      <section aria-label="About section" className="py-20">
        <div className="mx-auto grid w-content-width grid-cols-1 gap-5 md:grid-cols-5">
          <div className="card relative rounded p-10 md:col-span-3 md:p-20">
            <div className="primary-button absolute -top-7 -left-7 flex size-14 items-center justify-center rounded md:-top-8 md:-left-8 md:size-16">
              <Quote className="h-5/10 text-primary-cta-text" strokeWidth={1.5} />
            </div>
            <div className="relative flex h-full flex-col justify-center gap-5">
              <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
                <p>About</p>
              </div>
              <TextAnimation
                text="I don't build for show — I build to ship. Reliable software and automation that moves businesses forward."
                variant="fade"
                tag="h1"
                className="text-4xl leading-[1.15] font-semibold text-balance md:text-5xl"
              />
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate text-base font-medium">
                  UDAY
                </span>
                <span className="shrink-0 text-accent">•</span>
                <span className="truncate text-base font-medium">
                  Full-Stack Developer
                </span>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className="card relative aspect-square overflow-hidden rounded p-px md:col-span-2 md:aspect-auto md:h-full"
          >
            <motion.div
              style={{ scale: imageScale }}
              className="h-full w-full origin-center"
            >
              <Image
                src="/images/avatar.png"
                alt="UDAY"
                fill
                className="rounded object-cover"
              />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-center gap-3 p-6 xl:p-7 2xl:p-8">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-9 items-center justify-center gap-2 rounded-full border border-primary-cta-text/20 bg-primary-cta-text/15 px-3 text-sm font-medium text-primary-cta-text backdrop-blur-xl transition-all duration-300 ease-out hover:bg-primary-cta-text/25"
                >
                  <Globe className="size-4" strokeWidth={1.5} />
                  <span>{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}