"use client";

import { motion } from "framer-motion";
import { AppShell } from "@/components/phone/AppShell";
import { portfolioData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const ContactApp = ({ onBack }: { onBack: () => void }) => {
  const contactLinks = [
    { label: "Email", value: portfolioData.contact.email, emoji: "✉️" },
    { label: "Phone", value: portfolioData.contact.phone, emoji: "📱" },
    { label: "GitHub", value: portfolioData.contact.github, emoji: "⭐" },
    { label: "LinkedIn", value: portfolioData.contact.linkedin, emoji: "💼" },
  ];

  return (
    <AppShell title="Contact" emoji="✉️" subtitle="Channels" onBack={onBack}>
      <div className="space-y-12 pb-10 px-2 min-h-full flex flex-col justify-center">
        {/* Premium Intro Header */}
        <div className="space-y-4 text-center">
           <h2 className="text-4xl md:text-5xl font-editorial font-bold leading-[0.9] tracking-tighter uppercase shrink-0 italic">Get In<br/><span className="text-foreground/30">Touch</span></h2>
           <div className="w-12 h-1 bg-foreground/20 mx-auto rounded-full mt-4" />
        </div>

        {/* Contact Links - Premium Row Style */}
        <div className="space-y-3">
          {contactLinks.map((link, i) => (
             <motion.a
               key={link.label}
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               href={link.label === "Email" ? `mailto:${link.value}` : (link.label === "Phone" ? `tel:${link.value}` : `https://${link.value}`)}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-between p-6 glass-card rounded-[32px] group hover:bg-white/[0.08] transition-all border border-white/5 active:scale-[0.98]"
             >
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center text-xl md:text-2xl border border-white/10 shrink-0 shadow-2xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                    {link.emoji}
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20 mb-1">{link.label}</p>
                    <p className="text-xs md:text-sm font-bold tracking-tight text-foreground/70 group-hover:text-foreground transition-colors">{link.value.length > 25 ? link.value.substring(0, 22) + '...' : link.value}</p>
                  </div>
               </div>
               <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 opacity-0 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-foreground/50" />
               </div>
             </motion.a>
          ))}
        </div>

        <div className="text-center pt-8">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/10">Availability: Open for Projects</p>
        </div>
      </div>
    </AppShell>
  );
};
