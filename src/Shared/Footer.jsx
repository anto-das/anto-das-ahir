import { HiOutlineMail } from "react-icons/hi";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import SocialIcons from "../components/SocialIcons";
import { GoDotFill } from "react-icons/go";
import { FaArrowUp, FaCode, FaPaintBrush } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="pb-14 border-t py-10 ">
     <div className="w-11/14 mx-auto">
       <div className="footer sm:footer-horizontal text-base-content py-14 border-b border-[#2a30357c]">
        {/* logo */}
        <aside className="space-y-3">
          <Link to={"/"}>
            <Logo></Logo>
          </Link>
          <span className="text-md bg-none text-gray-400 capitalize">
             Hi, I am a dedicated and fully passionate <br /> full-stack web developer  who creates user-friendly <br /> websites. I will always give  my best <br /> to deliver high-quality work and help you achieve your goals.
          </span>
          <button  className="btn bg-[#0a1e1b] shadow-none border border-[#2aed64a1] items-center text-[16px] font-bold text-[#2aed64a2] btn-lg transition-transform duration-900 hover:-translate-y-0.5"
                ><GoDotFill className="mt-1 text-lg animate__animated animate__flash animate__delay-1 animate__infinite	infinite animate__slower"/> available for project</button>
        </aside>
        {/* navigate */}
        <nav className="space-y-2">
          <h1 className="text-lg text-white font-semibold">Navigate</h1>
          <a href="contact" className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition-transform duration-500 hover:translate-x-1 capitalize">contact me</a>
          <a href="project" className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition-transform duration-500 hover:translate-x-1 capitalize">project</a>
        </nav>
        {/* get in touch */}
        <nav className="space-y-3 lg:space-y-5">
          <h1 className="text-lg text-white font-semibold uppercase">get in touch</h1>
          <div className="flex gap-3 items-center">
            <IoMail className="text-5xl p-3 bg-[#0d172b] rounded-lg text-blue-600" />
            <p className="text-gray-400 text-xl hover:text-blue-500 duration-500">
              antodasahir@gmail.com
            </p>
          </div>
           <a href="contact" className="capitalize w-full btn bg-[#0e132248] shadow-none border border-[#2a6bed5e] flex gap-4 items-center text-[16px] font-bold text-[#2a6beddc] btn-lg transition-transform duration-900 hover:-translate-y-0.5">
          contact
        </a>
        </nav>
        {/* services */}
        <nav className="space-y-3 lg:space-y-5">
          <h1 className="text-lg text-white font-semibold uppercase">Service</h1>
          <div className="flex gap-3 items-center transition-transform duration-700 hover:translate-x-0.5 group">
            <FaCode className="text-4xl p-2 rounded-lg border transition-transform duration-700 ease-in-out group-hover:scale-110 will-change-transform [backface-visibility:hidden]  group-hover:bg-[#0d172bb7] bg-[#121721] border-[#2c333f] text-[#94a3b8]" />
            <p className="uppercase text-gray-400 text-md font-semibold hover:text-blue-500 duration-500">
              Full-stack development
            </p>
          </div>
            <div className="flex gap-3 items-center transition-transform duration-700 hover:translate-x-0.5 group">
            <FaPaintBrush className="text-4xl p-2 rounded-lg border transition-transform duration-700 ease-in-out group-hover:scale-110 will-change-transform [backface-visibility:hidden]  group-hover:bg-[#280d2bb7] bg-[#121721] border-[#2c333f] text-[#94a3b8]" />
            <p className="uppercase text-gray-400 text-md font-semibold hover:text-pink-500 duration-500">
              Ui/ux design
            </p>
          </div>
           <div className="flex gap-3 items-center transition-transform duration-700 hover:translate-x-0.5 group">
            <MdDeveloperMode className="text-4xl p-2 rounded-lg border transition-transform duration-700 ease-in-out group-hover:scale-110 will-change-transform [backface-visibility:hidden]  group-hover:bg-[#011b0d5d] bg-[#121721] border-[#2c333f] text-[#94a3b8]" />
            <p className="uppercase text-gray-400 text-md font-semibold hover:text-green-600 duration-500">
              front-end solutions
            </p>
          </div>
        </nav>
      </div>
      <div className="flex flex-col lg:flex-row pt-5 justify-between items-center">
        <p className="text-gray-400 mt-2 text-center">
          &copy; Anto Das Ahir {new Date().getFullYear()} |{" "}
          <span className="text-md font-medium text-gray-600">
            {" "}
            All Rights Reserved
          </span>{" "}
        </p>
        <SocialIcons></SocialIcons>
        <a href="#top" className="capitalize btn bg-[#0e132248] shadow-none border border-[#2a6bed5e] flex gap-4 items-center text-[16px] font-bold text-[#2a6beddc] btn-lg transition-transform duration-900 hover:-translate-y-0.5">
        <FaArrowUp />  back to top
        </a>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
