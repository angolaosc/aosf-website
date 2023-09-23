"use client";
import { useScrollPage } from "@/hooks/useScrollPage";
import { menu } from "@/utilities/data";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Wrapper } from "./style";

export function MenuMobile() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const scrollThePage = (event: any, href: any) => {
    useScrollPage({ event, href });
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
