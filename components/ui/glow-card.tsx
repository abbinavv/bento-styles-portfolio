"use client";

import React from "react";
import { ParticleCard } from "./particle-card";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  particleCount?: number;
}

export function GlowCard({
  children,
  className,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  particleCount = 12,
}: GlowCardProps) {
  return (
    <div className={cn("relative min-h-48", className)}>
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/30 p-2 backdrop-blur-sm md:rounded-3xl md:p-3">
        <ParticleCard
          enableStars={enableStars}
          enableSpotlight={enableSpotlight}
          enableBorderGlow={enableBorderGlow}
          enableTilt={enableTilt}
          enableMagnetism={enableMagnetism}
          clickEffect={clickEffect}
          particleCount={particleCount}
          glowColor="20, 244, 201"
        >
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border border-border/30 bg-card/85 p-5 shadow-lg backdrop-blur-md md:p-6 dark:shadow-[0px_0px_27px_0px_rgba(0,0,0,0.5)]">
            {children}
          </div>
        </ParticleCard>
      </div>
    </div>
  );
}
