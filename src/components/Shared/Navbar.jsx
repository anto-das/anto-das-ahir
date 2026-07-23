import { useState, useEffect } from "react";
import { HiMenu, HiX, HiDocumentText, HiMail, HiSearch } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Logo from "../Shared/Logo";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Framer Motion built-in scroll tracking indicator hook
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Projects", path: "/project", icon: "💻" },
    { name: "Contact Me", path: "/contact", icon: "✉️" },
    { name: "About me", path: "/About", icon: "" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0e1a]/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "bg-[#0a0e18] py-5 border-b border-transparent"
      }`}
    >
      {/* 1. SCROLL PROGRESS READING LINE EFFECT (DARK ACCENT) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: LOGO LAYER */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Logo />
          </motion.div>
        </Link>

        {/* MIDDLE: INTERACTIVE HOVER FLUID CONTAINER (DARK PILL) */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/60 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase transition-colors duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-[#326ed1]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Micro Fluid Background Slide Logic (Glow on Dark) */}
                {isActive && (
                  <motion.div
                    layoutId="portfolioActiveTab"
                    className="absolute inset-0 bg-[#0e182d] shadow-[0_0_15px_rgba(50,110,209,0.15)] border border-[#326fd14d] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}

                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* RIGHT: PORTFOLIO UTILITIES CONTROLLERS (DARK SCHEME) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Social Connect Link Handles */}
          <div className="flex items-center gap-1 bg-slate-900/40 p-1 rounded-full border border-slate-800/80">
            <a
              href="https://github.com/anto-das"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white shadow-none transition-all"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anto-das-ahir-7b539a348"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-[#326ed1] shadow-none transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Dynamic Download Resume Action Button */}
          <motion.a
            href="https://drive.google.com/file/d/1LXEfXMxBburfr1NcJafq5YWdAMup2LYh/view?usp=sharing"
            target="_blank"
            download
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(50, 110, 209, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-sm h-10 bg-gradient-to-r from-[#326ed1] to-[#1e4485] hover:from-[#2556a8] hover:to-[#17356b] border-none text-white px-5 rounded-full font-semibold normal-case shadow-md tracking-wide gap-2 text-xs"
          >
            <HiDocumentText className="w-4 h-4" />
            Resume
          </motion.a>
        </div>

        {/* MOBILE CONTROLLER TOGGLE */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Resume link shortcut icons for phone devices layout */}
          <a
            href="/resume.pdf"
            download
            className="btn btn-sm btn-circle bg-slate-900 border border-slate-800 text-slate-300 p-0 flex items-center justify-center"
          >
            <HiDocumentText className="w-4 h-4" />
          </a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-circle btn-sm border border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 text-xl flex items-center justify-center shadow-sm p-0"
            aria-label="Toggle Control Drawer"
          >
            {isOpen ? (
              <HiX className="w-4 h-4" />
            ) : (
              <HiMenu className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MODERN GLASS OVERLAY SYSTEM */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Smooth Dynamic Matte Panel Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar Floating Cards Design Layout */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-[60px] right-0 h-[calc(100vh-60px)] w-full max-w-[310px] bg-[#0a0e1a] border-l border-slate-800/80 p-6 z-50 flex flex-col justify-between lg:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col gap-3 mt-4">
                <span className="text-[11px] font-bold text-slate-500 tracking-widest uppercase px-2 mb-2">
                  Navigation Links
                </span>
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      key={link.path}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center w-full px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#0e182d] text-[#326ed1] border border-[#326fd14d] shadow-md"
                            : "bg-slate-900/30 text-slate-400 hover:bg-slate-900/60 hover:text-white"
                        }`}
                      >
                        <span className="text-lg mr-3">{link.icon}</span>
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Extended Connect Footer UI Panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full flex flex-col gap-4 pb-6 border-t border-slate-800 pt-5"
              >
                <div className="flex items-center justify-center gap-4 text-slate-400 py-1">
                  <a
                    href="https://github.com/anto-das"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anto-das-ahir-7b539a348"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#326ed1] transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-block bg-[#326ed1] hover:bg-[#2556a8] text-white rounded-xl font-bold normal-case tracking-wide shadow-md border-none flex items-center justify-center gap-2"
                >
                  <HiMail className="w-4 h-4" />
                  Hire Me
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
