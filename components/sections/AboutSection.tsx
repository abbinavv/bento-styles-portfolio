"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";

export function AboutSection() {
  const badges = [
    "SRM IST",
    "CS & Business Systems",
    "CGPA: 9.52",
    "TechLead at Launchpad",
    "Swift · UI/UX"
  ];

  return (
    <GlowCard className="lg:col-span-2">
      <Link href="/about" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col justify-between gap-6 md:flex-row md:items-start"
        >
          {/* Avatar section */}
          <div className="shrink-0 md:order-1">
            <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24">
              {/* Glowing ring */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-primary/40 via-[#3A7BFF]/30 to-[#6C63FF]/30 blur-xl opacity-60" />
              
              {/* Avatar circle */}
              <div className="relative h-full w-full rounded-full border-2 border-primary/30 bg-linear-to-br from-[#3A7BFF]/20 to-[#6C63FF]/20 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-full text-3xl font-bold text-foreground md:text-4xl">
                  A
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1 space-y-3 md:space-y-4 md:order-2">
            {/* Header */}
            <div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-1.5">
                ABOUT
              </p>
              
              <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-1">
                Abhinav Raj
              </h1>
              
              <p className="text-xs md:text-sm text-muted-foreground font-medium">
                CS & Business Systems Student · iOS Developer
              </p>
            </div>
            
            {/* Description */}
            <div className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a B.Tech student in Computer Science and Business Systems at SRM Institute of Science and Technology with a 9.52 CGPA, specialising in iOS development, UI/UX design, and data-driven applications.
              </p>
              <p>
                I enjoy building responsive, AR/VR-inspired interfaces and full-stack web tools that solve real problems and create measurable impact.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {badges.map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-medium border transition-colors ${
                    badge.includes("CGPA")
                      ? "bg-primary/10 border-primary/30 text-primary"
                      : "bg-muted/50 border-border text-foreground"
                  }`}
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <button className="text-sm font-medium text-primary hover:underline transition-all">
                View Full Profile →
              </button>
            </div>
          </div>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
