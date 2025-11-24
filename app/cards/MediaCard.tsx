"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Helper function to parse tech tags from first 3 tech stack items
const getTechTags = (techStack: string[]): string[] => {
  return techStack.slice(0, 3);
};

export function MediaGalleryCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (isPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000); // Change slide every 4 seconds
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
    <div
      className="relative h-full min-h-[300px] lg:min-h-[350px] w-full glass-card overflow-hidden group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with radial gradient (dark navy to black) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1f3a_0%,#000000_100%)]" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-linear-to-br from-[#6C63FF]/15 via-[#3A7BFF]/10 to-[#14F4C9]/15"
        />
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-5 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-1">
              FEATURED WORK
            </p>
            <h3 className="text-sm md:text-base font-semibold text-white">
              Projects
            </h3>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
            <span className="text-xs font-medium text-white">
              {currentIndex + 1} / {projects.length}
            </span>
          </div>
        </div>

        {/* Project content */}
        <div className="flex-1 flex items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Pill-style tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {getTechTags(currentProject.techStack).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-medium text-white/70 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${currentProject.slug}`}>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight hover:text-[#14F4C9] transition-colors cursor-pointer">
                  {currentProject.title}
                </h4>
              </Link>
              <p className="text-xs md:text-sm text-white/65 mb-4 leading-relaxed">
                {currentProject.shortTagline}
              </p>

              {/* Progress indicators with aqua fill */}
              <div className="flex gap-1.5 mb-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="group/indicator relative h-1 flex-1 bg-white/10 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#14F4C9] rounded-full"
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
                <button className="text-xs font-medium text-[#14F4C9] hover:text-[#5BFAE0] hover:underline transition-all text-left">
                  View All Projects →
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls (visible on hover) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={goToPrevious}
            className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Play/Pause button */}
        <div className="absolute top-4 right-4 pointer-events-none">
          <button
            onClick={togglePlayPause}
            className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
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
