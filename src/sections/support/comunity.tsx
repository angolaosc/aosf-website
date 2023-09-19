"use client";
import { communityLogos } from "@/utilities/data";
import Image from "next/image";
import { StyleComunity } from "./style";

export function Comunity() {
  return (
    <StyleComunity>
      <h2>Comunity</h2>
      <div className="logos">
        {communityLogos.map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} />
        ))}
      </div>
    </StyleComunity>
  );
}
