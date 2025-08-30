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
        }
    ]
  },

])
export default router;