import Image from "next/image";
import type { RefObject } from "react";
import type { Project } from "@/types/content";
import { cls } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  cardRef?: RefObject<HTMLDivElement | null>;
  featured?: boolean;
}

export function ProjectCard({
  project,
  cardRef,
  featured = false,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5">
      <div
        ref={cardRef}
        className={cls(
          "card relative aspect-4/3 rounded-2xl p-2 xl:p-3 2xl:p-4",
          featured && "shadow-2xl",
        )}
      >
        <div className="relative aspect-4/3 h-full w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute bottom-2 left-2 rounded-full border border-primary-cta-text/20 bg-primary-cta-text/15 px-3 py-1.5 text-xs font-medium text-primary-cta-text backdrop-blur-xl xl:bottom-3 xl:left-3 2xl:bottom-4 2xl:left-4">
            {project.category}
          </span>
        </div>
      </div>
      <p className="text-lg leading-snug md:text-xl lg:text-2xl">
        <span className="font-semibold text-foreground">
          {project.title}.{" "}
        </span>
        <span className="text-foreground/50">{project.description}</span>
      </p>
    </div>
  );
}