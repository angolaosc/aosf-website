"use client";
import MenuMobile from "../MenuBobile";
import { UseScrollPage } from "@/app/hooks/useScrollPage";
import { menu } from "@/utilities/data";
import Logo from "../logo";
import { Wrapper } from "./style";

export default function Header() {
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
