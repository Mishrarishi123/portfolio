import React from "react";
import LiquidEther from "./ui/background/LiquidEther";

const Hero = () => {
  return (
    <section id="home" className="relative  h-[80vh] overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0   -z-10">
        <LiquidEther
       
          className="absolute inset-0 -z-10"
        />
      </div>

      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0  h-screen bg-[#0F1118]/60 z-0" /> */}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-4 text-center">
        <h4 className="text-blue-400 text-lg font-nova">Hi, I'm</h4>
        <h1 className="text-6xl font-inter text-white font-bold">
          Frontend Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
