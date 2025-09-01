import { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import ProjectsCard from "../components/ProjectsCard";

const ProjectsPage = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('./projects.json')
        .then(res =>res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div>
            <PageBanner pageName={'projects'}></PageBanner>
            <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto rounded">
                {
                    projects.map((project,idx) =><ProjectsCard key={idx} project={project}></ProjectsCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;