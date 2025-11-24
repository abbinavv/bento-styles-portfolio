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
      <div className="relative h-full rounded-2xl border border-primary/25 bg-card/50 p-2 backdrop-blur-sm md:rounded-3xl md:p-3 shadow-[0_0_30px_rgba(20,244,201,0.15)] hover:shadow-[0_0_50px_rgba(20,244,201,0.25)] transition-shadow duration-300">
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
          <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border border-primary/20 bg-card/95 p-6 shadow-lg backdrop-blur-md md:gap-8 md:p-8 dark:shadow-[0_0_50px_rgba(20,244,201,0.2)]">
            {children}
          </div>
        </ParticleCard>
      </div>
    </div>
  );
}
