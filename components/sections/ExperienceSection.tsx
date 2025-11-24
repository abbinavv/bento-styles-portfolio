"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { experience } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <GlowCard className="lg:col-span-2">
      <Link href="/experience" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col"
        >
          {/* Header */}
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              EXPERIENCE
            </p>
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Vocational Trainee & TechLead
            </h2>
          </div>

          {/* Experience entries */}
          <div className="flex-1 space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                {/* Title and meta */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">
                    {exp.title} — {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span>{exp.location}</span>
                    <span className="text-muted-foreground/50">·</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-muted-foreground/80 leading-relaxed">
                      <span className="text-primary shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4">
            <button className="text-sm font-medium text-primary hover:underline transition-all">
              View Experience →
            </button>
          </div>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
