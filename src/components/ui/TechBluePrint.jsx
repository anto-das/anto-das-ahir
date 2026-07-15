import { HiCpuChip } from "react-icons/hi2";

const TechBlueprint = ({ techStack }) => {
  // অবজেক্ট ও অ্যারে হ্যান্ডেল করার জন্য মেকানিজম
  const renderTechBadges = (stackSection) => {
    if (!stackSection) return null;
    return Object.entries(stackSection).map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((item, idx) => (
          <span
            key={`${key}-${idx}`}
            className="px-2.5 py-1.5 bg-slate-900/60 border border-slate-800/80 rounded-xl text-[11px] font-mono text-slate-300 break-words whitespace-normal max-w-full"
          >
            {item}
          </span>
        ));
      }
      return (
        <span
          key={key}
          className="px-2.5 py-1.5 bg-slate-900/60 border border-slate-800/80 rounded-xl text-[11px] font-mono text-slate-300 break-words whitespace-normal max-w-full"
        >
          {value}
        </span>
      );
    });
  };

  return (
    <div className="w-full space-y-6">
      <h2 className="text-lg font-black text-white tracking-wide uppercase flex items-center gap-2">
        <HiCpuChip className="text-cyan-500" />
        <span>System Core Blueprint</span>
      </h2>

      <div className="space-y-4 w-full">
        {/* FRONTEND TECH CHIPS BLOCK */}
        {techStack?.frontend && (
          <div className="p-4 rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-950 to-slate-900/40 space-y-2.5 w-full overflow-hidden">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
              // 01. Client Interface Core
            </h4>
            <div className="flex flex-wrap gap-2 w-full">
              {renderTechBadges(techStack.frontend)}
            </div>
          </div>
        )}

        {/* BACKEND TECH CHIPS BLOCK */}
        {techStack?.backend && (
          <div className="p-4 rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-950 to-slate-900/40 space-y-2.5 w-full overflow-hidden">
            <h4 className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
              // 02. Server Runtime Logic
            </h4>
            <div className="flex flex-wrap gap-2 w-full">
              {renderTechBadges(techStack.backend)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechBlueprint;
