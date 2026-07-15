import { motion } from "framer-motion";
import { HiHashtag } from "react-icons/hi";

const TitleBox = ({ title, name, intro }) => {
  return (
    <div className="max-w-[700px] mx-auto text-center space-y-4 py-6 my-10 relative overflow-hidden select-none">
      
      {/* 1. MICROSCOPIC BACKDROP GLOW DECORATOR EFFECT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

      {/* TOP: COMPILER INDICES INTERACTIVE BADGE PILL */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-500/10 bg-[#0e182d]/60 text-[#326ed1] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] shadow-sm shadow-black/40"
      >
        <HiHashtag className="text-xs sm:text-sm animate-pulse" />
        <span>{title || "System Engine"}</span>
      </motion.div>

      {/* MIDDLE: METALLIC GRADIENT COMPRESSED H1 HEADING */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-3"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400/90 tracking-tight capitalize leading-none">
          {name}
        </h1>
        
        {/* Symmetric Tech UI Line Accent Divider */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#326fd166]" />
          <div className="w-1.5 h-1.5 rounded-sm bg-[#326ed1]/80 rotate-45 border border-blue-400/20" />
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#326fd166]" />
        </div>
      </motion.div>

      {/* BOTTOM: SOFT MATTE RUNTIME INTRO SYNOPSIS */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm sm:text-base md:text-lg font-medium text-slate-400 max-w-xl mx-auto leading-relaxed first-letter:uppercase px-4"
      >
        {intro}
      </motion.p>
      
    </div>
  );
};

export default TitleBox;
