"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import "./style.css";
import CommunityLogo from "../../../assets/logo_community.png";
import MenuMobile from "../MenuBobile";
import { useScrollPage } from "@/app/hooks/useScrollPage";

const menuItems = [
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
    title: "Parceiro",
    target: "#partner", // ID do componente alvo
  },
  {
    id: 5,
    title: "Contacto",
    target: "#contact", // ID do componente alvo
  },
];

export default function Header() {
  const scrollThePage = (event: any, href: any) => {
    useScrollPage({ event, href });
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <Image src={CommunityLogo} alt="Logo" />
          <MenuMobile />
          <nav>
            {menuItems.map(({ id, title, target }) => (
              <a onClick={(e) => scrollThePage(e, target)} key={id}>
                {title}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
