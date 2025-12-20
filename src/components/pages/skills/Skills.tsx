import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import ProgressGrid from "../../ui/progressbar/ProgressGrid";

const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const headingContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      {/* Heading */}
      <motion.div
        className="py-12 flex flex-col items-center gap-4 text-center"
        variants={headingContainer}
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl font-inter font-bold text-white"
        >
          Skills & Expertise
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[#d3dce9] text-2xl sm:text-3xl"
        >
          Technologies and tools I work with to bring ideas to life
        </motion.p>
      </motion.div>

      {/* Progress Grid */}
      <motion.div variants={fadeUp} className="py-12">
        <ProgressGrid />
      </motion.div>
    </motion.section>
  );
};

export default Skills;
