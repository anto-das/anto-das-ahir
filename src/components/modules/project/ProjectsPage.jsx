import { useEffect, useState } from "react";
import ProjectsCard from "../../ui/ProjectsCard";
import useData from "../../../hooks/useData";
import { HiHashtag, HiOutlineFolderOpen, HiOutlineSquare3Stack3D, HiOutlineCpuChip } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsPage = () => {
  const [projects] = useData();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Dynamically extract unique categories from dataset to populate safe filter chips
  const dynamicCategories = projects 
    ? ["all", ...new Set(projects.map((p) => p.category).filter(Boolean))] 
    : ["all"];

  // Optimized pipeline array filter logic
  const filteredProjects = projects
    ? selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <div className="w-full bg-[#0a0e18] min-h-screen text-slate-400 pb-24 relative overflow-hidden">
      
      {/* ADVANCED VECTOR AMBIENT GLOW SYSTEM */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-purple-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* CYBER SPACE GRAPH LINES (FINE TECH LOOK MESH) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto pt-32 relative z-10">
        
        {/* 1. UNIQUE DYNAMIC HERO HEROIC HEADER CHASSIS (NO BANNER REPLACEMENT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-900 pb-12 mb-12">
          
          {/* LEFT CHASSIS: CORE TYPOGRAPHY METRICS */}
          <div className="lg:col-span-8 space-y-4" data-aos="fade-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/10 bg-[#0e182d]/60 text-[#326ed1] text-[11px] font-black uppercase tracking-[0.25em]">
              <HiHashtag className="text-xs animate-pulse" />
              <span>System Repositories</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
              Crafted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#326ed1] via-blue-400 to-indigo-400">Applications</span>
            </h1>
            
            <p className="text-sm sm:text-base font-medium text-slate-400 max-w-2xl leading-relaxed">
              An curated architectural logbook showcasing full-stack solutions, high-conversion typesafe architectures, and pixel-perfect enterprise systems built across structural guidelines.
            </p>
          </div>

          {/* RIGHT CHASSIS: STATISTICAL SYSTEM PERFORMANCE CARD */}
          <div 
            className="lg:col-span-4 p-5 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md flex items-center justify-between gap-4 shadow-xl w-full"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">// matrix_count</span>
              <div className="text-3xl font-black text-white tracking-tight">
                {projects?.length || 0} <span className="text-[#326ed1] text-xs font-bold uppercase tracking-wider pl-1">Nodes Ready</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">All modules running production logs.</p>
            </div>
            
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[#326ed1] shadow-inner flex-shrink-0">
              <HiOutlineFolderOpen className="text-2xl" />
            </div>
          </div>

        </div>

        {/* 2. TRENDING INTERACTIVE CATEGORY FILTER NAVIGATION NODES */}
        {dynamicCategories.length > 2 && (
          <div 
            className="flex items-center gap-2 flex-wrap mb-10 bg-slate-950/20 p-2 rounded-2xl border border-slate-900/60 w-fit"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {dynamicCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                  className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                    isActive
                      ? "bg-[#326ed1] text-white shadow-md shadow-[#326fd11c]"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {category === "all" ? "All Systems" : category}
                </button>
              );
            })}
          </div>
        )}

        {/* 3. CORE DYNAMIC HARD GRID MATRIX LISTINGS */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project?.id || idx}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={Math.min(idx * 100, 250)}
              >
                <ProjectsCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY FEED MANIFEST CONTROL BUFFER FILTER PLACEHOLDER */
          <div 
            className="w-full text-center py-20 rounded-3xl border border-dashed border-slate-800 bg-slate-950/10 flex flex-col items-center justify-center gap-3"
            data-aos="zoom-in"
          >
            <HiOutlineSquare3Stack3D className="text-3xl text-slate-600 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              Zero active deployment clusters under "{selectedCategory}" index.
            </span>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectsPage;
