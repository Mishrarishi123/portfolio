import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 
      bg-gradient-to-b from-white/5 to-transparent 
      p-8 text-center backdrop-blur-md 
      hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
      transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}
