"use client";

import Image from "next/image";
import { Parallax } from "./Parallax";

const Grid = () => {
    return (
        <div className="h-screen w-full work grid grid-cols-2 grid-rows-4 gap-[3vh]">
            <div className="work__item rounded-3xl p-6 col-span-2">
                Item 1
            </div>
            <div className="row-span-3 relative h-full">
                <div className="work__item rounded-3xl p-6 sticky top-[3vh] flex flex-col gap-[2vh]">
                    <h2 className="font-bold text-xl">Move.</h2>
                    <Image
                        src={"https://picsum.photos/400/600?random=10"}
                        alt="Image"
                        width={400}
                        height={600}
                        sizes="50vw"
                        className="object-cover rounded-3xl w-full h-full"
                    />
                </div>
            </div>
            <div className="work__item rounded-3xl p-6 row-span-3">
                <h2 className="font-bold text-xl">Believe.</h2>
                <Parallax speed={10} className="self-center">
                    <Image
                        src={"https://picsum.photos/400/600?random=8"}
                        alt="Image"
                        width={400}
                        height={600}
                        sizes="50vw"
                        className="object-cover rounded-3xl w-full h-full"
                    />
                </Parallax>
            </div>
        </div>
    )
}

export default Grid;