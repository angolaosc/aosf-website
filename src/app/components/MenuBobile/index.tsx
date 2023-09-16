
"use client"
import { useState } from "react"
import "./style.css"

import { HiMenuAlt3 } from "react-icons/hi"

export default function MenuMobile() {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <>
            <header>
                <button id="openMenuButton" onClick={() => setIsTrue(!isTrue)}>
                    <HiMenuAlt3 />
                </button>

                {
                    isTrue ? (
                        <section id="menu">
                            <ul className="textMenuMobile">
                                <span onClick={() => setIsTrue(false)}>Evento</span>
                                <span onClick={() => setIsTrue(false)}>Agenda</span>
                                <span onClick={() => setIsTrue(false)}>Informações</span>
                                <span onClick={() => setIsTrue(false)}>Parceiro</span>
                                <span onClick={() => setIsTrue(false)}>Contacto</span>
                            </ul>
                        </section>) : (<section></section>)
                }
            </header>
        </>
    )
}