import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";


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
          path:'/service',
          element:<div>service page </div>
        },
        {
          path:'/blog',
          element:<div>blog page</div>
        },
        {
          path:'/project',
          element:<div>project page</div>
        },
        {
          path:'/contact',
          element:<div>contact page</div>
        }
    ]
  },

])
export default router;