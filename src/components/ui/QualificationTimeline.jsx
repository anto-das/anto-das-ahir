import { useEffect } from "react";
import { HiHashtag, HiAcademicCap, HiBriefcase, HiOutlineTerminal } from "react-icons/hi"; // 🛠️ FIX: Primitive handles route mapping line clean update
import { GoDotFill } from "react-icons/go";
import TitleBox from "./TitleBox";
import AOS from "aos";
import "aos/dist/aos.css";

const QualificationTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const combinedRegistry = [
    {
      id: "exp-01",
      type: "experience",
      title: "RSSP Agent (Retailer Sales & Support Partner)",
      orgSub: "Robi Axiata Limited",
      timeline: "Last 5 Months // Professional Tenure",
      status: "Corporate",
      icon: <HiBriefcase className="text-base md:text-lg" />,
      glowBorder: "group-hover:border-amber-500/70 group-hover:text-amber-500 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      activeTextGlow: "group-hover:text-amber-500",
      highlights: [
        "Managed retail sales channels, field support frameworks, and client communication nodes.",
        "Optimized customer relationship handling pipelines and operational workflow efficiencies.",
        "Cultivated advanced corporate teamwork agility and strategic target-driven implementation workflows."
      ]
    },
    {
      id: "edu-01",
      type: "education",
      title: "Diploma in Engineering",
      orgSub: "Electronics Engineering // Munshiganj Polytechnic Institute",
      timeline: "2021 - 2022 Session",
      status: "Completed",
      icon: <HiAcademicCap className="text-base md:text-lg" />,
      glowBorder: "group-hover:border-[#326fd1cc] group-hover:text-[#326ed1] group-hover:shadow-[0_0_15px_rgba(50,110,209,0.2)]",
      activeTextGlow: "group-hover:text-[#326ed1]",
      highlights: [
        "Core specialization focus on Microprocessors, Embedded Circuits, and Signal Processing systems.",
        "Engineered structural logic systems and analytical hardware debugging configurations.",
        "Pivoted analytical engineering methodologies directly into production-grade software development loops."
      ]
    },
    {
      id: "edu-02",
      type: "education",
      title: "Secondary School Certificate (SSC)",
      orgSub: "Science Division // Academic Board",
      timeline: "Graduated: 2021",
      status: "Completed",
      icon: <HiAcademicCap className="text-base md:text-lg" />,
      glowBorder: "group-hover:border-[#326fd1cc] group-hover:text-[#326ed1] group-hover:shadow-[0_0_15px_rgba(50,110,209,0.2)]",
      activeTextGlow: "group-hover:text-[#326ed1]",
      highlights: [
        "Acquired deep foundational scientific, mathematical, and algorithmic logic bases.",
        "Cultivated primary core analytical computational problem-solving principles early on."
      ]
    }
  ];

  return (
    <section 
      id="qualifications" 
      className="w-full bg-[#0a0e18] text-slate-400 py-24 border-t border-slate-900/80 relative overflow-hidden"
    >
      {/* ATMOSPHERIC DECORATION VECTOR BLURS */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-11/12 max-w-4xl mx-auto relative z-10">
        
        {/* GLOBAL TITLEBOX EXECUTIONS */}
        <div data-aos="fade-up">
          <TitleBox 
            title="Milestones"
            name="History & Experience"
            intro="A timeline map tracing my corporate exposure at Robi Axiata alongside formal engineering roots"
          />
        </div>

        {/* INDUSTRIAL METALLIC TIMELINE EDGE TRACK */}
        <div className="relative border-l border-slate-800/80 ml-4 md:ml-8 mt-12 space-y-12 pl-6 md:pl-10">
          
          {combinedRegistry.map((node, index) => (
            <div 
              key={node.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 120}
              className="relative group"
            >
              {/* GIT NODE CHASSIS BUTTON INDICATOR */}
              <div className={`absolute -left-[35px] md:-left-[51px] top-1.5 p-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-500 transition-all duration-500 z-20 ${node.glowBorder}`}>
                {node.icon}
              </div>

              {/* DETAILS TERMINAL INTERFACE BOX */}
              <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-950/30 backdrop-blur-sm shadow-2xl hover:border-slate-700/50 transition-all duration-500 space-y-4">
                
                {/* NODE META HEADER BLOCK */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-3">
                  <div>
                    <h3 className={`text-xl font-black text-white transition-colors duration-300 tracking-tight ${node.activeTextGlow}`}>
                      {node.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 tracking-wide mt-0.5 uppercase">
                      {node.orgSub}
                    </p>
                  </div>
                  
                  {/* METADATA ACTION BADGE CHIPS */}
                  <div className="flex items-center gap-2 sm:self-start">
                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 select-none whitespace-nowrap">
                      {node.timeline}
                    </span>
                    <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full select-none hidden sm:inline-block ${
                      node.type === "experience" 
                        ? "bg-amber-950/20 border border-amber-500/20 text-amber-400" 
                        : "bg-blue-950/20 border border-blue-500/20 text-blue-400"
                    }`}>
                      {node.status}
                    </span>
                  </div>
                </div>

                {/* MATRIX LOG CONTENT PILLS */}
                <div className="space-y-3 pt-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] block pl-0.5 flex items-center gap-1.5">
                    <HiOutlineTerminal className="text-xs text-[#326ed1]" />
                    runtime.log_manifest
                  </span>
                  
                  <ul className="space-y-3">
                    {node.highlights.map((bullet, bIdx) => (
                      <li 
                        key={bIdx}
                        className="flex items-start gap-3 group/bullet transition-all duration-300"
                      >
                        <div className="mt-1.5 flex-shrink-0">
                          <GoDotFill className={`text-[10px] text-slate-600 group-hover/bullet:scale-125 transition-all duration-300 ${
                            node.type === "experience" ? "group-hover/bullet:text-amber-500" : "group-hover/bullet:text-[#326ed1]"
                          }`} />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-400 group-hover/bullet:text-slate-200 transition-colors leading-relaxed">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default QualificationTimeline;
