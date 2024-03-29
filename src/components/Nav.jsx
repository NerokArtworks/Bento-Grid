"use client";

import { Inter } from "next/font/google";

const inter = Inter({ weight: '800', subsets: ["latin"] });

const Nav = () => {
    return (
        <nav className="w-full h-[10vh] text-5xl rounded-3xl flex justify-center items-center" id="top">
            <span className={inter.className}>Making Great Things ...</span>
        </nav>
    )
}

export default Nav;