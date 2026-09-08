"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "zoom-in" | "zoom-out" | "up" | "down" | "left" | "right" | "fade";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.2,
  direction = "zoom-in",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const initialStyles: gsap.TweenVars = {
        opacity: 0,
      };

      const targetStyles: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      };

      if (direction === "zoom-in") {
        initialStyles.scale = 0.85;
        initialStyles.filter = "blur(8px)";
        targetStyles.scale = 1;
        targetStyles.filter = "blur(0px)";
      }

      if (direction === "up") {
        initialStyles.y = 50;
        targetStyles.y = 0;
      }

      if (direction === "left") {
        initialStyles.x = 50;
        targetStyles.x = 0;
      }

      gsap.set(el, initialStyles);
      gsap.to(el, targetStyles);
    }, elementRef);

    return () => ctx.revert();
  }, [direction, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}