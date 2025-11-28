import { HiMenu } from "react-icons/hi";
import { Link, useLocation, } from "react-router-dom";
import SmallSidebar from "../components/SmallSidebar";
import Logo from "./Logo";


// .active{
//     font-size: 18px;
//     border:none;
//     border-radius: 3px;
//     box-shadow: none;
//     background-color: #0e182d;
//     color: #326ed1;
//     padding: 13px 22px;
//     font-weight: 600;
//     border: 1px solid #326fd186;
// }

const Navbar = () => {
  const location = useLocation();
  const closeDrawer=()=>{
    document.getElementById("my-drawer").checked = false;
    document.getElementById("my-drawer-4").checked = false;
  }
    const links =<>
    <ul className="lg:flex items-center hidden gap-5">
      <a href={'/'}  className={`${location.pathname === '/' ? 'text-[18px] border-none shadow-none bg-[#0e182d] text-[#326ed1] py-[13px] px-[22px] font-semibold border border-[#326fd186]' : 'btn btn-lg bg-[#0a0e18] border-none shadow-none text-gray-400  text-lg hover:bg-[#80808013] transition-transform duration-700 hover:-translate-y-0.5'}`}>Home</a>
      <a href={'/project'} className={`${location.pathname === '/project' ? 'text-[18px] border-none shadow-none bg-[#0e182d] text-[#326ed1] py-[13px] px-[22px] font-semibold border border-[#326fd186]' : 'btn btn-lg bg-[#0a0e18] border-none shadow-none text-gray-400  text-lg hover:bg-[#80808013] transition-transform duration-700 hover:-translate-y-0.5'}`}>Projects</a>
      <a href={'/contact'} className={`${location.pathname === '/contact' ? 'text-[18px] border-none shadow-none bg-[#0e182d] text-[#326ed1] py-[13px] px-[22px] font-semibold border border-[#326fd186]' : 'btn btn-lg bg-[#0a0e18] border-none shadow-none text-gray-400  text-lg hover:bg-[#80808013] transition-transform duration-700 hover:-translate-y-0.5'}`}>Contact Me</a>
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