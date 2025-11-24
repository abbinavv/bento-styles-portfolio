"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleFloating() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted] = useState(true);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed right-6 top-6 z-40
        flex h-10 w-10 items-center justify-center
        rounded-full border border-white/15
        bg-white/5 backdrop-blur-2xl
        shadow-[0_15px_40px_rgba(0,0,0,0.8)]
        text-white/80
        transition-colors
        hover:bg-white/10 hover:border-white/25
      "
      aria-label="Toggle theme"
    >
      <motion.span
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </motion.span>
    </motion.button>
  );
}
