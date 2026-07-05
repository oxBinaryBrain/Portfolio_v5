export interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface Service {
  image: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  items: FAQItem[];
}

export const allProjects: Project[] = [
  {
    image: "/images/screen-1.webp",
    category: "AI Automation",
    title: "OpsFlow Workflow Engine",
    description:
      "Custom AI pipelines and integrations. Cut manual ops time by 70%.",
  },
  {
    image: "/images/screen-2.webp",
    category: "App Development",
    title: "KYMA Mobile Platform",
    description:
      "Cross-platform app from MVP to production. Scaled to 10k active users.",
  },
  {
    image: "/images/screen-3.webp",
    category: "Full-Stack",
    title: "Maru Client Portal",
    description:
      "End-to-end web platform with auth, dashboards, and real-time data.",
  },
  {
    image: "/images/ai-automation.jpg",
    category: "AI Automation",
    title: "Nexus CRM Automations",
    description:
      "Lead routing, follow-ups, and reporting wired into one hands-off system.",
  },
  {
    image: "/images/app-development.jpg",
    category: "App Development",
    title: "FleetTrack Field App",
    description:
      "Offline-first mobile app for dispatch teams. Real-time sync in the field.",
  },
  {
    image: "/images/website.webp",
    category: "Website",
    title: "LaunchPad Marketing Site",
    description:
      "High-performance landing system with CMS hooks and conversion tracking.",
  },
  {
    image: "/images/screen-4.jpg",
    category: "Full-Stack",
    title: "Pulse Analytics Dashboard",
    description:
      "Live metrics, role-based access, and exports built for ops leaders.",
  },
  {
    image: "/images/screen-5.jpg",
    category: "App Development",
    title: "Ledger SaaS Platform",
    description:
      "Multi-tenant billing app with subscriptions, invoices, and admin tools.",
  },
  {
    image: "/images/videos-service.jpg",
    category: "Videos",
    title: "Product Launch Films",
    description:
      "Demo reels and walkthrough edits that explain complex software clearly.",
  },
  {
    image: "/images/screen-6.jpg",
    category: "AI Automation",
    title: "InboxZero Agent",
    description:
      "AI triage for support queues — classify, draft replies, and route tickets.",
  },
  {
    image: "/images/contact.webp",
    category: "Website",
    title: "Studio Booking Portal",
    description:
      "Scheduling, payments, and client dashboards in one polished web flow.",
  },
  {
    image: "/images/screen-2.webp",
    category: "Full-Stack",
    title: "SyncBridge API Layer",
    description:
      "Unified API across legacy tools. Webhooks, auth, and observability included.",
  },
];

/** Featured on the home page (Selected Work). */
export const featuredProjects = allProjects.slice(0, 3);

/** @deprecated Use `featuredProjects` — kept for existing imports. */
export const projects = featuredProjects;

export const projectCategories = [
  "All",
  ...Array.from(new Set(allProjects.map((p) => p.category))),
];

export const services: Service[] = [
  {
    image: "/images/app-development.jpg",
    title: "App Development",
    description:
      "Production-ready web and mobile apps built with modern stacks. From architecture to deployment — scalable, maintainable software your users can rely on.",
  },
  {
    image: "/images/ai-automation.jpg",
    title: "AI Automation",
    description:
      "Custom workflows and AI integrations that eliminate repetitive work. Smart automations that connect your tools and save hours every week.",
  },
  {
    image: "/images/website.webp",
    title: "Website",
    description:
      "Fast, scalable sites and web apps built for real users. Clean code, solid performance, and UX that converts traffic into results.",
  },
  {
    image: "/images/videos-service.jpg",
    title: "Videos",
    description:
      "Product demos and launch videos for software teams. Clear storytelling that helps users understand complex products fast.",
  },
];

export const faqCategories: FAQCategory[] = [
  {
    name: "General",
    items: [
      {
        question: "What type of clients do you work with?",
        answer:
          "I work with startups, SaaS teams, and businesses that need reliable software — not just mockups. Whether you're launching an MVP, automating internal workflows, or scaling an existing product, I focus on builds that ship and hold up in production.",
      },
      {
        question: "What's your availability like?",
        answer:
          "I typically take on 2–3 projects at a time so each build gets proper attention. Reach out to check current availability — I'm happy to discuss timelines and fit.",
      },
      {
        question: "Do you work remotely or on-site?",
        answer:
          "Primarily remote. For kickoffs, technical workshops, or on-site sprints, I'm open to in-person collaboration depending on scope and location.",
      },
      {
        question: "Can I see more examples of your work?",
        answer:
          "Absolutely. The projects here are a curated selection. I can share additional case studies — architecture notes, stack details, and outcomes — during our first call.",
      },
    ],
  },
  {
    name: "Pricing",
    items: [
      {
        question: "How do you structure your pricing?",
        answer:
          "Project-based pricing tailored to scope, stack, and deliverables. Every engagement starts with a discovery call so you get a clear, transparent quote — no surprise line items.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes — a 50% deposit secures your slot and kicks off development. The balance is due when agreed milestones or final delivery are complete.",
      },
      {
        question: "Do you offer retainer packages?",
        answer:
          "Yes. For teams with ongoing dev or automation needs, monthly retainers include priority access, predictable capacity, and faster turnaround on iterations.",
      },
      {
        question: "What's included in a typical project quote?",
        answer:
          "Quotes cover planning, implementation, testing, deployment support, and handoff documentation. Revision rounds are included — the goal is software you're confident running in production.",
      },
    ],
  },
  {
    name: "Process",
    items: [
      {
        question: "What does your process look like?",
        answer:
          "Discovery call → Technical brief → Architecture & milestones → Build sprints → Review & QA → Deploy & handoff. You get updates at every stage with clear checkpoints and demos.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "MVPs and focused builds often land in 2–6 weeks. Larger apps or multi-system automation projects take longer — I'll set realistic timelines upfront based on scope.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "Two rounds of revisions per major milestone are standard. Because I align on requirements early, most clients need only one pass before we move to the next sprint.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "A short overview of the problem, any existing codebase or tools, and success criteria. I'll walk you through the rest on the kickoff call.",
      },
    ],
  },
  {
    name: "Results",
    items: [
      {
        question: "What kind of results can I expect?",
        answer:
          "Faster shipping, less manual work, and software that performs under real load. Past builds have cut ops time, improved conversion, and given teams platforms they can iterate on without starting over.",
      },
      {
        question: "Do you track performance metrics?",
        answer:
          "Yes — where it matters. I build with observability in mind and can align on KPIs like uptime, load time, automation hours saved, or conversion so impact is measurable.",
      },
      {
        question: "Can you share client testimonials?",
        answer:
          "Yes — references and testimonials are available on request. Many clients see faster delivery and fewer bottlenecks after shipping the first version with me.",
      },
      {
        question: "What makes your work different?",
        answer:
          "I sit at the intersection of product thinking and hands-on engineering. You get one person who can scope the problem, write the code, and ship something that actually runs in production.",
      },
    ],
  },
];