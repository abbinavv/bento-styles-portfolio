"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "SRM Institute of Science & Technology",
    period: "2022 - 2026",
    gpa: "9.52 CGPA",
    status: "In Progress",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Previous School",
    period: "2020 - 2022",
    gpa: "Completed",
    status: "Completed",
  },
];

export function EducationCard() {
  return (
    <Link href="/education">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full min-h-[200px] w-full glass-card p-5 md:p-6 overflow-hidden group cursor-pointer"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[#6C63FF]/5" />
        
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">
              ACADEMICS
            </p>
            <h3 className="text-sm md:text-base font-semibold text-white">
              Education
            </h3>
          </div>

          {/* Timeline with vertical line - horizontal on large screens */}
          <ul className="flex-1 flex flex-col lg:flex-row lg:gap-8 gap-4 relative">
            {/* Vertical connecting line - hidden on large screens */}
            <div className="absolute left-1 top-2 bottom-2 w-px bg-white/10 lg:hidden" />
            
            {education.map((edu, index) => (
              <li key={index} className="flex gap-3 relative lg:flex-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 mt-1 h-2 w-2 rounded-full bg-[#14F4C9] shrink-0 ring-4 ring-black/50"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white leading-tight">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-white/65 mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-white/45 flex-wrap">
                    <span>{edu.period}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-[#14F4C9] font-medium">{edu.gpa}</span>
                    {edu.status === "Completed" && (
                      <>
                        <span className="text-white/30">•</span>
                        <span className="text-[#14F4C9]">Completed</span>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Footer CTA */}
          <button className="mt-4 text-xs font-medium text-[#14F4C9] hover:text-[#5BFAE0] hover:underline transition-all text-left">
            View Full Timeline →
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
