
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialIcons = () => {
    return (
        <div className=" gap-4 flex">
        <a href="https://github.com/anto-das"
        target="_blank"
        rel="noopener noreferrer" className="p-4 hover:text-[#2a6bedfb] transition-transform duration-700 hover:-translate-y-0.5 border hover:border-[#2a6bedfb] border-[#2a6bed6e] bg-[#0e1322] shadow-none rounded-xl text-white text-xl"><FaGithub /></a>
        <a 
        href="https://www.linkedin.com/in/anto-das-ahir-7b539a348"
        target="_blank"
        rel="noopener noreferrer" className="p-4 hover:text-[#2a6bedfb] transition-transform duration-700 hover:-translate-y-0.5 border hover:border-[#2a6bedfb] border-[#2a6bed6e] bg-[#0e1322] shadow-none rounded-xl text-white text-xl"><FaLinkedin /></a>
        {/* menu icon for large device */}
    </div>
    );
};

export default SocialIcons;