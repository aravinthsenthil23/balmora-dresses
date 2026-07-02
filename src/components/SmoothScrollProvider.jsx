import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with premium configurations
    const lenis = new Lenis({
      duration: 2.5,          // Speed of the animation loop (higher = slower/smoother)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium cubic easing curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,      // Enable smooth scroll for mouse wheel
      wheelMultiplier: 1,     // Speed adjustments
      infinite: false,
    });

    lenisRef.current = lenis;

    // Synchronize the animation frame with Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Cleanup on unmount to prevent performance memory leaks
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
