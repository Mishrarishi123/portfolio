import LiquidEther from "./ui/background/LiquidEther";

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        resolution={0.5}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
      />
    </div>
  );
}
