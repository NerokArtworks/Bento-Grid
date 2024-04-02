"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollShowAnimation({ className, children, id = "scrollShowAnimation" }) {
  const trigger = useRef(); // this is the element that will trigger the animation
  const target = useRef();  // this is the element that will be animated
  const timeline = useRef(); // this is the timeline of the animation that will be created by gsap

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const startScale = 0.2;
    const endScale = 1;
    
    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom bottom",
        onUpdate: (e) => {
          const scale = startScale + (endScale - startScale) * e.progress;
          gsap.set(target.current, { scale: scale });
        },
      },
    });
  
    return () => {
      timeline?.current?.kill();
    };
  }, [id]);
  

  return (
    <div ref={trigger}>
      <div ref={target} className={className}>{children}</div>
    </div>
  );
}
