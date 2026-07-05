"use client";

import { AutoFillText } from "@/components/ui/AutoFillText";
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

const socialIcons = [
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  return (
    <footer data-section="footer" aria-label="Site footer" className="relative w-full py-20">
      <div className="card mx-auto flex w-content-width flex-col rounded-lg px-10 pb-5">
        <AutoFillText className="font-semibold" paddingY="py-5">
          UDAY
        </AutoFillText>
        <div className="mb-5 h-px w-full bg-foreground/50" />
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <span className="text-base opacity-75">
            © 2026 UDAY. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="primary-button flex size-10 cursor-pointer items-center justify-center rounded-full text-primary-cta-text"
              >
                <Icon className="size-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}