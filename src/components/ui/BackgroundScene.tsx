"use client";

import { motion } from "framer-motion";

export const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#050505] overflow-hidden select-none">
      {/* 
          MESH GRADIENT BACKGROUND 
          VIBRANCY UPDATE: Increased opacity and brighter base.
      */}
      
      {/* 1. Base Gradient - Brighter charcoal direction */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1c1c1c_0%,#000_100%)] opacity-100" />
      
      {/* 2. Static Mesh Layer - Soft lighting from multiple points */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

      {/* 3. Noise Texture Overlay - Refined */}
      <div className="noise-overlay opacity-[0.25]" />

      {/* 4. Dynamic Mesh Orbs - Viewport-aware immersive flows */}
      <div className="fixed inset-0 overflow-visible pointer-events-none">
        {/* Top-Left Orb - Expansive flow */}
        <motion.div
          animate={{
            x: ["-15vw", "25vw", "-5vw", "-15vw"],
            y: ["-15vh", "20vh", "-10vh", "-15vh"],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_70%)] blur-[100px] opacity-70"
        />
        {/* Top-Right Orb - Opposing flow */}
        <motion.div
          animate={{
            x: ["10vw", "-25vw", "15vw", "10vw"],
            y: ["-20vh", "25vh", "-15vh", "-20vh"],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear", delay: -10 }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-0 right-0 w-[90vw] h-[90vh] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-[120px] opacity-60"
        />
        {/* Bottom-Right Orb - Deep flow */}
        <motion.div
          animate={{
            x: ["20vw", "-10vw", "25vw", "20vw"],
            y: ["15vh", "-25vh", "10vh", "15vh"],
          }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear", delay: -20 }}
          style={{ willChange: "transform, opacity" }}
          className="absolute bottom-0 right-0 w-[110vw] h-[110vh] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-[130px] opacity-70"
        />
      </div>

      {/* 5. Dot Grid Pattern - Even more subtle */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, white 0.8px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 6. Dynamic Vignette - Slightly softer to let colors through */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
    </div>
  );
};
