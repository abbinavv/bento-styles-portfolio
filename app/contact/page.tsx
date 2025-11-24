import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact | Abhinav Raj",
  description: "Get in touch with Abhinav Raj for collaborations, internships, and projects.",
};

export default function ContactPage() {
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
              Contact
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Let&apos;s Collaborate
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Open to internships, freelance iOS work, AR/VR experiments, and UI/UX collaborations.
            </p>
          </div>

          {/* Contact Methods */}
          <section className="grid gap-6 md:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:abhinavraj00001@gmail.com"
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#14F4C9]/30 hover:shadow-[0_0_40px_rgba(20,244,201,0.1)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#14F4C9]/10 transition-all group-hover:bg-[#14F4C9]/20">
                <Mail className="h-7 w-7 text-[#14F4C9]" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-100">
                Email
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                For direct conversations
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#14F4C9]">
                abhinavraj00001@gmail.com
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#14F4C9]/0 via-[#14F4C9]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abhinav-raj-a1979421b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#3A7BFF]/30 hover:shadow-[0_0_40px_rgba(58,123,255,0.1)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3A7BFF]/10 transition-all group-hover:bg-[#3A7BFF]/20">
                <Linkedin className="h-7 w-7 text-[#3A7BFF]" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-100">
                LinkedIn
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Professional network
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#3A7BFF]">
                @abhinavraj
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#3A7BFF]/0 via-[#3A7BFF]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/abbinavv"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md transition-all hover:border-[#6C63FF]/30 hover:shadow-[0_0_40px_rgba(108,99,255,0.1)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6C63FF]/10 transition-all group-hover:bg-[#6C63FF]/20">
                <Github className="h-7 w-7 text-[#6C63FF]" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-100">
                GitHub
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Open source &amp; projects
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#6C63FF]">
                @abbinavv
                <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-[#6C63FF]/0 via-[#6C63FF]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </section>

          {/* Contact form + what to reach out for */}
          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Quick Contact Form
              </h2>

              <form
                action="mailto:abhinavraj00001@gmail.com"
                method="post"
                encType="text/plain"
                className="mt-4 space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-zinc-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 backdrop-blur-sm transition-all focus:border-[#14F4C9]/50 focus:outline-none focus:ring-2 focus:ring-[#14F4C9]/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 backdrop-blur-sm transition-all focus:border-[#14F4C9]/50 focus:outline-none focus:ring-2 focus:ring-[#14F4C9]/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-zinc-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 backdrop-blur-sm transition-all focus:border-[#14F4C9]/50 focus:outline-none focus:ring-2 focus:ring-[#14F4C9]/20"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#14F4C9]/10 px-4 py-3 text-sm font-medium text-[#14F4C9] transition-all hover:bg-[#14F4C9]/20 hover:shadow-[0_0_20px_rgba(20,244,201,0.3)] focus:outline-none focus:ring-2 focus:ring-[#14F4C9]/50"
                >
                  Send Message
                </button>

                <p className="text-xs text-zinc-500">
                  Note: This form opens your default email client. You can also
                  email me directly.
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  What to Reach Out For
                </h2>

                <ul className="mt-4 space-y-3 text-sm text-zinc-200">
                  <li className="flex gap-2">
                    <span className="text-[#14F4C9]">•</span>
                    <span>
                      <span className="font-medium">Internship opportunities</span>{" "}
                      in iOS development, front-end, or product roles
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#14F4C9]">•</span>
                    <span>
                      <span className="font-medium">Freelance projects</span> for
                      mobile apps, websites, or UI/UX design
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#14F4C9]">•</span>
                    <span>
                      <span className="font-medium">Collaborations</span> on
                      student projects or startup ideas
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#14F4C9]">•</span>
                    <span>
                      <span className="font-medium">Tech discussions</span> about
                      Swift, React, design systems, or product development
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/5 bg-zinc-900/60 p-7 backdrop-blur-md">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Availability
                </h2>
                <p className="mt-4 text-sm text-zinc-300">
                  Currently based in Chennai, India. Happy to discuss remote opportunities.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
