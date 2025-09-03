
const ProjectsCard = ({project}) => {
    const {thumbnail,projectName,shortDescription,techStack,category,links,} = project;
    return (
       <div className="border border-[#141414] hover:border hover:border-[#ff014f] transition-all duration-1000 p-3 rounded bg-[#141414] flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4">
  <div className="w-full">
    <img
      src={thumbnail}
      className="h-48 w-full rounded"
      alt="Shoes" />
  </div>
  <div className="">
    <h2 className="card-title flex items-center justify-between text-[#969696]">
     <span> {projectName}</span> <span className="uppercase badge">{category}</span>
    </h2>
    <p className="text-[#969696]">{shortDescription}</p>
    <p className="text-[#969696]"> <span className="text-gray-200 font-bold text-md"> Technologies: </span> {techStack.html},
        {techStack.css},
        {techStack.tailwindcss}, <br />
        {techStack.javascript && techStack.javascript},
        {techStack.react},
        {techStack.node},
        {techStack.express},
        {techStack.mongodb} </p>
    <div className="card-actions justify-end mt-2">
      <a 
      href={links?.live}
       target="_blank"
       rel="noopener noreferrer"
       className="border px-2 py-1 rounded-lg hover:text-[#ff014f] hover-border-[#ff014f] transition-all duration-900 text-white ">Live</a>
      <a
       href={links?.client}
       target="_blank"
       rel="noopener noreferrer" className="border px-2 py-1 rounded-lg hover:text-[#ff014f] hover-border-[#ff014f] transition-all duration-900 text-white">Client</a>
      <a 
      href={links?.server}
       target="_blank"
       rel="noopener noreferrer"
      className="border px-2 py-1 rounded-lg hover:text-[#ff014f] hover-border-[#ff014f] transition-all duration-900 text-white">Server</a>
    </div>
  </div>
</div>
    );
};

export default ProjectsCard;