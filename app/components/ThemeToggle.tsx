"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative h-full w-full glass-card rounded-xl p-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center gap-4">
        <motion.button
          onClick={toggleTheme}
          className="relative w-20 h-20 rounded-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center hover:scale-110 transition-transform"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{
              rotate: theme === "dark" ? 180 : 0,
              scale: theme === "dark" ? 1 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <Moon className="w-8 h-8 text-primary" />
            ) : (
              <Sun className="w-8 h-8 text-primary" />
            )}
          </motion.div>
        </motion.button>

        <div className="text-center">
          <h3 className="font-semibold text-foreground mb-1">Theme</h3>
          <p className="text-sm text-muted-foreground capitalize">{theme} mode</p>
        </div>
      </div>
    </div>
  );
}
