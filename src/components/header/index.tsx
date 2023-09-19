"use client";
import MenuMobile from "../menuMobile/index";
import { menu } from "@/utilities/data";
import Logo from "../logo/index";
import { Wrapper } from "./style";
import { UseScrollPage } from "@/hooks/useScrollPage";

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
