"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function LocationCard() {
  return (
    <Link href="/location">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full min-h-[200px] w-full glass-card p-5 overflow-hidden group cursor-pointer"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[#3A7BFF]/5" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#3A7BFF]/10 border border-[#3A7BFF]/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#3A7BFF]" />
            </div>
          </motion.div>

          <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">BASED IN</p>
          <h3 className="text-lg font-semibold text-white mb-1">Chennai</h3>
          <p className="text-[11px] text-white/45">Tamil Nadu, India</p>
        </div>
      </motion.div>
    </Link>
  );
}
