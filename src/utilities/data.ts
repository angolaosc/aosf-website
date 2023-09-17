import fedexLogo from "@/assets/organization/FedExWhiteLogo.svg";
import microsoftLogo from "@/assets/organization/MicrosoftLogo.svg";
import airbnbLogo from "@/assets/organization/AirbnbLogo.svg";
import soundCloud from "@/assets/organization/soundCloud.svg";
import deezer from "@/assets/organization/deezer.svg";
import { PropsTypeLogo, PropsTypeInformation, PropsTypeMenu } from "@/interfaces";

import ChaossAfricaLogo from "@/assets/chaoss-white-2.png";
import Culysoft from "@/assets/Silver/culysoft.png"
import GitHub_Logo_White from "@/assets/In-kind/GitHub_Logo_White.png"

import DL_logo_2018_color from "@/assets/Community/DL_logo_2018_color.png"
import MozdevzLogo from "@/assets/Community/Mozdevz logo - White.png"


export const menu: PropsTypeMenu[] = [
  {
    id: 1,
    title: "Evento",
    target: "#event", // ID do componente alvo,
    url: "",
  },
  {
    id: 2,
    title: "Agenda",
    target: "#schedule", // ID do componente alvo
    url: "",
  },
  {
    id: 3,
    title: "Informações",
    target: "#information", // ID do componente alvo
    url: "",
  },
  {
    id: 4,
    title: "Patrocinadores",
    target: "#partner", // ID do componente alvo
    url: "",
  },
  {
    id: 5,
    title: "Contacto",
    target: "#contact", // ID do componente alvo
    url: "",
  },
  {
    id: 6,
    title: "Hacktoberfest",
    target: "",
    url: "https://hacktoberfest.com/",
  }
];

export const informations: PropsTypeInformation[] =  [
  {
    id: 0,
    title: "Comunicação",
    description: "Toda comunicação e últimas notificações sobre o evento serão anunciadas no nosso servidor do discord e nas nossas redes sociais. Por favor, use estes canais para qualquer informação."
  },
  {
    id: 1,
    title: "Formato do evento",
    description: "A primeira edição do AOSFest 2023 acontecerá online e em 4 dias. Porém, teremos um Hackathon que será organizado pessoalmente. Por favor, note que mera participação no AOSFest não é um passo directo para participar no hackathon. As inscrições para o Hackathon e para o AOSFest são feitas separadamente. Por favor, consulte a agenda do evento."
  },
  {
    id: 2,
    title: "O que é um Open-source hackathon?",
    description: "Um open-source hackathon é uma forma empolgante e produtiva de reunir desenvolvedores, designers e entusiastas de código aberto para trabalhar juntos na criação e aprimoramento de software de código aberto em um ambiente de colaboração e competição amigável. É uma maneira eficaz de contribuir para projetos de código aberto e aprender com outros profissionais da área."
  },
  {
    id: 3,
    title: "O que é o hacktoberfest?",
    description: "O Hacktoberfest é um evento anual de desenvolvimento de software de código aberto patrocinado pela DigitalOcean, GitHub e outras empresas, que incentiva programadores de todo o mundo a contribuir para projetos de código aberto durante o mês de outubro. Os participantes podem ganhar camisetas e outros brindes ao enviar um número mínimo de solicitações de pull requests (PRs) válidas em repositórios públicos hospedados no GitHub, promovendo assim a colaboração na comunidade de código aberto e o desenvolvimento de habilidades de programação."
  }
]



export const platinumLogos: PropsTypeLogo[] = [
  { id: 0, src: ChaossAfricaLogo, alt: "ChaossAfricaLogo" },
];

export const silverLogos: PropsTypeLogo[] = [
  { id: 0, src: Culysoft, alt: "Culysoft" },
];

export const inKindSponsors: PropsTypeLogo[] = [
  { id: 0, src: GitHub_Logo_White, alt: "GitHub_Logo_White" },
];

export const communityLogos: PropsTypeLogo[] = [
  { id: 3, src: DL_logo_2018_color, alt: "DL_logo_2018_color" },
  { id: 1, src: MozdevzLogo, alt: "MozdevzLogo" },
];