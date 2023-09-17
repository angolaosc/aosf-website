"use client";
import React from "react";
import Image from "next/image";
import "./style.css";
import communityText from "../../../assets/comunityLogoText.png";
import CommunityIcon from "../../../assets/logo@4x.png";
import MenuMobile from "../MenuBobile";
import { UseScrollPage } from "@/app/hooks/useScrollPage";
import { communityLogos, menu } from "@/utilities/data";
import AngolaOpenSourceCommunityLogo from "../community_open_source_angola_logo/logo";

export default function Header() {
  const scrollThePage = (event: any, href: any) => {
    UseScrollPage({ event, href });
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <AngolaOpenSourceCommunityLogo />

          <MenuMobile />
          <nav>
            {menu.map(({ id, title, target }) => (
              <a
                href={target}
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
