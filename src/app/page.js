import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ImageList from "@/components/ImageList";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="py-[2vh] px-6 xl:p-32 flex flex-col gap-[3vh] w-full min-h-screen">
      {/* <ImageList /> */}
      <Nav />
      <Hero />
      <Grid />
      <Grid />
    </main>
  );
}
