"use client";
import { MenuMobile, Logo } from "..";
import { menu } from "@/utilities/data";
import { Wrapper } from "./style";
import { UseScrollPage } from "@/hooks/useScrollPage";

export function Header() {
  const scrollThePage = (event: any, href: any) => {
    UseScrollPage({ event, href });
  };

  return (
    <>
      <Wrapper>
        <div className="main__container">
          <div className="logo">
            <Logo />
          </div>
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
      </Wrapper>
    </>
  );
}
