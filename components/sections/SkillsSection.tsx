"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { skillCategories } from "@/lib/skills";

export function SkillsSection() {
  // Flatten all skills for display
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <GlowCard>
      <Link href="/about#skills" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col"
        >
          {/* Header */}
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              SKILLS
            </p>
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Tech Stack
            </h2>
          </div>

          {/* Skills grid */}
          <div className="flex-1 flex items-center">
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-full bg-muted/50 border border-border text-xs font-medium text-foreground hover:bg-muted hover:border-primary/30 transition-all cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
