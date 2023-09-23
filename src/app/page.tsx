import { CopyrightFooter, Footer } from "@/components";
import { Section } from "@/sections";

export default function Home() {
  return (
    <>
      <Section.Hero />
      <Section.Root>
        <Section.Event id="schedule" />
        <Section.Informations id="information" />
        <Section.Support id="partner" />
      </Section.Root>

      <Footer id="contact" />
      <CopyrightFooter />
    </>
  );
}
