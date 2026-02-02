'use client';

import { useEffect, useRef } from "react";
import "@/styles/beeAnimation.css";
import Image from "next/image";

const BeeAnimation = () => {
  const beeRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const bee = beeRef.current;
    if (!bee) return;

    let x = 20;
    let y = window.innerHeight / 2;
    const minSpeed = 0.6;
    let vx = 0;
    let vy = 0;
    let lastTime = 0;
    const throttleMs = 32;

    const randSpeed = () => {
      vx = (Math.random() - 0.5) * 2;
      if (Math.abs(vx) < minSpeed) vx = vx < 0 ? -minSpeed : minSpeed;
      vy = (Math.random() - 0.5) * 1.2;
    };

    randSpeed();

    const showBee = () => {
      bee.style.opacity = "1";
    };
    const showTimer = window.setTimeout(showBee, 500);

    const moveBee = (now: number) => {
      if (now - lastTime < throttleMs) {
        requestAnimationFrame(moveBee);
        return;
      }
      lastTime = now;
      x += vx;
      y += vy;

      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;

      if (x < 0) { x = 0; vx = Math.abs(vx); }
      if (x > maxX) { x = maxX; vx = -Math.abs(vx); }
      if (y < 0) { y = 0; vy = Math.abs(vy); }
      if (y > maxY) { y = maxY; vy = -Math.abs(vy); }

      const flip = vx < 0 ? "scaleX(-1)" : "scaleX(1)";
      const tilt = `rotate(${vy * 6}deg)`;
      bee.style.transform = `translate(${x}px, ${y}px) ${flip} ${tilt}`;

      requestAnimationFrame(moveBee);
    };

    requestAnimationFrame(moveBee);
    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  return (
    <Image
      ref={beeRef}
      src="https://i.postimg.cc/0QMNP9kH/beefly_(1).png"
      alt=""
      aria-hidden="true"
      className="beeFlyy"
      style={{
        position: "fixed",
        width: "40px",
        height: "40px",
        pointerEvents: "none",
        top: 0,
        left: 0,
        opacity: 0,
        transition: "opacity 0.6s ease",
        zIndex: 9999,
      }}
    />
  );
};

export default BeeAnimation;
