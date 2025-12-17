import FeatureCard from "../../ui/cards/FeatureCard";
import { features } from "../../../constants/AboutData"; // <-- FIX 1
// import LiquidEther from "../../ui/background/LiquidEther";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* <div className="absolute inset-0 -z-10">
        <LiquidEther className="absolute inset-0 -z-10"/>
      </div> */}
      {/* Heading */}
      <div className="mb-16 flex flex-col items-center justify-center space-y-6 px-6 text-center">
        <h1 className="text-5xl sm:text-7xl font-inter font-bold text-white">
          About me
        </h1>

        <p className="max-w-3xl text-xl sm:text-3xl text-[#d3dce9]">
          Passionate frontend developer with a love for creating immersive
          digital experiences
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((item: any, i: number) => {
          const Icon = item.icon;

          return (
            <FeatureCard
              key={i}
              icon={<Icon size={24} />}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>

      <div className="grid-cols-1 px-6">
        <div className="mt-16 border border-white/20  bg-[#0F1118] backdrop-blur-2xl px-8 py-12 rounded-2xl max-w-5xl mx-auto">
          <p className="text-[#d3dce9] text-center sm:text-xl font-small">
            I'm a frontend developer specializing in building exceptional
            digital experiences. With expertise in React and modern web
            technologies, I transform ideas into interactive, performant web
            applications. I'm passionate about clean code, pixel-perfect
            designs, and creating seamless user experiences that make a
            difference.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default About;
