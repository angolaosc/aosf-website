
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
                            <ul>
                                <li>Evento</li>
                                <li>Agenda</li>
                                <li>Informações</li>
                                <li>Parceiro</li>
                                <li>Contacto</li>
                            </ul>
                        </section>) : (<section></section>)
                }
            </header>
        </>
    )
}