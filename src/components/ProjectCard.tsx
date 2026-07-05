import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { RefObject } from "react";
import type { Project } from "@/types/content";
import { cls } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  cardRef?: RefObject<HTMLDivElement | null>;
  featured?: boolean;
  scrollAnimated?: boolean;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({
  project,
  cardRef,
  featured = false,
  scrollAnimated = false,
  onSelect,
}: ProjectCardProps) {
  const interactive = Boolean(onSelect);

  return (
    <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5">
      <button
        type="button"
        onClick={() => onSelect?.(project)}
        disabled={!interactive}
        className={cls(
          "group text-left",
          interactive && "cursor-pointer",
          !interactive && "cursor-default",
        )}
        aria-label={interactive ? `View project: ${project.title}` : undefined}
      >
        <div
          ref={cardRef}
          className={cls(
            "card relative aspect-4/3 rounded-2xl p-2 xl:p-3 2xl:p-4",
            featured && "shadow-2xl",
            !scrollAnimated && interactive && "transition-transform duration-300 group-hover:-translate-y-1",
          )}
        >
          <div className="relative aspect-4/3 h-full w-full overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <span className="absolute bottom-2 left-2 rounded-full border border-primary-cta-text/20 bg-primary-cta-text/15 px-3 py-1.5 text-xs font-medium text-primary-cta-text backdrop-blur-xl xl:bottom-3 xl:left-3 2xl:bottom-4 2xl:left-4">
              {project.category}
            </span>
            {interactive && (
              <span className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full border border-primary-cta-text/20 bg-primary-cta-text/15 text-primary-cta-text opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100 xl:top-3 xl:right-3">
                <ArrowUpRight className="size-4" />
              </span>
            )}
          </div>
        </div>
        <p className="mt-3 text-lg leading-snug md:text-xl lg:text-2xl">
          <span className="font-semibold text-foreground transition-colors group-hover:text-foreground/90">
            {project.title}.{" "}
          </span>
          <span className="text-foreground/50">{project.description}</span>
        </p>
      </button>
    </div>
  );
}