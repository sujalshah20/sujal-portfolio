import { motion } from "motion/react";
import { X, Github, ExternalLink, Calendar, Briefcase, Code, CheckCircle, Lightbulb, MapPin, AppWindow } from "lucide-react";
import { Project } from "../types";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
      {/* Backdrop */}
      <motion.div
        id="case-study-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
      />

      {/* Drawer Panel */}
      <motion.div
        id="case-study-drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className="relative w-full max-w-4xl h-full bg-[#0c111e]/98 border-l border-gray-800/80 shadow-2xl flex flex-col overflow-y-auto"
      >
        {/* Floating Close Button */}
        <div className="sticky top-0 bg-[#0c111e]/90 backdrop-blur-md border-b border-gray-800/60 p-5 flex items-center justify-between z-10">
          <div>
            <span className="text-[10px] font-mono text-blue-400 tracking-widest block uppercase font-bold">CASE STUDY DETAILED REPORT</span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">{project.title}</h2>
          </div>
          <button
            id="close-case-study"
            onClick={onClose}
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700/85 hover:text-white text-gray-400 transition-all cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Banner (using picsum or custom mockup imagery) */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800/80 shadow-inner group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            {/* Status indicators inside image overlay */}
            <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-800 text-xs font-mono text-emerald-400 font-medium flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STABLE RELEASE</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#111728] border border-gray-800/40 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono uppercase tracking-wider">My Role</span>
              </div>
              <p className="font-semibold text-white/95 text-sm sm:text-base">{project.role}</p>
            </div>
            <div className="bg-[#111728] border border-gray-800/40 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider">Period</span>
              </div>
              <p className="font-semibold text-white/95 text-sm sm:text-base">{project.period}</p>
            </div>
            <div className="bg-[#111728] border border-gray-800/40 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-gray-500 mb-1">
                <Code className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-mono uppercase tracking-wider">Category</span>
              </div>
              <p className="font-semibold text-white/95 text-sm sm:text-base">{project.category}</p>
            </div>
            <div className="bg-[#111728] border border-gray-800/40 rounded-xl p-4">
              <div className="flex items-center space-x-1.5 text-gray-500 mb-1">
                <AppWindow className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-mono uppercase tracking-wider">Metrics</span>
              </div>
              <p className="font-semibold text-white/95 text-sm sm:text-base">MERN Responsive</p>
            </div>
          </div>

          {/* Detailed Narrative Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-white tracking-tight flex items-center space-x-2">
              <span className="text-blue-500 font-bold">#</span>
              <span>Project Summary Overview</span>
            </h3>
            <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Specific Technical Highlight Accomplishments */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-white tracking-tight flex items-center space-x-2">
              <span className="text-purple-400 font-bold">#</span>
              <span>Core Operational Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-950/40 border border-gray-800/40 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details Box if available */}
          {project.architecture && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-semibold text-white tracking-tight flex items-center space-x-2">
                <span className="text-amber-400 font-bold">#</span>
                <span>Architectural Composition</span>
              </h3>
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 font-mono text-xs sm:text-sm space-y-2.5 text-gray-300">
                <span className="text-yellow-400 block mb-2 font-semibold">// Architecture Stack Schema</span>
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-purple-400 shrink-0">{idx + 1}.</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && project.solutions && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-tr from-[#111728]/60 to-[#1e152d]/30 border border-gray-800/60 rounded-2xl p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-rose-400 font-semibold text-sm">
                  <Lightbulb className="w-5 h-5" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light font-sans">
                  {project.challenges}
                </p>
              </div>
              <div className="space-y-3 border-t md:border-t-0 md:border-l border-gray-800 pb-0 md:pl-6 pt-6 md:pt-0">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light font-sans">
                  {project.solutions}
                </p>
              </div>
            </div>
          )}

          {/* Technologies Tag Cloud */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">Technologies Implemented :</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-900 border border-gray-800 relative text-gray-300 px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                >
                  <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full" />
                  <span className="pl-1.5">{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* External Action Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-900">
            <a
              id={`modal-github-link-${project.id}`}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center space-x-2 bg-gray-900 border border-gray-800 hover:border-gray-700/85 text-white font-medium text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>View Code Repository</span>
            </a>
            
            {project.demoUrl && (
              <a
                id={`modal-demo-link-${project.id}`}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 font-medium text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
              >
                <span>Launch Live Showcase</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            
            <p className="text-[10px] font-mono text-gray-500 text-center sm:text-left">
              * Note: Contact Sujal directly regarding deployment access sandboxes.
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
