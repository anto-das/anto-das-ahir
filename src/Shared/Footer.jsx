import { HiOutlineMail } from "react-icons/hi";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import SocialIcons from "../components/SocialIcons";

const Footer = () => {
     const links =<>
    <ul className="grid gap-5">
      <li className='border-b '><Link to={'/about'} className={'text-white font-medium capitalize text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>About me</Link></li>
      <li className='border-b '><Link to={'/service'} className={'text-white font-medium capitalize  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Service</Link></li>
      <li className='border-b '><Link to={'/blog'} className={'text-white font-medium capitalize  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Blog</Link></li>
      <li className='border-b '><Link to={'/project'} className={'text-white font-medium capitalize  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Pricing</Link></li>
      <li ><Link to={'/contact'} className={'text-white font-medium capitalize  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Contact me</Link></li>
    </ul>
    </>
    return (
        <footer className="px-8 md:px-10 lg:px-14 py-15  bg-[#141414] ">
 <div className="footer sm:footer-horizontal text-base-content py-12 border-b-2 border-gray-400">
     <aside className="space-y-6">
   <Link to={'/'}><Logo></Logo></Link>
    <p className="text-4xl text-white capitalize">
     <span className="font-bold"> Get Ready</span> to create great
      <br />
    </p>
        <div className="relative w-full">
            <input type="email" placeholder="Email Adress" className="input w-full placeholder:text-white placeholder:text-lg text-white bg-[#141414] border-b-2 focus:outline-none outline-none" />
            <button className="link"><HiOutlineMail className="text-white text-xl absolute bottom-3 right-4 z-4"/></button>
        </div>
  </aside>
  <nav className="space-y-5"> 
    <h1 className="text-lg text-white font-bold">Quick Link</h1>
   {links}
  </nav>
  <nav className="space-y-3 lg:space-y-5">
    <h1 className="text-lg text-white font-bold">Contact</h1>
    <div className="flex gap-3 lg:gap-5 items-center">
        <IoMail className='text-4xl  border p-2 rounded-full text-gray-300' />
      <p className='text-white  text-md hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'>ahirdas4455@gmail.com</p>
    </div>
    <div className="flex gap-3 lg:gap-5 items-center">
        <IoLocation className='text-4xl  border p-2 rounded-full text-gray-300' />
      <p className='text-white  uppercase text-md w-full hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'>Narayanganj,Bangladesh</p>
    </div>
    <div className="flex gap-3 lg:gap-5 items-center">
        <IoCall className='text-4xl  border p-2 rounded-full text-gray-300' />
      <p className='text-white  uppercase text-md hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'>+8801948039854</p>
    </div>
    <SocialIcons></SocialIcons>
  </nav>
 </div>
 <div className="flex flex-col lg:flex-row  justify-between items-center">
    <p className="text-white mt-2 text-center">&copy; Anto Das Ahir  {new Date().getFullYear()} | <span className="text-md font-medium text-gray-600"> All Rights Reserved</span> </p>
    <div className="flex flex-col lg:flex-row gap-3 mt-2 items-center">
       <p ><Link className={'text-white uppercase font-medium text-sm hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Contact us</Link></p>
       <p ><Link className={'text-white uppercase font-medium text-sm hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>terms & condition</Link></p>
       <p ><Link className={'text-white uppercase font-medium text-sm hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Privacy Policy</Link></p>
    </div>
 </div>
</footer>
    );
};

export default Footer;