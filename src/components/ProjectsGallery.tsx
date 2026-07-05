"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SelectorButton } from "@/components/ui/SelectorButton";
import { TextAnimation } from "@/components/ui/TextAnimation";
import { allProjects, projectCategories, type Project } from "@/types/content";

interface ProjectsGalleryProps {
  showHeader?: boolean;
  className?: string;
  onProjectSelect?: (project: Project) => void;
}

export function ProjectsGallery({
  showHeader = true,
  className,
  onProjectSelect,
}: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={className}>
      {showHeader && (
        <div className="mb-8 flex flex-col items-center gap-2 md:mb-10">
          <div className="card mb-1 w-fit rounded px-3 py-1 text-sm">
            <p>All Projects</p>
          </div>
          <TextAnimation
            text="The Full Portfolio"
            variant="fade"
            gradientText
            tag="h2"
            className="text-center text-6xl leading-[1.15] font-semibold text-balance md:max-w-8/10 2xl:text-7xl"
          />
          <TextAnimation
            text="Every build below — apps, automations, platforms, and launches — shipped with the same focus on reliability and results."
            variant="fade"
            tag="p"
            className="text-center text-lg leading-snug text-balance md:max-w-7/10 md:text-xl"
          />
          <SelectorButton
            options={projectCategories.map((c) => ({ value: c, label: c }))}
            activeValue={activeCategory}
            onValueChange={setActiveCategory}
            className="mt-2 md:mt-3"
          />
        </div>
      )}

      {!showHeader && (
        <div className="mb-6 flex justify-center md:mb-8">
          <SelectorButton
            options={projectCategories.map((c) => ({ value: c, label: c }))}
            activeValue={activeCategory}
            onValueChange={setActiveCategory}
          />
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onSelect={onProjectSelect}
          />
        ))}
      </div>
    </div>
  );
}