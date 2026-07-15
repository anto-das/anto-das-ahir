import { useEffect } from "react";
import useData from "../../../hooks/useData";
import HomePageBanner from "../../ui/HomePageBanner";
import Introduction from "../../ui/Introduction";
import DevSkill from "../../ui/DevSkill";
import QualificationTimeline from "../../ui/QualificationTimeline";
import TitleBox from "../../ui/TitleBox";
import ProjectsCard from "../../ui/ProjectsCard";
import ContactMe from "../contact/ContactPage";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [projects] = useData();

  // Root frame lifecycle mounting triggers for animations validation
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="w-full bg-[#0a0e18] min-h-screen text-slate-400 overflow-hidden relative">
      {/* GLOBAL RADIANT AMBIENT BACKGROUND ATMOSPHERE LIGHT EFFECTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[180vh] right-10 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[100vh] left-12 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* CORE WORK ENVIRONMENT STREAM CHASSIS CONTAINER */}
      <main className="w-full relative z-10">
        {/* SECTION 0: BANNER SPOTLIGHT WRAPPER TERMINAL (#top anchor mapped inside children) */}
        <HomePageBanner />

        {/* BROAD FLUID CONTENT WRAPPER CANVAS */}
        <div className="w-full space-y-12">
          {/* SECTION 1: SYSTEM BIOGRAPHICAL INTRODUCTION CARD LOG */}
          <div data-aos="fade-up" className="w-11/12 max-w-7xl mx-auto">
            <Introduction />
          </div>

          {/* SECTION 2: THE TECHNICAL ARSENAL CORE MATRIX DISPLAY (#project identity inside child) */}
          <DevSkill />

          {/* SECTION 3: MILESTONE CHRONOLOGY AND CORPORATE TRACKS RECORD */}
          <QualificationTimeline />

          {/* SECTION 4: PRODUCTION READY PORTFOLIO REPOSITORY CATALOG (#project anchor safe fallback tracker) */}
          <section id="project" className="w-11/12 max-w-7xl mx-auto py-12">
            <div data-aos="fade-up">
              <TitleBox
                title="Portfolio Catalog"
                name="Projects & Architectures"
                intro="Full-stack enterprise applications showcasing modular system engineering patterns"
              />
            </div>

            {/* DYNAMIC CARD LOG STREAM PIPELINES */}
            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 rounded-3xl">
                {projects.slice(0, 4).map((project, idx) => (
                  <div
                    key={project?.id || idx}
                    data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={Math.min(idx * 50, 200)}
                  >
                    <ProjectsCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              /* EMPTY MANIFEST FALLBACK LOADING SCREEN PLACEHOLDER BUFFER */
              <div className="w-full text-center py-20 rounded-3xl border border-dashed border-slate-900 bg-slate-950/10 flex flex-col items-center justify-center gap-2 mt-12">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  Compiling system file catalog buffer... Empty Nodes Detected
                </span>
              </div>
            )}
          </section>

          {/* SECTION 5: SYSTEM MESSAGES PACK TRANSMISSION FORM ENDPOINT TERMINAL */}
          <ContactMe />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
