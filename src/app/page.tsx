"use client";

import { CopyrightFooter, Footer } from "@/components";
import { Sections } from "@/sections";

export default function Home() {
  return (
    <>
      <Sections.Hero />
      <Sections.Root>
        <Sections.Event id="schedule" />
        <Sections.Informations id="information" />
        <Sections.Support id="partner" />
      </Sections.Root>

      <Footer id="contact" />
      <CopyrightFooter />
    </>
  );
}
