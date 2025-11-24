"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";
import { projects, getProjectsByCategory, ProjectCategory } from "@/lib/projects";
import { useState } from "react";

const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  ios: "iOS",
  web: "Web App",
  tools: "Tools"
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  
  const featuredProject = projects[0]; // AR Furniture App
  const filteredProjects = activeCategory === "all" 
    ? getProjectsByCategory() 
    : getProjectsByCategory(activeCategory);

  return (
    <>
      <ThemeToggleFloating />
      <main className="min-h-screen bg-[#020406] text-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm transition-all hover:border-[#14F4C9]/30 hover:bg-[#14F4C9]/10 hover:text-[#14F4C9]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to overview
          </Link>

          {/* Header */}
          <div className="rounded-3xl border border-[#14F4C9]/10 bg-zinc-900/60 p-8 shadow-[0_0_60px_rgba(20,244,201,0.1)] backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              FEATURED WORK
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Selected work across iOS, web, and tools – blending clean interfaces, performance, and practical use cases.
            </p>
          </div>

          {/* Featured Project Hero */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#14F4C9]/20 bg-zinc-900/60 p-8 backdrop-blur-md transition-all hover:border-[#14F4C9]/40 hover:shadow-[0_0_60px_rgba(20,244,201,0.15)]">
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-100 md:text-3xl">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#14F4C9]">
                    {featuredProject.shortTagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {featuredProject.summary}
                </p>

                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-5 py-2.5 text-sm font-medium text-[#14F4C9] transition-all hover:bg-[#14F4C9]/20 hover:shadow-[0_0_20px_rgba(20,244,201,0.3)]"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Screenshot placeholder */}
              <div className="aspect-video w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#6C63FF]/20 via-[#3A7BFF]/20 to-[#14F4C9]/20 lg:w-96">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-zinc-500">Screenshot coming soon</p>
                </div>
              </div>
            </div>

            {/* Hover glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#14F4C9]/0 via-[#14F4C9]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {(["all", "ios", "web", "tools"] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "border-[#14F4C9]/50 bg-[#14F4C9]/20 text-[#14F4C9] shadow-[0_0_20px_rgba(20,244,201,0.2)]"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <section className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#14F4C9]/20 hover:shadow-[0_0_40px_rgba(20,244,201,0.1)]"
              >
                {/* Category pill */}
                <div className="mb-3 inline-block rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-400">
                  {categoryLabels[project.category]}
                </div>

                <h3 className="text-lg font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[#14F4C9]">
                  {project.shortTagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#14F4C9]">
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                {/* Hover glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#14F4C9]/0 via-[#14F4C9]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
