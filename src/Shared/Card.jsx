import React from 'react';
import { useLocation } from 'react-router-dom';

const Card = ({icon,title,info}) => {
    const location = useLocation();
    return (
        <div className={`w-full  border ${location.pathname ==='/about' | '/' ? 'border-[#ff014d3f]' : 'border-[#141414]'} hover:border hover:border-[#ff014f] transition-all duration-1000 bg-[#141414] rounded-2xl`}>
            <div className='p-8 space-y-5 flex items-center flex-col'>
                <p className='btn btn-lg btn-circle shadow-none border-none font-bold text-2xl bg-[#ff014d3f] text-[#FF014F] p-2 transition-all duration-900'>{icon}</p>
                <h1 className='text-2xl font-bold text-white capitalize'> {title} </h1>
                <p className='text-lg text-[#969696] '> {info} </p>
            </div>
        </div>
    );
};

export default Card;