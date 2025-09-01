import { MdOutlineArrowForwardIos } from 'react-icons/md';
import bgImg from '../assets/mkm5.jpg';
import { Link } from 'react-router-dom';

const PageBanner = ({pageName}) => {
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className='w-full min-h-80 bg-cover bg-center relative'>
           <div className='space-y-5 flex flex-col justify-center items-center absolute inset-0 bg-black/50 '>
           <h1  className='text-5xl font-bold  text-white capitalize'>{pageName}</h1>
           <div className='flex items-center gap-4'>
            <Link to={'/'} className='capitalize flex items-center gap-3 text-lg text-gray-300 font-medium hover:text-[#ff014f] transition-all duration-500'>home  <MdOutlineArrowForwardIos /></Link>
           
            <span className='capitalize text-lg text-gray-300 font-medium hover:text-[#ff014f] transition-all duration-500'> {pageName} </span>
           </div>
           </div>
        </div>
    );
};

export default PageBanner;