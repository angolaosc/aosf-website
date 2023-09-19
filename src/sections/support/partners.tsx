"use client";
import Image from "next/image";
import { sponsors } from "@/utilities/data";
import { Company } from "./company";
import { StylePartners } from "./style";

export function Partners() {
  return (
    <StylePartners>
      {sponsors.map(({ id, src, alt, title, className }) => (
        <Company
          key={id}
          title={title}
          logo={<Image src={src} alt={alt} className={className} />}
        />
      ))}
    </StylePartners>
  );
}
