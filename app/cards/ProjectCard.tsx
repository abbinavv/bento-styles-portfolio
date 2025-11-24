"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export function ProjectCard({ title, description, tags, href, icon, featured = false }: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`relative h-full w-full glass-card overflow-hidden cursor-pointer group ${
          featured ? 'p-6' : 'p-5'
        }`}
      >
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className={`${featured ? 'w-12 h-12' : 'w-10 h-10'} rounded-xl bg-white/5 border border-white/10 flex items-center justify-center`}>
                {icon}
              </div>
              <motion.div
                whileHover={{ rotate: -45 }}
                className="text-white/50 group-hover:text-white/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>

            <h3 className={`${featured ? 'text-xl' : 'text-base'} font-bold text-white/90 mb-2`}>
              {title}
            </h3>

            <p className={`${featured ? 'text-sm' : 'text-xs'} text-white/60 leading-relaxed ${featured ? 'line-clamp-3' : 'line-clamp-2'} mb-3`}>
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, featured ? 3 : 2).map((tag, index) => (
                <span
                  key={index}
                  className={`${featured ? 'px-2.5 py-1 text-xs' : 'px-2 py-0.5 text-[10px]'} font-medium bg-white/5 rounded-full text-white/70`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#14F4C9] mt-3 group-hover:translate-x-1 transition-transform">
            View Project →
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

// Pre-configured project cards
import { Smartphone, Leaf, Cpu, Rocket } from "lucide-react";

export function ARFurnitureCard() {
  return (
    <ProjectCard
      title="AR Furniture App"
      description="iOS application prototype enabling users to visualize furniture in real-world spaces using augmented reality with ARKit."
      tags={["Swift", "ARKit", "Figma"]}
      href="/ar-furniture"
      icon={<Smartphone className="w-6 h-6 text-[#6C63FF]" />}
      featured={true}
    />
  );
}

export function CarbonFootprintCard() {
  return (
    <ProjectCard
      title="Carbon Footprint"
      description="Database-driven web app to estimate and analyze individual carbon footprints with real-time calculations."
      tags={["Python", "Flask", "MySQL"]}
      href="/carbon-footprint"
      icon={<Leaf className="w-5 h-5 text-emerald-400" />}
    />
  );
}

export function CPUSchedulerCard() {
  return (
    <ProjectCard
      title="CPU Scheduler"
      description="Interactive web tool demonstrating CPU scheduling algorithms like SJF and Round Robin using dynamic Gantt charts."
      tags={["JavaScript", "HTML"]}
      href="/cpu-scheduler"
      icon={<Cpu className="w-5 h-5 text-orange-400" />}
    />
  );
}

export function LaunchpadCard() {
  return (
    <ProjectCard
      title="Launchpad Club"
      description="Leading tech initiatives at campus startup club, organizing pitch events and supporting entrepreneur networking."
      tags={["Leadership", "Startups"]}
      href="/launchpad"
      icon={<Rocket className="w-5 h-5 text-green-400" />}
    />
  );
}
