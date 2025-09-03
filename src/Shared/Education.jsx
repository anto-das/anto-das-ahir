
const Education = () => {
    return (
     <div>
        <h1 className="text-white text-xl font-bold mb-3">Qualification and Courses</h1>
          <div className="card grid grid-cols-1 lg:grid-cols-2 gap-5">
  <div className="card-body bg-[#141414] hover:border-[#ff014f] transition-all duration-1000 border rounded-lg">
    <h2 className="card-title text-[#969696] uppercase">secondary school certificate(4.43)</h2>
    <p className="text-[#969696] text-lg capitalize"> School: Baiddar Bazar N.A.M pilot high school</p>
  </div>
  {/* diploma */}
  <div className="card-body bg-[#141414] hover:border-[#ff014f] transition-all duration-1000 border rounded-lg">
    <h2 className="card-title text-[#969696] uppercase">Diploma in electronics engineering </h2>
    <p className="text-[#969696] capitalize text-lg">Munshiganj Govt. pollytechnic Institute</p>
  </div>
  {/* web development */}
  <div className="card-body bg-[#141414] hover:border-[#ff014f] transition-all duration-1000 border rounded-lg">
    <h2 className="card-title text-[#969696] uppercase"> Complete web development with programming hero </h2>
    <p className="text-[#969696] capitalize text-lg">Programming hero</p>
  </div>
  {/* course outlin */}
  <div className="card-body bg-[#141414] hover:border-[#ff014f] transition-all duration-1000 border rounded-lg">
    <h2 className="card-title text-[#969696] uppercase"> Achieved 94%+ marks in all coursework assignments. </h2>
    <p className="text-[#969696] capitalize text-lg">Academic Excellence</p>
  </div>
</div>
     </div>
    );
};

export default Education;