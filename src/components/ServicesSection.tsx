import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextAnimation } from "@/components/ui/TextAnimation";
import { cls } from "@/lib/utils";
import { services } from "@/types/content";

const colSpans = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

export function ServicesSection() {
  return (
    <div id="services" data-section="services">
      <section aria-label="Features section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="mx-auto flex w-content-width flex-col items-center gap-2">
            <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
              <p>Services</p>
            </div>
            <TextAnimation
              text="What I Bring to the Table"
              variant="fade"
              gradientText
              tag="h2"
              className="text-center text-6xl leading-[1.15] font-semibold text-balance md:max-w-8/10 2xl:text-7xl"
            />
            <TextAnimation
              text="End-to-end development services — from AI automation and apps to production-ready web platforms."
              variant="fade"
              tag="p"
              className="text-center text-lg leading-snug text-balance md:max-w-7/10 md:text-xl"
            />
            <ScrollReveal variant="slide-up" delay={0.2}>
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
                      <span className="mx-2 -translate-x-3 text-sm font-semibold text-primary-cta-text transition-transform duration-500 ease-out group-hover:translate-x-0">
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
                <span className="text-base font-semibold whitespace-nowrap">
                  Book a call with me
                </span>
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="slide-up" className="w-content-width mx-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={cls(
                    colSpans[index],
                    "card flex flex-col gap-3 rounded p-3 xl:gap-3.5 xl:p-3.5 2xl:gap-4 2xl:p-4",
                  )}
                >
                  <div className="h-60 overflow-hidden rounded bg-foreground/5 shadow shadow-foreground/5 xl:h-72 2xl:h-80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={400}
                      className="h-full w-full rounded object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-3 xl:p-3.5 2xl:p-4">
                    <h3 className="text-2xl leading-snug font-semibold text-balance">
                      {service.title}
                    </h3>
                    <p className="text-base leading-snug text-balance">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}