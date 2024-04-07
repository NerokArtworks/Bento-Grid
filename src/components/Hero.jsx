"use client";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";

const urbanist = Urbanist({ weight: "600", subsets: ["latin"] });
const urbanistBold = Urbanist({ weight: "800", subsets: ["latin"] });

const Hero = () => {
    const target = useRef(null);

    useEffect(() => {
        if (target.current) {
            gsap.set(target.current, { visibility: "visible" });
            const text = new SplitType(target.current, { tagName: "div" });
            console.log(text);

            const tl = gsap.timeline();

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
                { scale: 1, yPercent: 0, duration: 2, ease: "expo.inOut" },
                "<2.2"
            );

            return () => {
                tl.kill();
            };
        }
    }, [target]);

    return (
        <header className="h-screen w-full primary-bg">
            <div className="w-full p-[0.2rem] lg:p-[2rem] h-full max-h-[90vh] overflow-hidden grid content-center">
                
                    <h1 className={`${urbanistBold.className} `} id="hero__title" ref={target}>
                        Miguel_Nerok
                    </h1>
            </div>
        </header>
    );
};

export default Hero;
