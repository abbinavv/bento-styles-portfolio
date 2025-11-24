"use client";

import React, { useCallback, useEffect, useRef } from "react";

interface GlowingEffectProps {
  /**
   * How far the glow spreads from the cursor
   */
  spread?: number;
  /**
   * Whether to show the glow
   */
  glow?: boolean;
  /**
   * Whether the effect is disabled
   */
  disabled?: boolean;
  /**
   * How close the cursor needs to be to activate
   */
  proximity?: number;
  /**
   * Threshold for when to remove the glow (0-1)
   */
  inactiveZone?: number;
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (disabled || !containerRef.current || !glowRef.current) return;

      const container = containerRef.current;
      const glowEl = glowRef.current;
      const rect = container.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from cursor to card center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );

      // Only show glow if within proximity
      if (distance < proximity || proximity === 0) {
        glowEl.style.opacity = "1";
        glowEl.style.left = `${x}px`;
        glowEl.style.top = `${y}px`;
      } else {
        glowEl.style.opacity = String(inactiveZone);
      }
    },
    [disabled, proximity, inactiveZone]
  );

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = String(inactiveZone);
  }, [inactiveZone]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (!glow) return null;

  return (
    <>
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl"
        aria-hidden="true"
      >
        <div
          ref={glowRef}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            width: `${spread * 2}px`,
            height: `${spread * 2}px`,
            background:
              "radial-gradient(circle, rgba(20, 244, 201, 0.4) 0%, rgba(58, 123, 255, 0.3) 30%, transparent 70%)",
            opacity: inactiveZone,
            filter: "blur(20px)",
          }}
        />
      </div>
    </>
  );
}
