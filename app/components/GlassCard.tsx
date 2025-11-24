"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`relative glass-card rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
