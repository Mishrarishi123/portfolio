import FeatureCard from "../../ui/cards/FeatureCard";
import { features } from "../../../constants/AboutData";
import { motion } from "framer-motion";

// SECTION
const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// STAGGER CONTAINER
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// ITEM
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 relative overflow-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Heading */}
      <motion.div
        className="mb-16 flex flex-col items-center justify-center space-y-6 px-6 text-center"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl font-inter font-bold text-white"
        >
          About me
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-xl sm:text-3xl text-[#d3dce9]"
        >
          Passionate frontend developer with a love for creating immersive
          digital experiences
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3"
        variants={staggerContainer}
      >
        {features.map((itemData: any, i: number) => {
          const Icon = itemData.icon;

          return (
            <motion.div key={i} variants={fadeUp}>
              <FeatureCard
                icon={<Icon size={24} />}
                title={itemData.title}
                description={itemData.description}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Text Box */}
      <motion.div
        className="grid-cols-1 px-6 max-w-6xl mx-auto mt-20"
        variants={fadeUp}
      >
        <div className="mt-16 border border-white/20 bg-[#0F1118] backdrop-blur-2xl px-8 py-12 rounded-2xl">
          <p className="text-[#d3dce9] text-center sm:text-xl">
            I'm a frontend developer specializing in building exceptional
            digital experiences. With expertise in React and modern web
            technologies, I transform ideas into interactive, performant web
            applications. I'm passionate about clean code, pixel-perfect
            designs, and creating seamless user experiences that make a
            difference.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
