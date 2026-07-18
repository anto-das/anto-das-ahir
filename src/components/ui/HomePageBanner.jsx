import { useEffect } from "react";
import profile from "../../assets/Gemini_Generated_Image_hrij6khrij6khrij(1).png";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import SocialIcons from "./SocialIcons";

// AOS import component module layer (Safety trigger check)
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageBanner = () => {
  // Client browser runtime lifecycle rendering check optimization hook
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    AOS.refresh(); // Route elements animation re-calculate layer wrapper
  }, []);

  return (
    <div id="top" className="min-h-screen pt-24 pb-12 flex justify-center items-center bg-[#0a0e18] relative overflow-hidden">
      
      {/* 1. INDUSTRIAL TECH GRADIENT SPOTLIGHT BACKGROUND LIGHTING EFFECTS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* VECTOR SQUARE MATRIX LINE GRID (TRENDING DEV PORTFOLIO LOOK) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

      <div className="hero mx-auto relative z-10">
        <div className="w-11/12 max-w-7xl space-y-12 lg:space-y-0 flex mx-auto justify-between items-center flex-col lg:flex-row-reverse gap-6">
          
          {/* RIGHT SIDE: ADVANCED MORPHING DYNAMIC PICTURE LAYER BLOCK */}
          <div 
            className="w-full lg:w-1/2 flex justify-center items-center relative"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            {/* GLOW LAYER SPLINE SHAPE WRAPPER ACCENT */}
            <div className="absolute w-[290px] h-[290px] sm:w-[410px] sm:h-[410px] bg-gradient-to-tr from-[#326ed1]/35 to-purple-500/20 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-2xl animate-[spin_30s_linear_infinite]" />
            
            {/* IN-TREND MORPHING ORGANIC CYBER-BLOB AVATAR SYSTEM */}
            <div className="relative w-[280px] h-[280px] sm:w-[390px] sm:h-[390px] overflow-hidden border border-[#326fd14d] shadow-[0_0_45px_rgba(50,111,209,0.2)] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] animate-[portfolioMorphBlob_12s_ease-in-out_infinite] bg-slate-900 group">
              <img
                src={profile}
                alt="Anto Das Ahir Personal Avatar"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
              />
            </div>

            {/* HIGH-TECH ABSOLUTE DESIGN CORNER ANGLES (SQUARE SYSTEM) */}
            <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-[#326ed1] opacity-70" />
            <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-purple-500 opacity-70" />
          </div>

          {/* LEFT SIDE: CORE INFRASTRUCTURE BIO CONTENT AREA */}
          <div className="space-y-6 w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* LIVE PULSING WORK AVAILABILITY TRACKER BADGE */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 w-fit rounded-full border border-[#326fd14d] bg-[#0e182d] text-[#326ed1] font-bold text-[11px] tracking-widest uppercase shadow-md"
              data-aos="fade-down"
            >
              <GoDotFill className="text-emerald-400 text-sm animate-ping" />
              <span>Full-Stack Web Developer</span>
            </div>

            {/* BRAND TYPOGRAPHY H1 HEADING CONTEXT ZONE */}
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
                Anto <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#326ed1] via-blue-400 to-indigo-400">Das Ahir</span>
              </h1>
              
              {/* TYPED BLINK EFFECT USING PURE STYLISH TAILWIND UTILITY */}
              <div className="text-lg md:text-xl font-bold text-slate-300 flex items-center gap-2">
                <span className="text-slate-500 font-medium">Crafting secure & scalable architectures.</span>
              </div>
            </div>

            {/* SUMMARY PROFILE OVERVIEW */}
            <p 
              className="text-sm md:text-base leading-relaxed font-medium text-slate-400 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hi, I am a dedicated software craftsman who architects high-performance, responsive, and pixel-perfect full-stack web platforms. Fully committed to transforming intricate design paradigms into production-ready systems.
            </p>

            {/* INTERACTION HIGH-CONVERSION CTA TRIGGERS BUTTONS */}
            <div 
              className="flex w-full flex-col sm:flex-row items-center gap-4 pt-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="btn w-full sm:w-auto px-8 h-12 min-h-0 shadow-lg shadow-[#326fd126] bg-[#326ed1] hover:bg-[#2355a8] text-white border-none rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all duration-300">
                  <IoMail className="text-sm" />
                  Let's Connect
                </button>
              </Link>
              
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full sm:w-auto px-8 h-12 min-h-0 bg-transparent border border-slate-700 hover:border-[#326ed1] hover:bg-[#326ed1]/10 text-slate-300 hover:text-white rounded-full font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaDownload className="text-xs" />
                Get Resume
              </a>
            </div>

            {/* CONNECT PATHWAYS SHIELD CHANNELS HOOK */}
            <div className="pt-4 border-t border-slate-900/60 w-full" data-aos="fade-up" data-aos-delay="400">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-3">Sync Node Channels</span>
              <SocialIcons />
            </div>

          </div>
        </div>
      </div>

      {/* RAW CSS INTERPOLATION FOR DYNAMIC LIQUID MORPH ACCENT */}
      <style>{`
        @keyframes portfolioMorphBlob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 42% 58% 52% 48% / 48% 62% 38% 52%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
    </div>
  );
};

export default HomePageBanner;
