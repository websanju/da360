"use client";

import { useEffect } from "react";
import Lenis from "lenis"; // Updated import

export default function LenisScroll() {
  useEffect(() => {
    // Initialize Lenis with smooth scroll enabled and custom speed settings
    const lenis = new Lenis({
      //   smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Increase this value to speed up scrolling (default is 0.1)
      duration: 1.5, // Adjust scroll duration (lower value = faster scroll)
    });

    // Function to request animation frames for smooth scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); // Start the animation loop

    return () => {
      lenis.destroy(); // Clean up Lenis when the component is unmounted
    };
  }, []);

  return null; // This component doesn't render anything to the DOM
}
