import { IoMail } from "react-icons/io5";
import { FaArrowUp, FaCode, FaPaintBrush } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Logo from "./Logo";
import SocialIcons from "../ui/SocialIcons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0e18] text-slate-400 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      
      {/* GLOW SPLINE DESIGN FOR FOOTER BACKDROP ACCENT */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-12 w-64 h-64 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        
        {/* TOP LAYOUT: GRID MATRIX AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900/80">
          
          {/* COLUMN 1: BRAND LOGO & AVAILABLE INDICATOR */}
          <div className="space-y-4">
            <a href="#top" className="inline-block transition-transform duration-300 hover:opacity-90">
              <Logo />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              A dedicated software craftsman who architects secure, high-performance, and pixel-perfect full-stack web platforms.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-bold tracking-wide uppercase shadow-sm">
              <GoDotFill className="text-sm animate-pulse" />
              <span>Available for Work</span>
            </div>
          </div>

          {/* COLUMN 2: SINGLE PAGE SMOOTH NAVIGATOR */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Navigate</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#top" className="text-sm font-semibold text-slate-400 hover:text-[#326ed1] transition-all inline-block hover:translate-x-1 duration-300">
                  // Home
                </a>
              </li>
              <li>
                <a href="#project" className="text-sm font-semibold text-slate-400 hover:text-[#326ed1] transition-all inline-block hover:translate-x-1 duration-300">
                  // Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-semibold text-slate-400 hover:text-[#326ed1] transition-all inline-block hover:translate-x-1 duration-300">
                  // Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: GET IN TOUCH CONTACT TERMINAL */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Get In Touch</h3>
            <div className="flex items-center gap-3 group">
              <div className="p-2.5 rounded-xl bg-[#0e182d] border border-[#326fd126] text-[#326ed1] transition-all group-hover:scale-105 duration-300">
                <IoMail className="text-lg" />
              </div>
              <a href="mailto:antodasahir@gmail.com" className="text-sm font-medium text-slate-400 hover:text-[#326ed1] transition-colors duration-300 truncate">
                antodasahir@gmail.com
              </a>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider bg-slate-900 border border-slate-800 hover:border-[#326ed1] hover:bg-[#326ed1]/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Conversation
            </a>
          </div>

          {/* COLUMN 4: CORE ENGINEERING CAPABILITIES SERVICES */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Services</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-blue-500 group-hover:bg-[#0e182d] group-hover:border-[#326fd14d] transition-all duration-300">
                  <FaCode className="text-sm" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                  Full-Stack Architecture
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-pink-500 group-hover:bg-pink-950/20 group-hover:border-pink-500/30 transition-all duration-300">
                  <FaPaintBrush className="text-sm" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                  UI/UX Systems
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-emerald-500 group-hover:bg-emerald-950/20 group-hover:border-emerald-500/30 transition-all duration-300">
                  <MdDeveloperMode className="text-sm" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
                  Frontend Engineering
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LAYOUT: LICENSE & SHIELD CHANNELS ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-xs font-medium text-slate-500 order-2 sm:order-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Anto Das Ahir. <span className="text-slate-600">All Rights Reserved.</span>
          </p>
          
          <div className="order-1 sm:order-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="flex justify-center">
              <SocialIcons />
            </div>
            
            <a 
              href="#top" 
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-400 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300 shadow-sm"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-xs animate-bounce" />
              <span>Scroll Top</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
