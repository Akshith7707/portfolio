"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { CERTIFICATIONS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Award } from "lucide-react";

export default function CertificationsSection() {
  const { ref, isInView } = useInView();

  const borderColors: Record<string, string> = {
    blue: "hover:border-blue-500/20",
    purple: "hover:border-purple-500/20",
    cyan: "hover:border-cyan-500/20",
  };

  const glowColors: Record<string, string> = {
    blue: "group-hover:shadow-blue-500/5",
    purple: "group-hover:shadow-purple-500/5",
    cyan: "group-hover:shadow-cyan-500/5",
  };

  return (
    <Section id="certifications" subtitle="Credentials" title="Certifications.">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-3 gap-5"
      >
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.title}
            variants={staggerItem}
            whileHover={{ y: -3 }}
            className={`group relative p-6 rounded-2xl glass border border-white/[0.04] ${borderColors[cert.color]} transition-all duration-500 shadow-lg shadow-transparent ${glowColors[cert.color]}`}
          >
            {/* Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">{cert.icon}</div>
              <Award size={14} className="text-white/20" />
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-white/80 mb-1 group-hover:text-white transition-colors">
              {cert.title}
            </h3>

            {/* Issuer */}
            <p className="text-xs text-white/30 mb-3 font-mono">{cert.issuer}</p>

            {/* Description */}
            <p className="text-xs text-white/30 leading-relaxed">
              {cert.description}
            </p>

            {/* Verified badge */}
            <div className="mt-4 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
              <span className="text-[10px] text-white/25 font-medium">Verified</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
