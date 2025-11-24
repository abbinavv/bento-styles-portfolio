"use client";

import { Footer } from "./components/Footer";
import { ThemeToggleFloating } from "./components/ThemeToggleFloating";
import { GlowCard } from "@/components/ui/glow-card";
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
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Row 1: About (2 cols) + Connect (1 col) */}
            <GlowCard className="lg:col-span-2">
              <AboutCardContent />
            </GlowCard>
            
            <GlowCard>
              <ConnectCardContent />
            </GlowCard>

            {/* Row 2: Education (2 cols) + Location (1 col) */}
            <GlowCard className="lg:col-span-2">
              <EducationCardContent />
            </GlowCard>
            
            <GlowCard>
              <LocationCardContent />
            </GlowCard>

            {/* Row 3: Experience (2 cols) + Skills (1 col) */}
            <GlowCard className="lg:col-span-2">
              <ExperienceCardContent />
            </GlowCard>
            
            <GlowCard>
              <SkillsCardContent />
            </GlowCard>

            {/* Row 4: Featured Projects (full width) */}
            <GlowCard className="lg:col-span-3">
              <FeaturedProjectContent />
            </GlowCard>
            
            {/* Row 5: Certifications (2 cols) + Interests (1 col) */}
            <GlowCard className="lg:col-span-2">
              <CertificationsCardContent />
            </GlowCard>
            
            <GlowCard>
              <InterestsCardContent />
            </GlowCard>
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
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col justify-between"
      >
        {/* Header */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-3">
            ABOUT
          </p>
          
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-1">
            Abhinav Raj
          </h3>
          
          <p className="text-sm md:text-base text-muted-foreground font-medium mb-3">
            CS & Business Systems Student · iOS Developer
          </p>
          
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
            B.Tech student in Computer Science and Business Systems with a 9.52 CGPA at SRM IST. Experienced in iOS development (Swift), UI/UX design, and full-stack web development. Passionate about building responsive, data-driven applications that create real impact.
          </p>
        </div>

        {/* Meta chips */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-[11px] font-medium text-foreground">
              SRM Institute of Science and Technology
            </span>
            <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-[11px] font-medium text-foreground">
              CS & Business Systems
            </span>
            <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-[11px] font-medium text-primary">
              CGPA: 9.52
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-[11px] font-medium text-foreground">
              TechLead at Launchpad
            </span>
            <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-[11px] font-medium text-foreground">
              Swift · UI/UX
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <button className="text-sm font-medium text-primary hover:underline transition-all text-left">
            View Full Profile →
          </button>
        </div>
      </motion.div>
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
    <div className="h-full flex flex-col justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-3">
          CONNECT
        </p>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          Let&apos;s collaborate
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          Reach out for iOS apps, AR/VR experiments, or UI design work. I&apos;m open to internships, freelance projects, and collaborations.
        </p>
      </div>

      <div className="space-y-3 my-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:bg-muted/50 hover:border-primary/30 transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/50 border border-border text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all">
              {social.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground">{social.label}</p>
              <p className="text-xs text-muted-foreground truncate">{social.subtext}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <Link href="/contact">
        <button className="text-sm font-medium text-primary hover:underline transition-all text-left">
          View contact details →
        </button>
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
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col"
      >
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
            ACADEMICS
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Education
          </h3>
        </div>

        <ul className="flex-1 space-y-6 relative">
          <div className="absolute left-2 top-3 bottom-3 w-px bg-border hidden md:block" />
          
          {education.map((edu, index) => (
            <li key={index} className="flex gap-4 relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 ring-4 ring-background/50 hidden md:block"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-semibold text-foreground leading-tight">
                  {edu.degree}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground flex-wrap">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <>
                      <span className="text-muted-foreground/50">•</span>
                      <span className="text-primary font-medium">{edu.gpa}</span>
                    </>
                  )}
                </div>
                {edu.description && (
                  <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </li>
          ))}
          
          {/* St. Paul's School */}
          <li className="text-xs text-muted-foreground/60 ml-6 md:ml-0">
            St. Paul&apos;s School, Begusarai – Class 10, 80% (2020)
          </li>
        </ul>

        <button className="mt-4 text-sm font-medium text-primary hover:underline transition-all text-left">
          View Full Timeline →
        </button>
      </motion.div>
    </Link>
  );
}

// Location Card Content
function LocationCardContent() {
  return (
    <Link href="/contact" className="block h-full">
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col items-center justify-center text-center"
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-4"
        >
          <div className="w-14 h-14 rounded-xl bg-[#3A7BFF]/10 border border-[#3A7BFF]/30 flex items-center justify-center">
            <MapPin className="w-7 h-7 text-[#3A7BFF]" />
          </div>
        </motion.div>

        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">BASED IN</p>
        <h3 className="text-xl font-bold text-foreground mb-1">Chennai</h3>
        <p className="text-sm text-muted-foreground">Tamil Nadu, India</p>
      </motion.div>
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
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col"
      >
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
            EXPERIENCE
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Vocational Trainee & TechLead
          </h3>
        </div>

        <div className="flex-1 space-y-5">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-2">
              <div>
                <p className="text-sm md:text-base font-semibold text-foreground leading-tight">
                  {exp.title} — {exp.company}
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <span>{exp.location}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-4 text-sm font-medium text-primary hover:underline transition-all text-left">
          View Experience →
        </button>
      </motion.div>
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
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col"
      >
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
            SKILLS
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Tech Stack
          </h3>
        </div>

        <div className="flex-1 flex items-center">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-xs font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
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
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col"
      >
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
            CERTIFICATIONS
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Achievements
          </h3>
        </div>

        <ul className="flex-1 space-y-3">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-2"
            >
              <span className="text-primary text-sm shrink-0">•</span>
              <div>
                <p className="text-sm text-foreground font-medium leading-tight">
                  {cert.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cert.issuer}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
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
      <motion.div
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="h-full flex flex-col items-center justify-center text-center"
      >
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
            BEYOND CODE
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Interests
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {interests.map((interest, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary"
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </motion.div>
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
      className="relative h-full min-h-[300px] lg:min-h-[350px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_70%)] rounded-xl" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-linear-to-br from-[#6C63FF]/10 via-[#3A7BFF]/5 to-primary/10 rounded-xl"
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
              FEATURED WORK
            </p>
            <h3 className="text-sm md:text-base font-semibold text-foreground">
              Projects
            </h3>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-muted/50 border border-border">
            <span className="text-xs font-medium text-foreground">
              {currentIndex + 1} / {mediaItems.length}
            </span>
          </div>
        </div>

        {/* Project content */}
        <div className="flex-1 flex items-end mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                {getTechTags(currentItem.category).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-full bg-muted/50 border border-border text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${currentItem.slug}`}>
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 leading-tight hover:text-primary transition-colors cursor-pointer">
                  {currentItem.title}
                </h4>
              </Link>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                {currentItem.description}
              </p>

              <div className="flex gap-1.5 mb-3">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="group/indicator relative h-1 flex-1 bg-muted rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full"
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
                <button className="text-xs font-medium text-primary hover:underline transition-all text-left">
                  View All Projects →
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 pointer-events-none rounded-xl"
      >
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={goToPrevious}
            className="pointer-events-auto w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="pointer-events-auto w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-0 right-0 pointer-events-none">
          <button
            onClick={togglePlayPause}
            className="pointer-events-auto w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
