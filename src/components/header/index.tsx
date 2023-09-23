"use client";
import { useScrollPage } from "@/hooks/useScrollPage";
import { menu } from "@/utilities/data";
import { Logo, MenuMobile } from "..";
import { Wrapper } from "./style";

export function Header() {
  const ScrollThePage = (event: any, href: any) => {
    useScrollPage({ event, href });
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
                onClick={(e) => ScrollThePage(e, target)}
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
