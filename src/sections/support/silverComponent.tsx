"use client";
import Image from "next/image";
import { Silver } from "@/utilities/data";
import { SilverStyles } from "./style";

export function SilverComponent() {
  return (
    <SilverStyles>
      <h2 className="supportsTitle">Silver</h2>
      {Silver.map(({ id, src, alt, className, href }) => (
        <a href={href} key={id}><Image src={src} alt={alt} className={className} /></a>
      ))}
    </SilverStyles>
  );
}