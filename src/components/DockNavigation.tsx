"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useAnimations";
import { NAV_ITEMS } from "@/lib/constants";
import {
  Home,
  User,
  Wrench,
  FolderOpen,
  Award,
  Code,
  Target,
  GraduationCap,
  Mail,
} from "lucide-react";

const DOCK_ICONS: Record<string, React.ElementType> = {
  "#hero": Home,
  "#about": User,
  "#skills": Wrench,
  "#projects": FolderOpen,
  "#certifications": Award,
  "#coding": Code,
  "#contact": Mail,
};

export default function DockNavigation() {
  const activeSection = useActiveSection();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
    >
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl glass-strong">
        {NAV_ITEMS.map((item) => {
          const Icon = DOCK_ICONS[item.href] || Home;
          const isActive = activeSection === item.href.slice(1);

          return (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-white bg-white/[0.08]"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              <Icon size={16} />
              {isActive && (
                <motion.div
                  layoutId="dockActive"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
