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
    const heroDot = useRef(null);

    useEffect(() => {
        if (target.current) {
            gsap.set(target.current, { visibility: "visible" });
            const text = new SplitType(target.current, { tagName: "div" });
            console.log(text);

            const tl = gsap.timeline();

            const scrollGsap = () => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant",
                });
                
                let e = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: "05% top",
                        end: "bottom 10%",
                        scrub: 2,
                        ease: "expo.inOut",
                        markers: false
                    },
                });
                e.set('body', { overflowY: 'scroll', height: 'auto' });
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
                ),
                e.to(
                    heroDot.current,
                    {
                        right: 'calc(50vw - 2.75rem)',
                        transformOrigin: "center",
                        z: -300,
                        rotation: 360,
                        borderRadius: '100%',
                        scale: 0.5,
                        duration: 0.8
                    },
                    "1"
                ),
                e.to(
                    heroDot.current,
                    {
                        top: 'calc(50vh - 3.25rem)',
                        z: 300,
                        rotation: 0,
                        scale: 1,
                        borderRadius: '15%',
                        duration: 0.5
                    },
                    ">"
                ),
                e.to(
                    heroDot.current,
                    {
                        z: -300,
                        rotation: 360,
                        scale: 120,
                        borderRadius: '5px',
                        duration: 1
                    },
                    ">"
                )
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
    }, [target, container, heroContainer, heroDot]);

    return (
        <header className="h-[450svh] w-full primary-bg" ref={container}>
            <div className="w-full fixed top-0 grid grid-cols-12 place-content-start items-center place-items-end px-6 py-8 overflow-hidden h-screen">
                <div className={`${urbanist.className} col-span-5 md:col-span-3 text-2xl md:text-4xl opacity-0 pointer-events-none`}>Making Great Things ...</div>
                <div className="w-10 h-10 hero-dot col-start-12 relative" ref={heroDot}></div>
            </div>
            <div className="w-full sticky top-0 p-[0.2rem] lg:p-[2rem] h-full max-h-[90vh] overflow-hidden grid content-center" ref={heroContainer}>
                
                <h1 className={`${urbanistBold.className} `} id="hero__title" ref={target}>
                    Miguel.Nerok
                </h1>
            </div>
        </header>
    );
};

export default Hero;
