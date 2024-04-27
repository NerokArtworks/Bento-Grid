"use client";
import { Urbanist } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const urbanist = Urbanist({ weight: "600", subsets: ["latin"] });
const urbanistBold = Urbanist({ weight: "800", subsets: ["latin"] });

const Nav = () => {
    const target = useRef(null);

    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const period = hour >= 12 ? "pm" : "am";
            // const formattedHour = hour % 12 || 12; // Convertir la hora a formato de 12 horas
            const formattedMinute = minute < 10 ? `0${minute}` : minute; // Añadir un cero inicial si los minutos son menores a 10
            setLocalTime(`${hour}:${formattedMinute} ${period}`);
        };

        // Llamar a updateTime inmediatamente para mostrar la hora actual
        updateTime();
        // Actualizar la hora cada segundo
        const interval = setInterval(updateTime, 1000);

        // Limpiar el efecto al desmontar el componente
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return (
        <nav className="w-full fixed top-0 z-30 grid grid-cols-12 place-content-between items-start px-6 py-8 mix-blend-exclusion" id="top" ref={target}>
            <div className={`${urbanist.className} col-span-5 md:col-span-auto text-2xl md:text-4xl flex flex-wrap gap-2`}>
                <div className="overflow-hidden h-fit">
                    <div className="nav__line md:leading-normal">Making</div>
                </div>
                <div className="overflow-hidden h-fit">
                    <div className="nav__line md:leading-normal">Great</div>
                </div>
                <div className="overflow-hidden h-fit">
                    <div className="nav__line md:leading-normal">Things.</div>
                </div>
            </div>
            <div className={`${urbanist.className} col-start-8 col-span-3 md:col-span-1 md:col-start-11 text-center md:self-center clock overflow-hidden h-fit`}>
                <div className="nav__time md:leading-normal">
                    {localTime}    
                </div>
            </div>
        </nav>
    )
}

export default Nav;