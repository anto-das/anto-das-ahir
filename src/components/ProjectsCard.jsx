
const ProjectsCard = ({project}) => {
    const {thumbnail,projectName,shortDescription,techStack,category,links,} = project;
    return (
       <div className=" p-4 border  border-[#ff014d7e] shadow-lg hover:shadow-[#ff014d7e] transition-all duration-1000 rounded-lg bg-[#ff014d0e] flex flex-col justify-between items-center gap-4">
  <div className="w-full">
    <img
      src={thumbnail}
      className="w-full h-56 "
      alt={projectName} />
  </div>
  <div className="w-full space-y-4">
    <h2 className="card-title flex items-center justify-between text-[#969696]">
     <span> {projectName}</span> <span className="uppercase badge">{category}</span>
    </h2>
    <p className="text-[#969696]">{shortDescription}</p>
    <p className="text-[#969696]"> <span className="text-gray-200 font-bold text-md"> Technologies: </span> {techStack.html},
        {techStack.css},
           {techStack.javascript},
        {techStack.react},
        {techStack.tailwindcss},
        {techStack.node},
        {techStack.express},
        {techStack.mongodb} 
         </p>
    <div className="card-actions justify-start mt-2">
      <a 
      href={links?.live}
       target="_blank"
       rel="noopener noreferrer"
       className="btn w-1/4 bg-[#ff014dab] border-none shadow-none hover-border-[#ff014f] transition-all duration-900 text-white ">Live</a>
    </div>
  </div>
</div>
    );
};

export default ProjectsCard;