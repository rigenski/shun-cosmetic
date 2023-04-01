import Header from "@/components/layouts/header";
import Brand from "@/components/sections/home/brand";
import Excellence from "@/components/sections/home/excellence";
import Hero from "@/components/sections/home/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mb-[400px]">
        <Hero />
        <Excellence />
        <Brand />
      </main>
    </>
  );
}
