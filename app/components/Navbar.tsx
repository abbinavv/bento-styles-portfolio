"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { CardCategory } from "@/lib/types";

interface NavbarProps {
  activeFilter: CardCategory;
  setActiveFilter: (filter: CardCategory) => void;
}

const filters: CardCategory[] = ["All", "About", "Projects", "Media", "Contact"];

export function Navbar({ activeFilter, setActiveFilter }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full shadow-lg p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl"
          >
            <span className="bg-linear-to-r from-[#14F4C9] via-[#3A7BFF] to-[#6C63FF] bg-clip-text text-transparent">
              Abhinav Raj
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/5">
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white/20 backdrop-blur rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border"
        >
          <div className="px-4 py-4 space-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
