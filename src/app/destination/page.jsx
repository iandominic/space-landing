"use client";

import Image from "next/image";
import React, { useRef } from "react";
import moon from "../../assets/planets/image-moon.webp";
import "../components/styles/styles.css";
import { Divider } from "antd";
import { useInView, motion } from "framer-motion";

const Planets = () => {
  const destination = [
    {
      img: moon,
      title: "Moon",
      desc: [
        "See our planet as you’ve never seen it before. A",
        "perfect relaxing trip away to help regain",
        "perspective and come back refreshed. While",
        "you’re there, take in some history by visiting the",
        "Luna 2 and Apollo 11 landing sites.",
      ],
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      img: moon,
      title: "Mars",
      desc: " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      img: moon,
      title: "Europa",
      desc: " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      img: moon,
      title: "Titan",
      desc: " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
  ];

  const nav = [
    {
      title: "moon",
      selected: true,
      onClick: () => console.log("asd"),
    },
    {
      title: "mars",
      selected: false,
      onClick: () => console.log("asd"),
    },
    {
      title: "europa",
      selected: false,
      onClick: () => console.log("asd"),
    },
    {
      title: "titan",
      selected: false,
      onClick: () => console.log("asd"),
    },
  ];

  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const textBody = useRef(null);
  const isInView = useInView(textBody, { once: false, margin: "-10%" });

  return (
    <div className="bg-destination-bg bg-cover bg-no-repeat w-full h-full">
      <div
        ref={textBody}
        className="flex flex-col gap-7 text-center items-center justify-center px-6 pt-[86px] pb-[65px]"
      >
        <div className="lineMask">
          <motion.h5
            variants={animate}
            initial="initial"
            animate={isInView ? "open" : ""}
            className="barlow-condensed font-[700] text-[#383B4B] uppercase tracking-[2.7px]"
          >
            01 &nbsp;
            <span className="font-[400] text-white">Pick your destination</span>
          </motion.h5>
        </div>
        <motion.div
          initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <Image
            alt=""
            src={destination[0].img}
            width={170}
            height={170}
            preview={false}
          />
        </motion.div>
        <div className="flex items-center justify-center gap-6">
          {nav.map((phrase, index) => {
            return (
              <div className="lineMask" key={index}>
                <motion.h5
                  className={`barlow-condensed text-[14px] font-[400] uppercase tracking-[2.36px] border-b-2 ${
                    phrase.selected
                      ? "text-[white] border-white py-2"
                      : "text-[#D0D6F9] border-transparent py-2"
                  }`}
                  custom={index}
                  variants={animate}
                  initial="initial"
                  animate={isInView ? "open" : ""}
                >
                  {phrase.title}
                </motion.h5>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="lineMask">
            <motion.h3
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
              className="uppercase text-white belfair text-[56px]"
            >
              {destination[0].title}
            </motion.h3>
          </div>
          <div className="lineMask">
            {destination[0].desc.map((desc, index) => {
              return (
                <div className="lineMask" key={index}>
                  <motion.h5
                    className="barlow text-[#D0D6F9] text-[15px] leading-[25px] font-[400] pt-[2px]"
                    custom={index}
                    variants={animate}
                    initial="initial"
                    animate={isInView ? "open" : ""}
                  >
                    {desc}
                  </motion.h5>
                </div>
              );
            })}
          </div>
        </div>
        <Divider className="bg-[#383B4B] my-1" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="lineMask">
              <motion.h5
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : ""}
                className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px]"
              >
                Avg. distance
              </motion.h5>
            </div>
            <div className="lineMask">
              <motion.h3
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : ""}
                className="uppercase text-white belfair text-[28px]"
              >
                {destination[0].distance}
              </motion.h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="lineMask">
              <motion.h5
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : ""}
                className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px]"
              >
                est. travel time
              </motion.h5>
            </div>
            <div className="lineMask">
              <motion.h3
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : ""}
                className="uppercase text-white belfair text-[28px]"
              >
                {destination[0].travel}
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
