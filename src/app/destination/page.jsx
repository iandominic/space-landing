"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import moon from "../../assets/planets/image-moon.webp";
import mars from "../../assets/planets/image-mars.webp";
import europa from "../../assets/planets/image-europa.webp";
import titan from "../../assets/planets/image-titan.webp";
import "../components/styles/styles.css";
import { Divider } from "antd";
import { useInView, motion, useAnimation } from "framer-motion";

const Planets = () => {
  const [desti, setDesti] = useState(0);
  const [animateDiv, setAnimateDiv] = useState();

  useEffect(() => {
    setAnimateDiv(true);
  }, []);

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
      img: mars,
      title: "Mars",
      desc: [
        "Don’t forget to pack your hiking boots. You’ll need",
        "them to tackle Olympus Mons, the tallest planetary",
        "mountain in our solar system. It’s two and a half",
        "times the size of Everest!",
      ],
      distance: "225 MIL. km",
      travel: "9 months",
    },
    {
      img: europa,
      title: "Europa",
      desc: [
        "The smallest of the four Galilean moons orbiting",
        "Jupiter, Europa is a winter lover’s dream. With an",
        "icy surface, it’s perfect for a bit of ice skating,",
        "curling, hockey, or simple relaxation in your snug",
        "wintery cabin.",
      ],
      distance: "628 MIL. km",
      travel: "3 years",
    },
    {
      img: titan,
      title: "Titan",
      desc: [
        "The only moon known to have a dense atmosphere",
        "other than Earth, Titan is a home away from home",
        "(just a few hundred degrees colder!). As a bonus,",
        "you get striking views of the Rings of Saturn.",
      ],
      distance: "1.6 BIL. km",
      travel: "7 years",
    },
  ];

  const nav = [
    {
      title: "moon",
      selected: true,
      onClick: () => {
        setDesti(0);
        setAnimateDiv(false);
        setTimeout(() => setAnimateDiv(true), 100);
      },
    },
    {
      title: "mars",
      selected: false,
      onClick: () => {
        setDesti(1);
        setAnimateDiv(false);
        setTimeout(() => setAnimateDiv(true), 100);
      },
    },
    {
      title: "europa",
      selected: false,
      onClick: () => {
        setDesti(2);
        setAnimateDiv(false);
        setTimeout(() => setAnimateDiv(true), 100);
      },
    },
    {
      title: "titan",
      selected: false,
      onClick: () => {
        setDesti(3);
        setAnimateDiv(false);
        setTimeout(() => setAnimateDiv(true), 100);
      },
    },
  ];

  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
    rotateInit: { scale: 0.8, rotate: -20, opacity: 0 },
    rotatePlanet: { scale: 1, rotate: 0, opacity: 1 },
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
          variants={animate}
          initial="rotateInit"
          animate={animateDiv ? "rotatePlanet" : ""}
          transition={{
            type: "spring",
            stiffness: 150,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <Image
            alt=""
            src={destination[desti].img}
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
                  onClick={phrase.onClick}
                  className={`barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px] slide-nav ${
                    index === desti ? "slide-active text-white" : ""
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
              animate={animateDiv ? "open" : ""}
              className="uppercase text-white belfair text-[56px]"
            >
              {destination[desti].title}
            </motion.h3>
          </div>
          <div className="lineMask">
            {destination[desti].desc.map((desc, index) => {
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
        <Divider className="bg-[#383B4B] my-1" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="lineMask">
              <motion.h5
                variants={animate}
                initial="initial"
                animate={animateDiv ? "open" : ""}
                className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px]"
              >
                Avg. distance
              </motion.h5>
            </div>
            <div className="lineMask">
              <motion.h3
                variants={animate}
                initial="initial"
                animate={animateDiv ? "open" : ""}
                className="uppercase text-white belfair text-[28px]"
              >
                {destination[desti].distance}
              </motion.h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="lineMask">
              <motion.h5
                variants={animate}
                initial="initial"
                animate={animateDiv ? "open" : ""}
                className="barlow-condensed text-[14px] font-[400] text-[#D0D6F9] uppercase tracking-[2.36px]"
              >
                est. travel time
              </motion.h5>
            </div>
            <div className="lineMask">
              <motion.h3
                variants={animate}
                initial="initial"
                animate={animateDiv ? "open" : ""}
                className="uppercase text-white belfair text-[28px]"
              >
                {destination[desti].travel}
              </motion.h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
