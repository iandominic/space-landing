import React from "react";
import "./styles/styles.css";

const Hero = () => {
  return (
    <div className="bg-mobile-bg bg-cover bg-no-repeat h-full min-h-[667px] w-full">
      <div className="flex flex-col gap-[81px] items-center justify-center text-center px-5 pt-[110px]">
        <div className="flex gap-1 flex-col">
          <p className="heading-5 text-[16px] tracking-[2.7px]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-white belfair text-[80px]">SPACE</h1>
          <p className="barlow text-[15px] leading-[25px] font-[400] pt-[2px]">
            Let’s face it; if you want to go to space, you might <br /> as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="w-[150px] h-[150px] belfair flex items-center justify-center bg-white text-[20px] tracking-[1.25px] font-[400] rounded-full">
          <p>EXPLORE</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
