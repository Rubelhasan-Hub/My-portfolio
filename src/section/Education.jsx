import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#0b131a] text-white relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00df9a]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00df9a] text-sm font-semibold uppercase tracking-widest bg-[#00df9a]/10 px-4 py-1.5 rounded-full border border-[#00df9a]/20">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight">
            Educational <span className="text-[#00df9a]">Qualification</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm sm:text-base">
            My academic journey, institutions, and core involvements shaping my career.
          </p>
        </div>

        {/* Education Main Card with Hover & Motion Effect */}
        <div className="max-w-4xl mx-auto bg-[#111a21]/80 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-[#00df9a]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,223,154,0.15)]">
          
          {/* Top subtle light effect on hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00df9a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Left Side: University Logo / Image Box */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-[#0b131a] border border-gray-800 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
              {/* এখানে আপনার বিশ্ববিদ্যালয়ের লোগো বা ছবি বসাতে পারেন */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00df9a]/10 to-transparent opacity-50"></div>
              <img 
                src="https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=1920/QwRY54Li1HMwD7oNfp86JqCscilX0zeNRjvAsdwUoB" 
                alt="Begum Rokeya University Logo" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain relative z-10 drop-shadow-md"
                onError={(e)=>{
                  // ইমেজ লোড না হলে ফলব্যাক হিসেবে আইকন দেখাবে
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-[#00df9a] text-4xl -z-0">
                <FaGraduationCap />
              </div>
            </div>

            {/* Right Side: Details Content */}
            <div className="flex-1 text-center md:text-left">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00df9a] transition-colors duration-300">
                    Bachelor of Business Administration (BBA)
                  </h3>
                  <h4 className="text-lg font-semibold text-[#00df9a] mt-1">
                    Management Information Systems (MIS)
                  </h4>
                </div>

                {/* Duration Badge */}
                <span className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/20 px-4 py-2 rounded-full w-fit mx-auto md:mx-0 shrink-0">
                  <FaCalendarAlt className="text-xs" /> Aug 2025 — Aug 2029
                </span>
              </div>

              {/* Institution & Location */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-300 font-medium mt-3 text-sm sm:text-base">
                <span className="text-white font-semibold">Begum Rokeya University, Rangpur</span>
                <span className="hidden md:inline text-gray-600">•</span>
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-[#00df9a]" /> Rangpur, Bangladesh
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Currently pursuing my bachelor&apos;s degree. Expected graduation: 2029. Focusing on business analysis, information systems, and bridging technology with management.
              </p>

              {/* Activities & Societies */}
              <div className="mt-6 border-t border-gray-800/80 pt-5 text-left">
                <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00df9a]"></span> Activities and Societies:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-400 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00df9a] mt-1">▸</span> Building personal web development projects.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00df9a] mt-1">▸</span> Exploring modern web technologies & problem-solving.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00df9a] mt-1">▸</span> Member of IT Club (Programming & Tech).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00df9a] mt-1">▸</span> Active participant of Debate Club (Critical thinking).
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-[#00df9a] mt-1">▸</span> Member of Social Work Club (Community service).
                  </li>
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                <span className="text-xs bg-[#0b131a] text-gray-300 border border-gray-800 px-3 py-1.5 rounded-lg group-hover:border-[#00df9a]/30 transition-colors">Programming</span>
                <span className="text-xs bg-[#0b131a] text-gray-300 border border-gray-800 px-3 py-1.5 rounded-lg group-hover:border-[#00df9a]/30 transition-colors">Management Information Systems (MIS)</span>
                <span className="text-xs bg-[#0b131a] text-gray-300 border border-gray-800 px-3 py-1.5 rounded-lg group-hover:border-[#00df9a]/30 transition-colors">Web Development</span>
                <span className="text-xs bg-[#0b131a] text-gray-300 border border-gray-800 px-3 py-1.5 rounded-lg group-hover:border-[#00df9a]/30 transition-colors">Problem Solving</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};