import { useEffect, useState } from "react";
// 🛠️ FIX: Primitive location icon mapping corrected to HiLocationMarker to ensure zero compilation crash
import { HiHashtag, HiOutlineMail, HiOutlinePhone, HiLocationMarker } from "react-icons/hi"; 
import { HiPaperAirplane } from "react-icons/hi2";
import TitleBox from "../../ui/TitleBox";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate API Pipeline Endpoint Submission
    setTimeout(() => {
      alert(`System Node Message Received! Thank you ${formState.name}.`);
      setFormState({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="w-full bg-[#0a0e18] text-slate-400 py-24 border-t border-slate-900/80 relative overflow-hidden"
    >
      {/* TECH COMPILER BACKDROP DECORATOR FIELDS */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-72 h-72 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        
        {/* CORE SECTION TITLE HOOK */}
        <div data-aos="fade-up">
          <TitleBox 
            title="Connect Interface"
            name="Get In Touch"
            intro="Let's build scalable digital assets together. Ping my system terminal below."
          />
        </div>

        {/* DOUBLE EDGE FUNCTIONAL GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-12">
          
          {/* LEFT AREA: HARD CHASSIS INFO CHIPS FOR RECRUITERS */}
          <div 
            className="col-span-1 lg:col-span-5 flex flex-col justify-between gap-6"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white tracking-tight uppercase">
                Direct Nodes
              </h3>
              <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm">
                Have an enterprise project or open-source engineering loop to execute? Feel free to reach out directly via secure network endpoints.
              </p>
            </div>

            {/* INTERACTIVE DATA NODE HOVER CLIPS */}
            <div className="space-y-4 my-2">
              
              {/* NODE 1: EMAIL TERMINAL */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-sm shadow-md group hover:border-[#326fd14d] hover:bg-[#0e182d]/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-slate-900 text-[#326ed1] border border-slate-800 group-hover:bg-[#326ed1] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">// secure_mail</span>
                  <a href="mailto:antodasahir@gmail.com" className="text-sm sm:text-base font-bold text-white hover:text-[#326ed1] transition-colors truncate">
                    antodasahir@gmail.com
                  </a>
                </div>
              </div>

              {/* NODE 2: CELL INBOUND ENDPOINT */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-sm shadow-md group hover:border-[#326fd14d] hover:bg-[#0e182d]/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-slate-900 text-emerald-500 border border-slate-800 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">// data_voice</span>
                  <a href="tel:+8801830509696" className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    +880 1830509696
                  </a>
                </div>
              </div>

              {/* NODE 3: LOCAL GRID MAP LOCATION TRACK */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-sm shadow-md group hover:border-[#326fd14d] hover:bg-[#0e182d]/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-slate-900 text-purple-500 border border-slate-800 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <HiLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">// static_location</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>

            </div>

            <div className="text-[10px] font-mono tracking-widest text-slate-600 uppercase border-t border-slate-900 pt-4 hidden lg:block">
              SYSTEM SECURITY ENCRYPTED LAYER PROTOCOLS ACTIVE
            </div>
          </div>

          {/* RIGHT AREA: CLEAN CONVERSIONS TRANSMISSION MESSAGES INPUT FORM */}
          <div 
            className="col-span-1 lg:col-span-7"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <form 
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-slate-800/80 bg-slate-950/30 backdrop-blur-sm shadow-2xl flex flex-col gap-5 h-full justify-between"
            >
              <div className="space-y-5">
                {/* DUAL LINE INPUT ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1 block">Full Identity</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#326fd18c] focus:bg-slate-900 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1 block">Return Mail Endpoint</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com" 
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#326fd18c] focus:bg-slate-900 transition-all"
                    />
                  </div>
                </div>

                {/* TEXT AREA PACK CONTENT BODY INPUT BLOCK */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pl-1 block">Message Payload context</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Describe project details or system rules context..." 
                    className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-[#326fd18c] focus:bg-slate-900 transition-all resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* ACTION SUBMIT DATA TRANSMISSION CTA TRIGGER BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="btn btn-block h-12 min-h-0 bg-[#326ed1] hover:bg-[#2355a8] text-white border-none rounded-xl font-bold text-xs uppercase tracking-widest shadow-md shadow-[#326fd11a] flex items-center justify-center gap-2 transform active:scale-95 transition-all mt-4 disabled:opacity-50"
              >
                <span>{isSending ? "Transmitting Packet..." : "Transmit Message"}</span>
                <HiPaperAirplane className={`text-sm ${isSending ? "animate-pulse" : ""}`} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMe;
