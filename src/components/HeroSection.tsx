import { BookCallButton } from "@/components/BookCallButton";
import { SectionReveal } from "@/components/SectionReveal";

export function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="relative flex h-fit items-center overflow-hidden pt-30 pb-20 md:h-svh md:overflow-visible md:py-0"
      id="hero"
    >
      <div className="w-content-width mx-auto">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:gap-20">
          <SectionReveal className="flex w-full flex-col items-center gap-3 md:w-[46%] md:items-start">
            <div className="card flex items-center gap-2 rounded px-3 py-1 backdrop-blur">
              <span className="size-2 animate-pulsate rounded-full bg-green-500" />
              <p className="text-sm leading-snug font-medium text-foreground">
                1 spot left this month
              </p>
            </div>
            <h1 className="text-center text-6xl leading-[1.05] font-medium tracking-tight md:text-left md:text-7xl 2xl:text-8xl">
              <span className="bg-linear-to-r -mb-[0.1em] inline bg-clip-text pb-[0.1em] text-transparent from-foreground to-primary-cta">
                Software that <span className="font-bold">ships and scales.</span>
              </span>
            </h1>
            <p className="max-w-[95%] text-center text-base leading-snug font-medium text-balance md:text-left md:text-lg">
              Built for performance, not just demos.{" "}
              <span className="text-foreground/50">
                I develop apps, automate workflows with AI, and deliver
                production-ready systems that turn ideas into reliable products.
              </span>
            </p>
            <BookCallButton />
          </SectionReveal>
          <div className="relative h-80 w-full md:h-96 md:w-[54%]">
            <div className="card absolute inset-0 rounded-2xl md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}