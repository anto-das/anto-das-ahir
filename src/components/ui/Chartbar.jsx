import React from 'react';

const ChartBar = () => {
    return (
       <div className='py-5 my-8'>
         <div className='grid lg:grid-cols-2 gap-x-8 space-y-8 pt-5'>
            <p className='text-2xl font-bold text-white uppercase'>development skill <span className='text-[#141414]'>________</span></p>
            <p></p>
            <div>
                <p className='uppercase font-bold text-white text-lg'>html</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={100} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>css | tailwindCSS</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={70} max="80"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>Javascript</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={80} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>react</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={75} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>node</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={20} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>express</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={30} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>mongoDb</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={30} max="100"></progress>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-8 space-y-8 pt-10">
            <p className='text-2xl font-bold text-white uppercase'>Technologies and tools <span className='text-[#141414]'>________</span></p>
            <p></p>
             <div>
                <p className='uppercase font-bold text-white text-lg'>figma/pixso to code</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={100} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>firebase</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={85} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>git and github</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={100} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>chatgpt</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={100} max="100"></progress>
            </div>
            <div>
                <p className='uppercase font-bold text-white text-lg'>vs code</p>
                <progress className="progress text-[#ff014f] bg-[#141414] w-full" value={100} max="100"></progress>
            </div>
        </div>
       </div>
    );
};

export default ChartBar;