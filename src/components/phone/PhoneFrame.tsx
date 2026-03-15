"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StatusBar } from "@/components/phone/StatusBar";
import { PhoneScreen } from "@/components/phone/PhoneScreen";
import { NotificationBanner } from "@/components/phone/NotificationBanner";

export const PhoneFrame = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 1500);
    const dismissTimer = setTimeout(() => setShowNotification(false), 5500);
    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 md:p-8 overflow-hidden">
      
      {/* Phone Case */}
      <motion.div
        className="relative w-[min(92vw,385px)] h-[min(92vh,790px)] bg-[#0c0c0c] rounded-[40px] md:rounded-[60px] p-[8px] md:p-[10px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] md:shadow-[0_80px_160px_-40px_rgba(0,0,0,0.7)] border-[1px] border-[#333] ring-1 ring-black overflow-hidden md:overflow-visible perspective-1000 flex flex-col"
        style={{
          background: "linear-gradient(135deg, #222 0%, #0a0a0a 100%)",
        }}
      >
        {/* Specular Light Sweep Effect on Frame */}
        <motion.div 
          animate={{ x: [-400, 800] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
        />

        {/* Hardware Buttons */}
        <div className="absolute -left-[2px] md:-left-[3px] top-28 w-[2px] md:w-[3px] h-8 bg-[#1a1a1a] rounded-l-sm border-l border-white/5" />
        <div className="absolute -left-[2px] md:-left-[3px] top-44 w-[2px] md:w-[4px] h-16 bg-[#1a1a1a] rounded-l-sm border-l border-white/5" />
        <div className="absolute -left-[2px] md:-left-[3px] top-64 w-[2px] md:w-[4px] h-16 bg-[#1a1a1a] rounded-l-sm border-l border-white/5" />
        <div className="absolute -right-[2px] md:-right-[3px] top-48 w-[2px] md:w-[4px] h-24 bg-[#1a1a1a] rounded-r-sm border-r border-white/5" />

        {/* Screen Container with deeper shadow - Transparent to show background */}
        <div className="relative w-full h-full bg-transparent rounded-[32px] md:rounded-[50px] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] ring-1 ring-white/10 flex flex-col">
          <StatusBar />
          
          {/* Dynamic Island V2 - more interactive look */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-full z-[100] flex items-center justify-around px-3 border border-white/5">
             <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/5 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/10" />
             </div>
             <div className="w-10 h-1 bg-white/5 rounded-full" />
             <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/5" />
          </div>

          <PhoneScreen />

          <NotificationBanner isVisible={showNotification} />
          
          {/* Subtle Screen Reflection V2 */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-40 z-[110]" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.03] opacity-30 z-[110]" />
        </div>
      </motion.div>
    </div>
  );
};
