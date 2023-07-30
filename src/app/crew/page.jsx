"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import doug from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import ansari from "../../assets/crew/image-anousheh-ansari.webp";
import "../components/styles/styles.css";
import { Divider } from "antd";
import { useInView, motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  const [animateDiv, setAnimateDiv] = useState();

  useEffect(() => {
    setAnimateDiv(true);
  }, []);

  const crew = [
    {
      img: doug,
      title: "Douglas Hurley",
      pos: "Commander",
      desc: [
        "Douglas Gerald Hurley is an American engineer,",
        "former Marine Corps pilot and former NASA",
        "astronaut. He launched into space for the third",
        "time as commander of Crew Dragon Demo-2.",
      ],
    },
    {
      img: mark,
      title: "MARK SHUTTLEWORTH",
      pos: "Mission Specialist ",
      desc: [
        "Mark Richard Shuttleworth is the founder and CEO",
        "of Canonical, the company behind the Linux-based",
        "Ubuntu operating system. Shuttleworth became",
        "the first South African to travel to space as a",
        "space tourist.",
      ],
    },
    {
      img: victor,
      title: "Victor Glover",
      pos: "PILOT",
      desc: [
        "Pilot on the first operational flight of the SpaceX",
        "Crew Dragon to the International Space Station.",
        "Glover is a commander in the U.S. Navy where he",
        "pilots an F/A-18.He was a crew member of",
        "flight engineer.",
      ],
    },
    {
      img: ansari,
      title: "Anousheh Ansari",
      pos: "Flight Engineer",
      desc: [
        "Anousheh Ansari is an Iranian American engineer",
        "and co-founder of Prodea Systems. Ansari was the",
        "fourth self-funded space tourist, the first",
        "self-funded woman to fly to the ISS, and the first",
        "Iranian in space.",
      ],
    },
  ];

  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
    rotateInit: { scale: 0.8, opacity: 0 },
    rotatePlanet: { scale: 1, opacity: 1 },
  };

  const textBody = useRef(null);
  const isInView = useInView(textBody, { once: false, margin: "-10%" });

  return (
    <div className="bg-crew-bg bg-cover bg-no-repeat w-full h-screen">
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
            02 &nbsp;
            <span className="font-[400] text-white">Meet your crew</span>
          </motion.h5>
        </div>
        <Swiper
          onSlideChange={(swiper) => {
            setCrewIndex(swiper.activeIndex);
            setAnimateDiv(false);
            setTimeout(() => setAnimateDiv(true), 100);
          }}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper w-full h-full flex items-center justify-center"
        >
          {crew.map((obj, key) => (
            <div className="pagi" key={key}>
              <SwiperSlide>
                <motion.div
                  className="w-full h-full max-h-[223px] max-width-[327px]"
                  variants={animate}
                  initial="rotateInit"
                  animate={animateDiv ? "rotatePlanet" : ""}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <Image alt="" src={obj.img} width={"100%"} height={"100%"} />
                </motion.div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="lineMask">
              <motion.h3
                variants={animate}
                initial="initial"
                animate={animateDiv ? "open" : ""}
                className="uppercase text-[#84858A] belfair text-[16px]"
              >
                {crew[crewIndex].pos}
              </motion.h3>
            </div>
            <div className="lineMask">
              <motion.h3
                variants={animate}
                initial="initial"
                animate={animateDiv ? "open" : ""}
                className="uppercase text-white belfair text-[24px]"
              >
                {crew[crewIndex].title}
              </motion.h3>
            </div>
          </div>
          <div className="lineMask">
            {crew[crewIndex].desc.map((desc, index) => {
              return (
                <div className="lineMask" key={index}>
                  <motion.h5
                    className="barlow text-[#D0D6F9] text-[15px] leading-[25px] font-[400] pt-[2px]"
                    custom={index}
                    variants={animate}
                    initial="initial"
                    animate={animateDiv ? "open" : ""}
                  >
                    {desc}
                  </motion.h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
