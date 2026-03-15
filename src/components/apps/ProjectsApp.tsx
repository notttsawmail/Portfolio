"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/phone/AppShell";
import { portfolioData } from "@/lib/data";
import { ChevronRight, Github, ExternalLink, ArrowLeft } from "lucide-react";

export const ProjectsApp = ({ onBack }: { onBack: () => void }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = portfolioData.projects.find(p => p.id === selectedProjectId);

  return (
    <AppShell title="Projects" emoji="💼" subtitle="Showcase" onBack={onBack}>
      <AnimatePresence mode="wait">
        {!selectedProjectId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {portfolioData.projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProjectId(project.id)}
                className="glass-card group flex items-center gap-5 p-4 rounded-3xl cursor-pointer hover:bg-white/[0.08] transition-all border border-white/5 active:scale-[0.98]"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-3xl border border-white/10 shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                  {project.emoji}
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold tracking-tight font-display">{project.name}</h3>
                    {project.featured && (
                      <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-foreground text-background">
                        PRIME
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-foreground/40 font-medium truncate tracking-tight">{project.tagline}</p>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 opacity-0 group-hover:opacity-100 transition-all">
                   <ChevronRight size={18} className="text-foreground/50" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="space-y-10 pb-10"
          >
            <button
              onClick={() => setSelectedProjectId(null)}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:text-foreground/60 transition-colors px-1"
            >
              <ArrowLeft size={16} />
              Collection
            </button>

            <motion.div 
               layoutId={`emoji-${selectedProject?.id}`}
               className="w-full aspect-square bg-card border border-border rounded-[32px] md:rounded-[40px] flex items-center justify-center text-6xl md:text-8xl shadow-[inset_0_4px_30px_rgba(0,0,0,0.4)] relative"
            >
               <div className="absolute inset-x-8 bottom-8 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-3xl opacity-50" />
               <span className="relative z-10 drop-shadow-2xl">{selectedProject?.emoji}</span>
            </motion.div>

            <div className="space-y-4 px-2">
              <h2 className="text-3xl md:text-4xl font-editorial font-bold leading-tight">{selectedProject?.name}</h2>
              <p className="text-sm md:text-base text-foreground/50 font-medium tracking-tight leading-relaxed">{selectedProject?.tagline}</p>
            </div>

            <div className="space-y-6 px-2">
              <p className="text-[13px] md:text-[15px] leading-[1.6] text-foreground/70 font-display">
                {selectedProject?.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">System Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.stack?.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-foreground text-background rounded-full text-[10px] font-mono font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 px-2">
               <button className="flex items-center justify-center gap-3 bg-foreground text-background py-5 rounded-3xl text-[11px] font-black uppercase tracking-[0.1em] shadow-2xl active:scale-95 transition-transform">
                 <Github size={18} />
                 Source
               </button>
               <button className="flex items-center justify-center gap-3 glass-card py-5 rounded-3xl text-[11px] font-black uppercase tracking-[0.1em] shadow-xl active:scale-95 transition-transform">
                 <ExternalLink size={18} />
                 Visual
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppShell>
  );
};
