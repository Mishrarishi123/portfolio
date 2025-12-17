import { FiCode, FiZap, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";

export const features: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code is my priority.",
    icon: FiCode,
  },
  {
    title: "Modern Design",
    description: "Creating beautiful, intuitive interfaces that users love.",
    icon: FiZap,
  },
  {
    title: "Performance",
    description: "Optimizing for speed and excellent user experience.",
    icon: FiTrendingUp,
  },
];
