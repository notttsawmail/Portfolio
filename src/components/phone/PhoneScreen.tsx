"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HomeScreen } from "@/components/phone/HomeScreen";
import { AboutApp } from "@/components/apps/AboutApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { SkillsApp } from "@/components/apps/SkillsApp";
import { ResumeApp } from "@/components/apps/ResumeApp";
import { ContactApp } from "@/components/apps/ContactApp";

export const PhoneScreen = () => {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const renderApp = () => {
    switch (activeApp) {
      case "about": return <AboutApp onBack={() => setActiveApp(null)} />;
      case "projects": return <ProjectsApp onBack={() => setActiveApp(null)} />;
      case "skills": return <SkillsApp onBack={() => setActiveApp(null)} />;
      case "resume": return <ResumeApp onBack={() => setActiveApp(null)} />;
      case "contact": return <ContactApp onBack={() => setActiveApp(null)} />;
      default: return null;
    }
  };

  return (
    <div className="relative w-full h-full bg-transparent overflow-hidden">
      <AnimatePresence mode="wait">
        {!activeApp ? (
          <motion.div
            key="home"
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <HomeScreen onAppClick={setActiveApp} />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ scale: 0.3, borderRadius: "50%", opacity: 0 }}
            animate={{ scale: 1, borderRadius: "0%", opacity: 1 }}
            exit={{ scale: 0.3, borderRadius: "50%", opacity: 0 }}
            transition={{ 
              duration: 0.38,
              ease: [0.34, 1.1, 0.64, 1] 
            }}
            className="h-full w-full overflow-hidden"
          >
            {renderApp()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
