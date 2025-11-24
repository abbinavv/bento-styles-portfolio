"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type PreloaderProps = { isDone: boolean };

export function Preloader({ isDone }: PreloaderProps) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#020504] bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),#020504_55%,black_100%)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Loader Badge */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={reducedMotion ? {} : { scale: 0.9 }}
              animate={
                reducedMotion
                  ? {}
                  : { scale: [0.95, 1.05, 0.95] }
              }
              transition={
                reducedMotion
                  ? {}
                  : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
              }
            >
              {/* Rotating outer ring */}
              {!reducedMotion && (
                <motion.div
                  className="absolute -inset-2.5 rounded-full border border-emerald-400/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Inner glowing circle with initials */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-400/10 shadow-[0_0_60px_rgba(45,212,191,0.5)] backdrop-blur-xl md:h-24 md:w-24">
                <span className="text-lg font-semibold tracking-wide text-emerald-100 md:text-xl">
                  AR
                </span>
              </div>
            </motion.div>

            {/* Text labels */}
            <div className="flex flex-col items-center gap-1 text-center">
              <motion.p
                className="text-sm font-medium text-white/80 md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Abhinav Raj
              </motion.p>
              <motion.p
                className="text-[11px] uppercase tracking-[0.28em] text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                Loading portfolio…
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
