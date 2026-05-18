import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);
  
  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const outer = outerRef.current;
    if (!outer) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Detect if mouse is at the edges or outside the viewport
      const isOutside = x <= 0 || y <= 0 || x >= window.innerWidth - 1 || y >= window.innerHeight - 1;

      if (isOutside) {
        outer.style.opacity = '0';
        document.body.classList.remove('has-custom-cursor');
        return;
      }

      // Instant position update
      outer.style.left = `${x}px`;
      outer.style.top = `${y}px`;
      
      // Initialize and show if hidden or not yet initialized
      if (!isInitialized.current || outer.style.opacity === '0') {
        outer.style.opacity = '1';
        document.body.classList.add('has-custom-cursor');
        isInitialized.current = true;
      }
    };

    const onMouseDown = () => {
      outer.classList.add('is-clicking');
    };

    const onMouseUp = () => {
      outer.classList.remove('is-clicking');
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;
      
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('.cursor-pointer') ||
                            window.getComputedStyle(target).cursor === 'pointer';
      
      if (isInteractive) {
        outer.classList.add('is-hovering');
      } else {
        outer.classList.remove('is-hovering');
      }
    };

    const onMouseLeave = () => {
      outer.style.opacity = '0';
      document.body.classList.remove('has-custom-cursor');
    };

    const onMouseEnter = () => {
      // Shown on next mousemove
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseout', onMouseLeave); // Extra safety
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseout', onMouseLeave);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <style>{`
        body.has-custom-cursor, 
        body.has-custom-cursor * {
          cursor: none !important;
        }
        
        .cursor-outer {
          position: fixed;
          width: 36px;
          height: 36px;
          pointer-events: none;
          z-index: 99999;
          /* Offset so the arrowhead tip aligns with pointer */
          margin-left: -8px; 
          margin-top: -5px;
          /* Removed transition on opacity for instant hiding at edges */
          transition: transform 0.15s, margin 0.3s;
          opacity: 0;
          filter: drop-shadow(3px 3px 0px var(--shadow-color, #000));
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: left, top;
        }

        .cursor-outer.is-hidden {
          opacity: 0 !important;
        }

        .cursor-outer svg {
          width: 100%;
          height: 100%;
          fill: var(--accent, #ff6b00);
          stroke: var(--border, #000);
          stroke-width: 1.5px;
          transition: transform 0.3s, fill 0.3s;
        }
        
        .cursor-outer.is-hovering svg {
          transform: scale(1.2) rotate(-15deg);
          fill: var(--primary, #ff8533);
        }

        .cursor-outer.is-clicking {
          transform: translate(3px, 3px);
          filter: drop-shadow(0px 0px 0px var(--shadow-color, #000));
        }
      `}</style>
      <div ref={outerRef} className="cursor-outer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z" />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
