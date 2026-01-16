"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  if (!isClient) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 rounded-full bg-primary/20 backdrop-filter backdrop-invert dark:backdrop-invert-0 lg:block"
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
}
