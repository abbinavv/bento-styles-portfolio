"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export function AboutCard() {
  return (
    <Link href="/about">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full min-h-[200px] w-full glass-card p-6 overflow-hidden group cursor-pointer rounded-2xl"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[#3A7BFF]/5 rounded-2xl" />
        
        <div className="relative h-full flex items-center gap-4">
          {/* Left: Profile Photo with Gradient Ring */}
          <div className="relative shrink-0">
            {/* Gradient aura behind photo */}
            <div className="absolute inset-0 bg-linear-to-br from-[#14F4C9]/40 via-[#3A7BFF]/30 to-[#6C63FF]/30 rounded-full blur-xl opacity-60" />
            
            {/* Profile photo - placeholder with initial */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/10 bg-linear-to-br from-[#3A7BFF]/20 to-[#6C63FF]/20 shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white">
                A
              </div>
            </div>
          </div>

          {/* Right: Info Column */}
          <div className="flex-1 min-w-0 space-y-1">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight">
                Abhinav Raj
              </h3>
              <p className="text-sm md:text-base text-white/70 mt-0.5">iOS Developer & CS Student</p>
            </div>
            
            <p className="text-xs md:text-sm text-white/65 leading-relaxed line-clamp-2 hidden md:block pt-0.5">
              Building innovative mobile experiences with Swift, AR/VR, and modern design systems.
            </p>

            {/* Meta info with icons */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-white/45 pt-0.5">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3 h-3" />
                SRM
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                9.52 CGPA
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1">
                <Rocket className="w-3 h-3" />
                TechLead
              </span>
              <span className="text-white/30 hidden md:inline">•</span>
              <span className="hidden md:inline-flex items-center gap-1">
                <Code2 className="w-3 h-3" />
                Swift, UI/UX
              </span>
            </div>

            <button className="text-xs font-medium text-[#14F4C9] hover:text-[#5BFAE0] hover:underline transition-all text-left pt-1">
              View Full Profile →
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
