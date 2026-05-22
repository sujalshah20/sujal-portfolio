import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, Cpu } from "lucide-react";
import { RESUME_DATA } from "../types";
import JSZip from "jszip";

// Raw file imports for dynamic ZIP packaging
import packageJson from "../../package.json?raw";
import tsconfigJson from "../../tsconfig.json?raw";
import viteConfig from "../../vite.config.ts?raw";
import indexHtml from "../../index.html?raw";
import metadataJson from "../../metadata.json?raw";
import mainTsx from "../main.tsx?raw";
import indexCss from "../index.css?raw";
import typesTs from "../types.ts?raw";
import appTsx from "../App.tsx?raw";
import navigationRaw from "./Navigation.tsx?raw";
import heroRaw from "./Hero.tsx?raw";
import caseStudyModalRaw from "./CaseStudyModal.tsx?raw";
import projectsSectionRaw from "./ProjectsSection.tsx?raw";
import aboutSectionRaw from "./AboutSection.tsx?raw";
import skillsSectionRaw from "./SkillsSection.tsx?raw";
import contactSectionRaw from "./ContactSection.tsx?raw";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };



  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-md border-b border-gray-800/40 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <motion.button
            id="nav-logo"
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-2.5 text-left focus:outline-none cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-display text-white font-bold tracking-tight">
                {RESUME_DATA.name}
              </span>
              <span className="block text-[10px] font-mono text-gray-400 tracking-wider">
                MERN DEVELOPER
              </span>
            </div>
          </motion.button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 border border-gray-800/50 bg-[#0e1424]/60 backdrop-blur-sm p-1 rounded-full px-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer focus:outline-none ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              id="nav-social-github"
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-lg bg-gray-900/40 border border-gray-800/60 hover:border-gray-700/80 transition-all cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              id="nav-social-linkedin"
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2 rounded-lg bg-gray-900/40 border border-gray-800/60 hover:border-gray-700/80 transition-all cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              id="nav-social-email"
              href={`mailto:${RESUME_DATA.email}`}
              className="text-gray-400 hover:text-white p-2 rounded-lg bg-gray-900/40 border border-gray-800/60 hover:border-gray-700/80 transition-all cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
            </motion.a>


          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-lg border border-gray-800 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 animate-pulse" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0c1222] border-b border-gray-800/80"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-4 border-blue-500"
                        : "text-gray-300 hover:bg-gray-900/50 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-800/60 flex items-center justify-around">
                <a
                  href={RESUME_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-gray-400 hover:text-white text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-gray-400 hover:text-white text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${RESUME_DATA.email}`}
                  className="flex items-center space-x-1.5 text-gray-400 hover:text-white text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
