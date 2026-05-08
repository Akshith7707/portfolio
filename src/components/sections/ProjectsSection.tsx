"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  ExternalLink,
  ChevronRight,
  Layers,
  Zap,
  Server,
  Database,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const ARCH_ICONS: Record<string, React.ElementType> = {
  frontend: Layers,
  backend: Server,
  aiLayer: Zap,
  database: Database,
  analytics: BarChart3,
  personalization: Settings,
};

const ARCH_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  aiLayer: "AI Layer",
  database: "Database",
  analytics: "Analytics",
  personalization: "Engine",
};

function ProjectCard({
  project,
  index,
  onExpand,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  onExpand: () => void;
}) {
  const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 via-blue-500/5 to-transparent",
    purple: "from-purple-500/20 via-purple-500/5 to-transparent",
    cyan: "from-cyan-500/20 via-cyan-500/5 to-transparent",
  };

  const borderColorMap: Record<string, string> = {
    blue: "group-hover:border-blue-500/20",
    purple: "group-hover:border-purple-500/20",
    cyan: "group-hover:border-cyan-500/20",
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div
        className={`relative p-6 md:p-8 rounded-2xl glass border border-white/[0.04] ${borderColorMap[project.color]} transition-all duration-500 cursor-pointer overflow-hidden`}
        onClick={onExpand}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${colorMap[project.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Project number */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-white/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <ChevronRight
              size={16}
              className="text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-300"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-white/40 mb-4 font-medium">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-white/30 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-white/35 border border-white/[0.04]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[0];
  onClose: () => void;
}) {
  const dotColor: Record<string, string> = {
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    cyan: "bg-cyan-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl glass-strong p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-2 h-2 rounded-full ${dotColor[project.color]}`} />
            <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
              Case Study
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            {project.title}
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/50 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${dotColor[project.color]} mt-1.5 shrink-0`} />
                <span className="text-sm text-white/45">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
            Architecture
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(project.architecture).map(([key, value]) => {
              const Icon = ARCH_ICONS[key] || Layers;
              return (
                <div
                  key={key}
                  className="p-4 rounded-xl glass"
                >
                  <Icon size={16} className="text-white/30 mb-2" />
                  <div className="text-xs font-semibold text-white/60 mb-1">
                    {ARCH_LABELS[key]}
                  </div>
                  <div className="text-[11px] text-white/30 leading-relaxed">
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
            Engineering Decisions
          </h3>
          <div className="space-y-3">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]"
              >
                <span className="text-xs font-mono text-white/20 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/45">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isInView } = useInView();
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);

  return (
    <>
      <Section id="projects" subtitle="Work" title="Featured projects.">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onExpand={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </Section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
