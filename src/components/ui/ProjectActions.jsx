import { HiOutlineGlobeAlt } from "react-icons/hi2"; // Heroicons v2
import { HiTerminal } from "react-icons/hi";        // 🛠️ ফিক্স: এটি 'hi' থেকে আসবে, 'hi2' থেকে নয়
import { FaGithub } from "react-icons/fa6";

const ProjectActions = ({ links }) => {
  return (
    <div className="w-full space-y-4">
      {/* 1. SOURCE REPOSITORIES CONTAINER */}
      <div className="rounded-2xl border border-slate-800/60 bg-slate-950/50 p-4 space-y-3 w-full">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <HiTerminal className="text-blue-500 text-sm" />
          <span>Source Repositories</span>
        </h3>
        <div className="flex flex-col gap-2 w-full">
          {links?.client && (
            <a
              href={links.client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:bg-slate-900/90 hover:border-slate-700 transition-all text-xs font-mono text-slate-300 hover:text-white"
            >
              <span className="flex items-center gap-2 truncate">
                <FaGithub className="text-base text-slate-400 flex-shrink-0" />{" "}
                Client_Engine.src
              </span>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded flex-shrink-0">
                Git
              </span>
            </a>
          )}
          {links?.server && (
            <a
              href={links.server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:bg-slate-900/90 hover:border-slate-700 transition-all text-xs font-mono text-slate-300 hover:text-white"
            >
              <span className="flex items-center gap-2 truncate">
                <FaGithub className="text-base text-slate-400 flex-shrink-0" />{" "}
                Server_Runtime.src
              </span>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded flex-shrink-0">
                Git
              </span>
            </a>
          )}
        </div>
      </div>

      {/* 2. LIVE ACTION CONTAINER */}
      <div className="p-4 rounded-2xl border border-slate-800/50 bg-slate-900/20 backdrop-blur-md flex flex-col gap-3 w-full">
        <div className="space-y-0.5">
          <p className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
            Deployment Node
          </p>
          <h4 className="text-xs font-bold text-slate-200">
            System Live Host Pipelines
          </h4>
        </div>
        <a
          href={links?.live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-all active:scale-[0.98]"
        >
          <HiOutlineGlobeAlt className="text-base" />
          <span>Launch Project Node</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectActions;
