import { FaArrowRightLong } from "react-icons/fa6";
const ContactForm = () => {
    return (
       
  <div className="flex gap-5 items-center flex-col bg-[#141414] lg:flex-row p-8 md:p-12 lg:p-12 w-11/12 mx-auto  border border-[#141414] hover:border hover:border-[#ff014f] transition-all duration-1000 my-12 rounded-xl">
    <div className="text-center max-w-96 space-y-3 lg:text-left">
      <h4 className="text-lg font-medium text-[#ff014f] uppercase">get in touch</h4>
      <h1 className="text-3xl text-white font-bold">Crafting Modern Web Solutions</h1>
      <p className="text-lg text-[#969696]">
        Building contemporary full-stack solutions, this junior web developer is proficient in HTML, CSS, Tailwind, JavaScript, React, Node.js, Express, and MongoDB.
      </p>
    </div>
    <div className="w-full py-8">
        <form className="lg:px-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full py-4">
          <input type="text" className="input w-full p-8 focus:text-gray-400 text-lg" placeholder="Your Name" />
          </div>
          <div className="w-full py-4">
          <input type="number" className="input w-full p-8 focus:text-gray-400 text-lg" placeholder="Phone Number" /> 
          </div >
          <div className="w-full py-4">
          <input type="email" className="input w-full p-8 focus:text-gray-400 text-lg" placeholder="Your Email" /> 
          </div>
          <div className="w-full py-4">
          <input type="text" className="input w-full p-8 focus:text-gray-400 text-lg" placeholder="Subject" /> 
          </div>
          <div className="w-full py-3 lg:col-span-2">
                <button className="btn shadow-none border-none bg-[#ff014f] mt-4 w-full p-8 text-white font-bold text-lg rounded-4xl">Appointment Now<FaArrowRightLong className="mt-1" /></button>
          </div>
        </form>
      
    </div>
  </div>
    );
};

export default ContactForm;