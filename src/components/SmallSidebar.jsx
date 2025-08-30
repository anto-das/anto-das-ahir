
import { FaBuysellads } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import Logo from '../Shared/Logo';

const SmallSidebar = () => {
    const links =<>
    <ul className="grid gap-5">
      <li className='border-b  border-[#969696] '><NavLink className={'text-[#969696] uppercase font-bold text-[16px]'}>Home</NavLink></li>
      <li className='border-b  border-[#969696] '><NavLink className={'text-[#969696] uppercase font-bold text-[16px]'}>About</NavLink></li>
      <li className='border-b  border-[#969696] '><NavLink className={'text-[#969696] uppercase font-bold text-[16px]'}>Service</NavLink></li>
      <li className='border-b  border-[#969696] '><NavLink className={'text-[#969696] uppercase font-bold text-[16px]'}>Blog</NavLink></li>
      <li className='border-b  border-[#969696] '><NavLink className={'text-[#969696] uppercase font-bold text-[16px]'}>Projects</NavLink></li>
      <li ><NavLink className={'text-[#969696] uppercase font-bold text-[16px]'}>Contact</NavLink></li>
    </ul>
    </>
    return (
        <div className="menu bg-[#141414] text-base-content min-h-full w-96 py-7 px-8 space-y-5">
            <Logo></Logo>
      <div>
        {links}
      </div>
      <div>
        <p className="uppercase text-md text-[#969696]">find wind me</p> <br /> 
        <SocialIcons></SocialIcons>
      </div>
    </div>
    );
};

export default SmallSidebar;