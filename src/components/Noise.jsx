"use client";

const { default: Image } = require("next/image");

const Noise = () => {
    return (
        <div className="w-screen h-screen fixed bg-blend-screen opacity-5 z-50 pointer-events-none select-none">
            <Image 
                src="/noise.gif" 
                width={800}
                height={600}
                alt="noise gif" 
                className="w-full h-full"
            />
        </div>
    )
}

export default Noise;