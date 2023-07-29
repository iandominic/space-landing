"use client";

import React, { useRef } from "react";
import "./styles/styles.css";
import { useInView, motion } from "framer-motion";

const Hero = () => {
  const phrases = [
    "Let’s face it; if you want to go to space, you might",
    "as well genuinely go to outer space and not hover",
    "kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world ",
    "experience!",
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
    <div className="bg-mobile-bg bg-cover bg-no-repeat h-full min-h-[667px] w-full">
      <div className="flex flex-col gap-[81px] items-center justify-center text-center px-6 pt-[110px]">
        <div ref={textBody} className="flex gap-1 flex-col">
          <div className="lineMask">
            <motion.p
              className="heading-5 text-[16px] tracking-[2.7px] "
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
            >
              SO, YOU WANT TO TRAVEL TO
            </motion.p>
          </div>
          <div className="lineMask">
            <motion.h1
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : ""}
              className="text-white belfair text-[80px]"
            >
              SPACE
            </motion.h1>
          </div>
          {phrases.map((phrase, index) => {
            return (
              <div className="lineMask" key={index}>
                <motion.p
                  className="barlow text-[#D0D6F9] text-[15px] leading-[25px] font-[400] pt-[2px]"
                  custom={index}
                  variants={animate}
                  initial="initial"
                  animate={isInView ? "open" : ""}
                >
                  {phrase}
                </motion.p>
              </div>
            );
          })}
        </div>
        <button className="w-[150px] h-[150px] belfair flex items-center justify-center bg-white text-[20px] tracking-[1.25px] font-[400] rounded-full">
          <p>EXPLORE</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
