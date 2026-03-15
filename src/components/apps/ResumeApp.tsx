"use client";

import { AppShell } from "@/components/phone/AppShell";
import { portfolioData } from "@/lib/data";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ResumeApp = ({ onBack }: { onBack: () => void }) => {
  return (
    <AppShell title="Resume" emoji="📄" onBack={onBack}>
      <div className="space-y-16 pb-16">
        {/* Premium Download Header */}
        <div className="text-center space-y-6 pt-4">
           <h2 className="text-4xl md:text-5xl font-editorial font-bold tracking-tighter leading-none">Curriculum Vitae</h2>
           <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground/30">Version 2.0.24</p>
            <a 
              href={portfolioData.contact.cvPath}
              download="Shamel_Rai_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-5 rounded-full font-black text-[11px] uppercase tracking-widest shadow-2xl active:scale-95 transition-transform hover:shadow-white/5"
            >
              <Download size={18} />
              Full Archive (.PDF)
            </a>
        </div>

        {/* Experience - Modern Editorial Timeline */}
        <div className="space-y-10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-[1px] bg-foreground/10" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Professional Experience</h3>
          </div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 group px-2"
              >
                <div className="flex justify-between items-baseline">
                   <h4 className="text-xl font-editorial font-bold">{exp.company}</h4>
                   <span className="text-[10px] font-mono font-bold text-foreground/30">{exp.date}</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="px-2 py-0.5 bg-foreground text-background text-[9px] font-black uppercase tracking-tighter rounded-sm italic">ROLE</span>
                   <p className="text-sm font-bold tracking-tight text-foreground/70 uppercase">{exp.role}</p>
                </div>
                <p className="text-[13px] leading-relaxed text-foreground/50 font-medium border-l-2 border-border pl-6 py-1">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 pl-6">
                  {exp.stack.map(tech => (
                      <span key={tech} className="text-[10px] font-mono font-bold text-foreground/30 hover:text-foreground/60 transition-colors">#{tech.toLowerCase()}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education - Split Minimal Layout */}
        <div className="space-y-8">
           <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-[1px] bg-foreground/10" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Academic Background</h3>
          </div>
          <div className="glass-card border border-border rounded-[32px] p-8 space-y-6">
            <div className="space-y-1">
               <h4 className="text-2xl font-editorial font-bold tracking-tight">{portfolioData.education.school}</h4>
               <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">{portfolioData.education.date}</p>
            </div>
            
            <div className="h-[1px] bg-white/5 w-full" />
            
            <div className="space-y-4">
              <p className="text-sm font-bold text-foreground/80 leading-relaxed uppercase tracking-tight">{portfolioData.education.degree}</p>
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">{portfolioData.education.honors}</span>
                </div>
                {portfolioData.education.gpa && (
                  <div className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Cumulative GPA {portfolioData.education.gpa}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Certificates - Minimalist Grid */}
        <div className="space-y-8 pb-10">
           <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-[1px] bg-foreground/10" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 px-2">
            {portfolioData.certificates && (portfolioData.certificates as { name: string }[]).map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-5 glass-card border border-border rounded-2xl flex items-center justify-between group hover:bg-white/[0.05] transition-colors"
              >
                 <div className="space-y-1">
                    <p className="text-[10px] md:text-xs font-bold text-foreground/80 leading-tight">{cert.name}</p>
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-foreground/20 italic">Accredited</p>
                 </div>
                <div className="w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight size={12} className="text-foreground/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
};
