import { StaticImageData } from "next/image";

export interface PropsTypeInformation {
  id: number;
  title: string;
  description: string;
}

export interface PropsTypeLogo {
  id: number;
  src: any;
  alt: string;
  className?: string;
  title: string;
  href: string;
}

export interface PropsTypeMenu {
  id: number;
  title: string;
  target: string;
  url: string;
}

export interface PropsTypeContributor {
  name: string;
  linkYoutube?: string;
  src: StaticImageData;
  href: string;
  speciality: string;
}
