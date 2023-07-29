"use client";

import Image from "next/image";
import React from "react";
import moon from "../../assets/planets/image-moon.webp";
import { Divider } from "antd";

const Planets = () => {
  const destination = [
    {
      img: moon,
      title: "Moon",
      desc: " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    },
    {
      img: moon,
      title: "Mars",
    },
    {
      img: moon,
      title: "Europa",
    },
    {
      img: moon,
      title: "Titan",
    },
  ];

  return (
    <div className="bg-destination-bg bg-cover bg-no-repeat w-full h-full">
      <div className="flex flex-col gap-7 text-center items-center justify-center px-6 py-[86px]">
        <h5 className="barlow-condensed font-[700] text-[#383B4B] uppercase tracking-[2.7px]">
          01 &nbsp;
          <span className="font-[400] text-white">Pick your destination</span>
        </h5>
        <Image
          alt=""
          src={destination[0].img}
          width={170}
          height={170}
          preview={false}
        />
        <div className="flex items-center justify-center gap-6">
          <h5 className="barlow-condensed text-[14px] font-[400] text-[white] uppercase tracking-[2.36px] border-b-2 border-white py-2">
            Moon
          </h5>
          <h5 className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px] border-b-2 border-transparent py-2">
            Mars
          </h5>
          <h5 className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px] border-b-2 border-transparent py-2">
            Europa
          </h5>
          <h5 className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px] border-b-2 border-transparent py-2">
            Titan
          </h5>
        </div>
        <div className="flex flex-col">
          <h3 className="uppercase text-white belfair text-[56px]">
            {destination[0].title}
          </h3>
          <p className="barlow text-[#D0D6F9] text-[15px] leading-[25px] font-[400] pt-[2px]">
            {destination[0].desc}
          </p>
        </div>
        <Divider className="bg-[#383B4B] my-1" />
      </div>
    </div>
  );
};

export default Planets;
