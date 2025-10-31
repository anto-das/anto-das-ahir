
const ProjectsCard = ({project}) => {
    const {thumbnail,projectName,shortDescription,techStack,category,links,} = project;
    return (
       <div className=" p-6 shadow-lg transition-all duration-1000 rounded-lg bg-[#41101f1e] flex flex-col justify-between items-center gap-4">
  <div className="w-full">
    <img
      src={thumbnail}
      className="w-full h-56 transition-transform  duration-700 ease-in-out hover:scale-103 will-change-transform [backface-visibility:hidden] "
      alt={projectName} />
  </div>
  <div className="w-full space-y-4">
    <h2 className="card-title flex items-center justify-between text-[#969696]">
     <span> {projectName}</span> <span className="uppercase badge">{category}</span>
    </h2>
    <p className="text-[#969696]">{shortDescription}</p>
    <div className="text-[#969696] flex items-center flex-wrap gap-2"> <span className="text-gray-500 font-bold text-md"> Technologies: </span> 
     <div className="uppercase  rounded-md text-xs border border-[#303646] hover:border-[#ff014dab]  hover:text-[#ff014dab] p-2 space-x-0.5 text-transparent-white transition-transform duration-500 hover:-translate-y-1">{techStack?.html}</div>
         <div className="uppercase  rounded-md text-xs border border-[#303646] hover:border-[#ff014dab]  hover:text-[#ff014dab] p-2 space-x-0.5 text-transparent-white transition-transform duration-500 hover:-translate-y-1">{techStack?.tailwindcss}</div>
           <div className="uppercase  rounded-md text-xs border border-[#303646] hover:border-[#ff014dab]  hover:text-[#ff014dab] p-2 space-x-0.5 text-transparent-white transition-transform duration-500 hover:-translate-y-1">{techStack?.daisyui}</div>
             <div className="uppercase  rounded-md text-xs border border-[#303646] hover:border-[#ff014dab]  hover:text-[#ff014dab] p-2 space-x-0.5 text-transparent-white transition-transform duration-500 hover:-translate-y-1">{techStack?.javascript}</div>
               <div className="uppercase  rounded-md text-xs border border-[#303646] hover:border-[#ff014dab]  hover:text-[#ff014dab] p-2 space-x-0.5 text-transparent-white transition-transform duration-500 hover:-translate-y-1">{techStack?.reactJs}</div>
         </div>
    <div className="card-actions justify-start mt-5">
      <a 
      href={links?.live}
       target="_blank"
       rel="noopener noreferrer"
       className="btn w-1/2 bg-[#ff014dab] border-none shadow-none hover-border-[#ff014f] transition-all duration-900 text-white ">View Live </a>
    </div>
  </div>
</div>
    );
};

export default ProjectsCard;