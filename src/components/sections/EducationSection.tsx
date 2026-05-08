"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { PERSONAL } from "@/lib/constants";
import { GraduationCap, MapPin, Award } from "lucide-react";

export default function EducationSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="education" subtitle="Education" title="Academic journey.">
      <div ref={ref} className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent" />

          {/* Education card */}
          <div className="relative flex gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/[0.06]">
                <GraduationCap size={16} className="text-blue-400/70" />
              </div>
            </div>

            {/* Content */}
            <div className="pb-8 flex-1">
              <div className="p-6 rounded-2xl glass hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white/85">
                      {PERSONAL.education.degree}
                    </h3>
                    <p className="text-sm text-white/40 mt-1">
                      {PERSONAL.education.college}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-white/25 bg-white/[0.04] px-3 py-1 rounded-full">
                    Current
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-white/25" />
                    <span className="text-xs text-white/30">{PERSONAL.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award size={12} className="text-white/25" />
                    <span className="text-xs text-white/30">
                      CGPA: <span className="text-white/60 font-semibold">{PERSONAL.education.cgpa}</span>
                    </span>
                  </div>
                </div>

                {/* Coursework */}
                <div className="mt-5">
                  <p className="text-xs text-white/25 mb-2 font-medium uppercase tracking-wider">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Operating Systems",
                      "DBMS",
                      "Computer Networks",
                      "AI/ML",
                    ].map((course) => (
                      <span
                        key={course}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] text-white/30 border border-white/[0.04]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
