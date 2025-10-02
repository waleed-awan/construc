"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null); // small dot
  const followerRef = useRef<HTMLDivElement>(null); // big circle

  useEffect(() => {
    const dot = dotRef.current!;
    const follower = followerRef.current!;
    let mouseX = 0;
    let mouseY = 0;

    // Track actual mouse position
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Small dot follow instantly
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
        ease: "power2.out",
      });
    });

    // Smooth follower animation (2 seconds delay)
    const animateFollower = () => {
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 2,
        ease: "power2.out",
      });
      requestAnimationFrame(animateFollower);
    };

    animateFollower();

    // Hover effects for buttons/links
    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 2, backgroundColor: "rgba(255,255,255,0.2)" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, backgroundColor: "transparent" });
      });
    });
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-[1000] -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Bigger trailing circle */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-1 border-white rounded-full pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
};

export default CustomCursor;
