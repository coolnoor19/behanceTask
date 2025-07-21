import React from "react";
import MeetTarsIcons from "../components/MeetTarsIcons";
import Button from "../components/Button";

const MeetTars = () => {
  return (
    <section className="text-white  mx-auto flex flex-col items-center w-full max-w-6xl mt-30">
      <h1 className="text-center text-5xl md:text-7xl font-normal leading-[74px] mb-6 font-inter tracking-[-0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#114F4E] via-[#80B0B0] to-[#0D4C4A]">
        Meet TARS Your Intelligent AI Executive <br /> Assistant for the Future
      </h1>

      <p className="text-center text-gray-400 text-lg max-w-3xl mb-8">
        Meet TARS, your AI Executive Assistant—an intelligent, always-on partner
        designed to streamline your workday and supercharge your productivity.
        TARS handles scheduling
      </p>

      <Button />
      <MeetTarsIcons />
    </section>
  );
};

export default MeetTars;
