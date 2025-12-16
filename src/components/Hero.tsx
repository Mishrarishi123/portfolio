"use client";

import { motion } from "framer-motion";
import LiquidEther from "./ui/background/LiquidEther";
import Button from "./ui/button/Button";
import {  FiGithub,  FiLinkedin, FiMail } from "react-icons/fi";
import GlassIcons from "./ui/icons/Glassicon";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const items = [
  {
    icon: <FiGithub className="text-white" />,
    color: "blue",
    label: "",
    href: "https://github.com/Mishrarishi123",
  },
  {
    icon: <FiLinkedin className="text-white" />,
    color: "purple",
    label: "",
    href: "https://www.linkedin.com/in/rishi-mishra-29424b30a/",
  },
  {
    icon: <FiMail className="text-white" />,
    color: "red",
    label: "",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishik7970@gmail.com",
  },
];


const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex justify-center items-center"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <LiquidEther className="absolute inset-0 -z-10" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center flex flex-col gap-4 px-4"
      >
        <motion.h4 variants={item} className="text-blue-400 text-lg font-nova">
          Hi, I'm
        </motion.h4>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-inter text-white font-bold"
        >
          Frontend Developer
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[#d3dce9] text-2xl sm:text-3xl max-w-2xl mx-auto"
        >
          Crafting beautiful, interactive web experiences with modern
          technologies
        </motion.p>

        <motion.div variants={item} className="flex gap-6  justify-center">
          <Button className="bg-[#05B6D1] text-black px-4 py-3 rounded-lg">
            View Projects
          </Button>

          <Button>
            <a className="bg-white/10 text-white border hover:bg-[#05B6D1] hover:text-black px-4 py-3 rounded-lg">
              Contact Me
            </a>
          </Button>
        </motion.div>

        <div className="max-w-lg flex gap-6 mx-auto">
          <div style={{ height: "10px", position: "relative" }}>
            <GlassIcons items={items} className="" />
          </div>
        </div>
      </motion.div>

      {/* links  */}
    </section>
  );
};

export default Hero;
