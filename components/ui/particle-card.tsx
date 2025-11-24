"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
}

export function ParticleCard({
  children,
  className = "",
  textAutoHide = false,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "20, 244, 201", // Electric Aqua by default
}: ParticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);
  const [particleSeed] = useState(() => Math.random());
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Memoize particles to prevent recreation on every render
  const particles = useMemo(() => {
    if (!enableStars || isMobile) return [];
    // Use seed from state to generate deterministic random values
    return Array.from({ length: particleCount }, (_, i) => {
      const random = (index: number, offset: number) => {
        return ((particleSeed + index * 0.1 + offset) % 1);
      };
      return {
        id: i,
        x: random(i, 0) * 100,
        y: random(i, 0.33) * 100,
        delay: random(i, 0.66) * 2,
        duration: 2 + random(i, 1) * 2,
      };
    });
  }, [enableStars, particleCount, particleSeed, isMobile]);

  useEffect(() => {
    if (isMobile || !cardRef.current) return;

    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update glow position
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;

      card.style.setProperty("--glow-x", `${glowX}%`);
      card.style.setProperty("--glow-y", `${glowY}%`);

      // Calculate distance from center for intensity
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      const maxDistance = Math.sqrt(
        Math.pow(centerX, 2) + Math.pow(centerY, 2)
      );
      const intensity = 1 - distance / maxDistance;

      card.style.setProperty("--glow-intensity", intensity.toString());

      // Tilt effect
      if (enableTilt) {
        const tiltX = ((y - rect.height / 2) / rect.height) * 10;
        const tiltY = ((x - rect.width / 2) / rect.width) * -10;

        gsap.to(card, {
          rotationX: tiltX,
          rotationY: tiltY,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Magnetism effect
      if (enableMagnetism) {
        const pullStrength = intensity * 8;
        const pullX = ((x - centerX) / centerX) * pullStrength;
        const pullY = ((y - centerY) / centerY) * pullStrength;

        gsap.to(card, {
          x: pullX,
          y: pullY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = () => {
      if (enableBorderGlow && borderGlowRef.current) {
        card.classList.add("glow-active");
      }

      // Animate particles on hover
      if (enableStars && particlesRef.current) {
        const particleElements = particlesRef.current.querySelectorAll(".particle");
        particleElements.forEach((particle, i) => {
          gsap.fromTo(
            particle,
            {
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            },
            {
              opacity: 0.8,
              scale: 1,
              duration: particles[i]?.duration || 2,
              delay: particles[i]?.delay || 0,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(particle, {
                  opacity: 0,
                  scale: 0,
                  duration: 1,
                  ease: "power2.in",
                });
              },
            }
          );
        });
      }
    };

    const handleMouseLeave = () => {
      card.classList.remove("glow-active");
      card.style.setProperty("--glow-intensity", "0");

      // Reset tilt and magnetism
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.className = "particle-card-click-effect";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = "0px";
      ripple.style.height = "0px";

      card.appendChild(ripple);

      gsap.to(ripple, {
        width: "400px",
        height: "400px",
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          ripple.remove();
        },
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("click", handleClick);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("click", handleClick);
    };
  }, [
    enableStars,
    enableSpotlight,
    enableBorderGlow,
    enableTilt,
    enableMagnetism,
    clickEffect,
    particles,
    isMobile,
  ]);

  return (
    <div
      ref={cardRef}
      className={`particle-card ${className}`}
      style={
        {
          "--glow-color": glowColor,
          "--glow-radius": `${spotlightRadius}px`,
        } as React.CSSProperties
      }
    >
      {enableBorderGlow && (
        <div ref={borderGlowRef} className="particle-card-border-glow" />
      )}

      {enableStars && !isMobile && (
        <div ref={particlesRef} className="particle-card-particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`particle-card-content ${
          textAutoHide ? "text-auto-hide" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
