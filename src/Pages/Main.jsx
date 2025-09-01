import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div className="relative bg-black">
            {/* navbar */}
          <div className="sticky top-0 z-10">
              <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* Footer */}
        </div>
    );
};

export default Main;