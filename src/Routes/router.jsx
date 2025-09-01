import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import ContactPage from "../Pages/ContactPage";
import ProjectsPage from "../Pages/ProjectsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<div>error Loading</div>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<div>about page</div>
        },
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