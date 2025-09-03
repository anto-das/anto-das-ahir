import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";


const Main = () => {
    const [isSticky,setSticky] =useState(false);
      console.log(isSticky)
      const handleScroll = () =>{
        if(window.scrollY > 160){
          setSticky(true)
        }
        else{
          setSticky(false)
        }
      }
      useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{
          window.removeEventListener('scroll',handleScroll)
        }
      },[])
    return (
        <div className="relative bg-black">
            {/* navbar */}
          <div className={`${isSticky ? 'sticky' :'relative'} top-0 z-20`}>
              <Navbar></Navbar>
          </div>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* Footer */}
        </div>
    );
};

export default Main;