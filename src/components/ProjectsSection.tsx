import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, ArrowUpRight, Github, Code, ExternalLink } from "lucide-react";
import { RESUME_DATA, Project } from "../types";
import CaseStudyModal from "./CaseStudyModal";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Full-Stack" | "Other">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ("All" | "Full-Stack" | "Other")[] = ["All", "Full-Stack", "Other"];

  const filteredProjects = RESUME_DATA.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0b0f19] to-[#0d1222]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block Description */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-mono text-blue-400 font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Showcase</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects & Engines</span>
          </h2>
          
          <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
            Explore complete, production-ready RESTful interfaces, relational structures, and multi-dashboard workspaces designed and written by me. Click on any item to read the comprehensive system report.
          </p>

          {/* Filtering Tabs Group */}
          <div className="flex items-center justify-center space-x-1 border border-gray-800/60 bg-[#0e1424]/60 backdrop-blur-sm p-1 rounded-xl max-w-xs sm:max-w-sm mx-auto mt-8">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-tab-${category}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg capitalize transition-colors cursor-pointer focus:outline-none ${
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-indicator"
                      className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {category === "Other" ? "Other (PHP)" : category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          id="project-cards-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col bg-[#0f1526] rounded-2xl border border-gray-800/60 overflow-hidden shadow-2xl hover:border-gray-700/80 transition-all cursor-pointer glow-card"
              >
                {/* Image Showcase Frame */}
                <div className="relative aspect-video overflow-hidden border-b border-gray-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Pill Overlays */}
                  <span className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-sm border border-gray-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Text Block Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-purple-400 font-semibold tracking-wider uppercase block">
                      {project.tagline}
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-400 shrink-0" />
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack summary */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-950 border border-gray-800/80 text-gray-400 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-tight"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-950 border border-gray-800/80 text-gray-500 px-2 py-0.5 rounded-md text-[9px] font-mono">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Bottom CTA layout inside card */}
                    <div className="flex items-center justify-between border-t border-gray-800/40 pt-3 text-xs">
                      <span className="text-gray-500 font-mono text-[10px]">CASE STUDY AVAILABLE</span>
                      <span className="text-blue-400 group-hover:underline font-medium flex items-center space-x-1">
                        <span>Read Report</span>
                        <Code className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Study Drawer component */}
        <AnimatePresence>
          {selectedProject && (
            <CaseStudyModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
