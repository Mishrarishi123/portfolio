import { useEffect, useState, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";


interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  size: number;
  color: string;
}

interface Splash {
  id: number;
  x: number;
  y: number;
}


const SplashCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );
  const trailIdRef = useRef(0);
  const particleIdRef = useRef(0);
  const splashIdRef = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const colors = [
    "hsl(180, 100%, 50%)",
    "hsl(320, 100%, 60%)",
    "hsl(280, 100%, 65%)",
    "hsl(200, 100%, 55%)",
  ];

  const createParticles = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        angle,
        velocity: 80 + Math.random() * 60,
        size: 4 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 800);
  }, []);

  const createSplash = useCallback((x: number, y: number) => {
    const newSplash = { id: splashIdRef.current++, x, y };
    setSplashes((prev) => [...prev, newSplash]);

    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
    }, 600);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail point
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: trailIdRef.current++ },
        ].slice(-20);
        return newTrail;
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      createParticles(e.clientX, e.clientY);
      createSplash(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [createParticles, createSplash, cursorX, cursorY]);

  // Cleanup old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-15));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="custom-cursor-wrapper">
      {/* Trail */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0" />
            <stop
              offset="100%"
              stopColor="hsl(320, 100%, 60%)"
              stopOpacity="0.8"
            />
          </linearGradient>
        </defs>
        {trail.length > 1 && (
          <motion.path
            d={`M ${trail.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
            fill="none"
            stroke="url(#trailGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </svg>

      {/* Splash rings */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: splash.x,
              top: splash.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="w-16 h-16 rounded-full border-2"
              style={{
                borderColor: "hsl(180, 100%, 50%)",
                boxShadow:
                  "0 0 20px hsl(180, 100%, 50%), 0 0 40px hsl(320, 100%, 60%)",
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 ${particle.size}px ${particle.color}`,
            }}
            initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            animate={{
              x: Math.cos(particle.angle) * particle.velocity,
              y: Math.sin(particle.angle) * particle.velocity,
              scale: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Outer cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : isClicking ? 24 : 40,
          height: isHovering ? 60 : isClicking ? 24 : 40,
          borderWidth: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: `1px solid hsl(180, 100%, 50%)`,
            background: isHovering ? "hsl(180, 100%, 50%, 0.1)" : "transparent",
            boxShadow: isHovering
              ? "0 0 30px hsl(180, 100%, 50%, 0.5), 0 0 60px hsl(320, 100%, 60%, 0.3)"
              : "0 0 15px hsl(180, 100%, 50%, 0.3)",
          }}
        />
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 12 : 8,
          height: isClicking ? 12 : 8,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="w-full h-full rounded-full animate-pulse-glow"
          style={{
            background:
              "linear-gradient(135deg, hsl(180, 100%, 50%), hsl(320, 100%, 60%))",
            boxShadow:
              "0 0 10px hsl(180, 100%, 50%), 0 0 20px hsl(180, 100%, 50%, 0.5), 0 0 30px hsl(320, 100%, 60%, 0.3)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default SplashCursor;
