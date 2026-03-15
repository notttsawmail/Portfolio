"use client";

import { motion } from "framer-motion";
import { AppShell } from "@/components/phone/AppShell";
import { portfolioData } from "@/lib/data";

export const SkillsApp = ({ onBack }: { onBack: () => void }) => {
  const categories = Object.keys(portfolioData.skills) as (keyof typeof portfolioData.skills)[];
  const allSkillsCount = Object.values(portfolioData.skills).flat().length;

  const getEmoji = (cat: string) => {
    switch (cat) {
      case "Programming Languages": return "💻";
      case "Frameworks": return "⚙️";
      case "Database": return "🗄️";
      case "Version Control": return "🌿";
      default: return "⚡";
    }
  };

  return (
    <AppShell title="Skills" emoji="⚡" onBack={onBack}>
      <div className="space-y-24 pb-20">
        {/* Dynamic Skill Sections - Premium Editorial Layout */}
        {categories.map((cat, catIndex) => (
          <motion.div 
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ambient Background Glow for Section */}
            <div className="absolute -inset-x-6 -inset-y-10 bg-foreground/[0.02] rounded-[48px] -z-10" />
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -z-10 opacity-20 ${
              catIndex % 2 === 0 ? 'bg-white/10' : 'bg-foreground/5'
            }`} />

            <div className="space-y-8">
              {/* Section Header with Premium Typography */}
              <div className="space-y-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getEmoji(cat)}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 italic">Category {catIndex + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-editorial font-bold tracking-tighter leading-none shrink-0 italic">
                  {cat}
                </h3>
              </div>

              {/* Skill Grid for this Category - Staggered entrance */}
              <div className="grid grid-cols-2 gap-3">
                {portfolioData.skills[cat].map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: i * 0.05,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="glass-card flex items-center justify-center p-4 md:p-6 rounded-[24px] text-center border border-white/5 group hover:border-white/20 hover:bg-white/[0.03] transition-all relative overflow-hidden"
                  >
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-foreground/60 group-hover:text-foreground group-hover:scale-110 transition-all duration-300">
                      {skill}
                    </span>
                    {/* Subtle Internal Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Premium Total Summary Stat - Final Flourish */}
        <div className="relative group pt-4">
           <div className="absolute inset-0 bg-foreground/5 blur-3xl rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
           <div className="relative glass-card border border-border rounded-[48px] p-12 text-center space-y-3 shadow-2xl overflow-hidden group">
               <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="space-y-1"
               >
                 <p className="text-6xl md:text-7xl font-editorial font-bold tracking-tighter leading-none">
                   {allSkillsCount}
                 </p>
                 <div className="w-12 h-1 bg-foreground mx-auto rounded-full shrink-0" />
               </motion.div>
               <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30 pt-2">
                 Expertise Points Discovered
               </p>
               
               {/* Animated Background Element */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute -bottom-16 -right-16 w-32 h-32 border-2 border-foreground/5 rounded-full flex items-center justify-center -z-10"
               >
                 <div className="w-24 h-24 border border-foreground/5 rounded-full" />
               </motion.div>
           </div>
        </div>
      </div>
    </AppShell>
  );
};
