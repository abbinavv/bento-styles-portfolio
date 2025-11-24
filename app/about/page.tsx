import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About | Abhinav Raj",
  description: "Learn more about Abhinav Raj - iOS developer and CS student building thoughtful mobile and web experiences.",
};

export default function AboutPage() {
  return (
    <>
      <ThemeToggleFloating />
      <main className="min-h-screen">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 rounded-lg border backdrop-blur-sm transition-all
              bg-white/80 border-slate-200/80 text-slate-700 hover:border-[#14F4C9]/40 hover:bg-[#14F4C9]/10 hover:text-[#14F4C9]
              dark:bg-white/5 dark:border-white/10 dark:text-zinc-400 dark:hover:border-[#14F4C9]/30 dark:hover:bg-[#14F4C9]/10 dark:hover:text-[#14F4C9]
              px-4 py-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to overview
          </Link>

          {/* Hero */}
          <section className="grid gap-6 md:grid-cols-[1.5fr,0.8fr]">
            <div className="rounded-3xl border backdrop-blur-xl transition-colors
              bg-white/80 border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.10)]
              dark:bg-slate-900/60 dark:border-[#14F4C9]/10 dark:shadow-[0_0_60px_rgba(20,244,201,0.1)]
              p-8"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500">
                About
              </p>
              <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-slate-900 dark:text-white">
                Abhinav Raj
              </h1>
              <p className="mt-1 text-sm font-medium text-[#14F4C9]">
                CS &amp; Business Systems Student · iOS Developer
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                B.Tech student in Computer Science and Business Systems at SRM IST with a 9.52 CGPA. 
                Experienced in iOS development (Swift), UI/UX design, and full-stack web development. 
                Passionate about building responsive, data-driven applications that create real impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border px-3 py-1.5 transition-colors
                  bg-slate-50/80 text-slate-700 border-slate-200
                  dark:bg-black/40 dark:text-zinc-300 dark:border-white/10"
                >
                  SRM Institute of Science and Technology
                </span>
                <span className="rounded-full border px-3 py-1.5 transition-colors
                  bg-slate-50/80 text-slate-700 border-slate-200
                  dark:bg-black/40 dark:text-zinc-300 dark:border-white/10"
                >
                  CS &amp; Business Systems
                </span>
                <span className="rounded-full border border-[#3A7BFF]/30 bg-[#3A7BFF]/10 px-3 py-1.5 font-semibold text-[#3A7BFF]">
                  CGPA: 9.52
                </span>
                <span className="rounded-full border px-3 py-1.5 transition-colors
                  bg-slate-50/80 text-slate-700 border-slate-200
                  dark:bg-black/40 dark:text-zinc-300 dark:border-white/10"
                >
                  TechLead at Launchpad
                </span>
                <span className="rounded-full border px-3 py-1.5 transition-colors
                  bg-slate-50/80 text-slate-700 border-slate-200
                  dark:bg-black/40 dark:text-zinc-300 dark:border-white/10"
                >
                  Swift · UI/UX
                </span>
              </div>
            </div>

            {/* Avatar + Location card */}
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 overflow-hidden rounded-3xl border backdrop-blur-md transition-colors
                bg-white/80 border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                dark:bg-slate-900/60 dark:border-[#14F4C9]/10
                p-6"
              >
                <div className="mx-auto w-32 h-32 rounded-full bg-linear-to-br from-[#14F4C9]/20 via-[#3A7BFF]/20 to-[#6C63FF]/20 p-1 shadow-[0_0_30px_rgba(20,244,201,0.3)]">
                  <div className="flex h-full w-full items-center justify-center rounded-full 
                    bg-slate-100 dark:bg-zinc-900"
                  >
                    <span className="text-5xl">👨‍💻</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-slate-500 dark:text-zinc-500">
                  Professional headshot placeholder
                </p>
              </div>
              
              <div className="rounded-3xl border backdrop-blur-md transition-colors
                bg-white/80 border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                dark:bg-slate-900/60 dark:border-white/10
                p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#14F4C9]/10">
                    <MapPin className="h-5 w-5 text-[#14F4C9]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">Based in</p>
                    <p className="text-xs text-zinc-400">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Now / What I'm doing */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Currently
              </h2>
              <div className="mt-4 space-y-4 text-sm text-zinc-300">
                <p className="leading-relaxed">
                  <span className="font-medium text-zinc-200">B.Tech in CS &amp; Business Systems</span> at SRM IST (2023–2027)
                </p>
                <p className="leading-relaxed">
                  Building iOS apps and prototypes with Swift, Storyboard, and AR/VR concepts.
                </p>
                <p className="leading-relaxed">
                  <span className="font-medium text-zinc-200">TechLead at Launchpad Club</span> – leading tech initiatives, 
                  mentoring juniors, and running startup events.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Focus Areas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-3 py-1.5 font-medium text-[#14F4C9]">
                  iOS Development
                </span>
                <span className="rounded-full border border-[#3A7BFF]/30 bg-[#3A7BFF]/10 px-3 py-1.5 font-medium text-[#3A7BFF]">
                  UI/UX &amp; Product Thinking
                </span>
                <span className="rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 px-3 py-1.5 font-medium text-[#6C63FF]">
                  Full-stack Web
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-zinc-300">
                  AR/VR Experiments
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-zinc-300">
                  Data-driven Applications
                </span>
              </div>
            </div>
          </section>

          {/* Short timeline */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Timeline
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-[#14F4C9] ring-4 ring-[#14F4C9]/20"></div>
                  <div className="w-px flex-1 bg-white/10 mt-2"></div>
                </div>
                <div className="pb-4">
                  <p className="text-xs text-zinc-500">2025</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">Vocational Trainee at BSNL</p>
                  <p className="text-xs text-zinc-400">Bihar, India</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-[#3A7BFF] ring-4 ring-[#3A7BFF]/20"></div>
                  <div className="w-px flex-1 bg-white/10 mt-2"></div>
                </div>
                <div className="pb-4">
                  <p className="text-xs text-zinc-500">2023</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">TechLead at Launchpad Club</p>
                  <p className="text-xs text-zinc-400">SRM IST, Chennai</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-[#6C63FF] ring-4 ring-[#6C63FF]/20"></div>
                  <div className="w-px flex-1 bg-white/10 mt-2"></div>
                </div>
                <div className="pb-4">
                  <p className="text-xs text-zinc-500">2023</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">Joined SRM IST</p>
                  <p className="text-xs text-zinc-400">CS &amp; Business Systems</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-white/30 ring-4 ring-white/10"></div>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">2022</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">Completed Higher Secondary</p>
                  <p className="text-xs text-zinc-400">PCM + IP, 87%</p>
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
