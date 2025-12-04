import React from 'react'

const TitleBox = ({title,name,intro}) => {
  return (
    <div className='max-w-[650px] mx-auto space-y-5 py-4 my-8'>
      <p className='text-center uppercase tracking-widest font-bold text-blue-600'> {title} </p>
      <h1 className='text-2xl md:text-4xl lg:text-5xl capitalize text-center text-gray-200 font-bold'>{name}</h1>
      <p className='text-gray-400 text-lg font-md first-letter:uppercase text-center'>{intro}</p>
    </div>
  )
}

export default TitleBox
