"use client";
import Grid from "@/components/Grid";
import GridAux from "@/components/GridAux";
import Hero from "@/components/Hero";
import ImageList from "@/components/ImageList";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import { useLenis } from "@studio-freight/react-lenis";
import "./hero.css";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });
  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* <ImageList /> */}
      <Nav />
      <Hero />
      <Menu />
      <GridAux />
      <GridAux />
    </main>
  );
}
