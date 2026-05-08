"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ExternalLink, GitBranch, Code, Trophy } from "lucide-react";
import { PERSONAL } from "@/lib/constants";

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref as any}>{count}</span>;
}

const codingStats = [
  { label: "Problems Solved", value: 150, icon: Code, suffix: "+" },
  { label: "Contest Rating", value: 1500, icon: Trophy, suffix: "+" },
  { label: "Languages Used", value: 6, icon: GitBranch, suffix: "" },
];

const progressItems = [
  { label: "Arrays & Strings", progress: 85 },
  { label: "Trees & Graphs", progress: 65 },
  { label: "Dynamic Programming", progress: 55 },
  { label: "System Design", progress: 45 },
  { label: "Binary Search", progress: 80 },
  { label: "Backtracking", progress: 60 },
];

export default function CodingSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="coding" subtitle="Problem Solving" title="Coding profile.">
      <div ref={ref} className="grid lg:grid-cols-2 gap-8">
        {/* Stats and LeetCode */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-3 gap-3"
          >
            {codingStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="p-4 rounded-2xl glass text-center"
              >
                <stat.icon size={16} className="text-white/30 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text-accent">
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-[10px] text-white/30 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* LeetCode Link */}
          <a
            href={PERSONAL.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <span className="text-lg">🏆</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  LeetCode Profile
                </div>
                <div className="text-xs text-white/30">View problem solutions</div>
              </div>
            </div>
            <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
          </a>

          {/* GitHub Link */}
          <a
            href={PERSONAL.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                <span className="text-lg">🐙</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  GitHub Contributions
                </div>
                <div className="text-xs text-white/30">Open source activity</div>
              </div>
            </div>
            <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
          </a>
        </motion.div>

        {/* Progress bars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-sm font-semibold text-white/50 mb-5 uppercase tracking-wider">
            Topic Progress
          </h3>
          {progressItems.map((item, i) => (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/50">{item.label}</span>
                <span className="text-xs font-mono text-white/30">{item.progress}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.progress}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(225, 84%, 60%), hsl(${225 + i * 15}, 70%, 60%))`,
                  }}
                />
              </div>
            </div>
          ))}

          {/* System Design Learning */}
          <div className="mt-8 p-5 rounded-2xl glass">
            <h4 className="text-sm font-semibold text-white/60 mb-3">
              System Design Progress
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {["Load Balancers", "Caching", "Databases", "Microservices"].map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02]"
                >
                  <div className="w-1 h-1 rounded-full bg-purple-400/60" />
                  <span className="text-[11px] text-white/35">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
