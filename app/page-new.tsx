"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { GlobalSpotlight } from "@/components/ui/global-spotlight";
import { ThemeToggleFloating } from "./components/ThemeToggleFloating";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global Spotlight Effect - focuses on Projects section */}
      <GlobalSpotlight radius={300} glowColor="20, 244, 201" />
      
      <div className="relative z-10">
        <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
          {/* Portfolio Grid */}
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Row 1: About (2 cols) + Connect (1 col) */}
            <AboutSection />
            <ConnectSection />

            {/* Row 2: Education (2 cols) + Location (1 col) */}
            <EducationSection />
            <LocationSection />

            {/* Row 3: Experience (2 cols) + Skills (1 col) */}
            <ExperienceSection />
            <SkillsSection />

            {/* Row 4: Featured Projects (full width) */}
            <ProjectsSection />
            
            {/* Row 5: Achievements (2 cols) + Interests (1 col) */}
            <AchievementsSection />
            <InterestsSection />
          </div>
        </main>

        {/* Floating theme toggle */}
        <ThemeToggleFloating />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
