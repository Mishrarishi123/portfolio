import { motion } from "framer-motion";

interface ProgressBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const ProgressBar = ({ name, percentage }: ProgressBarProps) => {
  return (
    <div className="bg-[#0F1118] border border-white/20 rounded-xl p-6 space-y-3">
      <div className="flex justify-between">
        <span className="text-white">{name}</span>
        <span className="text-cyan-500 font-semibold">{percentage}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
