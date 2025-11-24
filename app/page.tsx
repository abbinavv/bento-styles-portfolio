"use client";

import Footer from "@/components/layout/footer";
import ThemeToggleFloating from "@/components/ui/theme-toggle-floating";
import { ShellCard } from "@/components/ui/shell-card";
import { GlobalSpotlight } from "@/components/ui/global-spotlight";
import { Github, Linkedin, Mail, MapPin, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Spotlight Effect */}
      <GlobalSpotlight radius={300} glowColor="20, 244, 201" />
      
      <div className="relative z-10">
        <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
          {/* Multi-row grid layout */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Row 1: About (2 cols) + Connect (1 col) */}
            <ShellCard className="lg:col-span-2 min-h-[280px] [&>div>div>div]:!pb-4">
              <AboutCardContent />
            </ShellCard>
            
            <ShellCard className="min-h-[280px]">
              <ConnectCardContent />
            </ShellCard>

            {/* Row 2: Education (2 cols) + Location (1 col) */}
            <ShellCard className="lg:col-span-2 min-h-[260px]">
              <EducationCardContent />
            </ShellCard>
            
            <ShellCard className="min-h-[200px]">
              <LocationCardContent />
            </ShellCard>

            {/* Row 3: Experience (2 cols) + Skills (1 col) */}
            <ShellCard className="lg:col-span-2 min-h-[260px]">
              <ExperienceCardContent />
            </ShellCard>
            
            <ShellCard className="min-h-[260px]">
              <SkillsCardContent />
            </ShellCard>

            {/* Row 4: Featured Projects (full width) */}
            <ShellCard className="lg:col-span-3 min-h-[260px]">
              <FeaturedProjectContent />
            </ShellCard>
            
            {/* Row 5: Certifications (2 cols) + Interests (1 col) */}
            <ShellCard className="lg:col-span-2 min-h-60">
              <CertificationsCardContent />
            </ShellCard>
            
            <ShellCard className="min-h-60">
              <InterestsCardContent />
            </ShellCard>
          </div>
        </main>

        {/* Floating theme toggle */}
        <ThemeToggleFloating />

        <Footer />
      </div>
    </div>
  );
}

// About Card Content
function AboutCardContent() {
  return (
    <Link href="/about" className="block h-full">
      <div className="flex h-full flex-col">
        <p className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-white/40">
          ABOUT
        </p>
        
        <h3 className="mb-0.5 text-[18px] font-semibold text-white">
          Abhinav Raj
        </h3>
        
        <p className="mb-3 text-[14px] font-medium text-white/80">
          CS & Business Systems Student · iOS Developer
        </p>
        
        <p className="mb-3 text-[13px] leading-6 text-white/70">
          B.Tech student in Computer Science and Business Systems with a 9.52 CGPA at SRM IST. Experienced in iOS development (Swift), UI/UX design, and full-stack web development. Passionate about building responsive, data-driven applications that create real impact.
        </p>

        {/* Meta chips */}
        <div className="mt-auto flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
            SRM Institute of Science and Technology
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
            CS & Business Systems
          </span>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] text-emerald-300">
            CGPA: 9.52
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
            TechLead at Launchpad
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
            Swift · UI/UX
          </span>
        </div>

        {/* CTA */}
        <div className="mt-4 pt-3 border-t border-white/5">
          <span className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-300 hover:text-emerald-200 transition-colors">
            View Full Profile →
          </span>
        </div>
      </div>
    </Link>
  );
}

// Connect Card Content
function ConnectCardContent() {
  const socialLinks = [
    {
      name: "GitHub",
      label: "GitHub",
      subtext: "@abbinavv",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/abbinavv",
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      subtext: "@abhinavraj",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/abhinav-raj-a1979421b/",
    },
    {
      name: "Email",
      label: "Email",
      subtext: "abhinavraj00001@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:abhinavraj00001@gmail.com",
    },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1">
        <p className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-white/40">
          CONNECT
        </p>
        <h3 className="mb-2 text-[18px] font-semibold text-white">
          Let&apos;s collaborate
        </h3>
        <p className="text-[13px] leading-6 text-white/70">
          Reach out for iOS apps, AR/VR experiments, or UI design work. I&apos;m open to internships, freelance projects, and collaborations.
        </p>
      </div>

      <div className="my-4 space-y-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2.5 transition-all hover:border-emerald-400/30 hover:bg-white/10"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all group-hover:border-emerald-400/30 group-hover:text-emerald-300">
              {social.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-medium text-white">{social.label}</p>
              <p className="truncate text-[12px] text-white/50">{social.subtext}</p>
            </div>
          </a>
        ))}
      </div>

      <Link href="/contact">
        <div className="border-t border-white/5 pt-3.5">
          <span className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-300 transition-colors hover:text-emerald-200">
            View contact details →
          </span>
        </div>
      </Link>
    </div>
  );
}

