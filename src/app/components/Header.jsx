"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./styles/styles.css";
import logo from "../../assets/header/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [items, setItems] = useState([
    {
      name: (
        <div className="flex items-center gap-3">
          <span className="font-[700]">00</span>
          <span className="font-[400]">HOME</span>
        </div>
      ),
      key: "/hero",
      selected: true,
      active: true,
    },
    {
      name: (
        <div className="flex items-center gap-3">
          <span className="font-[700]">01</span>
          <span className="font-[400]">DESTINATION</span>
        </div>
      ),
      key: "/destination",
      selected: false,
      active: true,
    },
    {
      name: (
        <div className="flex items-center gap-3">
          <span className="font-[700]">02</span>
          <span className="font-[400]">CREW</span>
        </div>
      ),
      key: "/home",
      selected: false,
      active: true,
    },
    {
      name: (
        <div className="flex items-center gap-3">
          <span className="font-[700]">03</span>
          <span className="font-[400]">TECHNOLOGY</span>
        </div>
      ),
      key: "/home",
      selected: false,
      active: true,
    },
  ]);

  const menuSlide = {
    initial: {
      x: "100%",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: {
      x: "80px",
    },
    enter: (i) => ({
      x: "0px",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.05 * i,
      },
    }),
    exit: (i) => ({
      x: "80px",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.05 * -i,
      },
    }),
  };

  const LinkItems = ({ data }) => {
    return (
      <motion.div
        custom={data.index}
        variants={slide}
        animate="enter"
        exit="exit"
        initial="initial"
        className="items-start gap-6 md:hidden flex flex-col"
      >
        <Link
          onClick={() => setNav(false)}
          href={data.key}
          key={data.key}
          className="hover:text-gray-400 tracking-[2.7Linkx] text-[16px] barlow-white text-white no-underline cursor-pointer  text-left"
        >
          {data.name}
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="fixed left-0 top-0 right-0 h-[full] z-[999] bg-transparent ">
      <div className="flex p-6 justify-between items-center text-white">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, ease: "linear" }}
        >
          <Image alt="" src={logo} width={40} height={40} preview={false} />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          className="btn md:hidden"
          onClick={() => setNav(!nav)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, ease: "linear" }}
        >
          <div className={`burger ${nav ? "burgerActive" : ""}`}></div>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {nav && (
          <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={`fixed right-0 top-0 bottom-0 bg-[rgba(255, 255, 255, 0.4)] h-screen shadow-md md:right-[-100%] sidenav`}
          >
            <div className="flex flex-col gap-5 pr-[95px] pl-[30px] pt-[120px]">
              {items?.map((obj, index) => {
                return <LinkItems key={index} data={{ ...obj, index }} />;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
