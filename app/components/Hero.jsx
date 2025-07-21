import React from "react";
import BrandGrid from "./Brandgrid";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
      <section className="flex items-center justify-center relative overflow-hidden px-4 ">
        <div className="absolute -top-0 -right-10">
          <Image src="/focus.png" alt="focus" height={340} width={380}/>
        </div>

        <div className="absolute top-0 left-0">
          <Image src="/focus2.png" alt="focus1" height={340} width={380}/>
        </div>

        <div className="absolute -top-10 ">
          <Image src="/ellipse.png" alt="focus1" height={880} width={1280}/>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mt-60">
          <h1 className="text-center text-5xl md:text-7xl font-semibold leading-[74px] mb-6 font-inter tracking-[-0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#114F4E] via-[#80B0B0] to-[#0D4C4A]">
            AI Agents and the Evolution
            <br />
            of Digital Economies
          </h1>

          <p className="text-center text-gray-400 text-lg max-w-3xl mb-8">
            The Next-Gen AI Agent Economy represents a transformative shift where
            intelligent, autonomous software agents perform complex tasks, make
            decisions, and collaborate on behalf
          </p>

          <Button />

          {/* Icons */}
          {/* Glowing Icon Row */}
          <div className="mt-10 flex gap-6 justify-center">
            {/* Repeat this span for each icon */}
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 15v-2m0 0v-2m0 2H5m2 0h2m6 0h.01M17 13h.01M12 7a7 7 0 1 1 0 10 7 7 0 0 1 0-10z"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 20l18-8-18-8v7l13 1-13 1v7z"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                      fill="#06b6d4"
                    />
                  </svg>
                ),
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-5a6 6 0 0 1 6-6zM2 9h4v12H2z"
                      fill="#06b6d4"
                    />
                    <circle cx="4" cy="4" r="2" fill="#06b6d4" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <span
                key={index}
                className="w-16 h-16 flex items-center justify-center rounded-full  bg-gradient-to-br from-[#114F4E] via-black to-[#0D4C4A] mt-4"
              >
                {item.icon}
              </span>
            ))}
          </div>

          {/* Stat Block */}
          <div className="flex w-[100%] justify-between items-center h-[100px] mt-30">
            <p className="text-[56px] leading-[27px] tracking-[-6%] font-[400] font-inter text-[#01BEBB]">
              1500000+
            </p>
            <p className="text-[18px] leading-[27px] tracking-[-5%] text-[#01BEBB] font-[500] font-inter">
              Multi-agent Orchestration(MAO) <br /> run automation last month
            </p>
          </div>

          <div>
            <p className="text-center font-light px-4 mt-2 text-grey-400">Trusted by individual and teams for</p>
          </div>
        </div>
      </section>
  );
};

export default Hero;
