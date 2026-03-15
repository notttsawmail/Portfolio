"use client";

import { AppShell } from "@/components/phone/AppShell";
import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";

export const AboutApp = ({ onBack }: { onBack: () => void }) => {
  const { personal } = portfolioData;

  return (
    <AppShell title="About Me" emoji="👤" onBack={onBack}>
      <div className="space-y-12">
        {/* Profile Header - Premium Editorial Style */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-28 h-28 rounded-full bg-foreground flex items-center justify-center text-background text-4xl font-black shadow-2xl relative z-10">
              {personal.initials}
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-foreground/10 rounded-full blur-2xl" />
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-editorial font-bold tracking-tight">{personal.name}</h2>
            <div className="flex items-center justify-center gap-2">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">{personal.title}</span>
               <span className="w-1 h-1 rounded-full bg-border" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">{personal.location}</span>
            </div>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {personal.stats.map((stat, i) => (
            <div key={i} className="glass-card border border-border rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center space-y-1">
              <span className="text-[8px] md:text-[9px] text-foreground/30 font-black uppercase tracking-[0.3em]">{stat.label}</span>
              <span className="text-lg md:text-xl font-editorial font-bold">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="space-y-8 px-2">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg leading-[1.4] text-foreground/90 font-editorial"
          >
             &quot;{personal.quote}&quot;
          </motion.p>
          <p className="text-xs md:text-sm leading-relaxed text-foreground/60 font-medium">
            {personal.bio}
          </p>
        </div>

        {/* Category-based Tag Cloud */}
        <div className="space-y-6 px-2 pb-10">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">Currently Exploring</h3>
          <div className="flex flex-wrap gap-2.5">
            {personal.exploring.map((tag, i) => (
              <motion.span 
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="px-4 py-2 bg-foreground text-background rounded-full text-[10px] font-mono font-bold tracking-tighter"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
};
