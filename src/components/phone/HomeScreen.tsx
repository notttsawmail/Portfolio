"use client";

import { motion } from "framer-motion";
import { AppIcon } from "@/components/phone/AppIcon";
import { HomeIndicator } from "@/components/phone/HomeIndicator";


interface HomeScreenProps {
  onAppClick: (id: string) => void;
}

export const HomeScreen = ({ onAppClick }: HomeScreenProps) => {
  const currentTime = new Date();
  const dateStr = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).toUpperCase();

  const apps = [
    { id: "about", emoji: "👤", label: "About Me" },
    { id: "projects", emoji: "💼", label: "Projects" },
    { id: "skills", emoji: "⚡", label: "Skills" },
    { id: "resume", emoji: "📄", label: "Resume" },
    { id: "contact", emoji: "✉️", label: "Contact" },
  ];

  const dockApps = [
    { id: "about", emoji: "👤" },
    { id: "projects", emoji: "💼" },
    { id: "skills", emoji: "⚡" },
    { id: "contact", emoji: "✉️" },
  ];

  return (
    <div className="flex flex-col h-full relative p-6 pt-12">
      {/* Lockscreen style Header */}
      <div className="flex flex-col items-center text-center space-y-1 mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-medium tracking-[0.2em] text-white/60"
        >
          {dateStr}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-[52px] font-extralight text-white leading-none tracking-tight font-display"
        >
          {currentTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: false,
          })}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-white/40 font-medium tracking-wide"
        >
          Shamel Rai • Portfolio
        </motion.p>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-3 gap-y-8 gap-x-4 px-4">
        {apps.map((app, index) => (
          <AppIcon
            key={app.id}
            index={index}
            {...app}
            onClick={onAppClick}
          />
        ))}
      </div>

      {/* Bottom Dock - Premium Pill Design */}
      <div className="absolute bottom-10 left-6 right-6 h-20 bg-white/[0.08] backdrop-blur-xl rounded-[40px] border border-white/10 flex items-center justify-center gap-4 px-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {dockApps.map((app) => (
          <motion.div
            key={`dock-${app.id}`}
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -4 }}
            onClick={() => onAppClick(app.id)}
            className="w-14 h-14 bg-gradient-to-b from-white/[0.05] to-transparent rounded-[20px] flex items-center justify-center text-2xl border border-white/5 cursor-pointer hover:border-white/20 transition-all duration-300"
          >
            <span className="drop-shadow-lg">{app.emoji}</span>
          </motion.div>
        ))}
      </div>
      
      <HomeIndicator />
    </div>
  );
};
