import { MdOutlineDesignServices } from "react-icons/md";
import PageBanner from "../components/PageBanner";
import Card from "../Shared/Card";
import { SiFrontendmentor } from "react-icons/si";
import { FaWebAwesome } from "react-icons/fa6";
import { TbTopologyFull } from "react-icons/tb";
import Education from "../Shared/Education";
import ContactForm from "../Shared/ContactForm";
import SkillChart from "../components/SkillChart";

const AboutPage = () => {
    // 14 ta ui/ux 6 full-stack 10 ta frontend
    return (
        <div className="">
           <PageBanner pageName={'about'} ></PageBanner>
           <div className="py-8 w-11/12 mx-auto ">
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           <Card 
           icon={<MdOutlineDesignServices />}
           title={'Total project'}
           info={'I have completed 30+ projects and problem-solving in js, showcasing expertise and growth..'}
           ></Card>           
           <Card 
           icon={<FaWebAwesome />}
           title={'Web Fundamentals'}
           info={'Developed responsive projects using HTML, CSS, and JavaScript'}
           ></Card>           
           <Card 
           icon={<SiFrontendmentor />}
           title={'frontend '}
           info={"frontend projects I've created have used the React Firebase Auth."}
           ></Card>           
           <Card 
           icon={<TbTopologyFull />}
           title={'fullstack'}
           info={'I have completed full-stack apps with React, Node.js, MongoDB, JWT, Framer-motion.'}
           ></Card>           
           </div>
           <SkillChart></SkillChart>
            <Education></Education>
           </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default AboutPage;