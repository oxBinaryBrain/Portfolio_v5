import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { projects } from "@/types/content";

export function WorkSection() {
  return (
    <section aria-label="Work section" className="py-20 md:pt-0">
      <div className="flex w-content-width flex-col gap-8 mx-auto">
        <SectionReveal className="flex flex-col items-center gap-2">
          <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
            <p>Selected Work</p>
          </div>
          <h2 className="text-center text-6xl leading-[1.15] font-semibold text-balance transition-all duration-700 md:max-w-8/10 2xl:text-7xl">
            Projects That Speak for Themselves
          </h2>
          <p className="text-center text-lg leading-snug text-balance transition-all duration-700 md:max-w-7/10 md:text-xl">
            A curated selection of builds that delivered measurable results
            for ambitious teams.
          </p>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal
              key={project.title}
              delay={index * 0.1}
              className="flex flex-col gap-3 xl:gap-4 2xl:gap-5"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-foreground/60">
                  {project.category}
                </span>
                <p className="text-base leading-snug font-medium">
                  <span className="font-semibold">{project.title}</span>
                  <span className="text-foreground/50">. {project.description}</span>
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#"
            className="secondary-button group flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium text-secondary-cta-text transition-all duration-300"
          >
            View all my projects
          </Link>
        </div>
      </div>
    </section>
  );
}