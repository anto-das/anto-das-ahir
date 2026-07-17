import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineSquare3Stack3D } from "react-icons/hi2";


import TechBlueprint from "../../ui/TechBluePrint";
import ProjectActions from "../../ui/ProjectActions";


import projectsData from "../../../../public/projects.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();

  
  const project = projectsData?.find((p) => String(p.id) === String(id));

  // পেজ স্ক্রল টপ ইফেক্ট
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // 404 এরর পেজ (এটিও এখন অ্যানিমেটেড)
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0e18] flex flex-col items-center justify-center text-white p-4 overflow-hidden relative">
        <div className="absolute w-[200px] h-[200px] bg-red-500/10 rounded-full blur-[100px]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10 space-y-3"
        >
          <h2 className="text-xl font-bold tracking-wider text-red-500 font-mono">
            LOG: 404_NOT_FOUND
          </h2>
          <p className="text-slate-400 text-sm max-w-xs">
            Architecture could not be located inside JSON cluster.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              Back to Terminal
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const {
    projectName,
    thumbnail,
    shortDescription,
    description,
    category,
    techStack,
    links,
  } = project;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-[#0a0e18] text-slate-300 relative overflow-hidden font-sans pb-16"
    >
      {/* BACKGROUND GRAPHICS AMBIENT (অ্যানিমেটেড গ্লো ইফেক্ট) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d04_1px,transparent_1px),linear-gradient(to_bottom,#1f293d04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="w-11/12 max-w-6xl mx-auto pt-8 md:pt-16 space-y-6 box-border">
        {/* NAV ROUTE BACK */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-white transition-colors group"
          >
            <HiOutlineArrowLeft className="text-sm group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>Return Core Console</span>
          </Link>
        </motion.div>

        {/* RESPONSIVE ROW GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* বামের মেইন সেকশন (থাম্বনেইল এবং বড় ডেসক্রিপশন) */}
          <div className="col-span-1 lg:col-span-7 space-y-6 w-full min-w-0">
            {/* THUMBNAIL WRAPPER */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="w-full rounded-[24px] overflow-hidden border border-slate-800/80 bg-slate-950/80 p-2 shadow-2xl relative group"
            >
              {/* ক্যাটাগরি ব্যাজ */}
              <div className="absolute top-4 left-4 z-20 bg-slate-950/90 backdrop-blur-md border border-slate-800/60 text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 px-3 py-1.5 rounded-lg shadow-lg">
                {category}
              </div>

              {/* ইমেজ কন্টেইনার (স্মুথ জুম ইফেক্ট) */}
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900 relative">
                <img
                  src={thumbnail}
                  alt={projectName}
                  className="w-full h-full object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                {/* হালকা ওভারলে গ্রাডিয়েন্ট */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* SYNOPSIS DESCRIPTION BLOCK */}
            <motion.div variants={itemVariants} className="space-y-3 w-full">
              <h2 className="text-sm font-black text-white/90 tracking-wider uppercase flex items-center gap-2 font-mono">
                <HiOutlineSquare3Stack3D className="text-blue-500 text-base animate-pulse" />
                <span>Architectural Synopsis</span>
              </h2>
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800/40 bg-slate-950/30 backdrop-blur-sm text-xs sm:text-sm leading-relaxed text-slate-300/90 space-y-4 shadow-xl break-words hover:border-slate-800/80 transition-colors duration-300">
                {description?.split("\n\n").map((para, index) => (
                  <p key={index} className="tracking-wide font-normal">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ডানের সাইডবার সেকশন (টাইটেল, বাটনসমূহ এবং টেক ব্লুপ্রিন্ট) */}
          <div className="col-span-1 lg:col-span-5 space-y-6 w-full min-w-0">
            {/* TITLE HEADER */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent break-words leading-tight">
                {projectName}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-blue-400/90 font-mono leading-relaxed break-words border-l-2 border-blue-500/30 pl-3">
                {shortDescription}
              </p>
            </motion.div>

            {/* লিঙ্ক অ্যাকশনসমূহ */}
            <motion.div variants={itemVariants}>
              <ProjectActions links={links} />
            </motion.div>

            {/* টেক স্ট্যাক ম্যাপিং */}
            <motion.div variants={itemVariants}>
              <TechBlueprint techStack={techStack} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
