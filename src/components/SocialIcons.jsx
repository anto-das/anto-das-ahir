import { LiaLinkedinIn } from "react-icons/lia";
import { PiGithubLogoFill } from "react-icons/pi";
import {  FaFacebookF,  } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className=" gap-4 flex">
        <a className="btn btn-circle border-none shadow-none hover:bg-[#FF014F] transition duration-700 bg-[#312d2d] text-white text-xl"><PiGithubLogoFill /></a>
        <a className="btn btn-circle border-none shadow-none hover:bg-[#FF014F] transition duration-700 bg-[#312d2d] text-white text-xl"><LiaLinkedinIn /></a>
        <a className="btn btn-circle border-none shadow-none hover:bg-[#FF014F] transition duration-500 bg-[#312d2d] text-white text-xl"> <FaFacebookF /> </a>
        {/* menu icon for large device */}
    </div>
    );
};

export default SocialIcons;