// Education Card Content
function EducationCardContent() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Business Systems",
      institution: "SRM Institute of Science and Technology, Chennai",
      period: "2023 – 2027",
      gpa: "CGPA: 9.52",
      description: "Hybrid curriculum across core CS, business analytics, management, and decision science. Ranked in the top 20% of the department.",
    },
    {
      degree: "Higher Secondary (PCM + IP, 87%)",
      institution: "Mayo International School, New Delhi",
      period: "Completed: 2022",
      gpa: null,
      description: null,
    },
  ];

  return (
    <Link href="/academics" className="block h-full">
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            ACADEMICS
          </p>
          <h3 className="text-[18px] font-semibold text-white">
            Education
          </h3>
        </div>

        <ul className="mb-auto flex-1 space-y-4">
          {education.map((edu, index) => (
            <li key={index} className="flex gap-4">
              <div className="relative z-10 mt-1.5 hidden h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 ring-4 ring-black/50 md:block" />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium leading-tight text-white">
                  {edu.degree}
                </p>
                <p className="mt-1 text-[12px] text-white/50">
                  {edu.institution}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[12px] text-white/50">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <>
                      <span className="text-white/30">•</span>
                      <span className="font-medium text-emerald-300">{edu.gpa}</span>
                    </>
                  )}
                </div>
                {edu.description && (
                  <p className="mt-2 text-[13px] leading-6 text-white/60">
                    {edu.description}
                  </p>
                )}
              </div>
            </li>
          ))}
          
          {/* St. Paul's School */}
          <li className="text-[12px] text-white/40">
            St. Paul&apos;s School, Begusarai – Class 10, 80% (2020)
          </li>
        </ul>

        <div className="mt-6 border-t border-white/5 pt-4">
          <span className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-300 transition-colors hover:text-emerald-200">
            View Full Timeline →
          </span>
        </div>
      </div>
    </Link>
  );
}

// Location Card Content
function LocationCardContent() {
  return (
    <Link href="/contact" className="block h-full">
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
    </Link>
  );
}

// Experience Card Content
function ExperienceCardContent() {
  const experiences = [
    {
      title: "Vocational Trainee",
      company: "BSNL",
      location: "Bihar",
      period: "June 2025 – Present",
      description: "Built practical understanding of telecom infrastructure, broadband systems, and data routing at BSNL. Gained exposure to multiplexing, switching systems, and real-world network management.",
    },
    {
      title: "TechLead",
      company: "Launchpad Club",
      location: "SRM IST",
      period: "April 2023 – Present",
      description: "Leading tech initiatives at the campus startup club, supporting student founders, organizing pitch events, and managing web/app tooling for events and startup showcases.",
    },
  ];

  return (
    <Link href="/experience" className="block h-full">
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            EXPERIENCE
          </p>
          <h3 className="text-[18px] font-semibold text-white">
            Vocational Trainee & TechLead
          </h3>
        </div>

        <div className="mb-auto flex-1 space-y-5">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-1.5">
              <div>
                <p className="text-[14px] font-medium leading-tight text-white">
                  {exp.title} — {exp.company}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[12px] text-white/50">
                  <span>{exp.location}</span>
                  <span className="text-white/30">•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-[13px] leading-6 text-white/70">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-white/5 pt-4">
          <span className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-300 transition-colors hover:text-emerald-200">
            View Experience →
          </span>
        </div>
      </div>
    </Link>
  );
}

