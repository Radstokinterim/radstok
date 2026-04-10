import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { OperationsScan } from "@/components/sections/OperationsScan";
import { Expertise } from "@/components/sections/Expertise";
import { Methodology } from "@/components/sections/Methodology";
import { Cases } from "@/components/sections/Cases";
import { Timeline } from "@/components/sections/Timeline";
import { About } from "@/components/sections/About";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OperationsScan />
        <Expertise />
        <Methodology />
        <Cases />
        <Timeline />
        <About />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
