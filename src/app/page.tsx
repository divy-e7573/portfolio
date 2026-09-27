import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
