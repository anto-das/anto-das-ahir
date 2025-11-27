import bgImg from "../assets/mkm5.jpg";
import profile from "../assets/blur img.jpg";
import { TypeAnimation } from "react-type-animation";
import "animate.css";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
const HomePageBanner = () => {
  return (
    <div className="w-full h-170 md:h-80 lg:h-120 bg-cover bg-[#0a0e18] bg-center bg-no-repeat relative"
    >
      <div className="space-y-5 flex flex-col justify-between items-center absolute inset-0 ">
        <div className="hero w-11/12 mx-auto">
          <div className="hero-content md:w-11/14 lg:w-11/14 flex mx-auto justify-between items-center mt-8 flex-col md:flex-row-reverse lg:flex-row-reverse">
            {/* image div */}
            <div className="py-4 max-w-[350px]">
              <img
                src={profile}
                className="w-full relative bg-transparent border hover:border-[#ff014dc7]  transition-transform  duration-700 ease-in-out hover:scale-101 will-change-transform [backface-visibility:hidden] rounded-lg z-0.5 shadow-xl shadow-[#ff014d6c]  mx-auto"
              />
            </div>
            {/* introduce div */}
            <div className="space-y-3 w-full lg:w-1/3">
              <h4 className="text-2xl font-bold text-white uppercase tracking-[5px]">
                Hello
              </h4>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                i'm Anto Das Ahir a
              </h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Junior Developer.",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Frontend Developer.",
                  2000,
                  "MERNstack-Developer.",
                  2000,
                ]}
                wrapper="span"
                speed={20}
                className="font-medium text-[#ff014f] capitalize text-xl md:text-2xl lg:text-3xl"
                repeat={Infinity}
              />
              <p className="py-3 text-normal text-[#969696]">
                Junior MERN Stack Developer with proven ability to design and
                implement full-stack applications. Skilled in writing clean,
                optimized code and passionate about solving problems through
                innovative, user-focused solutions.
              </p>
              <div className="w-1/2 flex flex-row justify-between items-start gap-3">
                <a
                  href="https://drive.google.com/file/d/1wnmw2lWXYNxnRb86jJoElszTU-Tta8lO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#ff014f] px-2 py-1  hover-border-[#ff014f] transition-all duration-900 hover:bg-transparent text-lg hover:text-[#ff014f] btn shadow-none rounded-none text-white bg-[#ff014f]"
                >
                  <FaRegShareSquare /> Resume
                </a>
                <Link to={"/contact"}>
                  <button className="px-2 py-1 border border-[#ff014f] transition-all duration-900 bg-transparent text-lg text-[#ff014f] btn shadow-none rounded-none hover:text-white hover:bg-[#ff014f]">
                    {" "}
                    <IoCall /> Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
