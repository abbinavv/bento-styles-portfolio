"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { achievements } from "@/lib/achievements";

export function AchievementsSection() {
  return (
    <GlowCard className="lg:col-span-2">
      <Link href="/about#certifications" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col"
        >
          {/* Header */}
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              CERTIFICATIONS
            </p>
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Achievements
            </h2>
          </div>

          {/* Achievements list */}
          <ul className="flex-1 space-y-3">
            {achievements.map((achievement, index) => (
              <motion.li
                key={achievement.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-2"
              >
                <span className="text-primary text-sm shrink-0">•</span>
                <div>
                  <p className="text-sm text-foreground font-medium leading-tight">
                    {achievement.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {achievement.organization}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
