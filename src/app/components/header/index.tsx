import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import "./style.css";
import CommunityLogo from "../../../assets/logo_community.png";
import MenuMobile from '../MenuBobile';

const menuItems = [
    {
        id: 1,
        title: "Evento",
        target: "eventoSection" // ID do componente alvo
    },
    {
        id: 2,
        title: "Agenda",
        target: "agendaSection" // ID do componente alvo
    },
    {
        id: 3,
        title: "Informações",
        target: "infoSection" // ID do componente alvo
    },
    {
        id: 4,
        title: "Parceiro",
        target: "parceiroSection" // ID do componente alvo
    },
    {
        id: 5,
        title: "Contacto",
        target: "contactoSection" // ID do componente alvo
    }
];

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="headerContainer">
                    <Image src={CommunityLogo} alt="Logo" />
                    <MenuMobile />
                    <nav>
                        <li>Evento</li>
                        <li>Agenda</li>
                        <li>Informações</li>
                        <li>Parceiro</li>
                        <li>Contacto</li>
                    </nav>
                </div>
            </header>
        </>
    );
}
