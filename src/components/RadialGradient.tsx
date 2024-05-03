import React, { useState, useEffect } from "react";

export const RadialGradient: React.FC<{}> = () => {
  const [cursorX, setCursorX] = useState(500);
  const [cursorY, setCursorY] = useState(100);

  useEffect(() => {
    const updateGradientPosition = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", updateGradientPosition);

    return () => {
      window.removeEventListener("mousemove", updateGradientPosition);
    }
  }, []);


  return (
    <div
      style={{ position: 'fixed', zIndex: -1, top: `0px`, left: `0px`, width: "100vw", height: "100vh", background: `radial-gradient(600px at ${cursorX}px ${cursorY}px, rgba(29, 78, 216, 0.20), transparent 80%)` }}
    />
  )
};
