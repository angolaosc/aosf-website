"use client";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { menu } from "@/utilities/data";
import { Wrapper } from "./style";
import { UseScrollPage } from "@/hooks/useScrollPage";

export function MenuMobile() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const scrollThePage = (event: any, href: any) => {
    UseScrollPage({ event, href });
    setOpenMenuMobile((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <button
          className="open__Menu"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <HiMenuAlt3 />
        </button>

        {openMenuMobile && (
          <div className="menu__mobile">
            {menu.map(({ id, title, target }) => (
              <a
                href={target}
                onClick={(e) => scrollThePage(e, target)}
                key={id}
              >
                {title}
              </a>
            ))}
          </div>
        )}
      </Wrapper>
    </>
  );
}
