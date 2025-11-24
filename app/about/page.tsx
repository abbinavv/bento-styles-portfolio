"use client";

import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";
import { ShellCard } from "@/components/ui/shell-card";
import { GlobalSpotlight } from "@/components/ui/global-spotlight";

export default function AboutPage() {
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

            {/* Hero Section in Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main About Card - 2 cols */}
              <ShellCard className="lg:col-span-2">
                <div className="flex h-full flex-col">
                  <p className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-white/40">
                    ABOUT
                  </p>
                  <h1 className="mb-0.5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Abhinav Raj
                  </h1>
                  <p className="mb-3 text-sm font-medium text-[#14F4C9]">
                    CS &amp; Business Systems Student · iOS Developer
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-white/70">
                    B.Tech student in Computer Science and Business Systems at SRM IST with a 9.52 CGPA. 
                    Experienced in iOS development (Swift), UI/UX design, and full-stack web development. 
                    Passionate about building responsive, data-driven applications that create real impact.
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">
                      SRM Institute of Science and Technology
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">
                      CS &amp; Business Systems
                    </span>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-semibold text-emerald-300">
                      CGPA: 9.52
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">
                      TechLead at Launchpad
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">
                      Swift · UI/UX
                    </span>
                  </div>
                </div>
              </ShellCard>

              {/* Location Card - 1 col */}
              <ShellCard className="min-h-[200px]">
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <div className="mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#3A7BFF]/30 bg-[#3A7BFF]/10">
                      <MapPin className="h-8 w-8 text-[#3A7BFF]" />
                    </div>
                  </div>

                  <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/40">BASED IN</p>
                  <h3 className="mb-2 text-[18px] font-semibold text-white">Chennai</h3>
                  <p className="text-[13px] text-white/70">Tamil Nadu, India</p>
                </div>
              </ShellCard>
            </div>

            {/* Now / What I'm doing */}
            <div className="grid gap-6 lg:grid-cols-2">
              <ShellCard>
                <div className="flex h-full flex-col">
                  <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Currently
                  </h2>
                  <div className="space-y-4 text-sm text-white/70">
                    <p className="leading-relaxed">
                      <span className="font-medium text-white">B.Tech in CS &amp; Business Systems</span> at SRM IST (2023–2027)
                    </p>
                    <p className="leading-relaxed">
                      Building iOS apps and prototypes with Swift, Storyboard, and AR/VR concepts.
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-medium text-white">TechLead at Launchpad Club</span> – leading tech initiatives, 
                      mentoring juniors, and running startup events.
                    </p>
                  </div>
                </div>
              </ShellCard>

              <ShellCard>
                <div className="flex h-full flex-col">
                  <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Focus Areas
                  </h2>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-3 py-1.5 font-medium text-[#14F4C9]">
                      iOS Development
                    </span>
                    <span className="rounded-full border border-[#3A7BFF]/30 bg-[#3A7BFF]/10 px-3 py-1.5 font-medium text-[#3A7BFF]">
                      UI/UX &amp; Product Thinking
                    </span>
                    <span className="rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-3 py-1.5 font-medium text-[#6C63FF]">
                      Full-stack Web
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-white/70">
                      AR/VR Experiments
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-white/70">
                      Data-driven Applications
                    </span>
                  </div>
                </div>
              </ShellCard>
            </div>

            {/* Short timeline */}
            <ShellCard className="lg:col-span-3">
              <div className="flex h-full flex-col">
                <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Timeline
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-[#14F4C9] ring-4 ring-[#14F4C9]/20"></div>
                      <div className="w-px flex-1 bg-white/10 mt-2"></div>
                    </div>
                    <div className="pb-4">
                      <p className="text-xs text-white/40">2025</p>
                      <p className="mt-1 text-sm font-medium text-white">Vocational Trainee at BSNL</p>
                      <p className="text-xs text-white/50">Bihar, India</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-[#3A7BFF] ring-4 ring-[#3A7BFF]/20"></div>
                      <div className="w-px flex-1 bg-white/10 mt-2"></div>
                    </div>
                    <div className="pb-4">
                      <p className="text-xs text-white/40">2023</p>
                      <p className="mt-1 text-sm font-medium text-white">TechLead at Launchpad Club</p>
                      <p className="text-xs text-white/50">SRM IST, Chennai</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-[#6C63FF] ring-4 ring-[#6C63FF]/20"></div>
                      <div className="w-px flex-1 bg-white/10 mt-2"></div>
                    </div>
                    <div className="pb-4">
                      <p className="text-xs text-white/40">2023</p>
                      <p className="mt-1 text-sm font-medium text-white">Joined SRM IST</p>
                      <p className="text-xs text-white/50">CS &amp; Business Systems</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-white/30 ring-4 ring-white/10"></div>
                    </div>
                    <div>
                      <p className="text-xs text-white/40">2022</p>
                      <p className="mt-1 text-sm font-medium text-white">Completed Higher Secondary</p>
                      <p className="text-xs text-white/50">PCM + IP, 87%</p>
                    </div>
                  </div>
                </div>
              </div>
            </ShellCard>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
