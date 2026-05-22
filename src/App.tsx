/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, Github, Linkedin, Mail, Cpu, Terminal, ShieldAlert } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { RESUME_DATA } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dynamic Scroll spying mechanism
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 200; // Offset checking threshold
      const sections = ["hero", "about", "skills", "projects", "contact"];
      
      // Determine if back-to-top floating indicator is required
      setShowScrollTop(window.scrollY > 400);

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 75; // Subtract navigation bar height spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col relative antialiased Selection:bg-blue-500/30 selection:text-white">
      
      {/* Floating Glassmorphic Top Navigation bar */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Single-page Layout Blocks */}
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Structured Dark Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          
          {/* Footer Logo & Brand info */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <Cpu className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-base font-display font-bold text-white tracking-tight">Sujal Shah</span>
            </div>
            <p className="text-gray-500 text-xs font-mono">
              MERN Stack Developer & Full-Stack Solutions Builder.
            </p>
          </div>

          {/* Core Metrics & Status indicator */}
          <div className="flex flex-col items-center space-y-1 bg-gray-900/50 border border-gray-800/60 p-2 px-4 rounded-xl">
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">SECURE METADATA RUNTIME</span>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>COMPILE CLEAN // EST. 2026</span>
            </div>
          </div>

          {/* Social Links line */}
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-4">
              <motion.a
                id="footer-github"
                href={RESUME_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-gray-900 border border-gray-800/80 cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <Github className="w-4.5 h-4.5" />
              </motion.a>
              <motion.a
                id="footer-linkedin"
                href={RESUME_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-gray-900 border border-gray-800/80 cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <Linkedin className="w-4.5 h-4.5" />
              </motion.a>
              <motion.a
                id="footer-email"
                href={`mailto:${RESUME_DATA.email}`}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-gray-900 border border-gray-800/80 cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <Mail className="w-4.5 h-4.5" />
              </motion.a>
            </div>
            <p className="text-[10px] font-mono text-gray-600">
              &copy; {new Date().getFullYear()} Sujal Shah. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Back To Top Arrow Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="back-to-top-floating"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 border border-blue-500/30 text-white shadow-xl shadow-purple-500/10 hover:shadow-purple-500/25 transition-all text-center focus:outline-none cursor-pointer"
            aria-label="Scroll Back To Top"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-5 h-5 shrink-0" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
