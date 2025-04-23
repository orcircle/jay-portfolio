import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      const delta = e.deltaY;
      const sectionHeight = window.innerHeight;
      const currentSection = Math.round(container.scrollTop / sectionHeight);
      
      if (delta > 0) {
        targetScroll.current = (currentSection + 1) * sectionHeight;
      } else {
        targetScroll.current = (currentSection - 1) * sectionHeight;
      }

      isScrolling.current = true;
      animateScroll();
    };

    const animateScroll = () => {
      if (!isScrolling.current) return;

      const diff = targetScroll.current - currentScroll.current;
      const step = diff * 0.1;
      
      currentScroll.current += step;
      container.scrollTop = currentScroll.current;

      if (Math.abs(diff) < 1) {
        container.scrollTop = targetScroll.current;
        currentScroll.current = targetScroll.current;
        isScrolling.current = false;
      } else {
        requestAnimationFrame(animateScroll);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div ref={containerRef} className="scroll-snap">
      {children}
    </div>
  );
};

export default SmoothScroll; 