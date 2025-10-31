import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import ContactPage from "../Pages/ContactPage";
import ProjectsPage from "../Pages/ProjectsPage";
import AboutPage from "../Pages/AboutPage";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<div>error Loading</div>,
    children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        // {
        //   path:'/about',
        //   element:<AboutPage></AboutPage>
        // },
        {
          path:'/project',
          element:<ProjectsPage></ProjectsPage>
        },
        {
          path:'/contact',
          element:<ContactPage></ContactPage>
        }
    ]
  },

])
export default router;