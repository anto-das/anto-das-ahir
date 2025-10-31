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


const HomePage = () => {
  const [projects] = useData();
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <div className="py-8 w-11/12 mx-auto">
        <DevSkill></DevSkill>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-22">
          <Card
            icon={<MdOutlineDesignServices />}
            title={"Total project"}
            info={
              "I have completed 30+ projects and problem-solving in js, showcasing expertise and growth.."
            }
          ></Card>
          <Card
            icon={<FaWebAwesome />}
            title={"Web Fundamentals"}
            info={
              "Developed responsive projects using HTML, CSS, and JavaScript"
            }
          ></Card>
          <Card
            icon={<SiFrontendmentor />}
            title={"frontend "}
            info={
              "frontend projects I've created have used the React Firebase Auth."
            }
          ></Card>
          <Card
            icon={<TbTopologyFull />}
            title={"fullstack"}
            info={
              "I have completed full-stack apps with React, Node.js, MongoDB, JWT, Framer-motion."
            }
          ></Card>
        </div>
     
        <div id="projects" className="my-14">
          <h1 className="text-3xl font-bold text-white py-4">
            Projects<span className="text-gray-700">__________</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-11/14 mx-auto rounded">
            {projects.map((project, idx) => (
              <ProjectsCard key={idx} project={project}></ProjectsCard>
            ))}
          </div>
        </div>
        <Education></Education>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default HomePage;
