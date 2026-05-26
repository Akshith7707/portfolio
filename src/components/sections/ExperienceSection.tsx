"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { EXPERIENCE } from "@/lib/constants";
import { BriefcaseBusiness, MapPin, CalendarClock } from "lucide-react";

export default function ExperienceSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="experience" subtitle="Experience" title="Freelance impact.">
      <div ref={ref} className="space-y-5">
        {EXPERIENCE.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 md:p-7 rounded-2xl glass border border-white/[0.05] hover:border-blue-500/20 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/35 mb-2 uppercase tracking-wider">
                  <BriefcaseBusiness size={12} />
                  {item.role}
                </div>
                <h3 className="text-xl font-semibold text-white/85">{item.title}</h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-white/35">
                <div className="flex items-center gap-1.5">
                  <CalendarClock size={12} />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {item.points.map((point) => (
                <div key={point} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <p className="text-sm text-white/45 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
