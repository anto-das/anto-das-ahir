import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { HiHashtag, HiTerminal } from "react-icons/hi";
import { HiOutlineShieldCheck, HiOutlineCpuChip } from "react-icons/hi2";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiJsonwebtokens,
  SiReactquery,
  SiTailwindcss,
  SiShadcnui,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiGo, // 🛠️ FIX: SiGolang change kore standard 'SiGo' use kora hoyeche
} from "react-icons/si";
import { BsLayersHalf } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import devAnimation from "../../../assets/Man and robot with computers sitting together in workplace (1).json";

const AboutSection = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Structural Domain Categorization mapping for recruiters inspection
  const technicalEcosystem = [
    {
      category: "Frontend Architectures",
      skills: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white bg-black rounded-full" />,
        },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "TanStack Query",
          icon: <SiReactquery className="text-rose-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        { name: "Shadcn UI", icon: <SiShadcnui className="text-white" /> },
        {
          name: "Framer Motion",
          icon: <BsLayersHalf className="text-indigo-400" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
      ],
    },
    {
      category: "Backend, Databases & Language Labs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "Golang (Exploring)",
          icon: <SiGo className="text-cyan-500" />,
        }, // 🛠️ FIX UPDATED HERE
      ],
    },
    {
      category: "Authentication & Gateways",
      skills: [
        {
          name: "Better-Auth",
          icon: <HiOutlineShieldCheck className="text-purple-400" />,
        },
        {
          name: "JWT Secures",
          icon: <SiJsonwebtokens className="text-pink-500" />,
        },
        {
          name: "Firebase Auth",
          icon: <SiFirebase className="text-amber-500" />,
        },
      ],
    },
    {
      category: "DevOps, Tools & Diagnostics",
      skills: [
        { name: "Vercel / Netlify", icon: <SiVercel className="text-white" /> },
        { name: "Git Engine", icon: <FaGitAlt className="text-orange-500" /> },
        {
          name: "Postman API",
          icon: <SiPostman className="text-orange-400" />,
        },
        { name: "Figma / Pixso", icon: <SiFigma className="text-pink-400" /> },
      ],
    },
  ];

  // Dynamic remote lottie source configuration
  const fallbackLottieUrl = "https://lottie.host";

  return (
    <section
      id="about"
      className="w-full bg-[#0a0e18] text-slate-400 py-28 border-t border-slate-900/80 relative overflow-hidden"
    >
      {/* ATMOSPHERIC BACKGROUND RADIAL ILLUMINATION LIGHTS */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* CORE TYPOGRAPHY HUD HEADER */}
        <div
          className="flex flex-col items-start gap-1 mb-16"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#326ed1]">
            <HiHashtag className="text-sm" />
            <span>01 . Specifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#326ed1] via-blue-400 to-indigo-400">
              My System
            </span>
          </h2>
          <div className="w-12 h-[2px] bg-[#326ed1] rounded-full mt-1" />
        </div>

        {/* DOUBLE COLUMN SPLIT SYSTEM PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CHASSIS PANEL: INTERACTIVE STREAMING LOTTIE MODULE */}
          <div
            className="col-span-1 lg:col-span-5 flex justify-center items-center max-w-[440px] mx-auto w-full"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="w-full relative p-4 bg-slate-900/10 border border-slate-800/40 rounded-3xl backdrop-blur-md shadow-[20px_0_50px_rgba(0,0,0,0.3)]">
              <Lottie
                lottieRef={lottieRef}
                path={fallbackLottieUrl}
                loop={true}
                animationData={devAnimation}
                className="w-full h-auto"
                style={{ maxHeight: "660px" }}
              />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-slate-700 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-slate-700 rounded-br-xl" />
            </div>
          </div>

          {/* RIGHT CHASSIS PANEL: PROFESSIONAL CHRONOLOGY & SKILL MATRICES */}
          <div
            className="col-span-1 lg:col-span-7 space-y-8"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            {/* COMPILER STYLE TERMINAL BOARD */}
            <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/50 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/60 border-b border-slate-900/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 flex items-center gap-1.5">
                  <HiTerminal /> biographical.profile.ts
                </span>
              </div>

              <div className="p-5 sm:p-6 font-medium text-sm sm:text-base leading-relaxed text-slate-300 space-y-4">
                <p>
                  Hello, I am{" "}
                  <span className="text-white font-bold">Anto Das</span>, a
                  Full-Stack Web Engineer and a continuous learner.
                </p>
                <p>
                  Throughout my last 2.5 years of programming journey, I have
                  learned many things and completed more than 50 practice
                  projects. One of the biggest lessons I have learned is that it
                  is not enough to focus only on learning technologies. It is
                  equally important to understand how things work. My main
                  purpose has never been memorizing keywords but building strong
                  logical thinking and problem-solving skills.
                </p>
                <p>
                  One of the most beautiful aspects of development is creating
                  something from scratch and, when errors occur, taking the time
                  to understand them and debug them properly.
                </p>
                <p>
                  I completed my Diploma in Engineering{" "}
                  <span className="text-slate-100 font-semibold">
                    Electronics Engineering (Munshiganj Polytechnic Institute,
                    21-22 Session)
                  </span>{" "}
                  with a First Class result. I also achieved a First Class
                  result in my SSC examination in 2021.
                </p>

                <p>
                  I started my programming journey through YouTube tutorials.
                  Later, I completed Programming Hero's Complete Full-Stack Web
                  Development and Next Level Web Development courses, where I
                  learned everything from the fundamentals and gained a solid
                  understanding of how an industry-grade project is developed
                  and managed. In addition to my programming journey, I worked
                  as an RSSP Agent at Robi for the last five months, where I
                  gained valuable professional experience, improved my
                  communication skills, and learned how to work effectively in a
                  team while handling responsibilities in a professional
                  environment.
                </p>
              </div>
            </div>

            {/* SEGMENTED PORTFOLIO CAPABILITIES */}
            <div className="space-y-4">
              {technicalEcosystem.map((domain, dIdx) => (
                <div key={dIdx} className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] block pl-1 flex items-center gap-1.5">
                    <HiOutlineCpuChip className="text-xs text-[#326ed1]" />
                    // {domain.category}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {domain.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs font-bold text-slate-300 hover:border-[#326fd14d] hover:bg-[#0e182d]/30 hover:text-white transition-all duration-300 shadow-sm group"
                      >
                        <span className="text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="truncate tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
