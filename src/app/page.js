import Grid from "@/components/Grid";
import GridAux from "@/components/GridAux";
import Hero from "@/components/Hero";
import ImageList from "@/components/ImageList";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* <ImageList /> */}
      <Hero />
      <Menu />
      <Grid />
      <GridAux />
      <GridAux />
    </main>
  );
}
