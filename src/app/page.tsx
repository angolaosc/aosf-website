import { Section } from "./sections";
import Footer from "./components/footer/footerComponent";
import Hero from "./sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Section.Root>
        <Section.Event id="schedule" />
        <Section.Informations id="information" />
        <Section.Support id="partner" />
      </Section.Root>
      <Footer id="contact" />
    </>
  );
}
