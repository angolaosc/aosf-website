"use client";
import Image from "next/image";
import { sponsors } from "@/utilities/data";
import { Company } from "./company";
import { StylePartners } from "./style";

export function Partners() {
  return (
    <StylePartners>
      {sponsors.map(({ id, src, alt, title, className, href}) => (
        <Company
          key={id}
          title={title}
          logo={<a  href={href}><Image src={src} alt={alt} className={className} /></a>}
        />
      ))}
    </StylePartners>
  );
}
