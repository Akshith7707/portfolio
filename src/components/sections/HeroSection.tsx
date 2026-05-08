"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, useMousePosition } from "@/hooks/useAnimations";
import { PERSONAL, FLOATING_BADGES } from "@/lib/constants";
import { ArrowDown, FileText, Mail, FolderOpen } from "lucide-react";

const CODE_LINES = [
  'const engineer = new SystemBuilder();',
  'engineer.focus("scalable-systems");',
  'await engineer.build("intelligent-apps");',
  'engineer.deploy({ target: "production" });',
  'const impact = await engineer.measure();',
  '// Building the future, one commit at a time',
];

function FloatingBadge({ text, index }: { text: string; index: number }) {
  const positions = [
    { top: "15%", left: "5%" },
    { top: "20%", right: "8%" },
    { top: "45%", left: "3%" },
    { top: "60%", right: "5%" },
    { top: "75%", left: "7%" },
    { top: "30%", right: "3%" },
    { top: "80%", right: "10%" },
    { top: "10%", left: "15%" },
  ];

  const pos = positions[index % positions.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 + index * 0.15, duration: 0.5 }}
      className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/40 font-medium"
      style={{
        ...pos,
        animation: `float ${6 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${index * 0.8}s`,
      }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
      {text}
    </motion.div>
  );
}

function CodeBackground() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.04] font-mono text-sm leading-relaxed select-none pointer-events-none">
      {CODE_LINES.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 + i * 0.2, duration: 0.5 }}
          className="whitespace-nowrap"
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { x, y } = useMousePosition();

  useEffect(() => {
    setMounted(true);
  }, []);
  const typewriterText = useTypewriter(
    ["AI Builder", "System Thinker", "Problem Solver", "Full Stack Developer"],
    80,
    50,
    2000
  );

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-30" />

      {/* Gradient orbs */}
      {mounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(225, 84%, 60%), transparent)",
            left: `calc(30% + ${(x - window.innerWidth / 2) * 0.02}px)`,
            top: `calc(20% + ${(y - window.innerHeight / 2) * 0.02}px)`,
            transition: "left 0.3s, top 0.3s",
          }}
        />
      )}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(265, 70%, 60%), transparent)",
          right: "20%",
          bottom: "20%",
        }}
      />

      {/* Floating badges */}
      {FLOATING_BADGES.map((badge, i) => (
        <FloatingBadge key={badge} text={badge} index={i} />
      ))}

      {/* Code background */}
      <CodeBackground />

      {/* Main content */}
      <div className="relative z-10 section-padding section-container text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/50 font-medium">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="gradient-text">{PERSONAL.name.split(" ")[0]}</span>{" "}
            <span className="gradient-text-accent">{PERSONAL.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 font-mono text-lg md:text-xl text-white/40">
            <span className="text-blue-400">{">"}</span>
            <span>{typewriterText}</span>
            <span className="w-[2px] h-5 bg-blue-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-white/40 leading-relaxed mb-10 text-balance"
        >
          Engineering scalable systems and intelligent applications.
          <br className="hidden sm:block" />
          Turning complex problems into elegant, production-grade solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNavClick("#projects")}
            className="group relative px-6 py-3 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              <FolderOpen size={16} />
              View Projects
            </span>
          </button>

          <button
            onClick={() => handleNavClick("#contact")}
            className="group px-6 py-3 rounded-xl font-medium text-sm border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={16} />
            Contact Me
          </button>

          <a
            href="#"
            className="group px-6 py-3 rounded-xl font-medium text-sm border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <FileText size={16} />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/20"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
