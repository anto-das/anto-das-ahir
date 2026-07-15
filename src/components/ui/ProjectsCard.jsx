import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";

const ProjectsCard = ({ project }) => {
  // ১. সেফটি চেক: প্রজেক্ট ডাটা না থাকলে যেন ক্র্যাশ না করে
  if (!project) return null;

  const { id, thumbnail, projectName, shortDescription, techStack, category, links } = project;

  // 🛠️ ফিক্স: নেস্টেড অবজেক্ট থেকে শুধু স্ট্রিং ভ্যালুগুলোকে বের করার লজিক
  const getTechList = (tech) => {
    if (!tech) return [];
    
    // যদি techStack সরাসরি অ্যারে হয়
    if (Array.isArray(tech)) {
      return tech.filter(item => typeof item === 'string' || typeof item === 'number');
    }
    
    // যদি techStack একটি অবজেক্ট হয় (যেমন আপনার এরর মেসেজে দেখাচ্ছে)
    if (typeof tech === 'object' && tech !== null) {
      const list = [];
      
      Object.values(tech).forEach(val => {
        if (typeof val === 'string' || typeof val === 'number') {
          list.push(val); // স্ট্রিং হলে সরাসরি পুশ করবে
        } else if (typeof val === 'object' && val !== null) {
          // যদি অবজেক্টের ভেতরেও আরও অবজেক্ট থাকে (ডিপ নেস্টেড)
          Object.values(val).forEach(nestedVal => {
            if (typeof nestedVal === 'string' || typeof nestedVal === 'number') {
              list.push(nestedVal);
            }
          });
        }
      });
      return list.filter(Boolean);
    }
    
    return [];
  };

  // নিখুঁতভাবে ফিল্টার করা টেক স্ট্যাক অ্যারে
  const technologiesUsed = getTechList(techStack);

  // Mouse Move গ্লো ইফেক্ট ট্র্যাক করার জন্য
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // স্পেক্স লিংকের জন্য ইউনিক স্লাগ জেনারেট করা
  const projectSlug = id || projectName?.toLowerCase().replace(/\s+/g, "-") || "unknown";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      className="p-5 rounded-[32px] border border-slate-800/60 bg-gradient-to-b from-slate-950/70 to-slate-950/90 backdrop-blur-xl text-white flex flex-col justify-between gap-5 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:shadow-[0_30px_70px_rgba(50,110,209,0.15)] group relative overflow-hidden"
    >
      {/* MOUSE TRACE GLOW SPOT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(50, 111, 209, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* BACKGROUND ABSTRACT AMBIENT SHAPES */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#326ed1]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* TOP IMAGE CONTROLLER SECTION */}
      <div className="w-full rounded-2xl overflow-hidden relative border border-slate-800/50 shadow-inner max-h-52 bg-slate-900 aspect-video group/img">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 opacity-40 group-hover/img:opacity-10 transition-opacity duration-500 z-10" />
        
        <img 
          src={thumbnail || "https://unsplash.com"} 
          className="w-full h-52 object-cover object-top transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 will-change-transform [backface-visibility:hidden]" 
          alt={projectName || "Project Thumbnail"} 
        />

        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 text-[9px] font-black uppercase tracking-[0.25em] text-[#5b96f7] px-3.5 py-1.5 rounded-xl shadow-2xl z-20">
          <span className="w-1.5 h-1.5 inline-block bg-[#326ed1] rounded-full mr-1.5 animate-pulse" />
          {category || "Full-Stack"}
        </div>
      </div>

      {/* CORE SYNOPSIS INTERFACES BODY AREA */}
      <div className="w-full space-y-4 flex-1 flex flex-col justify-between relative z-20">
        <div className="space-y-2.5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight group-hover:text-[#4f8eff] transition-colors duration-300">
            {projectName || "Untitled Project"}
          </h2>
          <p className="text-xs sm:text-sm font-normal text-slate-400 leading-relaxed min-h-[44px] line-clamp-2 pr-2">
            {shortDescription || "No description provided for this engineering architecture."}
          </p>
        </div>

        {/* BOTTOM METRICS CONTAINER */}
        <div className="space-y-4 pt-1">
          {/* 🛠️ রেন্ডারিং ফিক্স: এখন technologiesUsed এর প্রতিটি আইটেম গ্যারান্টিড স্ট্রিং */}
          {technologiesUsed.length > 0 && (
            <div className="space-y-2">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.25em] block pl-0.5">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-hidden">
                {technologiesUsed.slice(0, 6).map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="uppercase rounded-lg text-[9px] font-extrabold tracking-wider border border-slate-800/80 bg-slate-900/60 text-slate-400 px-2.5 py-1 select-none hover:border-[#326fd180] hover:text-[#5b96f7] hover:bg-[#326ed1]/10 transition-all duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="w-full h-[1px] bg-[linear-gradient(to_right,rgba(51,65,85,0),rgba(51,65,85,0.8),rgba(51,65,85,0))]" />

          {/* ACTION BUTTON SYSTEM CONSOLES */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-1 w-full">
            <a 
              href={links?.live || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center justify-center gap-2 px-4 py-3 w-full rounded-xl text-xs font-black text-white uppercase tracking-widest bg-gradient-to-r from-[#326ed1] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] shadow-lg shadow-[#326fd11e] hover:shadow-[#2563eb3a] transition-all duration-300 transform hover:-translate-y-0.5 group/btn active:scale-95 ${links?.github ? 'sm:w-[45%]' : 'sm:w-1/2'}`} 
            >
              <span>Live Node</span>
              <HiOutlineArrowTopRightOnSquare className="text-sm font-bold group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <a 
              href={`/project/${projectSlug}`} 
              className={`inline-flex items-center justify-center gap-2 px-4 py-3 w-full rounded-xl text-xs font-black text-slate-300 uppercase tracking-widest bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group/specs ${links?.github ? 'sm:w-[45%]' : 'sm:w-1/2'}`} 
            >
              <HiOutlineClipboardDocumentList className="text-sm text-slate-500 group-hover/specs:text-[#4f8eff] transition-colors" />
              <span>Specs Log</span>
            </a>

            {links?.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center w-full sm:w-[10%] flex-shrink-0 hover:bg-slate-900" 
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
