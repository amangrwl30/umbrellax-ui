import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Sparkles, Users, Code2, Brain, Briefcase, Target, Rocket,
  Github, Cloud, Database, Container, Boxes, Bot, Workflow, Wrench,
  GitBranch, Linkedin, Instagram, Mail, Phone, MapPin, Menu, X,
  CheckCircle2, GraduationCap, Layers, MessageSquare, FileCode2, Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UmbrellaX Technologies — Transforming Potential Into Employability" },
      { name: "description", content: "AI-First Career Acceleration Platform. Industry mentorship, real-world projects, modern engineering practices, and placement assistance." },
      { property: "og:title", content: "UmbrellaX Technologies" },
      { property: "og:description", content: "Industry Mentorship. AI-First Learning. Career Acceleration." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <WhyUs />
      <Tracks />
      <TechStack />
      <AIFirst />
      <Journey />
      <Mentors />
      <Labs />
      <Testimonials />
      <About />
      <Apply />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Mentors", href: "#mentors" },
  { label: "Career Journey", href: "#journey" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#apply" },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
      <span
        className="grid h-8 w-8 place-items-center rounded-lg text-white shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Sparkles className="h-4 w-4" />
      </span>
      <span className={dark ? "text-white" : "text-foreground"}>
        Umbrella<span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>X</span>
      </span>
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[oklch(0.18_0.03_265/0.7)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo dark />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#apply"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            style={{ background: "var(--gradient-brand)" }}
          >
            Apply Now <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[oklch(0.18_0.03_265/0.95)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm text-white/80 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              Apply Now <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.15_0.03_265)_80%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:pt-44 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            AI-First Career Acceleration Platform
          </div>
          <h1 className="animate-fade-in text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transforming Potential
            <br />
            Into{" "}
            <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Employability
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Industry Mentorship. AI-First Learning. Career Acceleration.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/50 sm:text-base">
            Helping graduates and career transition candidates become industry-ready through mentorship, real-world projects, modern engineering practices, AI tools, and placement assistance.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105 sm:w-auto"
              style={{ background: "var(--gradient-brand)" }}
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#apply"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              Book Career Consultation
            </a>
          </div>
        </div>

        {/* Pipeline visual */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur md:p-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {[
                { icon: GraduationCap, label: "Students" },
                { icon: Users, label: "Mentorship" },
                { icon: Code2, label: "Projects" },
                { icon: Briefcase, label: "Industry" },
                { icon: Rocket, label: "Career Growth" },
              ].map((s, i) => (
                <div key={i} className="group relative flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-white/20 hover:bg-white/[0.08]">
                  <div className="grid h-10 w-10 place-items-center rounded-lg text-white" style={{ background: "var(--gradient-brand)" }}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-white/80 md:text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: Users, title: "Industry Mentors", desc: "Learn from senior engineers actively shipping at top product companies." },
    { icon: Code2, title: "Real Projects", desc: "Ship production-grade applications, not throwaway tutorials." },
    { icon: Brain, title: "AI-First Learning", desc: "Build with modern AI workflows from day one — the new baseline." },
    { icon: Wrench, title: "Modern Engineering Tools", desc: "GitHub, Jira, Docker, Cloud — the actual stack used in industry." },
    { icon: Target, title: "Career Coaching", desc: "Personalized roadmaps, interview prep, and growth strategy." },
    { icon: Briefcase, title: "Placement Assistance", desc: "Connections, referrals, and active support until you land the role." },
  ];
  return (
    <section id="programs" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why UmbrellaX"
          title="A different kind of career platform"
          sub="We don't run classes. We engineer outcomes — built on mentorship, real engineering, and AI-native practice."
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group relative bg-background p-8 transition-colors hover:bg-secondary/40">
              <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl text-white shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-brand)" }}>
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRACKS ---------------- */
function Tracks() {
  const tracks = [
    { title: "QA Engineering", desc: "Testing, Automation, API Testing, Industry Workflows", tag: "Quality Engineering" },
    { title: "Java Engineering", desc: "Java, Spring Boot, APIs, Databases, Backend Development", tag: "Backend" },
    { title: "React Engineering", desc: "Modern Frontend Development, React, APIs, UI Engineering", tag: "Frontend" },
  ];
  return (
    <section className="border-b border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Career Tracks" title="Choose your engineering specialization" sub="Each track is a structured journey — mentor-led, project-based, outcome-driven." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-brand)" }}
              />
              <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">{t.tag}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium" style={{ color: "oklch(0.55 0.2 270)" }}>
                Explore track <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TECH STACK ---------------- */
function TechStack() {
  const stack = [
    { name: "AWS", icon: Cloud },
    { name: "GitHub", icon: Github },
    { name: "Git", icon: GitBranch },
    { name: "Jira", icon: Layers },
    { name: "ChatGPT", icon: Bot },
    { name: "Claude", icon: Sparkles },
    { name: "Cursor", icon: FileCode2 },
    { name: "Spring Boot", icon: Boxes },
    { name: "React", icon: Code2 },
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Container },
  ];
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Modern Engineering Stack" title="Learn the technologies used by modern software teams" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((s) => (
            <div
              key={s.name}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md"
            >
              <s.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-sm font-medium text-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI FIRST ---------------- */
function AIFirst() {
  const items = [
    { icon: Bot, title: "AI Assisted Development", desc: "Pair-program with AI to ship faster and learn deeper." },
    { icon: Zap, title: "AI Assisted Testing", desc: "Generate, run, and reason about tests with modern tools." },
    { icon: MessageSquare, title: "Prompt Engineering", desc: "Master the new interface for building software." },
    { icon: Workflow, title: "Agentic Workflows", desc: "Design autonomous workflows that move work forward." },
    { icon: Layers, title: "MCP Fundamentals", desc: "Understand the protocol shaping AI-tool interoperability." },
    { icon: Sparkles, title: "AI Productivity Tools", desc: "Modern IDEs, copilots, and assistants in your daily flow." },
  ];
  return (
    <section className="relative overflow-hidden border-b border-border py-24" style={{ background: "var(--hero-bg)" }}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, oklch(0.5 0.2 270 / 0.4), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.5 0.2 240 / 0.4), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
            AI-First Workforce Development
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Preparing candidates for the{" "}
            <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI-native era
            </span>
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            AI literacy is the new baseline. Every UmbrellaX graduate ships with it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-brand)" }}>
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-white/60">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
function Journey() {
  const steps = [
    "Assessment",
    "Personalized Roadmap",
    "Technical Learning",
    "UmbrellaX Labs",
    "Mock Interviews",
    "Placement Assistance",
  ];
  return (
    <section id="journey" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Career Transformation Journey" title="A clear path from beginner to professional" />
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
            {steps.map((s, i) => (
              <div key={s} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 grid h-12 w-12 place-items-center rounded-full text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENTORS ---------------- */
function Mentors() {
  const mentors = [
    { name: "Aman Agarwal", role: "SDE-3, Backend (Java / Spring Boot)", company: "Senior Engineer", linkedin: "https://www.linkedin.com/in/aman-agarwal-598608140/", initials: "AA" },
    { name: "Sarang Sapre", role: "VP, Engineering — Database & AI/LLM Expert", company: "JPMorgan", linkedin: "https://www.linkedin.com/in/sarang-sapre-6a97b613b/", initials: "SS" },
    { name: "Dhanesh Rana", role: "Salesforce Developer", company: "Salesforce", linkedin: "https://www.linkedin.com/in/dhanesh-singh-rana/", initials: "DR" },
    { name: "Vinay Naugain", role: "Senior React Developer", company: "Airtel", linkedin: "https://www.linkedin.com/in/vinay-naugain/", initials: "VN" },
    { name: "Sonal Saini", role: "Senior SAP Specialist", company: "Enterprise SAP", linkedin: "https://www.linkedin.com/in/sonalsaini/", initials: "SO" },
  ];
  return (
    <section id="mentors" className="border-b border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Meet Your Mentors"
          title="Learn from engineers shipping at top companies"
          sub="Active practitioners from JPMorgan, Salesforce, Airtel and other leading technology teams."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-base font-semibold text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-foreground">{m.name}</h3>
                  <p className="truncate text-xs text-muted-foreground">{m.company}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{m.role}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LABS ---------------- */
function Labs() {
  const features = [
    "GitHub Collaboration",
    "Jira Workflows",
    "Agile Methodology",
    "Team Projects",
    "Documentation",
    "Code Reviews",
  ];
  return (
    <section className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              UmbrellaX Labs
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Real-world projects.
              <br />
              <span style={{ background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Real engineering workflows.
              </span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Ship features as a team — using the same tools, processes, and rituals as modern software engineering organizations.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "oklch(0.6 0.2 270)" }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-1.5 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground">umbrellax-labs / sprint-04</span>
              </div>
              <div className="space-y-3 p-5 font-mono text-xs">
                {[
                  { k: "PR #142", v: "feat: payments API integration", c: "merged" },
                  { k: "JIRA-218", v: "Implement OAuth refresh flow", c: "in-review" },
                  { k: "PR #141", v: "fix: rate-limit middleware", c: "merged" },
                  { k: "JIRA-211", v: "Write API contract tests", c: "in-progress" },
                  { k: "PR #139", v: "chore: setup CI pipeline", c: "merged" },
                ].map((r) => (
                  <div key={r.k} className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-3 py-2">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="shrink-0 text-muted-foreground">{r.k}</span>
                      <span className="truncate text-foreground">{r.v}</span>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        r.c === "merged"
                          ? "bg-emerald-100 text-emerald-700"
                          : r.c === "in-review"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {r.c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    { q: "UmbrellaX is bridging the gap between graduate skills and real industry expectations — exactly what the ecosystem needs.", a: "Sarang Sapre", r: "VP, Engineering — JPMorgan" },
    { q: "Mentorship combined with real engineering practice is the fastest path to job-ready candidates.", a: "Aman Agarwal", r: "Senior Backend Engineer" },
    { q: "AI-first workflows are no longer optional. UmbrellaX builds that mindset from day one.", a: "Vinay Naugain", r: "Senior React Developer" },
  ];
  return (
    <section className="border-b border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Voices" title="What mentors & industry leaders say" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-sm text-foreground/90">"{t.q}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="About UmbrellaX" title="Building India's most trusted employability platform" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg text-white" style={{ background: "var(--gradient-brand)" }}>
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Transform underprepared graduates into industry-ready professionals — through mentorship, real engineering, and AI-native practice.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg text-white" style={{ background: "var(--gradient-brand)" }}>
              <Rocket className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Build India's most trusted employability transformation platform — where talent meets opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPLY ---------------- */
function Apply() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="apply" className="relative overflow-hidden py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
            Apply Now
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Start your transformation
          </h2>
          <p className="mt-4 text-base text-white/60">
            Share a few details and our team will reach out with next steps.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your full name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <Field label="Phone" name="phone" type="tel" placeholder="+91" />
            <SelectField
              label="Current Status"
              name="status"
              options={["Final-year Student", "Graduate", "Working Professional", "Career Transition", "Government Exam Aspirant"]}
            />
            <SelectField
              label="Interested Track"
              name="track"
              options={["QA Engineering", "Java Engineering", "React Engineering", "Not sure yet"]}
            />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-white/70">Message</label>
            <textarea
              rows={4}
              required
              placeholder="Tell us a bit about your goals..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none ring-0 transition-colors focus:border-white/30"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
            style={{ background: "var(--gradient-brand)" }}
          >
            {submitted ? "Thank you — we'll be in touch" : "Start Your Transformation"} <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-white/70">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/30"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-white/70">{label}</label>
      <select
        id={name}
        name={name}
        required
        defaultValue=""
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white outline-none transition-colors focus:border-white/30"
      >
        <option value="" disabled className="bg-neutral-900">Select...</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-neutral-900">{o}</option>
        ))}
      </select>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.03_265)] py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Transforming Potential Into Employability.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:hello@umbrellax.tech" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Platform</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href} className="transition-colors hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@umbrellax.tech</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} UmbrellaX Technologies. All rights reserved.</span>
          <span>Transforming Potential Into Employability.</span>
        </div>
      </div>
    </footer>
  );
}
