"use client";

import { ScrollToTopOnLoad } from "@/components/ScrollToTopOnLoad";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <ScrollToTopOnLoad />
      {children}
    </ReactLenis>
  );
}