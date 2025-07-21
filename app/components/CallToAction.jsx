import React from "react";
import Button from "./Button";

const CallToAction = () => {
  return (
    <div className="relative flex justify-center items-center min-h-[550px] py-12">
      {/* Card */}
      <div className="relative w-[80%] h-[300px] max-w-6xl mx-auto  border border-[#01BEBB] rounded-2xl bg-gradient-to-b from-[#0b3c3b] to-black/90 shadow-xl overflow-hidden flex flex-col items-center py-12 px-4 ">
        {/* Decorative grid/stars */}
        {/* <div className="absolute inset-0 pointer-events-none z-0">
          {/* Four glowing dots in a grid pattern */}
          {/* <span className="absolute top-8 left-1/4 w-1 h-1 bg-white/60 rounded-full blur-[2px]" />
          <span className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/60 rounded-full blur-[2px]" />
          <span className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/60 rounded-full blur-[2px]" />
          <span className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/60 rounded-full blur-[2px]" />
          {/* Optional: faint lines */}
          {/* <span className="absolute top-8 left-1/4 w-0.5 h-32 bg-white/10" />
          <span className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-white/10" /> */} 
        {/* </div> */} 
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2 text-center mt-6">Try Questflow Today.</h2>
          <p className="text-gray-500 text-md mb-6 text-center">Scaling Multi-agent Economy.</p>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 

