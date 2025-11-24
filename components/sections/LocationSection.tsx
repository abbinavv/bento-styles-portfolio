"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";

export function LocationSection() {
  return (
    <GlowCard>
      <Link href="/contact" className="block h-full">
        <motion.div
          whileHover={{ scale: 1.002 }}
          whileTap={{ scale: 0.998 }}
          className="flex h-full flex-col items-center justify-center text-center gap-4"
        >
          {/* Animated icon */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-14 h-14 rounded-xl bg-[#3A7BFF]/10 border border-[#3A7BFF]/30 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-[#3A7BFF]" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
              BASED IN
            </p>
            <h2 className="text-xl font-bold text-foreground mb-1">
              Chennai
            </h2>
            <p className="text-sm text-muted-foreground">
              Tamil Nadu, India
            </p>
          </div>
        </motion.div>
      </Link>
    </GlowCard>
  );
}
