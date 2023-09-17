import fedexLogo from "@/assets/organization/FedExWhiteLogo.svg";
import microsoftLogo from "@/assets/organization/MicrosoftLogo.svg";
import airbnbLogo from "@/assets/organization/AirbnbLogo.svg";
import soundCloud from "@/assets/organization/soundCloud.svg";
import deezer from "@/assets/organization/deezer.svg";
import { PropsTypeLogo, PropsTypeInformation, PropsTypeMenu } from "@/interfaces";


export const menu: PropsTypeMenu[] = [
  {
    id: 1,
    title: "Evento",
    target: "#event", // ID do componente alvo
  },
  {
    id: 2,
    title: "Agenda",
    target: "#schedule", // ID do componente alvo
  },
  {
    id: 3,
    title: "Informações",
    target: "#information", // ID do componente alvo
  },
  {
    id: 4,
    title: "Patrocinadores",
    target: "#partner", // ID do componente alvo
  },
  {
    id: 5,
    title: "Contacto",
    target: "#contact", // ID do componente alvo
  },
];

export const informations: PropsTypeInformation[] =  [
  {
    id: 0,
    title: "Titulo relevante",
    description: "A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre."
  },
  {
    id: 1,
    title: "Titulo relevante",
    description: "A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre."
  },
  {
    id: 2,
    title: "Titulo relevante",
    description: "A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre."
  }
]



export const platinumLogos: PropsTypeLogo[] = [
  { id: 0, src: fedexLogo, alt: "FedexLogo" },
  { id: 1, src: soundCloud, alt: "SoundCloud" },
  { id: 2, src: deezer, alt: "Deezer" },
  { id: 3, src: airbnbLogo, alt: "AirbnbLogo" },
  { id: 4, src: microsoftLogo, alt: "MicrosoftLogo" },
  { id: 5, src: fedexLogo, alt: "FedexLogo" },
  { id: 6, src: deezer, alt: "Deezer" },
];

export const silverLogos: PropsTypeLogo[] = [
  { id: 0, src: airbnbLogo, alt: "AirbnbLogo" },
  { id: 1, src: microsoftLogo, alt: "MicrosoftLogo" },
  { id: 2, src: soundCloud, alt: "SoundCloud" },
  { id: 3, src: deezer, alt: "Deezer" },
];

export const inKindSponsors: PropsTypeLogo[] = [
  { id: 0, src: fedexLogo, alt: "FedexLogo" },
  { id: 1, src: soundCloud, alt: "SoundCloud" },
  { id: 2, src: deezer, alt: "Deezer" },
];

export const communityLogos: PropsTypeLogo[] = [
  { id: 3, src: airbnbLogo, alt: "AirbnbLogo" },
  { id: 1, src: microsoftLogo, alt: "MicrosoftLogo" },
  { id: 0, src: fedexLogo, alt: "FedexLogo" },
  { id: 1, src: soundCloud, alt: "SoundCloud" },
  { id: 2, src: deezer, alt: "Deezer" },
];