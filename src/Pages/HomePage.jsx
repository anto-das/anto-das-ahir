import { TbTopologyFull } from "react-icons/tb";
import Education from "../Shared/Education";
import Card from "../Shared/Card";
import { SiFrontendmentor } from "react-icons/si";
import { FaWebAwesome } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import useData from "../hooks/useData";
import ProjectsCard from "../components/ProjectsCard";
import ContactForm from "../Shared/ContactForm";
import HomePageBanner from "../components/HomePageBanner";
import DevSkill from "../components/DevSkill";
import Introduction from "../components/Introduction";
import TitleBox from "../components/TitleBox";

const HomePage = () => {
  const [projects] = useData();
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <div className="py-8 w-11/12 mx-auto">
        <Introduction></Introduction>

        <DevSkill></DevSkill>

        <div id="projects" className="my-14">
          <TitleBox
            title={"portfolio"}
            name={"project & features"}
            intro={
              "Full-stack applications showcasing modern development practices"
            }
          ></TitleBox>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-11/14 mx-auto rounded">
            {projects.map((project, idx) => (
              <ProjectsCard key={idx} project={project}></ProjectsCard>
            ))}
          </div>
        </div>
        <div className="w-11/13 mx-auto">
          <TitleBox
            title={"activity overview"}
            name={"coding statistics"}
            intro={
              "Real-time insights into my development activity and contributions"
            }
          ></TitleBox>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {/* readme stats */}
            <div className="border border-[#171d38] rounded-lg bg-[#030e361e]">
              <img
                src="https://github-readme-stats.vercel.app/api/wakatime?anto-das=<WAKATIME_SECRET_KEYS>&range=last_7_days
"
                alt="Most Used Languages"
              />
            </div>
            {/* streak stats */}
            <div className="border border-[#382a17] rounded-lg bg-[#15161a]">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=anto-das&theme=dark&hide_border=true&ring=fe7d37&fire=fe7d37&background=transparent"
                alt="GitHub chart"
                className="w-full border-none text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
