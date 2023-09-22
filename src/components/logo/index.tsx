import Image from "next/image";
import { Wrapper } from "./style";

import communityLogo from "@/assets/comunityLogoText.png";
import communityIcon from "@/assets/logo@4x.png";

export function Logo() {
  const IMAGES = [
    { id: 0, src: communityIcon, alt: "communityIcon", width: 38, height: 32 },
    { id: 1, src: communityLogo, alt: "communityLogo", width: 170, height: 32 },
  ];

  return (
    <Wrapper>
      {IMAGES.map(({ id, src, alt, width, height }) => (
        <a href="https://aosc.social/" key={id}>
          <Image src={src} alt={alt} width={width} height={height} />
        </a>
      ))}
    </Wrapper>
  );
}