// Skills Card Content
function SkillsCardContent() {
  const skills = [
    "Java", "C++", "Python", "Swift", "React", "JavaScript",
    "MySQL", "MongoDB", "Flask", "HTML/CSS", "Git/GitHub", "Figma"
  ];

  return (
    <Link href="/about#skills" className="block h-full">
      <div className="flex h-full flex-col">
        <div className="mb-5">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            SKILLS
          </p>
          <h3 className="text-[18px] font-semibold text-white">
            Tech Stack
          </h3>
        </div>

        <div className="flex flex-1 items-center">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 transition-all hover:border-emerald-400/30 hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Certifications Card Content
function CertificationsCardContent() {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 – Data Science",
      issuer: "Oracle",
    },
    {
      title: "NPTEL – Java Programming",
      issuer: "NPTEL",
    },
    {
      title: "TOCFL – Novice 2 (Chinese)",
      issuer: "TOCFL",
    },
    {
      title: "Academic Scholarship – Top 20% of Department",
      issuer: "SRM IST",
    },
  ];

  return (
    <Link href="/about#certifications" className="block h-full">
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            CERTIFICATIONS
          </p>
          <h3 className="text-[18px] font-semibold text-white">
            Achievements
          </h3>
        </div>

        <ul className="flex-1 space-y-2.5">
          {certifications.map((cert, index) => (
            <li
              key={index}
              className="flex gap-2"
            >
              <span className="shrink-0 text-[13px] text-emerald-300">•</span>
              <div>
                <p className="text-[13px] font-medium leading-tight text-white">
                  {cert.title}
                </p>
                <p className="mt-0.5 text-[12px] text-white/50">
                  {cert.issuer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

// Interests Card Content
function InterestsCardContent() {
  const interests = [
    "Competitive Coding",
    "Blogging about Tech & Design",
    "Learning Languages",
    "Reading & Movies"
  ];

  return (
    <Link href="/about#interests" className="block h-full">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="mb-4">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            BEYOND CODE
          </p>
          <h3 className="text-[18px] font-semibold text-white">
            Interests
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

// Featured Project Content
function FeaturedProjectContent() {
  interface MediaItem {
    title: string;
    description: string;
    category: string;
    slug: string;
  }

  const mediaItems: MediaItem[] = [
    {
      title: "Carbon Footprint Emission Calculator",
      description: "Database-driven web app to estimate personal carbon footprints.",
      category: "Python Flask MySQL HTML/CSS/JS",
      slug: "carbon-footprint-emission-calculator",
    },
    {
      title: "AR Furniture App",
      description: "iOS prototype to visualise furniture in real spaces.",
      category: "Swift Storyboard Figma",
      slug: "ar-furniture-app",
    },
    {
      title: "CPU Scheduling Visualizer",
      description: "Interactive visualisation of CPU scheduling algorithms.",
      category: "JavaScript HTML CSS",
      slug: "cpu-scheduling-visualizer",
    },
  ];

  const getTechTags = (category: string): string[] => {
    return category.split(' ');
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovering, mediaItems.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <div
      className="relative flex h-full min-h-[300px] flex-col lg:min-h-[350px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/40">
            FEATURED WORK
          </p>
          <h3 className="text-[18px] font-semibold text-white">
            Projects
          </h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          <span className="text-[11px] font-medium text-white/70">
            {currentIndex + 1} / {mediaItems.length}
          </span>
        </div>
      </div>

      {/* Project content */}
      <div className="relative flex flex-1 items-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {getTechTags(currentItem.category).map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href={`/projects/${currentItem.slug}`}>
              <h4 className="mb-2 cursor-pointer text-[14px] font-medium leading-tight text-white transition-colors hover:text-emerald-300 md:text-[16px]">
                {currentItem.title}
              </h4>
            </Link>
            <p className="mb-4 text-[13px] leading-6 text-white/70">
              {currentItem.description}
            </p>

            <div className="mb-4 flex gap-1.5">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="group/indicator relative h-1 flex-1 overflow-hidden rounded-full bg-white/10"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: index === currentIndex ? 1 : 0,
                    }}
                    transition={{
                      duration: index === currentIndex && isPlaying && !isHovering ? 4 : 0.3,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </button>
              ))}
            </div>

            <Link href="/projects">
              <div className="border-t border-white/5 pt-4">
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-300 transition-colors hover:text-emerald-200">
                  View All Projects →
                </span>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute inset-0 rounded-xl"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          <button
            onClick={goToPrevious}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white backdrop-blur-sm transition-colors hover:bg-black"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white backdrop-blur-sm transition-colors hover:bg-black"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="pointer-events-none absolute right-0 top-0">
          <button
            onClick={togglePlayPause}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white backdrop-blur-sm transition-colors hover:bg-black"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="ml-0.5 h-4 w-4" />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
