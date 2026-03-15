"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface AppIconProps {
  id: string;
  emoji: string;
  label: string;
  badge?: string;
  onClick: (id: string) => void;
  index: number;
}

export const AppIcon = ({ id, emoji, label, badge, onClick, index }: AppIconProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

  // ANIMATION SETTINGS:
  // Change the [-5, 5] values below to make the apps move MORE or LESS.
  // Smaller numbers = less movement. Larger numbers = more movement.
  const translateX = useTransform(mouseX, [-30, 30], [-5, 5]);
  const translateY = useTransform(mouseY, [-30, 30], [-5, 5]);
  const rotateX = useTransform(mouseY, [-30, 30], [5, -5]);
  const rotateY = useTransform(mouseX, [-30, 30], [-5, 5]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Cap the input offset for the spring
    const offsetX = Math.max(-30, Math.min(30, event.clientX - centerX));
    const offsetY = Math.max(-30, Math.min(30, event.clientY - centerY));
    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.1 + index * 0.05, type: "spring", stiffness: 260, damping: 20 }}
      className="flex flex-col items-center gap-2 cursor-pointer relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(id)}
    >
      <motion.div
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        whileTap={{ scale: 0.8 }}
        className="relative z-10"
      >
        <div className="w-[64px] h-[64px] bg-[#1a1a1a] rounded-[18px] flex items-center justify-center text-3xl shadow-2xl border-[0.5px] border-white/10 overflow-hidden relative group">
          {emoji}
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[18px]" />
        </div>
        
        <AnimatePresence>
          {badge && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-lg z-20"
            >
              <span className="text-[10px] font-bold text-black">{badge}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <motion.span 
        style={{ x: translateX, y: translateY }}
        className="text-[11px] font-semibold text-white/50 group-hover:text-white/90 transition-colors tracking-wide"
      >
        {label}
      </motion.span>
    </motion.div>
  );
};
