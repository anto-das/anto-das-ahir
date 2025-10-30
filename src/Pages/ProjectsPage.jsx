
import PageBanner from "../components/PageBanner";
import ProjectsCard from "../components/ProjectsCard";
import useData from "../hooks/useData";

const ProjectsPage = () => {
    const [projects] =useData();
    return (
        <div>
            <PageBanner pageName={'projects'}></PageBanner>
            <div className="py-8 my-8">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-11/14 mx-auto rounded">
                {
                    projects.map((project,idx) =><ProjectsCard key={idx} project={project} tech={' React, React-router Tailwind CSS, DaisyUl, React-hook-form, React-hot-toast, Sweetalert_2, Stripe-js, Firebase.'}></ProjectsCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;