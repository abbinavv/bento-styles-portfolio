"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { interests } from "@/lib/interests";

export function InterestsSection() {
  return (
    <GlowCard>
      <Link href="/about#interests" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col items-center justify-center text-center gap-4"
        >
          {/* Header */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              BEYOND CODE
            </p>
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              Interests
            </h2>
            <p className="text-xs text-muted-foreground">
              Things I enjoy when I&apos;m not writing code:
            </p>
          </div>

          {/* Interest pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {interests.map((interest, index) => (
              <motion.span
                key={interest.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary cursor-pointer"
                title={interest.description}
              >
                {interest.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
