"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { HomeIndicator } from "@/components/phone/HomeIndicator";

interface AppShellProps {
  title: string;
  emoji: string;
  subtitle?: string;
  children: React.ReactNode;
  onBack: () => void;
}

export const AppShell = ({ title, emoji, subtitle, children, onBack }: AppShellProps) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute inset-0 bg-background z-50 flex flex-col overflow-hidden"
    >
      {/* App Header */}
      <div className="h-16 flex items-center px-4 border-b border-border bg-card/50 backdrop-blur-md shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-medium">Home</span>
        </button>
        
        <div className="flex-1 flex flex-col items-center justify-center mr-16">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1a1a1a] rounded-md flex items-center justify-center text-xs border border-white/10">
              {emoji}
            </div>
            <h1 className="text-sm font-semibold tracking-tight">{title}</h1>
          </div>
          {subtitle && (
            <span className="text-[10px] text-foreground/50 uppercase tracking-widest mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* App Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 py-6 pb-20">
        {children}
      </div>

      <HomeIndicator />
    </motion.div>
  );
};
