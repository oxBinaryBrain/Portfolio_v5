# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** scroll-reveal + hover on CTA

## Text Content (verbatim)
- Badge: "1 spot left this month"
- H1: "Design that commands attention."
- Body: "Design engineered for performance, not just aesthetics. I craft every visual touchpoint your brand needs to capture attention and convert it into revenue."
- CTA: "Book a call with me" with avatar + "+ You" hover animation

## States & Behaviors
- CTA hover: avatar rotates -6deg, "+ You" pills slide in (duration-500 ease-out)
- Scroll reveal: opacity 0 → 1, translateY 20px → 0