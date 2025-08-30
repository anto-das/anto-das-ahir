import { HiOutlineMail } from "react-icons/hi";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import SocialIcons from "../components/SocialIcons";

const Footer = () => {
     const links =<>
    <ul className="grid gap-5">
      <li className='border-b '><NavLink className={'text-white  uppercase  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>About</NavLink></li>
      <li className='border-b '><NavLink className={'text-white uppercase  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Service</NavLink></li>
      <li className='border-b '><NavLink className={'text-white uppercase  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Blog</NavLink></li>
      <li className='border-b '><NavLink className={'text-white uppercase  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Pricing</NavLink></li>
      <li ><NavLink className={'text-white uppercase  text-[16px] hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Contact</NavLink></li>
    </ul>
    </>
    return (
        <footer className="px-14 py-15  bg-[#141414] ">
 <div className="footer sm:footer-horizontal text-base-content py-12 border-b-2 border-gray-400">
     <aside className="space-y-6">
    <Logo></Logo>
    <p className="text-4xl text-white capitalize">
     <span className="font-bold"> Get Ready</span> to create great
      <br />
    </p>
        <div className="relative w-full">
            <input type="email" placeholder="Email Adress" className="input w-full placeholder:text-white placeholder:text-lg text-white bg-[#141414] border-b-2 focus:outline-none outline-none" />
            <button className="link"><HiOutlineMail className="text-white text-xl absolute bottom-3 right-4"/></button>
        </div>
  </aside>
  <nav className="space-y-5"> 
    <h1 className="text-lg text-white font-bold">Quick Link</h1>
   {links}
  </nav>
  <nav className="space-y-5">
    <h1 className="text-lg text-white font-bold">Contact</h1>
    <div className="flex gap-5 items-center">
        <IoMail className='text-4xl  border p-2 rounded-full text-gray-300' />
      <p className='text-white  text-xl hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'>ahirdas4455@gmail.com</p>
    </div>
    <div className="flex gap-5 items-center">
        <IoLocation className='text-4xl  border p-2 rounded-full text-gray-300' />
      <p className='text-white  uppercase text-xl hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'>Narayanganj,Bangladesh</p>
    </div>
    <div className="flex gap-5 items-center">
        <IoCall className='text-4xl  border p-2 rounded-full text-gray-300' />
      <p className='text-white  uppercase text-xl hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'>+8801948039854</p>
    </div>
    <SocialIcons></SocialIcons>
  </nav>
 </div>
 <div className="flex justify-between items-center">
    <p className="text-white mt-2">&copy; Anto Das Ahir  {new Date().getFullYear()} | <span className="text-md font-medium text-gray-600"> All Rights Reserved</span> </p>
    <div className="flex gap-3 mt-2 items-center">
       <p ><NavLink className={'text-white uppercase font-medium text-sm hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Contact us</NavLink></p>
       <p ><NavLink className={'text-white uppercase font-medium text-sm hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>terms & condition</NavLink></p>
       <p ><NavLink className={'text-white uppercase font-medium text-sm hover:border-b-2 hover:border-[#ff014f] transition border-w-full hover:text-[#ff014f] duration-1000'}>Privacy Policy</NavLink></p>
    </div>
 </div>
</footer>
    );
};

export default Footer;