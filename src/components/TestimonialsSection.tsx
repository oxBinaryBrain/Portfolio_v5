import { Star } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextAnimation } from "@/components/ui/TextAnimation";
import { cls } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section aria-label="Testimonials section" className="py-20">
      <div className="flex w-content-width flex-col items-center gap-5 mx-auto">
        <ScrollReveal variant="slide-up" className="flex gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cls("size-6 text-accent", "fill-accent")}
              strokeWidth={1.5}
            />
          ))}
        </ScrollReveal>

        <TextAnimation
          text="Working with UDAY felt like having a senior engineer in the room who actually ships — he understood our KYMA roadmap, built fast, and left us with a codebase we could scale."
          variant="fade"
          tag="p"
          className="text-center text-5xl leading-[1.15] font-semibold text-balance md:max-w-8/10 2xl:text-6xl"
        />

        <ScrollReveal
          variant="slide-up"
          delay={0.1}
          className="text-center text-lg leading-snug text-balance md:max-w-7/10 md:text-xl"
        >
          <p>Thomas Weber — Co-founder of KYMA</p>
        </ScrollReveal>

        <ScrollReveal
          variant="slide-up"
          delay={0.2}
          className="mt-1 flex items-center justify-center"
        >
          <div
            className="relative size-12 overflow-hidden rounded-full border-2 border-background md:size-16"
            style={{ zIndex: 1 }}
          >
            <Image
              src="/images/testimonial-avatar.jpg"
              alt="Thomas Weber"
              fill
              className="rounded object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}