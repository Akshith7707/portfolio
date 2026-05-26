"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ACHIEVEMENTS } from "@/lib/constants";
import { Code2, Brain, Layers, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description: "Building end-to-end applications with modern frameworks and scalable architectures",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    description: "Exploring LLMs, ML pipelines, and AI-powered applications for real-world impact",
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Learning distributed systems, microservices, and infrastructure patterns",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Approaching complex challenges with analytical thinking and creative solutions",
  },
];

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="about" subtitle="About" title="Building with purpose.">
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            I&apos;m a software engineer focused on building{" "}
            <span className="text-white/90 font-medium">scalable systems</span> and{" "}
            <span className="text-white/90 font-medium">intelligent applications</span>{" "}
            that solve real problems.
          </p>
          <p className="text-base text-white/40 leading-relaxed">
            Currently pursuing Computer Science at MVSR Engineering College, I spend my time
            exploring the intersection of AI engineering, system design, and full-stack
            development. I believe in writing clean, maintainable code and building products
            that are both technically robust and user-centric.
          </p>
          <p className="text-base text-white/40 leading-relaxed">
            My approach combines deep technical curiosity with a builder&apos;s mindset —
            whether it&apos;s designing adaptive learning platforms with LLMs, automating
            complex workflows, or crafting seamless user experiences. I&apos;m driven by the
            challenge of turning complex problems into elegant, production-grade solutions.
          </p>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            {[
              { value: "8.65", label: "CGPA" },
              { value: "7+", label: "Projects" },
              { value: "6+", label: "Languages" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gradient-text-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-white/30 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <p className="text-xs text-white/25 mb-3 font-medium uppercase tracking-wider">
              Highlights
            </p>
            <div className="space-y-2">
              {ACHIEVEMENTS.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-cyan-400/70 text-sm mt-0.5">•</span>
                  <p className="text-sm text-white/45 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group p-5 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300 cursor-default"
            >
              <item.icon
                size={20}
                className="text-blue-400/70 mb-3 group-hover:text-blue-400 transition-colors"
              />
              <h3 className="text-sm font-semibold text-white/80 mb-1.5 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-white/35 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
