"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function StoryCard() {
  return (
    <Link href="/journey">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full w-full glass-card p-5 overflow-hidden group cursor-pointer rounded-2xl"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-amber-500/5 rounded-2xl" />
        
        <div className="relative h-full flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-white/50">My Journey</p>
              <p className="text-sm font-semibold text-white/90">Story</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-amber-500">
              Bihar to Chennai
            </h3>
            <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
              From high school coding to iOS apps, AR/VR, and leading tech initiatives at SRM.
            </p>
          </div>

          <p className="text-xs text-amber-500 mt-3 group-hover:translate-x-1 transition-transform">
            Read Full Story →
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
