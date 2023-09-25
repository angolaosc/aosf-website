"use client";
import { communityLogos } from "@/utilities/data";
import Image from "next/image";
import { StyleCommunity } from "./style";

export function Community() {
  return (
    <StyleCommunity>
      <h2>Community</h2>
      <div className="logos">
        {communityLogos.map(({ id, src, alt, className, href}) => (
          <a key={id} href={href}>
            <Image src={src} alt={alt} className={className} />
          </a>
        ))}
      </div>
    </StyleCommunity>
  );
}
