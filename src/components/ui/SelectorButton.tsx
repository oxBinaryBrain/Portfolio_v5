"use client";

import { useEffect, useRef } from "react";
import { cls } from "@/lib/utils";

interface SelectorButtonProps {
  options: { value: string; label: string }[];
  activeValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function SelectorButton({
  options,
  activeValue,
  onValueChange,
  className,
}: SelectorButtonProps) {
  const hoverRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hoverElement = hoverRef.current;
    if (!container || !hoverElement) return;

    const moveHoverBlock = (target: Element) => {
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      hoverElement.style.width = `${targetRect.width}px`;
      hoverElement.style.transform = `translateX(${targetRect.left - containerRect.left}px)`;
    };

    const updatePosition = () => {
      const activeButton = container.querySelector(
        `[data-value="${activeValue}"]`,
      );
      if (activeButton) moveHoverBlock(activeButton);
    };

    updatePosition();
    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [activeValue]);

  return (
    <div
      ref={containerRef}
      className={cls("card relative inline-flex gap-1 rounded-full p-1", className)}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          data-value={option.value}
          onClick={() => onValueChange(option.value)}
          className={cls(
            "relative z-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
            activeValue === option.value
              ? "text-primary-cta-text"
              : "text-foreground hover:text-foreground/80",
          )}
        >
          {option.label}
        </button>
      ))}
      <div
        ref={hoverRef}
        className="primary-button pointer-events-none absolute inset-y-1 left-0 z-0 rounded-full transition-all duration-300 ease-out"
      />
    </div>
  );
}