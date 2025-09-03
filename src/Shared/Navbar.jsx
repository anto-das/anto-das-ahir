
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
  const [isSticky,setSticky] =useState(false);
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
  const closeDrawer=()=>{
    document.getElementById("my-drawer").checked = false;
    document.getElementById("my-drawer-4").checked = false;
  }
    const links =<>
    <ul className="lg:flex items-center hidden gap-5">
      <li><NavLink to={'/'} className={'text-white font-bold text-[16px] hover:bg-[#ff014d3f] hover:text-[#FF014F] p-2 rounded transition-all duration-900'}>Home</NavLink></li>
      <li><NavLink to={'/about'} className={'text-white font-bold text-[16px] hover:bg-[#ff014d3f] hover:text-[#FF014F] p-2 rounded transition-all duration-900'}>About</NavLink></li>
      <li><NavLink to={'/project'} className={'text-white font-bold text-[16px] hover:bg-[#ff014d3f] hover:text-[#FF014F] p-2 rounded transition-all duration-900'}>Projects</NavLink></li>
      <li><NavLink to={'/contact'} className={'text-white font-bold text-[16px] hover:bg-[#ff014d3f] hover:text-[#FF014F] p-2 rounded transition-all duration-900'}>Contact</NavLink></li>
    </ul>
    </>
    return (
      <div className={`${isSticky ? 'bg-[#141414]' :'bg-[#14141456]'} shadow-sm py-3`}>
          <div className="flex justify-between items-center w-11/12 mx-auto">
  
    {/* logo */}
  <Link to={'/'}><Logo></Logo></Link>
  
  <div className="navbar-center flex">
    {links}
  </div>
  <div className="flex justify-between items-center gap-5">
    <div className="hidden lg:block md:block">
    <SocialIcons></SocialIcons>
    </div>
    {/* side bar for large device */}
  <div className="drawer drawer-end hidden lg:block">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* menu icon */}
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-circle border-2 border-[#FF014F] shadow-none transition duration-500 bg-[#FF014F] hover:bg-black hover:text-[#ff014f] text-white text-xl"><HiMenu/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    {/* sidebar content*/}
    <LargeSidebar closeDrawer={closeDrawer}></LargeSidebar>
  </div>
</div>


{/* sidebar icon for small device */}
<div className="drawer lg:hidden">
  <input id="my-drawer" type={'checkbox'} className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
      <label onClick={()=>closeDrawer()} htmlFor="my-drawer" className="drawer-button btn btn-circle border-2 border-[#FF014F] shadow-none transition duration-500 bg-[#FF014F] hover:bg-black hover:text-[#ff014f] text-white text-xl"><HiMenu/></label>
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