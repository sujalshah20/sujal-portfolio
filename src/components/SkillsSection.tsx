import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Code2, Monitor, Server, Database, Cpu, Layers, Star, Sparkles } from "lucide-react";
import { RESUME_DATA } from "../types";

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  // Map category titles to lucide-react icons safely
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "Monitor":
        return <Monitor className="w-5 h-5 text-purple-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-pink-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      default:
        return <Star className="w-5 h-5 text-gray-400" />;
    }
  };

  // Group list labels
  const groupLabels = ["All", ...RESUME_DATA.skills.map(cat => cat.title)];

  const filteredCategories = RESUME_DATA.skills.map((category) => {
    // If selected group is not "All" and does not match category, skip (or return empty list)
    if (selectedGroup !== "All" && selectedGroup !== category.title) {
      return null;
    }

    // Filter skill tags matches
    const matchedSkills = category.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedSkills.length === 0 && searchQuery !== "") {
      return null; // hide empty categories during query
    }

    return {
      ...category,
      skills: matchedSkills
    };
  }).filter(Boolean) as typeof RESUME_DATA.skills;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0d1222] to-[#0b0f19]">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Skills Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-mono text-blue-400 font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Skills Inventory</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Capabilities Grid</span>
          </h2>
          
          <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
            Search my tech inventory or filter by categorised expertise to view my specialized frameworks, databases, and operational concept standards.
          </p>

          {/* Interactive Search Console */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 max-w-2xl mx-auto items-center">
            
            {/* Input Element */}
            <div className="relative md:col-span-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
              <input
                id="skills-search-input"
                type="text"
                placeholder="Search tools, platforms, concepts (e.g. React, MongoDB)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#0f1526]/80 text-white rounded-xl border border-gray-800 focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/40 focus:outline-none transition-all placeholder:text-gray-500 font-mono text-xs sm:text-sm"
              />
            </div>

          </div>

          {/* Category quick selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-3xl mx-auto">
            {groupLabels.map((lbl) => {
              const isActive = selectedGroup === lbl;
              return (
                <button
                  key={lbl}
                  id={`skill-filter-btn-${lbl.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setSelectedGroup(lbl)}
                  className={`text-[11px] sm:text-xs px-3.5 py-1.5 rounded-lg border font-mono tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600/15 border-blue-500 text-blue-400"
                      : "bg-gray-900/60 border-gray-800/80 text-gray-400 hover:text-gray-200 hover:border-gray-700"
                  }`}
                >
                  {lbl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Render */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                id={`skill-category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0f1526]/75 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/60 rounded-2xl p-5 shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 border-b border-gray-800/40 pb-3 mb-4">
                    <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg shrink-0">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className="font-display font-extrabold text-white text-base sm:text-lg tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Badges Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isHighlighted = searchQuery !== "" && skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-lg text-xs leading-none font-mono tracking-tight border transition-all ${
                            isHighlighted
                              ? "bg-gradient-to-tr from-blue-600/30 to-purple-600/30 text-white border-blue-400/80 font-semibold"
                              : "bg-gray-950/60 border-gray-800/85 text-gray-300"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Micro operational count labels */}
                <div className="pt-4 mt-4 border-t border-gray-800/20 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>METRICS VALIDATED</span>
                  <span>{category.skills.length} Items Available</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <div className="col-span-full py-16 bg-gray-950/40 border border-dashed border-gray-800 rounded-2xl text-center flex flex-col items-center justify-center space-y-3">
              <Sparkles className="w-8 h-8 text-yellow-500 animate-bounce" />
              <p className="text-gray-400 text-sm font-mono">No matching skills found in database for "{searchQuery}"</p>
              <button
                id="reset-search-btn"
                onClick={() => { setSearchQuery(""); setSelectedGroup("All"); }}
                className="text-xs text-blue-400 hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
