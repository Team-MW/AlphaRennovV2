import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-clip bg-white">
      <Header />
      <main className="w-full flex-1 overflow-x-clip">
        <Hero />
        <Services />
        <Approach />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
