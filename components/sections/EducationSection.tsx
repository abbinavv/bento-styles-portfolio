"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { education } from "@/lib/education";

export function EducationSection() {
  // Only show first two main entries
  const mainEducation = education.slice(0, 2);
  const secondaryEducation = education[2];

  return (
    <GlowCard className="lg:col-span-2">
      <Link href="/academics" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col"
        >
          {/* Header */}
          <div className="mb-4 md:mb-5">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-1.5">
              ACADEMICS
            </p>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              Education
            </h2>
          </div>

          {/* Timeline */}
          <div className="flex-1 space-y-5 md:space-y-6 relative">
            {/* Vertical line */}
            <div className="absolute left-2 top-3 bottom-3 w-px bg-border hidden md:block" />
            
            {mainEducation.map((edu, index) => (
              <div key={edu.id} className="flex gap-3 md:gap-4 relative">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 ring-4 ring-background/50 hidden md:block"
                />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs md:text-sm font-semibold text-foreground leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-[11px] md:text-xs text-muted-foreground mt-0.5">
                    {edu.institution}, {edu.location}
                  </p>
                  <div className="flex items-center gap-1.5 md:gap-2 mt-1 text-[10px] md:text-xs text-muted-foreground flex-wrap">
                    <span>{edu.period}</span>
                    {edu.gpa && (
                      <>
                        <span className="text-muted-foreground/50">·</span>
                        <span className="text-primary font-medium">CGPA: {edu.gpa}</span>
                      </>
                    )}
                    {edu.highlights && edu.highlights.includes("Top 20%") && (
                      <>
                        <span className="text-muted-foreground/50">·</span>
                        <span className="text-primary font-medium">Top 20% of department</span>
                      </>
                    )}
                  </div>
                  {edu.description && (
                    <p className="text-[11px] md:text-xs text-muted-foreground/80 mt-1.5 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Secondary education mention */}
            {secondaryEducation && (
              <p className="text-xs text-muted-foreground/60 ml-6 md:ml-0">
                {secondaryEducation.institution}, {secondaryEducation.location} – {secondaryEducation.degree} ({secondaryEducation.period})
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-4">
            <button className="text-sm font-medium text-primary hover:underline transition-all">
              View Full Timeline →
            </button>
          </div>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
