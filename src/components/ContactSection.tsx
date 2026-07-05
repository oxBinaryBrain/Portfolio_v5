"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextAnimation } from "@/components/ui/TextAnimation";

export function ContactSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [1.3, 1]);

  return (
    <div id="contact" data-section="contact">
      <section aria-label="Contact section" className="py-20">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="slide-up" className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="card rounded p-6 md:p-10">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
                    <p>Get in Touch</p>
                  </div>
                  <TextAnimation
                    text="Let's Build"
                    variant="fade"
                    gradientText
                    tag="h2"
                    className="text-6xl leading-[1.15] font-semibold text-balance 2xl:text-7xl"
                  />
                  <TextAnimation
                    text="Have a project in mind? Drop me a message and I'll get back to you within 24 hours."
                    variant="fade"
                    tag="p"
                    className="text-lg leading-snug text-balance md:text-xl"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    aria-label="Your name"
                    className="card w-full rounded px-5 py-3 text-base placeholder:opacity-75 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    aria-label="Your email"
                    className="card w-full rounded px-5 py-3 text-base placeholder:opacity-75 focus:outline-none"
                  />
                  <textarea
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    aria-label="Tell me about your project..."
                    className="card w-full resize-none rounded px-5 py-3 text-base placeholder:opacity-75 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="primary-button flex h-10 w-full cursor-pointer items-center justify-center rounded px-6 text-sm text-primary-cta-text"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div
              ref={imageRef}
              className="card relative h-100 overflow-hidden rounded md:h-auto"
            >
              <motion.div
                style={{ scale: imageScale }}
                className="h-full w-full origin-center"
              >
                <Image
                  src="/images/contact.webp"
                  alt="Contact"
                  fill
                  className="size-full object-cover md:absolute md:inset-0"
                />
              </motion.div>
              <div className="absolute inset-0 flex flex-wrap items-end justify-center gap-3 p-6 xl:p-7 2xl:p-8">
                <Link
                  href="#"
                  className="flex h-9 items-center justify-center gap-2 rounded-full border border-primary-cta-text/20 bg-primary-cta-text/15 px-3 text-sm font-semibold text-primary-cta-text backdrop-blur-xl transition-all duration-300 ease-out hover:bg-primary-cta-text/25"
                >
                  <Video className="size-4" strokeWidth={1.5} />
                  <span>Book a Call</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}