"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";
import { ShellCard } from "@/components/ui/shell-card";
import { GlobalSpotlight } from "@/components/ui/global-spotlight";
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Spotlight Effect */}
      <GlobalSpotlight radius={300} glowColor="20, 244, 201" />
      <ThemeToggleFloating />
      
      <div className="relative z-10">
        <main className="min-h-screen">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 lg:px-8">
            {/* Back button */}
            <Link
              href="/"
              className="group inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm transition-all hover:border-[#14F4C9]/30 hover:bg-[#14F4C9]/10 hover:text-[#14F4C9]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to overview
            </Link>

            {/* Header */}
            <ShellCard>
              <div className="flex h-full flex-col">
                <p className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-white/40">
                  FEATURED WORK
                </p>
                <h1 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Projects
                </h1>
                <p className="text-sm leading-relaxed text-white/70">
                  Selected work across iOS, web, and tools – blending clean interfaces, performance, and practical use cases.
                </p>
              </div>
            </ShellCard>

            {/* Featured Project Hero */}
            <ShellCard className="lg:col-span-3">
              <Link href={`/projects/${featuredProject.slug}`} className="block h-full group">
                <div className="flex h-full flex-col">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-semibold text-white md:text-3xl">
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
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm leading-relaxed text-white/70">
                        {featuredProject.summary}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200">
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ShellCard>

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
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ShellCard key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full group"
                >
                  <div className="flex h-full flex-col">
                    {/* Category pill */}
                    <div className="mb-3 inline-block self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                      {categoryLabels[project.category]}
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#14F4C9]">
                      {project.shortTagline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200">
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ShellCard>
            ))}
          </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
