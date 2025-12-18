import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const skills = [
  { name: "React", percentage: 90 },
  { name: "TypeScript", percentage: 75 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "JavaScript", percentage: 75 },
  { name: "HTML/CSS", percentage: 85 },
  { name: "Next.js", percentage: 65 },
];

const ProgressGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 px-6 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto"
    >
      {skills.map((skill, index) => (
        <ProgressBar
          key={skill.name}
          name={skill.name}
          percentage={skill.percentage}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
};

export default ProgressGrid;
