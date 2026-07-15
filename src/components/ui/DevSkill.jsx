import { useEffect } from "react";
import { MdOutlineMonitor, MdOutlineDns, MdOutlineVpnKey, MdOutlineBuild } from "react-icons/md";
import TitleBox from "./TitleBox";
import AOS from "aos";
import "aos/dist/aos.css";

const DevSkill = () => {
  // Safe validation call for AOS runtime container sync
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const skillRegistry = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <MdOutlineMonitor className="text-5xl p-2 text-blue-500 border-2 border-[#132647] rounded-xl shadow-xl shadow-[#16294c67] group-hover:rotate-6 group-hover:scale-105 group-hover:border-blue-500/40 transition-all duration-500" />,
      gridSpan: "lg:col-span-2",
      animationType: "fade-right",
      delay: "100",
      items: [
        "React.js", "Next.js", "TypeScript", "JavaScript (ES6)", 
        "TanStack Query", "Tailwind CSS", "Shadcn UI", "Context API", 
        "Framer Motion", "Lottie React", "DaisyUI"
      ]
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: <MdOutlineDns className="text-5xl p-2 text-emerald-500 border-2 border-[#132647] rounded-xl shadow-xl shadow-[#16294c67] group-hover:rotate-6 group-hover:scale-105 group-hover:border-emerald-500/40 transition-all duration-500" />,
      gridSpan: "lg:col-span-1",
      animationType: "fade-left",
      delay: "200",
      items: [
        "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", 
        "MongoDB", "SQL", "REST APIs", "CORS", "Golang (Learning)"
      ]
    },
    {
      id: "auth",
      title: "Authentication Layers",
      icon: <MdOutlineVpnKey className="text-5xl p-2 text-purple-500 border-2 border-[#132647] rounded-xl shadow-xl shadow-[#16294c67] group-hover:rotate-6 group-hover:scale-105 group-hover:border-purple-500/40 transition-all duration-500" />,
      gridSpan: "lg:col-span-1",
      animationType: "fade-right",
      delay: "300",
      items: [
        "Better Auth", "JWT Secures", "Firebase Auth"
      ]
    },
    {
      id: "tools",
      title: "Engineering Tools & DevOps",
      icon: <MdOutlineBuild className="text-5xl p-2 text-amber-500 border-2 border-[#132647] rounded-xl shadow-xl shadow-[#16294c67] group-hover:rotate-6 group-hover:scale-105 group-hover:border-amber-500/40 transition-all duration-500" />,
      gridSpan: "lg:col-span-2",
      animationType: "fade-left",
      delay: "400",
      items: [
        "GitHub Engine", "Postman", "Beekeeper Studio", "Firebase", 
        "VSCode Pro", "Chrome Dev Tools", "Vercel Ops", "Netlify", 
        "Figma Systems", "Pixso Workspace", "ChatGPT & Gemini Prompts"
      ]
    }
  ];

  return (
    <div id="project" className="w-11/12 max-w-7xl mx-auto py-12 my-8 overflow-hidden">
      {/* SECTION HEADER BLOCK */}
      <div data-aos="fade-up">
        <TitleBox 
          title="Technical Arsenal"
          name="Technologies & Tools"
          intro="Full-stack expertise across scalable modern architectures"
        />
      </div>

      {/* CORE SKILLS DYNAMIC MATRIX MAPPING BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillRegistry.map((domain) => (
          <div 
            key={domain.id}
            data-aos={domain.animationType}
            data-aos-delay={domain.delay}
            className={`border ${domain.gridSpan} rounded-2xl text-white p-6 sm:p-8 space-y-4 border-[#16294c] bg-[#1323411c] backdrop-blur-sm shadow-xl hover:shadow-[0_20px_40px_rgba(59,130,246,0.05)] hover:bg-[#1323412a] hover:border-slate-700/40 transition-all duration-500 group relative`}
          >
            {/* AMBIENT SOFT CORNER GLOW MATRIX LAYER */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl pointer-events-none" />

            {/* HEADER INTERFACES */}
            <div className="flex items-center gap-4">
              {domain.icon}
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                  {domain.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase block mt-0.5">
                  {domain.items.length} Tech Capacities Registered
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-slate-800/80 via-slate-800/30 to-transparent my-2" />

            {/* SKILLS CHIPS RENDER AREA (SIMPLE HOVER TRANSLATIONS EFFECT) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {domain.items.map((skill, index) => (
                <div 
                  key={index}
                  className="uppercase rounded-xl text-[11px] font-bold tracking-wider border border-[#23355a] bg-slate-950/40 text-slate-400 hover:border-blue-500 hover:text-white px-3 py-2 transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#0e182d] hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] cursor-default select-none"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevSkill;
