"use client";

import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";
import { ShellCard } from "@/components/ui/shell-card";
import { GlobalSpotlight } from "@/components/ui/global-spotlight";

export default function ContactPage() {
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
                  CONTACT
                </p>
                <h1 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Let&apos;s Collaborate
                </h1>
                <p className="text-sm leading-relaxed text-white/70">
                  Open to internships, freelance iOS work, AR/VR experiments, and UI/UX collaborations.
                </p>
              </div>
            </ShellCard>

            {/* Contact Methods */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Email */}
              <ShellCard>
                <a href="mailto:abhinavraj00001@gmail.com" className="block h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#14F4C9]/10 transition-all hover:bg-[#14F4C9]/20">
                      <Mail className="h-7 w-7 text-[#14F4C9]" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      Email
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      For direct conversations
                    </p>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-[#14F4C9] group">
                      <span className="truncate">abhinavraj00001@gmail.com</span>
                      <ExternalLink className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </ShellCard>

              {/* LinkedIn */}
              <ShellCard>
                <a 
                  href="https://www.linkedin.com/in/abhinav-raj-a1979421b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3A7BFF]/10 transition-all hover:bg-[#3A7BFF]/20">
                      <Linkedin className="h-7 w-7 text-[#3A7BFF]" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      LinkedIn
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      Professional network
                    </p>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-[#3A7BFF] group">
                      @abhinavraj
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </ShellCard>

              {/* GitHub */}
              <ShellCard>
                <a 
                  href="https://github.com/abbinavv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6C63FF]/10 transition-all hover:bg-[#6C63FF]/20">
                      <Github className="h-7 w-7 text-[#6C63FF]" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      GitHub
                    </h3>
                    <p className="mt-2 text-sm text-white/50">
                      Open source &amp; projects
                    </p>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-[#6C63FF] group">
                      @abbinavv
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </ShellCard>
            </div>

            {/* What to reach out for */}
            <div className="grid gap-6 lg:grid-cols-2">
              <ShellCard>
                <div className="flex h-full flex-col">
                  <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    What I&apos;m Looking For
                  </h2>
                  <ul className="space-y-3 text-sm text-white/70">
                    <li className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>iOS Development Internships</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>Freelance Mobile App Projects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>AR/VR Experiments & Prototypes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>UI/UX Design Collaborations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>Full-stack Web Development</span>
                    </li>
                  </ul>
                </div>
              </ShellCard>

              <ShellCard>
                <div className="flex h-full flex-col">
                  <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Response Time
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70">
                    I typically respond within <span className="font-medium text-emerald-300">24-48 hours</span> during weekdays.
                    For urgent inquiries, please mention &quot;URGENT&quot; in the subject line.
                  </p>
                  <div className="mt-6 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs font-medium text-emerald-300">
                      📍 Currently Available
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Open to remote opportunities and on-site in Chennai
                    </p>
                  </div>
                </div>
              </ShellCard>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
