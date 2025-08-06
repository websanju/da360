// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis"; // Updated import

// export default function LenisScroll() {
//   useEffect(() => {
//     // Initialize Lenis with smooth scroll enabled and custom speed settings
//     const lenis = new Lenis({
//       //   smooth: true, // Enable smooth scrolling
//       lerp: 0.1, // Increase this value to speed up scrolling (default is 0.1)
//       duration: 1.5, // Adjust scroll duration (lower value = faster scroll)
//     });

//     // Function to request animation frames for smooth scroll
//     function raf(time: number) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf); // Start the animation loop

//     return () => {
//       lenis.destroy(); // Clean up Lenis when the component is unmounted
//     };
//   }, []);

//   return null; // This component doesn't render anything to the DOM
// }

"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function LenisScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (!lenisRef.current) return;

    // Delay to allow new page content to mount
    setTimeout(() => {
      lenisRef.current?.scrollTo(0, { immediate: true });
    }, 100);
  }, [pathname]);

  return null;
}
