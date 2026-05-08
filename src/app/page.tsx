"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import CodingSection from "@/components/sections/CodingSection";
import EducationSection from "@/components/sections/EducationSection";
import FocusSection from "@/components/sections/FocusSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import DockNavigation from "@/components/DockNavigation";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll>
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        <DockNavigation />

        <main>
          <HeroSection />

          {/* Divider */}
          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <AboutSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <SkillsSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <ProjectsSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <CertificationsSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <CodingSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <EducationSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <FocusSection />

          <div className="section-padding">
            <div className="section-container">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>

          <ContactSection />
        </main>

        <Footer />
      </SmoothScroll>
    </>
  );
}
