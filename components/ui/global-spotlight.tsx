"use client";

import React, { useEffect, useRef, useState } from "react";

interface GlobalSpotlightProps {
  radius?: number;
  glowColor?: string;
}

export function GlobalSpotlight({
  radius = 300,
  glowColor = "20, 244, 201",
}: GlobalSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile || !spotlightRef.current) return;

    const spotlight = spotlightRef.current;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;

        // Check if mouse is near any particle card
        const cards = document.querySelectorAll(".particle-card");
        let nearCard = false;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          const distance = Math.sqrt(
            Math.pow(e.clientX - cardCenterX, 2) +
              Math.pow(e.clientY - cardCenterY, 2)
          );

          if (distance < radius * 2) {
            nearCard = true;
          }
        });

        setIsActive(nearCard);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [radius, isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={spotlightRef}
      className={`particle-card-spotlight ${isActive ? "active" : ""}`}
      style={
        {
          "--glow-color": glowColor,
          "--glow-radius": `${radius}px`,
        } as React.CSSProperties
      }
    />
  );
}
