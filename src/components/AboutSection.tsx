import { motion } from "motion/react";
import { Award, BookOpen, Calendar, MapPin, Building2, Shield, Brain, Zap, Heart } from "lucide-react";
import { RESUME_DATA } from "../types";

export default function AboutSection() {
  const strengths = [
    {
      title: "Strong Problem Solver",
      desc: "Structured, analytical approach to debugging, optimizing algorithms, and troubleshooting web architectures.",
      icon: Shield,
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      title: "Quick Autonomous Learner",
      desc: "Able to adapt instantly to cutting-edge technologies, framework upgrades, and backend environments.",
      icon: Brain,
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    },
    {
      title: "Active Team Partner",
      desc: "Experienced workspace collaborator, aligning frontend integrations and databases during Agile developmental sprints.",
      icon: Zap,
      color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
    {
      title: "Clean Code Evangelist",
      desc: "Passionate about building highly documented, maintainable, modular, and standards-compliant typescript scripts.",
      icon: Heart,
      color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-gray-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-mono text-purple-400 font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Story & Profile Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            The Engineer Behind <span className="text-gradient">The Interfaces</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
            Get to know my professional biography, active career status, academic credentials, and core conceptual principles.
          </p>
        </div>

        {/* Content Layout Column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Biography Story + Strengths */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#0e1424]/60 backdrop-blur-md rounded-2xl border border-gray-800/60 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-display font-bold text-white tracking-tight">Professional Biography</h3>
              <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                {RESUME_DATA.bio}
              </p>
              <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base text-xs sm:text-sm">
                Focusing heavy attention on the MERN container structures has allowed me to engineer fluid, dynamic frontend controls backed up by database structures that handle transactions error-free. Doing development with pre-emptive error management yields stable builds in highly volatile deployment environments.
              </p>
            </div>

            {/* Strengths Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-gray-500 tracking-wider uppercase font-semibold">Key Visual Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-950/50 border border-gray-800/60 rounded-xl p-5 space-y-3 hover:border-gray-700/80 transition-all shadow-md"
                    >
                      <div className={`w-10 h-10 border rounded-lg flex items-center justify-center ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-semibold text-white/95 text-sm sm:text-base">{item.title}</h5>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column Right: Experience Timeline + Education + Certificates */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Industry Career Experience */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-gray-500 tracking-wider uppercase font-semibold">Professional Milestones</h4>
              <div className="space-y-4">
                {RESUME_DATA.experience.map((exp) => (
                  <div
                    key={exp.id}
                    id={`experience-block-${exp.id}`}
                    className="relative bg-gradient-to-tr from-[#111728] to-[#0c111e] border border-gray-800 rounded-2xl p-6 shadow-xl"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                      <div>
                        <h5 className="font-bold text-white text-base sm:text-lg">{exp.company}</h5>
                        <span className="text-xs text-blue-400 font-mono tracking-wide block uppercase font-semibold mt-0.5">{exp.role}</span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-mono max-w-max">
                        {exp.period}
                      </span>
                    </div>
                    {/* Location indicator */}
                    <div className="flex items-center space-x-1.5 text-gray-500 text-xs mb-4 font-light">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    {/* Highlights bullet list */}
                    <ul className="space-y-2.5">
                      {exp.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-400 font-light leading-normal">
                          <span className="text-purple-500 shrink-0 select-none mt-1">▪</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credentials */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-gray-500 tracking-wider uppercase font-semibold">Academic Education</h4>
              <div className="bg-gray-950/70 border border-gray-800 rounded-2xl p-5 divide-y divide-gray-950">
                {RESUME_DATA.education.map((edu, index) => (
                  <div key={edu.id} className={`py-4 ${index === 0 ? "pt-0" : "pb-0 border-t border-gray-900/60"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h5 className="font-bold text-white text-sm sm:text-base leading-snug">{edu.institution}</h5>
                        <p className="text-xs text-gray-400 font-light mt-0.5">{edu.degree}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-500 tracking-tighter shrink-0 mt-0.5">
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-[11px] mt-1.5">
                      <MapPin className="w-3 h-3 text-pink-500 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Certifications */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-gray-500 tracking-wider uppercase font-semibold">Credentials & Certifications</h4>
              <div className="space-y-3">
                {RESUME_DATA.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-start space-x-3.5 bg-gray-900/40 border border-gray-800/50 hover:border-gray-700/60 rounded-xl p-4 transition-all"
                  >
                    <Award className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-white text-sm sm:text-base leading-snug">{cert.title}</h5>
                      <span className="text-[10px] uppercase font-mono text-purple-400 block tracking-wider font-semibold my-0.5">
                        ISSUED BY: {cert.issuer}
                      </span>
                      <p className="text-gray-400 text-xs font-light leading-normal leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
