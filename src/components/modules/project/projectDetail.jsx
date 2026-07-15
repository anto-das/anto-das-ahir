import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // 🛠️ ফিক্স: useParams ইমপোর্ট করা হলো
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineSquare3Stack3D } from "react-icons/hi2";

// ছোট সাব-কম্পোনেন্ট দুটি ইমপোর্ট করে নেওয়া
import TechBlueprint from "../../ui/TechBluePrint";
import ProjectActions from "../../ui/ProjectActions";

// 🛠️ আপনার মক/প্রজেক্ট JSON ডাটা ফাইলটি এখানে ইমপোর্ট করুন (পাথ আপনার প্রজেক্ট অনুযায়ী চেঞ্জ করতে পারেন)
import projectsData from "./public/projects.json";

const ProjectDetails = () => {
  // 🛠️ ফিক্স ১: ইউআরএল থেকে ডায়নামিক :id প্যারামিটারটি রিসিভ করা
  const { id } = useParams();

  // 🛠️ ফিক্স ২: JSON ডাটা থেকে আইডি নাম্বার অথবা স্লাগ স্ট্রিং ম্যাচ করে নির্দিষ্ট প্রজেক্ট খুঁজে বের করা
  const project = projectsData?.find(
    (p) =>
      p.id === Number(id) ||
      p.projectName?.toLowerCase().replace(/\s+/g, "-") === id,
  );

  // নতুন প্রজেক্টে ক্লিক করার সাথে সাথে পেজটি স্ক্রল হয়ে একদম ওপরে চলে যাবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  // সেফটি চেক: যদি ভুল আইডি বা স্লাগ দিয়ে কেউ ইউআরএল হিট করে তবে ক্র্যাশ না করে এই 404 দেখাবে
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0e18] flex flex-col items-center justify-center text-white p-4">
        <h2 className="text-xl font-bold tracking-wider text-red-500 font-mono mb-2">
          LOG: 404_NOT_FOUND
        </h2>
        <p className="text-slate-400 text-sm mb-4">
          Architecture could not be located inside JSON cluster.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
        >
          Back to Terminal
        </Link>
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
    <div className="min-h-screen w-full bg-[#0a0e18] text-slate-300 relative overflow-hidden font-sans pb-16">
      {/* BACKGROUND GRAPHICS AMBIENT */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d04_1px,transparent_1px),linear-gradient(to_bottom,#1f293d04_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* MAIN CONTAINER BOUNDARY */}
      <div className="w-11/12 max-w-6xl mx-auto pt-8 md:pt-16 space-y-8 box-border">
        {/* NAV ROUTE BACK */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-white transition-colors group"
        >
          <HiOutlineArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
          <span>Return Core Console</span>
        </Link>

        {/* 🛠️ ফিক্সড গ্রিড: ১টি রেসপন্সিভ রো-গ্রিড যা বাইরে যাবে না */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* বামের মেইন সেকশন (থাম্বনেইল এবং বড় ডেসক্রিপশন) */}
          <div className="col-span-1 lg:col-span-7 space-y-6 w-full min-w-0">
            {/* THUMBNAIL WRAPPER */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full rounded-[24px] overflow-hidden border border-slate-800/80 bg-slate-950 p-2 shadow-2xl relative"
            >
              <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 px-3 py-1 rounded-lg">
                {category}
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={thumbnail}
                  alt={projectName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* SYNOPSIS DESCRIPTION BLOCK */}
            <div className="space-y-3 w-full">
              <h2 className="text-base font-black text-white tracking-wide uppercase flex items-center gap-2">
                <HiOutlineSquare3Stack3D className="text-blue-500 text-sm" />
                <span>Architectural Synopsis</span>
              </h2>
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800/60 bg-slate-950/40 text-xs sm:text-sm leading-relaxed text-slate-300 space-y-3 shadow-inner break-words">
                {description?.split("\n\n").map((para, index) => (
                  <p key={index} className="tracking-wide text-slate-300/90">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* ডানের সাইডবার সেকশন (টাইটেল, বাটনসমূহ এবং টেক ব্লুপ্রিন্ট) */}
          <div className="col-span-1 lg:col-span-5 space-y-6 w-full min-w-0">
            {/* TITLE HEADER */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white break-words">
                {projectName}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-blue-400/90 font-mono leading-normal break-words">
                {shortDescription}
              </p>
            </div>

            {/* লিঙ্ক অ্যাকশনসমূহ */}
            <ProjectActions links={links} />

            {/* টেক স্ট্যাক ম্যাপিং */}
            <TechBlueprint techStack={techStack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
