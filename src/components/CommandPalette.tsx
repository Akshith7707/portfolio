"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, PERSONAL } from "@/lib/constants";
import {
  Search,
  ArrowRight,
  Home,
  User,
  Code,
  FolderOpen,
  Award,
  Mail,
  ExternalLink,
  Command,
} from "lucide-react";

const COMMANDS = [
  ...NAV_ITEMS.map((item) => ({
    label: `Go to ${item.label}`,
    action: item.href,
    icon: Home,
    type: "navigate" as const,
  })),
  {
    label: "Open LinkedIn",
    action: PERSONAL.social.linkedin,
    icon: ExternalLink,
    type: "external" as const,
  },
  {
    label: "Open GitHub",
    action: PERSONAL.social.github,
    icon: ExternalLink,
    type: "external" as const,
  },
  {
    label: "Open LeetCode",
    action: PERSONAL.social.leetcode,
    icon: ExternalLink,
    type: "external" as const,
  },
  {
    label: "Send Email",
    action: PERSONAL.social.email,
    icon: Mail,
    type: "external" as const,
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleCommand = useCallback(
    (command: (typeof COMMANDS)[0]) => {
      setIsOpen(false);
      setSearch("");

      if (command.type === "navigate") {
        const element = document.querySelector(command.action);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.open(command.action, "_blank");
      }
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="fixed bottom-6 right-6 z-40 hidden md:block"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl glass text-xs text-white/30 hover:text-white/50 transition-colors"
        >
          <Command size={12} />
          <span className="font-mono">⌘K</span>
        </button>
      </motion.div>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
            onClick={() => {
              setIsOpen(false);
              setSearch("");
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg mx-4 rounded-2xl glass-strong overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
                <Search size={16} className="text-white/30" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-white/80 outline-none placeholder:text-white/20"
                  autoFocus
                />
                <kbd className="text-[10px] font-mono text-white/20 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-sm text-white/20">
                    No commands found
                  </div>
                ) : (
                  filteredCommands.map((command, i) => (
                    <button
                      key={i}
                      onClick={() => handleCommand(command)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left hover:bg-white/[0.04] transition-colors group"
                    >
                      <command.icon size={14} className="text-white/25" />
                      <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors flex-1">
                        {command.label}
                      </span>
                      <ArrowRight
                        size={12}
                        className="text-white/10 group-hover:text-white/30 transition-colors"
                      />
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
