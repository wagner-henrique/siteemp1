// import Image from "next/image";
import { TeamIntro } from "./components/Teamintro";
import { AnimatedTestimonialsDemo } from "./components/animated-testimonials-demo";
// import { MacbookScrollDemo } from "./components/macbook-scroll-demo";
import HeroParallaxDemo from "./components/hero-demo";
import { FeaturesSectionDemo } from "./components/cards-demo";
import { CarouselDemo } from "./components/carousel-demo";
import { BackToTopButton } from "./components/botao";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F] ">
      <HeroParallaxDemo />
      <FeaturesSectionDemo />
      <CarouselDemo />
      <TeamIntro />
      <AnimatedTestimonialsDemo />
      <BackToTopButton />
      {/* <MacbookScrollDemo /> */}
    </main>
  );
}
