"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";

export function ConnectSection() {
  const socialLinks = [
    {
      name: "GitHub",
      label: "GitHub",
      handle: "@abbinavv",
      icon: Github,
      href: "https://github.com/abbinavv",
      ariaLabel: "Open GitHub profile"
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      handle: "/in/abhinavraj",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhinav-raj-a1979421b/",
      ariaLabel: "Open LinkedIn profile"
    },
    {
      name: "Email",
      label: "Email",
      handle: "abhinavraj00001@gmail.com",
      icon: Mail,
      href: "mailto:abhinavraj00001@gmail.com",
      ariaLabel: "Send email"
    },
  ];

  return (
    <GlowCard>
      <div className="flex h-full flex-col justify-between gap-4">
        {/* Header */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-2">
            CONNECT
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3">
            Let&apos;s collaborate
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Reach out for iOS apps, AR/VR experiments, or UI design work. I&apos;m open to internships, freelance projects, and collaborations.
          </p>
        </div>

        {/* Social links */}
        <div className="space-y-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={social.ariaLabel}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border hover:bg-muted/50 hover:border-primary/30 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/50 border border-border text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{social.label}</p>
                  <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer link */}
        <Link 
          href="/contact"
          className="text-sm font-medium text-primary hover:underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          View contact details →
        </Link>
      </div>
    </GlowCard>
  );
}
