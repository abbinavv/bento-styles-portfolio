"use client";

import { Music } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function SpotifyCard() {
  return (
    <Link href="/music">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full w-full glass-card p-5 overflow-hidden group cursor-pointer"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-green-500/5 rounded-xl" />
        
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <motion.div
                className="absolute inset-0 w-10 h-10 rounded-full bg-green-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <Music className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <div>
              <p className="text-xs text-white/50">Now Playing</p>
              <p className="text-sm font-semibold text-white/90">Spotify</p>
            </div>
          </div>

          {/* Song Info */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#14F4C9] to-[#3A7BFF] flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white/90 truncate">Your Favorite Song</h3>
              <p className="text-xs text-white/60 truncate">Artist Name</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-400"
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <p className="text-xs text-green-400 mt-3 group-hover:translate-x-1 transition-transform">
            View Music →
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
