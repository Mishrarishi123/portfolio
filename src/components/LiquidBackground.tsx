import LiquidEther from "./ui/background/LiquidEther";

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        /* Interaction */
        mouseForce={35}
        cursorSize={140}
        /* Keep motion alive */
        autoDemo={true}
        autoSpeed={0.8}
        autoIntensity={3.0}
        autoResumeDelay={0}
        autoRampDuration={0.8}
        /* Reduce damping */
        dt={0.02}
        iterationsPoisson={16}
        iterationsViscous={8}
        isViscous={true}
        viscous={12}
        /* Visual quality */
        resolution={1.6}
      />
    </div>
  );
}
