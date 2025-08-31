import { FaBuysellads } from 'react-icons/fa';
import sideImg from '../assets/what-does-a-coder-do-2022-career-guide-1.webp';
import SocialIcons from './SocialIcons';
import { IoCall } from 'react-icons/io5';
import {  HiOutlineMail } from 'react-icons/hi';
import { PiAddressBookLight } from 'react-icons/pi';
import Logo from '../Shared/Logo';
import { RxCross1 } from 'react-icons/rx';

const LargeSidebar = ({closeDrawer}) => {
    return (
        <div className="menu bg-[#141414] text-base-content min-h-full w-96 py-7 px-8">
      <div className='py-5 space-y-8'>
        <div className='flex justify-between items-center'>
        <Logo></Logo>
        <button onClick={()=>closeDrawer()} className="drawer-button btn btn-circle border-none shadow-none transition duration-500 hover:bg-[#FF014F] bg-[#141414] text-white text-xl"><RxCross1 /></button>
        </div>
        <div>
            <img src={sideImg} alt="" />
        </div>
        <h1 className='text-xl font-bold text-white'>Showcasing My Skills and Projects with Passion, Creativity, and Drive for Professional Growth</h1>
        <p className='text-gray-50 text-lg'>I am a committed developer who displays my abilities, endeavors, and originality.  Dedicated to developing, learning, and producing top-notch solutions that support career success and significant impact</p>
        {/* contact div */}
        <div className='flex items-center gap-6'>
            <IoCall className='text-5xl  border p-2 rounded text-gray-300' />
            <div>
                <p className='text-[#ff014f] text-md uppercase font-bold'>call   now</p>
                <p className='text-white text-xl'>+8801948039854</p>
            </div>
        </div>
        <div className='flex items-center gap-6'>
            <HiOutlineMail className='text-5xl  border p-2 rounded text-gray-300' />
            <div>
                <p className='text-[#ff014f] text-md uppercase font-bold'>mail me</p>
                <p className='text-white text-xl'>ahirdas4455@gmail.com</p>
            </div>
        </div>
        <div className='flex items-center gap-6'>
            <PiAddressBookLight className='text-5xl  border p-2 rounded text-gray-300' />
            <div>
                <p className='text-[#ff014f] text-md uppercase font-bold'>my address</p>
                <p className='text-white text-xl'>Narayanganj,Bangladesh</p>
            </div>
        </div>
        {/* social icons */}
        <div>
            <p className='uppercase text-gray-100'>Find with me</p><br />
            <SocialIcons></SocialIcons>
        </div>
      </div>
    </div>
    );
};

export default LargeSidebar;