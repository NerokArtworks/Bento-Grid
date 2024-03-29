"use client";
import { Inter } from "next/font/google";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

const inter = Inter({ weight: '600', subsets: ["latin"] });

const Hero = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        // console.log(scroll);
    });

    return (
        <div className="min-h-[77vh] w-full flex flex-col gap-[3vh] justify-between pb-[10vh]">
            <div className="flex flex-col gap-3 flex-1 hero rounded-3xl p-6">
                <h2 className={inter.className}><span className="text-xl">Hero Section!</span></h2>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit atque neque modi! Molestias eius impedit sed dignissimos aliquam nihil, quia, blanditiis, sunt corporis voluptas quas quasi accusantium ratione placeat!</p>
                <div className="relative flex-1">
                    <Image
                        src={"https://picsum.photos/400/600?random=12"}
                        alt="Image"
                        width={400}
                        height={600}
                        sizes="50vw"
                        className="object-cover rounded-3xl w-full h-full absolute"
                    />
                    <h1 className={inter.className}><span className="text-8xl font-extrabold w-full uppercase absolute bottom-0 right-0">Expand</span></h1>
                </div>
                
            </div>
            <div className="w-full flex justify-between px-6 fixed bottom-[3vh] left-0 z-50 mix-blend-exclusion">
                <div className="hero rounded-full actions p-4">
                    <svg className="w-8 h-8 color-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                </div>
                <div className="hero rounded-full actions p-4">
                <svg className="w-8 h-8 color-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Hero;