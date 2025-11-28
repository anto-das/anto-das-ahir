
import profile from "../assets/blur img.jpg";
import "animate.css";
import { Link } from "react-router-dom";
import { IoCall, IoMail } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import SocialIcons from "./SocialIcons";
const HomePageBanner = () => {
  return (
    <div id="top" className="min-h-[90vh] flex justify-center items-center bg-cover bg-[#0e1322] bg-center bg-no-repeat relative"
    >
        <div className="hero mx-auto">
          <div className="w-11/14 flex mx-auto justify-between items-center mt-0 flex-col md:flex-row-reverse lg:flex-row-reverse">
            {/* image div */}
            <div className="max-w-1/2 shadow-2xl shadow-[#326fd186]">
              <img
                src={profile}
                className="w-full relative transition-transform  duration-700 ease-in-out hover:scale-101 will-change-transform rounded-lg z-0.5  mx-auto"
              />
            </div>
            {/* introduce div */}
            <div  className="space-y-5 w-full lg:w-1/2">
              <div className="btn rounded-full border-[#326fd186] bg-[#0e182d] shadow-none bg-none text-[#326ed1]"> <GoDotFill className="mt-1 text-lg animate__animated animate__flash animate__delay-1 animate__infinite	infinite animate__slower"/> Full-stack web developer </div>
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-white">
                Anto <span className="text-[#326ed1]">Das Ahir</span>
              </h1>
              <p className="py-3 text-lg font-semibold text-gray-400">
                Hi, I am a dedicated and fully passionate full-stack web developer who creates user-friendly websites. I will always give my best to deliver high-quality work and help you achieve your goals.
              </p>
              <div className="flex w-full flex-col md:flex-row lg:flex-row items-start gap-6">
               <Link to={"/contact"}>
                  <button className="btn w-full shadow-lg flex justify-between items-center text-[16px] shadow-[#326fd186] btn-lg hover:bg-[#0948c7] bg-[#2a6aed]  border-none font-bold text-gray-300 transition-transform duration-700 hover:-translate-y-0.5">
                    {" "}
                    <IoMail /> Let's Talk
                  </button>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1wnmw2lWXYNxnRb86jJoElszTU-Tta8lO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#0e1322] w-full lg:w-1/2 shadow-none border border-[#2a6aed] flex gap-4 items-center text-[16px] font-bold text-[#2a6aed] btn-lg hover:bg-[#80808013] transition-transform duration-900 hover:-translate-y-0.5"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>
              <div className="mt-8">
                <SocialIcons></SocialIcons>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePageBanner;
