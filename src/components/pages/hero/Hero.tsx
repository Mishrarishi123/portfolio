"use client";

import { motion } from "framer-motion";
import LiquidEther from "../../ui/background/LiquidEther";
import Button from "../../ui/button/Button";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import GlassIcons from "../../ui/icons/Glassicon";
import Nav from "../../common/Nav";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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
    href: "https://www.linkedin.com/in/rishi-mishra-29424b30a/",
    label: "",
  },
  {
    icon: <FiMail className="text-white" />,
    color: "red",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rishik7970@gmail.com",
    label: "",
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* NAV — always on top */}
      <div className="absolute top-6 left-0 right-0 z-50">
        <Nav />
      </div>

      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <LiquidEther className="absolute inset-0" />
      </motion.div>

      {/* HERO CONTENT — TRUE CENTER */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-0 flex flex-col mt-40 items-center justify-center text-center gap-4 px-4"
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
          className="text-[#d3dce9] text-2xl sm:text-3xl max-w-2xl"
        >
          Crafting beautiful, interactive web experiences with modern
          technologies
        </motion.p>

        <motion.div variants={item} className="flex gap-6 mt-4">
          <Button className="bg-[#05B6D1] text-black px-4 py-3 rounded-lg">
            View Projects
          </Button>

          {/* FIXED: no anchor inside button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rishik7970@gmail.com"
            className="bg-white/10 text-white border hover:bg-[#05B6D1] hover:text-black px-4 py-3 rounded-lg"
          >
            Contact Me
          </a>
        </motion.div>

        <div className="mt-8">
          <GlassIcons items={items} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
