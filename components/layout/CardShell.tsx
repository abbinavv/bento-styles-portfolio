"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardShellProps {
  children: React.ReactNode;
  title?: string;
  eyebrow?: string;
  className?: string;
  enableHover?: boolean;
  onClick?: () => void;
}

export function CardShell({
  children,
  title,
  eyebrow,
  className,
  enableHover = true,
  onClick,
}: CardShellProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={enableHover ? { scale: 1.005 } : undefined}
      whileTap={enableHover ? { scale: 0.995 } : undefined}
      className={cn(
        "group relative h-full min-h-48 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Outer frame with glow */}
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/30 p-2 backdrop-blur-sm transition-all duration-300 md:rounded-3xl md:p-3 group-hover:border-border/70">
        {/* Subtle hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:rounded-3xl">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-transparent md:rounded-3xl" />
        </div>

        {/* Inner content frame */}
        <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border/30 bg-card/85 p-5 shadow-lg backdrop-blur-md transition-all duration-300 md:p-6 group-hover:shadow-xl dark:shadow-[0px_0px_27px_0px_rgba(0,0,0,0.5)]">
          {/* Header section */}
          {(eyebrow || title) && (
            <div className="space-y-2">
              {eyebrow && (
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h3 className="text-lg font-semibold text-foreground md:text-xl">
                  {title}
                </h3>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
