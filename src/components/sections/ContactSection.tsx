"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { useInView } from "@/hooks/useAnimations";
import { PERSONAL } from "@/lib/constants";
import { Send, Linkedin, Github, Twitter, Mail, Phone, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { ref, isInView } = useInView();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: PERSONAL.social.linkedin,
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: PERSONAL.social.github,
      color: "hover:text-white",
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      href: PERSONAL.social.twitter,
      color: "hover:text-sky-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: PERSONAL.social.email,
      color: "hover:text-purple-400",
    },
    {
      icon: Phone,
      label: PERSONAL.phone,
      href: `tel:${PERSONAL.phone.replace(/\s+/g, "")}`,
      color: "hover:text-emerald-400",
    },
  ];

  return (
    <Section id="contact" subtitle="Contact" title="Let's connect.">
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Got a project idea, freelance opportunity, or just want to chat about
              technology? I&apos;d love to hear from you.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/30">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently available for opportunities</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/[0.04] transition-all duration-300 group`}
              >
                <link.icon
                  size={18}
                  className={`text-white/30 ${link.color} transition-colors`}
                />
                <div>
                  <div className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">
                    {link.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "name" || formState.name
                    ? "top-2 text-[10px] text-blue-400/70"
                    : "top-4 text-sm text-white/30"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full pt-6 pb-3 px-4 rounded-xl glass bg-transparent text-sm text-white/80 outline-none transition-all duration-300 border ${
                  focusedField === "name"
                    ? "border-blue-500/30"
                    : "border-white/[0.06]"
                }`}
                required
                suppressHydrationWarning
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "email" || formState.email
                    ? "top-2 text-[10px] text-blue-400/70"
                    : "top-4 text-sm text-white/30"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full pt-6 pb-3 px-4 rounded-xl glass bg-transparent text-sm text-white/80 outline-none transition-all duration-300 border ${
                  focusedField === "email"
                    ? "border-blue-500/30"
                    : "border-white/[0.06]"
                }`}
                required
                suppressHydrationWarning
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === "message" || formState.message
                    ? "top-2 text-[10px] text-blue-400/70"
                    : "top-4 text-sm text-white/30"
                }`}
              >
                Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                rows={5}
                className={`w-full pt-6 pb-3 px-4 rounded-xl glass bg-transparent text-sm text-white/80 outline-none resize-none transition-all duration-300 border ${
                  focusedField === "message"
                    ? "border-blue-500/30"
                    : "border-white/[0.06]"
                }`}
                required
                suppressHydrationWarning
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              suppressHydrationWarning
              className="group relative w-full py-3.5 rounded-xl font-medium text-sm overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                {isSubmitted ? (
                  <>
                    <CheckCircle size={16} />
                    Opening Mail Client
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
