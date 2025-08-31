import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogoFill } from "react-icons/pi";
import {  FaFacebookF,  } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className=" gap-4 flex">
        <a href="https://github.com/anto-das"
        target="_blank"
        rel="noopener noreferrer" className="btn btn-circle border-none shadow-none hover:bg-[#FF014F] transition duration-700 bg-[#312d2d] text-white text-xl"><PiGithubLogoFill /></a>
        <a 
        href="https://www.linkedin.com/in/anto-das-ahir-7b539a348"
        target="_blank"
        rel="noopener noreferrer" className="btn btn-circle border-none shadow-none hover:bg-[#FF014F] transition duration-700 bg-[#312d2d] text-white text-xl"><LiaLinkedinIn /></a>
        <a 
        href="https://www.facebook.com/ahir.anto.2025"
        target="_blank"
        rel="noopener noreferrer" className="btn btn-circle border-none shadow-none hover:bg-[#FF014F] transition duration-500 bg-[#312d2d] text-white text-xl"> <FaFacebookF /> </a>
        {/* menu icon for large device */}
    </div>
    );
};

export default SocialIcons;