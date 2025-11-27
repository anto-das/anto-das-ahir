import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";


const Main = () => {
    return (
        <div className="relative bg-[#0a0e18]">
            {/* navbar */}
          <div className={`sticky top-0 z-20`}>
              <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* Footer */}
        </div>
    );
};

export default Main;