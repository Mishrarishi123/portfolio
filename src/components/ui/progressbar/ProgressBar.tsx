import { motion } from "framer-motion";

// props interface
interface ProgressBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const ProgressBar = ({ name, percentage, delay = 0 }: ProgressBarProps) => {
  return (
    <div className="bg-[#0F1118] border border-white/20 rounded-xl p-6 space-y-3">
      <div className="flex justify-between">
        <span className="text-white">{name}</span>
        <span className="text-cyan-500 font-semibold">{percentage}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
};


export default ProgressBar;
