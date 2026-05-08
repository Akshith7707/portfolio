"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { CURRENT_FOCUS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function FocusSection() {
  const { ref, isInView } = useInView();

  return (
    <Section id="focus" subtitle="Current Status" title="What I'm focused on.">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {CURRENT_FOCUS.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            whileHover={{ y: -3 }}
            className="group p-5 rounded-2xl glass border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-mono text-white/20">{item.progress}%</span>
            </div>

            <h3 className="text-sm font-semibold text-white/75 mb-2 group-hover:text-white transition-colors">
              {item.title}
            </h3>

            <p className="text-xs text-white/30 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Progress bar */}
            <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${item.progress}%` } : {}}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
