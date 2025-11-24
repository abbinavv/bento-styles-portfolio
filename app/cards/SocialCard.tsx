"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/abbinavv",
    color: "hover:bg-white/8 hover:border-gray-500/40",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/abhinav-raj-a1979421b/",
    color: "hover:bg-white/8 hover:border-[#3A7BFF]/60",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:abhinavraj00001@gmail.com",
    color: "hover:bg-white/8 hover:border-[#14F4C9]/60",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/abbinavv",
    color: "hover:bg-white/8 hover:border-blue-400/40",
  },
];

export function SocialCard() {
  return (
    <div className="relative h-full min-h-[200px] w-full glass-card p-5 md:p-6 overflow-hidden flex flex-col justify-between">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#14F4C9]/5" />
      
      <div className="relative">
        {/* Header */}
        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-2">
            CONNECT
          </p>
          <h3 className="text-sm md:text-base font-semibold text-white">
            Let&apos;s Collaborate
          </h3>
          <p className="mt-1.5 text-xs md:text-sm text-white/65 leading-relaxed">
            Reach out for iOS apps, AR/VR experiments, or UI design work.
          </p>
        </div>

        {/* Social Icons Grid */}
        <div className="flex flex-wrap gap-2.5">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 transition-all ${social.color}`}
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <Link href="/contact" className="relative mt-4">
        <button className="text-xs font-medium text-[#14F4C9] hover:text-[#5BFAE0] hover:underline transition-all text-left">
          View contact details →
        </button>
      </Link>
    </div>
  );
}
