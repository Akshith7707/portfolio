"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useAnimations";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  fullHeight?: boolean;
}

export default function Section({
  id,
  children,
  className,
  title,
  subtitle,
  fullHeight = false,
}: SectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative section-padding py-24 md:py-32",
        fullHeight && "min-h-screen flex flex-col justify-center",
        className
      )}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-16 md:mb-20"
          >
            {subtitle && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-sm font-mono text-white/40 tracking-[0.2em] uppercase">
                  {subtitle}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text tracking-tight">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
