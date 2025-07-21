import React from "react";

export default function Footer() {
  return (
    // <footer className="bg-gradient-to-t from-[#072220] to-black text-white px-4 py-10">
    //   {/* Top Navigation */}
    //   <div className="flex text-lg font-medium mb-6 max-w-6xl mx-auto">
    //     <div className=' '>
    //     <a href="#">AI Agents</a>
    //     <a href="#">Agentic Network</a>
    //     <a href="#">Template</a>
    //     <a href="#">Changelog</a>
    //     <a href="#">Blog</a>
    //     <a href="#">Pricing</a>
    //     </div>
    //   </div>

    //
    // </footer>

    <footer className="flex flex-col items-center justify-center h-[400px] w-full  bg-grey text-white py-6 ">
      <div className="flex justify-between w-full max-w-6xl mx-auto">
        <a href="#" className="flex-1 text-center">
          AI Agents
        </a>
        <a href="#" className="flex-1 text-center">
          Agentic Network
        </a>
        <a href="#" className="flex-1 text-center">
          Template
        </a>
        <a href="#" className="flex-1 text-center">
          Changelog
        </a>
        <a href="#" className="flex-1 text-center">
          Blog
        </a>
        <a href="#" className="flex-1 text-center">
          Pricing
        </a>
      </div>
      {/* Mid Legal Links */}
      <div className="flex flex-wrap justify-between text-sm text-gray-400 mb-4 w-[40%] mt-10 ">
        <a href="#">Privacy policy</a>
        <a href="#">Terms of use</a>
        <a href="#">Cookies</a>
        <a href="#">Disclaimer</a>
      </div>
      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-10">
        All rights reserved 2025 copyright
      </div>
    </footer>
  );
}
