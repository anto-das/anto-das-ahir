
import { FaBuysellads } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import Logo from '../Shared/Logo';
import { RxCross1 } from 'react-icons/rx';

const SmallSidebar = ({closeDrawer}) => {
    const links =<>
    <ul  onClick={()=>closeDrawer()} className="grid gap-5">
      <li className='border-b  border-[#969696] '><Link to={'/'} className={'text-[#969696] uppercase font-bold text-[16px]'}>Home</Link></li>
      <li className='border-b  border-[#969696] '><Link to={'/about'} className={'text-[#969696] uppercase font-bold text-[16px]'}>About</Link></li>
      <li className='border-b  border-[#969696] '><Link to={'/service'} className={'text-[#969696] uppercase font-bold text-[16px]'}>Service</Link></li>
      <li className='border-b  border-[#969696] '><Link to={'/blog'} className={'text-[#969696] uppercase font-bold text-[16px]'}>Blog</Link></li>
      <li className='border-b  border-[#969696] '><Link to={'/project'} className={'text-[#969696] uppercase font-bold text-[16px]'}>Projects</Link></li>
      <li ><Link to={'/contact'} className={'text-[#969696] uppercase font-bold text-[16px]'}>Contact</Link></li>
    </ul>
    </>
    return (
        <div className="menu bg-[#141414] text-base-content min-h-full max-w-96 py-7 px-4 md:px-6 lg:px-8 space-y-5">
            <div className='flex justify-between items-center'>
        <Logo></Logo>
        <button onClick={()=>closeDrawer()} className="drawer-button btn btn-circle border-none shadow-none transition duration-500 hover:bg-[#FF014F] bg-black text-white text-xl"><RxCross1 /></button>
        </div>
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