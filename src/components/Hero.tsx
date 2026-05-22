import { motion } from "motion/react";
import { ArrowRight, FileText, Download, Github, Linkedin, Mail, Sparkles, Code2, Server, Database } from "lucide-react";
import { RESUME_DATA } from "../types";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Let's implement an interactive resume downloading/viewing feature
  const handleResumeClick = () => {
    // Generate a simple window alert or direct print preview since we don't have a real PDF file.
    // However, we can toggle standard view or show a printable resume view nicely!
    window.print();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-grid-pattern">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/5 to-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Micro-elements for Parallax/Depth effect */}
      <motion.div 
        className="absolute top-[20%] right-[15%] text-blue-500/20 pointer-events-none hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code2 className="w-12 h-12" />
      </motion.div>
      <motion.div 
        className="absolute bottom-[25%] left-[12%] text-purple-500/20 pointer-events-none hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Server className="w-10 h-10" />
      </motion.div>
      <motion.div 
        className="absolute bottom-[35%] right-[22%] text-pink-500/20 pointer-events-none hidden lg:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Database className="w-8 h-8" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <motion.div
              id="hero-status-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-blue-400 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="relative flex h-2 w-2 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles</span>
            </motion.div>

            {/* Main Headline */}
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-none">
              Hi, I'm <span className="text-gradient font-black">{RESUME_DATA.name}</span>
            </h1>

            {/* Profession / Role Subtitle */}
            <motion.h2 
              id="hero-subtitle"
              className="text-lg sm:text-xl md:text-2xl font-mono text-blue-400 font-semibold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {RESUME_DATA.title}
            </motion.h2>

            {/* Short Introduction */}
            <motion.p 
              id="hero-description"
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I build robust, responsive, and user-centric full-stack digital ecosystems utilizing the MERN stack (<span className="text-gray-200 font-medium">MongoDB, Express, React, Node.js</span>). Crafting clean and scalable software architectures is what drives me daily.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              id="hero-actions"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button
                id="hero-cta-projects"
                onClick={() => onNavigate("projects")}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-purple-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-resume"
                onClick={handleResumeClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-900/60 border border-gray-800 hover:border-gray-700 hover:bg-gray-800/80 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-all cursor-pointer"
                title="Open Printable Version of My Resume"
              >
                <FileText className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Print Resume / Save PDF</span>
                <Download className="w-3.5 h-3.5 opacity-60 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Social handles short line */}
            <motion.div 
              id="hero-social-links"
              className="flex items-center justify-center lg:justify-start space-x-5 pt-8 border-t border-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-xs font-mono text-gray-500 tracking-wider">CONNECT METRICS :</span>
              <a 
                href={RESUME_DATA.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4 text-blue-400" />
                <span>GitHub</span>
              </a>
              <span className="text-gray-800">|</span>
              <a 
                href={RESUME_DATA.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gray-800">|</span>
              <a 
                href={`mailto:${RESUME_DATA.email}`} 
                className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Visual Showcase Side (Interactive Developer Workspace Visual) */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <motion.div
              id="hero-designer-cube"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="w-full max-w-md bg-[#0e1424]/80 backdrop-blur-md rounded-2xl border border-gray-800/80 shadow-2xl p-6 glow-card"
            >
              {/* IDE Header Controls */}
              <div className="flex items-center justify-between border-b border-gray-800/50 pb-4 mb-4">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/85 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/85 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/85 inline-block" />
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center space-x-1 bg-gray-950/50 px-2.5 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                  <span>main.tsx</span>
                </div>
              </div>

              {/* Code Panel */}
              <div className="font-mono text-xs md:text-sm text-gray-300 space-y-2.5 overflow-hidden">
                <div>
                  <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">name</span>: <span className="text-emerald-300">"{RESUME_DATA.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">role</span>: <span className="text-emerald-300">"MERN Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">skills</span>: [
                  <span className="text-amber-400">"MongoDB"</span>, <span className="text-amber-400">"Express"</span>, <span className="text-amber-400">"React"</span>, <span className="text-amber-400">"Node.js"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">focus</span>: <span className="text-emerald-300">"Scalable API / Clean Code"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">motivation</span>: <span className="text-emerald-300">"Solve complex logic problems"</span>
                </div>
                <div>&#125;;</div>
                <div className="pt-2 border-t border-gray-800/50 mt-4 text-gray-400">
                  <div className="text-[10px] text-gray-400 mb-2 font-mono flex items-center justify-between">
                    <span>MERN COMPILE STATUS</span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>
                  {/* Progress lines mock */}
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Node API core</span>
                      <span className="text-blue-400">100% verified</span>
                    </div>
                    <div className="w-full bg-gray-950 rounded-full h-1.5 relative overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
