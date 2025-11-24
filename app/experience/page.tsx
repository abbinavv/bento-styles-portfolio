import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, Target } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Experience | Abhinav Raj",
  description: "Professional experience and what I'm looking for next.",
};

export default function ExperiencePage() {
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
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#14F4C9]/10">
                <Briefcase className="h-6 w-6 text-[#14F4C9]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Experience
                </p>
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Vocational Trainee &amp; TechLead
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Professional experience from telecom infrastructure to leading tech initiatives at a campus startup club.
            </p>
          </div>

          {/* Experience Timeline */}
          <section>
            <h2 className="sr-only">Work Experience</h2>

            <div className="space-y-6">
              {/* BSNL */}
              <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#14F4C9]/20">
                {/* Timeline dot */}
                <div className="absolute left-7 top-7 h-2 w-2 rounded-full bg-[#3A7BFF] ring-4 ring-[#3A7BFF]/20" />

                <div className="pl-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        Vocational Trainee
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        BSNL – Bharat Sanchar Nigam Limited
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">Bihar</span>
                      <span className="rounded-full border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-3 py-1 text-xs font-semibold text-[#14F4C9]">
                        June 2025 – Present
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F4C9]" />
                      <span>
                        Built practical understanding of telecom infrastructure, broadband systems, and data routing at BSNL.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F4C9]" />
                      <span>
                        Gained exposure to multiplexing, switching systems, and real-world network management.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F4C9]" />
                      <span>
                        Assisted with diagnostics and basic maintenance tasks under senior engineer supervision.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Launchpad */}
              <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#14F4C9]/20">
                {/* Timeline dot */}
                <div className="absolute left-7 top-7 h-2 w-2 rounded-full bg-[#6C63FF] ring-4 ring-[#6C63FF]/20" />

                <div className="pl-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        TechLead
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        Launchpad Club – SRM Institute of Science and Technology
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">Chennai</span>
                      <span className="rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-3 py-1 text-xs font-semibold text-[#6C63FF]">
                        April 2023 – Present
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C63FF]" />
                      <span>
                        Lead tech initiatives at the campus startup club, mentoring student founders and managing technical teams.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C63FF]" />
                      <span>
                        Organised pitch events, hackathons, and startup showcases in collaboration with faculty and external partners.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C63FF]" />
                      <span>
                        Built and maintained web/app tooling for registrations, event management, and showcasing student projects.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Responsibility / impact card */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              What I Bring to a Team
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-[#14F4C9]">•</span>
                <span>Leading small tech teams end-to-end (from idea to shipped prototype).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#14F4C9]">•</span>
                <span>Balancing engineering with design, focusing on clean UX and performance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#14F4C9]">•</span>
                <span>Comfortable presenting work to both technical and non-technical stakeholders.</span>
              </li>
            </ul>
          </section>

          {/* Download résumé */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Résumé
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-zinc-400">
                Download a PDF copy of my full résumé
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-4 py-2 text-sm font-medium text-[#14F4C9] transition-all hover:bg-[#14F4C9]/20 hover:shadow-[0_0_20px_rgba(20,244,201,0.3)]"
              >
                Download Résumé (PDF)
              </a>
            </div>
          </section>

          {/* What I'm looking for */}
          <section className="rounded-3xl border border-[#3A7BFF]/20 bg-gradient-to-b from-[#3A7BFF]/5 via-zinc-900/60 to-black/80 p-8 shadow-[0_0_40px_rgba(58,123,255,0.15)] backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#3A7BFF]/10">
                <Target className="h-5 w-5 text-[#3A7BFF]" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">
                  What I'm Looking For Next
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300">
                  Internships and part-time roles in{" "}
                  <span className="font-medium text-[#14F4C9]">
                    iOS development
                  </span>
                  ,{" "}
                  <span className="font-medium text-[#14F4C9]">
                    front-end engineering
                  </span>
                  , or{" "}
                  <span className="font-medium text-[#14F4C9]">
                    product-focused software roles
                  </span>
                  , where I can design, build, and ship user-facing features
                  end-to-end.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-3 py-1 text-[#14F4C9]">
                    iOS Development
                  </span>
                  <span className="rounded-full border border-[#3A7BFF]/30 bg-[#3A7BFF]/10 px-3 py-1 text-[#3A7BFF]">
                    Front-End Engineering
                  </span>
                  <span className="rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-3 py-1 text-[#6C63FF]">
                    Product Development
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-zinc-300">
                    UI/UX Design
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-zinc-300">
                    Full-Stack
                  </span>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#14F4C9]/10 px-4 py-2 text-sm font-medium text-[#14F4C9] transition-all hover:bg-[#14F4C9]/20 hover:shadow-[0_0_20px_rgba(20,244,201,0.3)]"
                  >
                    Let's talk
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
