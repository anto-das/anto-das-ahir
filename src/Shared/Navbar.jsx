
import { HiMenu } from "react-icons/hi";
import { Link, NavLink, } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { FaBuysellads } from "react-icons/fa";
import LargeSidebar from "../components/LargeSidebar";
import SmallSidebar from "../components/SmallSidebar";
import Logo from "./Logo";
import './navbar.css'
import { useEffect, useState } from "react";


const Navbar = () => {
  const closeDrawer=()=>{
    document.getElementById("my-drawer").checked = false;
    document.getElementById("my-drawer-4").checked = false;
  }
    const links =<>
    <ul className="lg:flex items-center hidden gap-5">
      <li><NavLink to={'/'} className={'btn btn-lg bg-[#0a0e18] border-none shadow-none text-gray-400 font-bold text-lg '}>Home</NavLink></li>
      <li><NavLink to={'/project'} className={'btn btn-lg bg-[#0a0e18] border-none shadow-none text-gray-400 font-bold text-lg '}>Projects</NavLink></li>
      <li><NavLink to={'/contact'} className={'btn btn-lg bg-[#0a0e18] border-none shadow-none text-gray-400 font-bold text-lg '}>Contact</NavLink></li>
    </ul>
    </>
    return (
      <div className={`bg-[#0a0e18] shadow-sm py-3 border-b`}>
          <div className="flex justify-between items-center w-11/12 lg:w-11/13 mx-auto">
  
    {/* logo */}
  <div className="w-full flex items-center justify-between">
    <Link to={'/'}><Logo></Logo></Link>
  
  <div>
    {links}
  </div>
  </div>
  <div className="flex justify-between items-center gap-5">

{/* sidebar icon for small device */}
<div className="drawer lg:hidden">
  <input id="my-drawer" type={'checkbox'} className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
      <label onClick={()=>closeDrawer()} htmlFor="my-drawer" className="drawer-button btn btn-lg btn-circle border-none text-[#ff014f] shadow-none transition duration-500 bg-[#ff014d52] hover:bg-black hover:text-[#ff014f] text-2xl"><HiMenu/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    {/* side bar content */}
    <SmallSidebar closeDrawer={closeDrawer}></SmallSidebar>
  </div>
</div>
  </div>
</div>
      </div>
    );
};

export default Navbar;