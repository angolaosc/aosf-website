import "./style.css"
import freeEntry from "../../../assets/freeEntry.svg"
import aosfTag from "../../../assets/aoscTag.svg"
import calendar from "../../../assets/calendar.svg"
import localization from "../../../assets/location.svg"
import eventAgenda from "../../../assets/agendaDoEvento.svg"
import imageBriefly from "../../../assets/brevemente.png"
import Image from "next/image"

export default function HomeInformation() {
    return (
        <section className="TagContainer">
            <section id="container">

                <article>
                    <Image src={aosfTag} alt="" />
                    <p>
                        Esse é um TEXTO DE EXEMPLO. A Festa do Software Livre é um encontro nacional de várias comunidades interessadas em Software Livre. Ao longo dos três dias vamos contar com várias apresentações, painéis e workshops. A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre.<br /><br />

                        A segunda edição da Festa do Software Livre, organizada em 2018 também pela Humaneasy Consulting e pela ANSOL com o apoio do Munícipio da Moita, incluiu um programa de palestras, demonstrações, workshops, informação, hackathons, zona para instalação de software livre, animação com música ao vivo e outras atracções. Durante o evento contámos com a presença e colaboração da Comunidade Ubuntu Portugal, Wikimedia Portugal, OSGeo Portugal, Drupal Portugal, D3, RepRap, Linux Tech, entre outros.
                    </p>

                    <Image src={freeEntry} alt="" />
                </article>

                <section id="sectionCalendar">
                    <section>
                        <Image src={calendar} alt="" />
                        <p>19 e 20 de Setembro | 2023 <br /> <strong>Terça e Quarta-Feira</strong></p>
                    </section>

                    <section>
                        <Image src={localization} alt="" />
                        <p>Auditório do Edifício de  Dos Desenvolvedores <br />
                            Angola e Designer, titulo como exemplo</p>
                    </section>
                </section>
            </section>

            <section className="board">
                <Image id="textEventAgenda" src={eventAgenda} alt="Agenda do Evento" />
                <Image id="imageBriefly" src={imageBriefly} alt="Brevimente" />
            </section>
        </section>
    );
}