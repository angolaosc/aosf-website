"use client";
import React from "react";
import Image from "next/image";
import "./style.css";
import CommunityLogo from "../../../assets/logo_community.png";
import MenuMobile from "../MenuBobile";
import { useScrollPage } from "@/app/hooks/useScrollPage";
import { menu } from "@/utilities/data";

export default function Header() {
  const scrollThePage = (event: any, href: String) => {
    useScrollPage({ event, href});
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <Image src={CommunityLogo} alt="Logo" />
          <MenuMobile />
          <nav>
            {menu.map(({ id, title, target}) => (
              <a
                href=  {target}
                onClick={(e) => scrollThePage(e, target)}
                key={id}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
