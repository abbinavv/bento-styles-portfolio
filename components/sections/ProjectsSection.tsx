"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovering]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentProject = projects[currentIndex];

  return (
    <GlowCard className="lg:col-span-3">
      <div
        className="relative h-full min-h-[300px] lg:min-h-[350px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background gradient */}
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
              <h2 className="text-sm md:text-base font-semibold text-foreground">
                Projects
              </h2>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-muted/50 border border-border">
              <span className="text-xs font-medium text-foreground">
                {currentIndex + 1} / {projects.length}
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
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {currentProject.techStack.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-full bg-muted/50 border border-border text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and description */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 leading-tight">
                  {currentProject.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  {currentProject.shortTagline}
                </p>

                {/* Progress indicators */}
                <div className="flex gap-1.5 mb-3">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="group/indicator relative h-1 flex-1 bg-muted rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`Go to project ${index + 1}`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: index === currentIndex ? 1 : 0,
                        }}
                        transition={{
                          duration: index === currentIndex && isPlaying && !isHovering ? 5 : 0.3,
                          ease: "linear",
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href={`/projects/${currentProject.slug}`}
                  className="inline-block text-xs font-medium text-primary hover:underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  View Project →
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
              className="pointer-events-auto w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="pointer-events-auto w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-0 right-0 pointer-events-none">
            <button
              onClick={togglePlayPause}
              className="pointer-events-auto w-10 h-10 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
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
    </GlowCard>
  );
}
