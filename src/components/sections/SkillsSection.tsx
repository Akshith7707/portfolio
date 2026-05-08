"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const SKILL_CATEGORIES = [
  { key: "languages", title: "Languages", color: "from-blue-500/10 to-blue-500/5" },
  { key: "frontend", title: "Frontend", color: "from-purple-500/10 to-purple-500/5" },
  { key: "backend", title: "Backend", color: "from-cyan-500/10 to-cyan-500/5" },
  { key: "databases", title: "Databases", color: "from-blue-500/10 to-purple-500/5" },
  { key: "aiml", title: "AI / ML", color: "from-purple-500/10 to-cyan-500/5" },
  { key: "tools", title: "Tools & DevOps", color: "from-cyan-500/10 to-blue-500/5" },
];

export default function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="skills" subtitle="Skills" title="Tech I work with.">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SKILL_CATEGORIES.map((category) => {
          const skills = SKILLS[category.key as keyof typeof SKILLS];
          return (
            <motion.div
              key={category.key}
              variants={staggerItem}
              className="group p-6 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>
                <h3 className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                  >
                    <span className="text-xs">{skill.icon}</span>
                    <span className="text-xs text-white/50 font-medium hover:text-white/70">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
