"use client";

import Image from "next/image";
import { Parallax } from "./Parallax";
import { ScrollShowAnimation } from "./ScrollShowAnimation";

const GridAux = () => {
    return (
        <div className="max-h-[90vh] w-full relative z-0 top-[-1px]">
            <ScrollShowAnimation className="scroll-wrapper grid grid-cols-2 items-center gap-[3vh] pt-[20vh] px-6 xl:p-32 work aux w-full h-full">
                <Parallax speed={5} className="self-center row-span-3">
                    <div className="relative">
                        <div className="work__item rounded-3xl p-6 flex flex-col gap-[2vh]">
                            <h2 className="font-bold text-xl">Move.</h2>
                            <Image
                                src={"https://picsum.photos/400/600?random=10"}
                                alt="Image"
                                width={400}
                                height={600}
                                sizes="50vw"
                                className="object-cover rounded-3xl w-full h-full pointer-events-none"
                            />
                        </div>
                    </div>
                </Parallax>
                <Parallax speed={2} className="self-center row-span-3">
                    <div className="work__item rounded-3xl p-6 flex flex-col gap-2">
                        <h2 className="font-bold text-xl">Believe.</h2>
                            <Image
                                src={"https://picsum.photos/400/600?random=9"}
                                alt="Image"
                                width={400}
                                height={600}
                                sizes="50vw"
                                className="object-cover rounded-3xl w-full h-full pointer-events-none"
                            />
                    </div>
                </Parallax>
                <Parallax speed={-4} className="self-center row-span-1 col-span-2 mx-8">
                    <div className="hero rounded-3xl p-6 flex flex-col items-center gap-2">
                        <h2 className="font-bold text-xl">Believe.</h2>
                        
                            <Image
                                src={"https://picsum.photos/400/600?random=3"}
                                alt="Image"
                                width={400}
                                height={600}
                                sizes="50vw"
                                className="object-cover rounded-3xl w-full h-full pointer-events-none"
                            />
                    </div>
                </Parallax>
            </ScrollShowAnimation>
        </div>
    )
}

export default GridAux;