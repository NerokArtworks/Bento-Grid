"use client";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ weight: "600", subsets: ["latin"] });
const urbanistBold = Urbanist({ weight: "800", subsets: ["latin"] });

const Hero = () => {
    const target = useRef(null);
    const container = useRef(null);
    const heroContainer = useRef(null);

    useEffect(() => {
        if (target.current) {
            gsap.set(target.current, { visibility: "visible" });
            const text = new SplitType(target.current, { tagName: "div" });
            console.log(text);

            const tl = gsap.timeline();

            const scrollGsap = () => {
                console.log(container.current);
                let e = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: "05% top",
                        end: "bottom 10%",
                        scrub: 2,
                        ease: "expo.inOut",
                        markers: true
                    },
                });
                e.to(heroContainer.current, { scale: 0.5, yPercent: -20, duration: 2 }),
                e.to(
                    text.chars,
                    {
                        autoAlpha: 0,
                        yPercent: -100,
                        transformOrigin: "50% 0%",
                        z: -300,
                        rotationX: 30,
                        duration: 0.8,
                        stagger: { each: 0.05, from: "end" },
                    },
                    "<0.7"
                );
            };

            tl.from(
                text.chars,
                {
                    autoAlpha: 0,
                    yPercent: -100,
                    transformOrigin: "50% 100%",
                    z: -300,
                    rotationX: 120,
                    duration: 2.5,
                    ease: "back.out",
                    stagger: { amount: 0.5, from: "center" },
                },
                0.4
            );

            tl.to(
                target.current,
                { scale: 1, yPercent: 0, duration: 2, ease: "expo.inOut", onComplete: scrollGsap },
                "<2.2"
            );

            return () => {
                tl.kill();
            };
        }
    }, [target]);

    return (
        <header className="h-[260svh] w-full primary-bg relative" ref={container}>
            <div className="w-full sticky top-0 p-[0.2rem] lg:p-[2rem] h-full max-h-[90vh] overflow-hidden grid content-center" ref={heroContainer}>
                <h1 className={`${urbanistBold.className} `} id="hero__title" ref={target}>
                    Miguel.Nerok
                </h1>
            </div>
        </header>
    );
};

export default Hero;
