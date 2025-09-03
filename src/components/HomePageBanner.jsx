import bgImg from '../assets/mkm5.jpg';
import profile from '../assets/blur img.jpg';
const HomePageBanner = () => {
    return (
     <div style={{backgroundImage:`url(${bgImg})`}} className='w-full min-h-150 bg-cover bg-center bg-no-repeat relative'>
           <div className='space-y-5 flex flex-col justify-between items-center absolute inset-0 bg-black/50 '>
           <div className="hero w-11/12 mx-atuo">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* image div */}
   <div className='py-10 w-full relative'>
     <img
      src={profile}
      className="w-full relative bg-transparent rounded-full z-0.5 shadow-2xl mx-auto"
    />
    <h1 style={{
    color: "transparent",
    WebkitTextStroke: "2px #ff014f",
  }} className='text-5xl font-bold uppercase text-center absolute bottom-40 left-20 z-1'>web developer</h1>
   </div>
   {/* introduce div */}
    <div className='space-y-5'>
    <h4 className='text-2xl font-bold text-white uppercase tracking-[5px]'>Hello</h4>
      <h1 className="text-5xl font-bold text-white">i'm Anto Das Ahir a
      </h1>
      <span className=' font-bold text-[#ff014f] capitalize text-5xl'>web developer</span>
      <p className="py-6 text-lg text-[#969696]">
        Provident cupiditate voluptatem et in. Quaerat fugiat  ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className='w-1/2 flex justify-between items-center'>
      <button className="border border-[#ff014f] px-2 py-1   hover-border-[#ff014f] transition-all duration-900 btn bg-transparent text-lg shadow-none rounded-none text-[#ff014f] hover:text-white hover:bg-[#ff014f]">Get Started</button>
      <button className="border border-[#ff014f] px-2 py-1  hover-border-[#ff014f] transition-all duration-900 hover:bg-transparent text-lg hover:text-[#ff014f] btn shadow-none rounded-none text-white bg-[#ff014f]">Get Started</button>
      </div>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default HomePageBanner;