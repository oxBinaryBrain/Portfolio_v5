import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/ProjectsPageContent";

export const metadata: Metadata = {
  title: "All Projects — UDAY",
  description:
    "Full portfolio of apps, AI automation, full-stack platforms, websites, and product films by UDAY.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}