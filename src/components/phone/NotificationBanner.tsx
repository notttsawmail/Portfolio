"use client";

import { motion, AnimatePresence } from "framer-motion";


interface NotificationBannerProps {
  isVisible: boolean;
}

export const NotificationBanner = ({ isVisible }: NotificationBannerProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
          className="absolute top-12 left-4 right-4 z-50 bg-white/90 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
              <span className="text-lg font-bold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-black/50 dark:text-white/50 uppercase tracking-widest">
                Portfolio
              </span>
              <span className="text-sm font-semibold text-black dark:text-white">
                Welcome! Tap an app to explore
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
