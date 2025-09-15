"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 0); // show immediately on scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1000; // adjust this for speed (ms). Higher = slower
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing (easeOutCubic: fast at start, slower at end)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - easeOut));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-10 flex items-center px-3 py-2 rounded bg-[#88282a] border-[#6E0F11] text-white text-sm font-semibold shadow-md hover:bg-[#8c1a20] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} strokeWidth={3} /> {/* bolder icon */}
      <span className="ml-1">Back to Top</span>
    </button>
  );
}
