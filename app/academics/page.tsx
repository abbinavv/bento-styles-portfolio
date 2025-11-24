import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, GraduationCap } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Academics | Abhinav Raj",
  description: "Academic background, achievements, and coursework of Abhinav Raj.",
};

export default function AcademicsPage() {
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
                <GraduationCap className="h-6 w-6 text-[#14F4C9]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Academics
                </p>
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Education &amp; Achievements
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Academic journey spanning computer science, business systems, and a strong foundation in mathematics and science.
            </p>
          </div>

          {/* Education Timeline */}
          <section>
            <h2 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <BookOpen className="h-4 w-4" />
              Education Timeline
            </h2>

            <div className="space-y-6">
              {/* B.Tech */}
              <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#14F4C9]/20">
                <div className="absolute left-7 top-7 h-2 w-2 rounded-full bg-[#3A7BFF] ring-4 ring-[#3A7BFF]/20" />
                <div className="pl-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        B.Tech in Computer Science and Business Systems
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        SRM Institute of Science and Technology, Chennai
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">2023 – 2027</span>
                      <span className="rounded-full border border-[#3A7BFF]/30 bg-[#3A7BFF]/10 px-3 py-1 text-xs font-semibold text-[#3A7BFF]">
                        CGPA: 9.52
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    Hybrid curriculum across core computer science, business
                    analytics, management, and decision science. Ranked in the top 20% of
                    the department.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-zinc-300">
                      Data Structures &amp; Algorithms
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-zinc-300">
                      Object-Oriented Programming
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-zinc-300">
                      Database Management Systems
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-zinc-300">
                      Business Analytics
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-zinc-300">
                      Web Technologies
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-zinc-300">
                      Operating Systems
                    </span>
                  </div>
                </div>
              </div>

              {/* Higher Secondary */}
              <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-sm transition-all hover:border-[#14F4C9]/20">
                <div className="absolute left-7 top-7 h-2 w-2 rounded-full bg-[#14F4C9] ring-4 ring-[#14F4C9]/20" />
                <div className="pl-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        Higher Secondary (12th Grade)
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        Mayo International School, New Delhi
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">Completed 2022</span>
                      <span className="rounded-full border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-3 py-1 text-xs font-semibold text-[#14F4C9]">
                        87%
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    Physics, Chemistry, Mathematics with Informatics Practices
                  </p>
                </div>
              </div>

              {/* Class 10 */}
              <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-sm transition-all hover:border-[#14F4C9]/20">
                <div className="absolute left-7 top-7 h-2 w-2 rounded-full bg-[#6C63FF] ring-4 ring-[#6C63FF]/20" />
                <div className="pl-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        Class 10
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        St. Paul's School, Begusarai
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">Completed 2020</span>
                      <span className="rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-3 py-1 text-xs font-semibold text-[#6C63FF]">
                        80%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements & Certifications */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-sm">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                <Award className="h-4 w-4" />
                Achievements &amp; Certifications
              </h2>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3A7BFF]" />
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      Oracle Cloud Infrastructure 2025 – Data Science
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">Oracle</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3A7BFF]" />
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      Java Programming
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      NPTEL (IIT/IISc)
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3A7BFF]" />
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      TOCFL – Novice 2 (Chinese Language)
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Taiwan Ministry of Education
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3A7BFF]" />
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      Academic Scholarship – Top 20% of Department
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">SRM IST</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-sm">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Relevant Coursework
              </h2>

              <div className="space-y-3 text-sm text-zinc-200">
                <div>
                  <p className="font-medium text-[#14F4C9]">
                    Computer Science Core
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Data Structures, Algorithms, OOP, DBMS, Operating Systems,
                    Computer Networks
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#14F4C9]">
                    Software Development
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Web Technologies, Mobile App Development, Software
                    Engineering
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#14F4C9]">
                    Business &amp; Analytics
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Business Analytics, Management Information Systems, Decision
                    Science
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#14F4C9]">
                    Mathematics &amp; Statistics
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Discrete Mathematics, Probability &amp; Statistics, Linear
                    Algebra
                  </p>
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
