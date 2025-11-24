import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs, ProjectCategory } from "@/lib/projects";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import Footer from "@/components/layout/footer";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

const categoryLabels: Record<ProjectCategory, string> = {
  ios: "iOS",
  web: "Web App",
  tools: "Tools"
};

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <ThemeToggleFloating />
        <main className="min-h-screen bg-[#020406] text-zinc-50">
          <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 text-center backdrop-blur-md">
              <h1 className="text-2xl font-semibold text-zinc-100">Project not found</h1>
              <p className="mt-4 text-zinc-400">The project you&apos;re looking for doesn&apos;t exist.</p>
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-5 py-2.5 text-sm font-medium text-[#14F4C9] transition-all hover:bg-[#14F4C9]/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ThemeToggleFloating />
      <main className="min-h-screen bg-[#020406] text-zinc-50">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-16">
          {/* Breadcrumb / Back button */}
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all hover:border-[#14F4C9]/30 hover:bg-[#14F4C9]/10 hover:text-[#14F4C9]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
            <span>/</span>
            <span className="text-zinc-500">{project.title}</span>
          </div>

          {/* Hero Section */}
          <div className="rounded-3xl border border-[#14F4C9]/10 bg-zinc-900/60 p-8 backdrop-blur-md">
            <div className="mb-4 inline-block rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-400">
              {categoryLabels[project.category]}
            </div>

            <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">
              {project.title}
            </h1>

            <p className="mt-3 text-sm text-[#14F4C9]">
              {project.shortTagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              {project.timeline && (
                <>
                  <span>{project.timeline}</span>
                  <span>•</span>
                </>
              )}
              <span>{project.role}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Placeholder */}
          <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#6C63FF]/20 via-[#3A7BFF]/20 to-[#14F4C9]/20">
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-zinc-500">Project screenshot coming soon</p>
            </div>
          </div>

          {/* Overview */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-xl font-semibold text-zinc-100">Overview</h2>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
              {project.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* My Role */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-xl font-semibold text-zinc-100">My Role</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              {project.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Responsible for end-to-end development, implementation, and delivery of core features.
            </p>
          </section>

          {/* Key Features */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-xl font-semibold text-zinc-100">Key Features</h2>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F4C9]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What I Learned */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-xl font-semibold text-zinc-100">What I Learned</h2>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14F4C9]" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech & Links */}
          <section className="rounded-3xl border border-white/5 bg-zinc-900/60 p-8 backdrop-blur-md">
            <h2 className="mb-4 text-xl font-semibold text-zinc-100">Tech & Links</h2>
            
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-zinc-400">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-[#14F4C9]/30 hover:bg-[#14F4C9]/10 hover:text-[#14F4C9]"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#14F4C9]/30 bg-[#14F4C9]/10 px-4 py-2.5 text-sm font-medium text-[#14F4C9] transition-all hover:bg-[#14F4C9]/20 hover:shadow-[0_0_20px_rgba(20,244,201,0.3)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </section>

          {/* Back Navigation */}
          <div className="border-t border-white/5 pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[#14F4C9] transition-all hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
