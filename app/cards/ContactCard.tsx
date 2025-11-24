"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ContactCard() {
  return (
    <Link href="/contact">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full w-full glass-card p-5 overflow-hidden group cursor-pointer rounded-2xl"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[#14F4C9]/5 rounded-2xl" />
        
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#14F4C9] mb-1">Get in Touch</h3>
            <p className="text-xs text-white/60 mb-4">
              Let&apos;s collaborate on something amazing
            </p>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#14F4C9]/10 border border-[#14F4C9]/30 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#14F4C9]" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-gray-500/10 border border-gray-500/30 flex items-center justify-center">
                <Github className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#3A7BFF]/10 border border-[#3A7BFF]/30 flex items-center justify-center">
                <Linkedin className="w-4 h-4 text-[#3A7BFF]" />
              </div>
            </div>
          </div>

          <p className="text-xs text-[#14F4C9] group-hover:translate-x-1 transition-transform">
            Send Message →
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
