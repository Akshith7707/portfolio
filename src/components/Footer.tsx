"use client";

import { PERSONAL, NAV_ITEMS } from "@/lib/constants";
import { Heart } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold mb-3">
              <span className="gradient-text-accent">A</span>
              <span className="text-white/80">kshith</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Software Engineer building scalable systems and intelligent applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-white/30 hover:text-white/60 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href={PERSONAL.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={PERSONAL.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                GitHub
              </a>
              <a
                href={PERSONAL.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                X / Twitter
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="block text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/20 flex items-center gap-1">
            Built with <Heart size={10} className="text-red-400/50" /> and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
