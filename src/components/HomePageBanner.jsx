import bgImg from '../assets/mkm5.jpg';
import profile from '../assets/blur img.jpg';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import { Link } from 'react-router-dom';
import { IoCall } from 'react-icons/io5';
import { FaRegShareSquare } from 'react-icons/fa';
const HomePageBanner = () => {
    return (
     <div style={{backgroundImage:`url(${bgImg})`}} className='w-full h-210 md:h-100 lg:h-150 bg-cover bg-center bg-no-repeat relative'>
           <div className='space-y-5 flex flex-col justify-between items-center absolute inset-0 bg-black/50 '>
           <div className="hero w-11/12 mx-atuo">
  <div className="hero-content justify-center items-center py-10 flex-col md:flex-row-reverse lg:flex-row-reverse">
    {/* image div */}
   <div className='py-10 w-full relative'>
     <img
      src={profile}
      className="w-full relative bg-transparent rounded-full z-0.5 shadow-2xl mx-auto"
    />
    <h1 style={{
    color: "transparent",
    WebkitTextStroke: "2px #ff014f",
  }} className=' hidden lg:block text-3xl md:text-5xl lg:text-5xl font-bold uppercase text-center absolute bottom-40 left-20 z-1 animate__animated animate__infinite	infinite animate__slow	6s animate__bounce'>web developer</h1>
   </div>
   {/* introduce div */}
    <div className='space-y-5'>
    <h4 className='text-2xl font-bold text-white uppercase tracking-[5px]'>Hello</h4>
      <h1 className="text-5xl font-bold text-white">i'm Anto Das Ahir a
      </h1>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Junior Fullstack Developer.',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer.',
        2000,
        'Web Designer.',
        2000,
      ]}
      wrapper="span"
      speed={20}
      className='font-medium text-[#ff014f] capitalize text-xl md:text-3xl lg:text-5xl'
      repeat={Infinity}
    />
      <p className="py-6 text-lg text-[#969696]">
        Provident cupiditate voluptatem et in. Quaerat fugiat  ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='w-1/2 flex flex-col lg:flex-row justify-between items-start gap-3'>
      <Link><button className="border border-[#ff014f] px-2 py-1  hover-border-[#ff014f] transition-all duration-900 hover:bg-transparent text-lg hover:text-[#ff014f] btn shadow-none rounded-none text-white bg-[#ff014f]"><FaRegShareSquare /> Resume</button></Link>
     <Link>
     <button className="px-2 py-1 border border-[#ff014f] transition-all duration-900 bg-transparent text-lg text-[#ff014f] btn shadow-none rounded-none hover:text-white hover:bg-[#ff014f]"> <IoCall/> Contact</button>
     </Link>
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default HomePageBanner;