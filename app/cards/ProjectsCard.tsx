"use client";

import { Folder, ExternalLink, Smartphone, Leaf, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "AR Furniture App",
    icon: <Smartphone className="w-4 h-4 text-[#6C63FF]" />,
    color: "bg-[#6C63FF]/10 border-[#6C63FF]/30",
  },
  {
    title: "Carbon Footprint",
    icon: <Leaf className="w-4 h-4 text-emerald-400" />,
    color: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "CPU Scheduler",
    icon: <Cpu className="w-4 h-4 text-orange-400" />,
    color: "bg-orange-500/10 border-orange-500/30",
  },
  {
    title: "Launchpad Club",
    icon: <Rocket className="w-4 h-4 text-green-400" />,
    color: "bg-green-500/10 border-green-500/30",
  },
];

export function ProjectsCard() {
  return (
    <Link href="/projects">
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative h-full w-full glass-card p-5 overflow-hidden group cursor-pointer rounded-2xl"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[#6C63FF]/5 rounded-2xl" />
        
        <div className="relative h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/30 flex items-center justify-center">
                <Folder className="w-5 h-5 text-[#6C63FF]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white/90">Projects</h3>
                <p className="text-xs text-white/50">4 Featured Works</p>
              </div>
            </div>
            <motion.div
              whileHover={{ rotate: -45 }}
              className="text-white/50 group-hover:text-white/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg ${project.color} border backdrop-blur-sm`}
              >
                <div className="flex items-center gap-2">
                  {project.icon}
                  <p className="text-xs font-medium text-white/80 truncate">
                    {project.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <button className="text-xs md:text-sm font-medium text-[#14F4C9] hover:text-[#5BFAE0] hover:underline transition-colors text-left">
            View All Projects →
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
