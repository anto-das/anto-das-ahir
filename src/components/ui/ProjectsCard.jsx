import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

const ProjectsCard = ({ project }) => {
  const { id, thumbnail, projectName, shortDescription, techStack, category, links } = project;

  // Object validation parameter array parsing setup to secure map functions against crashes
  const technologiesUsed = techStack ? Object.values(techStack).filter(Boolean) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} // Professional cubic-bezier easing for elastic snap entries
      whileHover={{ y: -10 }}
      className="p-5 rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-lg text-white flex flex-col justify-between gap-5 transition-all duration-500 shadow-2xl hover:shadow-[0_30px_60px_rgba(50,110,209,0.18)] hover:border-[#326fd18c] group relative overflow-hidden"
    >
      {/* 1. DYNAMIC NEON MOUSE-OVER EDGE GLOW SPOTS ACCENT */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-[#326ed1]/15 to-purple-500/10 blur-2xl pointer-events-none rounded-full group-hover:scale-150 group-hover:opacity-100 opacity-60 transition-all duration-700" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-purple-600/5 to-transparent blur-2xl pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* TOP IMAGE CONTROLLER SECTION */}
      <div className="w-full rounded-2xl overflow-hidden relative border border-slate-800/60 shadow-2xl max-h-52 bg-slate-900 aspect-video">
        {/* Soft Dim Layer Overlay (Fades out smoothly on card hover) */}
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
        
        <img
          src={thumbnail}
          className="w-full h-52 object-cover object-top transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-108 will-change-transform [backface-visibility:hidden]"
          alt={projectName}
        />
        
        {/* TOP FLOATING INTERACTIVE GLASS PILL CATEGORY BADGE */}
        <div className="absolute top-3.5 left-3.5 bg-slate-950/75 backdrop-blur-xl border border-slate-800/80 text-[10px] font-black uppercase tracking-[0.2em] text-[#326ed1] px-4 py-2 rounded-full shadow-lg z-20">
          {category || "Full-Stack System"}
        </div>
      </div>

      {/* CORE SYNOPSIS INTERFACES BODY AREA */}
      <div className="w-full space-y-4 flex-1 flex flex-col justify-between relative z-20">
        
        <div className="space-y-2">
          {/* TITLE HEADER BLOCKS */}
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#326ed1] transition-colors duration-300">
            {projectName}
          </h2>
          
          {/* SUMMARY CAPTION DESCRIPTION PANEL (LINE CLAMP FOR BALANCED PROPORTIONS) */}
          <p className="text-xs sm:text-sm font-medium text-slate-400 leading-relaxed min-h-[44px] line-clamp-2 pr-2">
            {shortDescription}
          </p>
        </div>

        {/* BOTTOM METRICS CONTAINER STRUCTURE */}
        <div className="space-y-4 pt-1">
          {/* TECH CHIPS AREA MAP LOOPS */}
          {technologiesUsed.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block pl-0.5">
                Engine Modules
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-hidden">
                {technologiesUsed.slice(0, 5).map((tech, idx) => (
                  <div
                    key={idx}
                    className="uppercase rounded-xl text-[10px] font-bold tracking-wider border border-slate-800 bg-slate-900/40 text-slate-400 px-3 py-1.5 select-none hover:border-[#326fd14d] hover:text-[#326ed1] hover:bg-[#0e182d]/30 transition-all duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GRADIENT INTERMEDIATE HORIZONTAL LINE SPACER */}
          <div className="w-full h-[1px] bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent" />

          {/* HIGH-CONVERSION REDIRECT BUTTON SYSTEM CONSOLES */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-2 w-full">
            
            {/* 1. DYNAMIC HIGH GLOW SYSTEM VIEW LIVE ACTION BUTTON */}
            <a
              href={links?.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-1/2 rounded-xl text-xs font-black text-white uppercase tracking-widest bg-[#326ed1] hover:bg-[#2355a8] shadow-lg shadow-[#326fd11a] hover:shadow-[#326fd133] transition-all duration-300 transform hover:-translate-y-0.5 group/btn active:scale-95"
            >
              <span>Live Node</span>
              <HiOutlineArrowTopRightOnSquare className="text-sm font-bold group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            {/* 2. DYNAMIC DETAILS SPECIFICATION PAGE NAVIGATION VIEW LINK BUTTON */}
            <a
              href={`/project/${id || projectName.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-1/2 rounded-xl text-xs font-black text-slate-300 uppercase tracking-widest bg-slate-900/60 border border-slate-800/90 hover:border-[#326fd166] hover:bg-[#0e182d]/20 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              <HiOutlineClipboardDocumentList className="text-sm text-slate-500 group-hover:text-[#326ed1]" />
              <span>Specs Log</span>
            </a>

            {/* GITHUB INTEGRATION ICON ACTION FOR DEVELOPER DEPTH TRACK */}
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center w-full sm:w-auto flex-shrink-0"
                aria-label="Code Repository Vault"
              >
                <FaGithub className="text-base" />
              </a>
            )}

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectsCard;
