"use client";
import { useState } from "react";
import "./style.css";

import { HiMenuAlt3 } from "react-icons/hi";
import { UseScrollPage } from "@/app/hooks/useScrollPage";
import { menu } from "@/utilities/data";

export default function MenuMobile() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const scrollThePage = (event: any, href: any) => {
    UseScrollPage({ event, href });
    setOpenMenuMobile((prev) => !prev);
  };

  return (
    <>
      <header>
        <button
          id="openMenuButton"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <HiMenuAlt3 />
        </button>

        {openMenuMobile && (
          <section id="menu">
            <ul className="textMenuMobile">
              {menu.map(({ id, title, target }) => (
                <a
                  href={target}
                  onClick={(e) => scrollThePage(e, target)}
                  key={id}
                >
                  {title}
                </a>
              ))}
            </ul>
          </section>
        )}
      </header>
    </>
  );
}
