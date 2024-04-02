"use client";
import { Inter } from "next/font/google";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
  

const inter = Inter({ weight: '600', subsets: ["latin"] });
const interBold = Inter({ weight: '800', subsets: ["latin"] });

const Hero = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        // console.log(scroll);
    });

    return (
        <div className="pt-[2vh] pb-[15vh] px-6 xl:p-32 h-screen w-full flex flex-col gap-[3vh] justify-between primary-bg">
            <nav className="w-full text-5xl rounded-3xl flex justify-center items-center" id="top">
                <span className={interBold.className}>Making Great Things ...</span>
            </nav>
            <div className="flex flex-col gap-3 flex-1 hero rounded-3xl p-6 h-full">
                <h2 className={inter.className}><span className="text-xl">Landed here!</span></h2>
                <p className="text-sm mb-[3vh]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam quaerat dolor maxime, natus laboriosam autem doloribus officia odit error enim molestias atque minima commodi, cupiditate deserunt similique, voluptates provident!</p>
                <div className="relative flex-1">
                    <Image
                        src={"https://picsum.photos/400/600?random=12"}
                        alt="Image"
                        width={400}
                        height={600}
                        sizes="50vw"
                        className="object-cover rounded-3xl w-full h-full absolute"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;