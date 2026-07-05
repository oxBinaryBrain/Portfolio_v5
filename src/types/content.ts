export interface Project {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  overview: string;
  role: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
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
    slug: "opsflow-workflow-engine",
    image: "/images/ai-automation.jpg",
    category: "AI Automation",
    title: "OpsFlow Workflow Engine",
    description:
      "Custom AI pipelines and integrations. Cut manual ops time by 70%.",
    overview:
      "Built an internal automation layer that connects CRM events, support inboxes, and reporting dashboards. AI classifies incoming work, routes tasks, and drafts responses for human review.",
    role: "Lead developer — architecture, integrations, deployment",
    outcome: "Reduced weekly manual ops work by ~70% across a 12-person team.",
    stack: ["Python", "OpenAI API", "FastAPI", "PostgreSQL", "n8n"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "kyma-mobile-platform",
    image: "/images/app-development.jpg",
    category: "App Development",
    title: "KYMA Mobile Platform",
    description:
      "Cross-platform app from MVP to production. Scaled to 10k active users.",
    overview:
      "End-to-end mobile product with onboarding, real-time sync, push notifications, and an admin dashboard for content and user management.",
    role: "Full-stack developer — mobile app, API, release pipeline",
    outcome: "Shipped MVP in 6 weeks; grew to 10k monthly active users post-launch.",
    stack: ["React Native", "TypeScript", "Node.js", "Firebase", "Expo"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "maru-client-portal",
    image: "/images/screen-4.jpg",
    category: "Full-Stack",
    title: "Maru Client Portal",
    description:
      "End-to-end web platform with auth, dashboards, and real-time data.",
    overview:
      "Client-facing portal with secure login, project status tracking, file delivery, and live activity feeds — replacing a patchwork of emails and spreadsheets.",
    role: "Full-stack developer — frontend, API, database design",
    outcome: "Cut client status-update emails by 80% and improved delivery visibility.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "nexus-crm-automations",
    image: "/images/screen-6.jpg",
    category: "AI Automation",
    title: "Nexus CRM Automations",
    description:
      "Lead routing, follow-ups, and reporting wired into one hands-off system.",
    overview:
      "Automation suite for a sales team: new leads scored, assigned, nurtured via email sequences, and summarized in a weekly pipeline report.",
    role: "Automation engineer — workflow design and implementation",
    outcome: "Sales team saved ~15 hours per week on lead admin and follow-ups.",
    stack: ["Zapier", "Python", "HubSpot API", "Google Sheets", "Slack"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "fleettrack-field-app",
    image: "/images/screen-2.webp",
    category: "App Development",
    title: "FleetTrack Field App",
    description:
      "Offline-first mobile app for dispatch teams. Real-time sync in the field.",
    overview:
      "Mobile app for drivers and dispatchers with offline job lists, GPS check-ins, photo uploads, and automatic sync when connectivity returns.",
    role: "Mobile & backend developer",
    outcome: "Field teams completed 40% more jobs per day with fewer dispatch calls.",
    stack: ["Flutter", "Dart", "Supabase", "Mapbox", "REST API"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "launchpad-marketing-site",
    image: "/images/website.webp",
    category: "Website",
    title: "LaunchPad Marketing Site",
    description:
      "High-performance landing system with CMS hooks and conversion tracking.",
    overview:
      "Marketing site with modular sections, fast LCP, analytics events, and a lightweight CMS workflow so the team could ship copy changes without dev help.",
    role: "Frontend lead — design system, performance, CMS integration",
    outcome: "Lighthouse 95+ scores and a 28% lift in demo sign-ups after relaunch.",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "Sanity CMS", "GA4"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "pulse-analytics-dashboard",
    image: "/images/screen-5.jpg",
    category: "Full-Stack",
    title: "Pulse Analytics Dashboard",
    description:
      "Live metrics, role-based access, and exports built for ops leaders.",
    overview:
      "Operations dashboard aggregating sales, support, and product metrics with role-based views, CSV exports, and alerting when KPIs drift off target.",
    role: "Full-stack developer — data layer, UI, auth",
    outcome: "Leadership replaced 4 separate spreadsheets with one live source of truth.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "ledger-saas-platform",
    image: "/images/screen-1.webp",
    category: "App Development",
    title: "Ledger SaaS Platform",
    description:
      "Multi-tenant billing app with subscriptions, invoices, and admin tools.",
    overview:
      "B2B SaaS billing platform supporting multiple workspaces, Stripe subscriptions, invoice PDFs, usage metering, and an internal admin console.",
    role: "Full-stack developer — billing logic, tenant isolation, admin UI",
    outcome: "Processed first $50k MRR through the platform within 3 months of launch.",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "AWS"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "product-launch-films",
    image: "/images/videos-service.jpg",
    category: "Videos",
    title: "Product Launch Films",
    description:
      "Demo reels and walkthrough edits that explain complex software clearly.",
    overview:
      "Short-form product demos and feature walkthroughs for SaaS launches — scripted, screen-recorded, edited, and captioned for web and social.",
    role: "Producer & editor — storyboard, capture, post-production",
    outcome: "Launch videos averaged 3× higher completion rate vs. static docs alone.",
    stack: ["Premiere Pro", "After Effects", "Figma", "Loom", "Descript"],
  },
  {
    slug: "inboxzero-agent",
    image: "/images/screen-3.webp",
    category: "AI Automation",
    title: "InboxZero Agent",
    description:
      "AI triage for support queues — classify, draft replies, and route tickets.",
    overview:
      "AI assistant plugged into a support inbox: tags urgency, suggests replies, routes to the right teammate, and logs resolution patterns for review.",
    role: "AI integration developer",
    outcome: "Median first-response time dropped from 4 hours to under 45 minutes.",
    stack: ["Python", "OpenAI API", "Zendesk API", "Redis", "FastAPI"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "studio-booking-portal",
    image: "/images/contact.webp",
    category: "Website",
    title: "Studio Booking Portal",
    description:
      "Scheduling, payments, and client dashboards in one polished web flow.",
    overview:
      "Booking flow with calendar availability, Stripe deposits, automated confirmations, and a client area to manage upcoming sessions.",
    role: "Full-stack developer",
    outcome: "Online bookings replaced 90% of manual scheduling messages.",
    stack: ["Next.js", "Stripe", "Cal.com API", "PostgreSQL", "Resend"],
    githubUrl: "https://github.com/oxBinaryBrain",
  },
  {
    slug: "syncbridge-api-layer",
    image: "/images/screen-6.jpg",
    category: "Full-Stack",
    title: "SyncBridge API Layer",
    description:
      "Unified API across legacy tools. Webhooks, auth, and observability included.",
    overview:
      "Middleware API normalizing data from three legacy systems into one clean REST surface with OAuth, webhooks, rate limiting, and request logging.",
    role: "Backend architect & implementer",
    outcome: "New integrations shipped in days instead of weeks.",
    stack: ["Node.js", "Express", "Redis", "Docker", "OpenAPI"],
    githubUrl: "https://github.com/oxBinaryBrain",
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

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

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