import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";

import ProjectsPage from "../components/modules/project/ProjectsPage";
import AboutPage from "../components/modules/about/AboutPage";
import HomePage from "../components/modules/home/HomePage";
import AboutSection from "../components/modules/about/AboutPage";
import ContactMe from "../components/modules/contact/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>error Loading</div>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "/project",
        element: <ProjectsPage></ProjectsPage>,
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);
export default router;
