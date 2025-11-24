"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ParticleCard } from "./particle-card";

interface ShellCardProps {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  particleCount?: number;
}

export function ShellCard({
  eyebrow,
  title,
  children,
  footer,
  className,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  particleCount = 24,
}: ShellCardProps) {
  return (
    <div className={cn("relative min-h-48", className)}>
      {/* Outer glow layer */}
      <div className="relative h-full rounded-2xl border border-emerald-400/20 bg-transparent p-2 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(45,212,191,0.25)] md:rounded-3xl md:p-3">
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
          {/* Inner card with liquid glass effect */}
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/6 bg-linear-to-b from-[#050B0A]/95 to-[#050908]/95 px-5 py-5 shadow-[0_0_0_1px_rgba(0,0,0,0.6)] backdrop-blur-md md:px-6 md:py-5">
            {/* Top section */}
            <div className="flex-1">
              {eyebrow && (
                <div className="mb-1.5 text-[11px] uppercase tracking-[0.22em] text-white/40">
                  {eyebrow}
                </div>
              )}
              {title && (
                <h2 className="mb-3 text-[18px] font-semibold text-white">
                  {title}
                </h2>
              )}
              {/* Body content */}
              <div className="space-y-2 text-[13px] leading-6 text-white/70">
                {children}
              </div>
            </div>

            {/* Footer section */}
            {footer && (
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-3.5">
                {footer}
              </div>
            )}
          </div>
        </ParticleCard>
      </div>
    </div>
  );
}

// Reusable CTA Link component
interface CTALinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function CTALink({ href, children, external = false }: CTALinkProps) {
  const Tag = external ? "a" : "a";
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      href={href}
      className="inline-flex items-center gap-1 text-[13px] font-medium text-emerald-300 transition-colors hover:text-emerald-200"
      {...externalProps}
    >
      {children}
    </Tag>
  );
}
