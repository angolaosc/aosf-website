import "./style.css"
import freeEntry from "../../../assets/freeEntry.svg"
import aosfTag from "../../../assets/aoscTag.svg"
import calendar from "../../../assets/calendar.svg"
import localization from "../../../assets/location.svg"
import eventAgenda from "../../../assets/agendaDoEvento.svg"
import verticalLine from "../../../assets/verticalLine.svg"
import additionalInformation from "../../../assets/additionalInformation.svg"
import brevimente from "../../../assets/brevemente.png"
import Image from "next/image"

export default function HomeInformation() {
    return (
        <section className="TagContainer">
            <section id="container">
                <article>
                    <Image src={aosfTag} alt="" />
                    <p>
                        Junte-se a nós para o Angola Open-source Fest Edição Hacktoberfest — uma celebração de um mês de colaboração e inovação em código aberto. <br /><br /> Mergulhe no mundo da programação, contribua para projetos significativos e faça parte de uma comunidade global de desenvolvedores que fazem a diferença. Prepare-se para abraçar o espírito do Hacktoberfest e elevar as suas habilidades de programação!
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
                        <p>Event is hosted both online and in-person <br />
                            Instituto Superior de Tecnologias de Informação e Comunicação - INSTIC  <br />
                            57J9+233
                            <br />
                            Luanda, Luanda
                            Angola</p>
                    </section>
                </section>
            </section>

            <section className="board">
                <Image id="textEventAgenda" src={eventAgenda} alt="Agenda do Evento" />
                
                <section className="boardSection1">
                    <section>
                    <Image src={verticalLine} alt="line" />
                    <Image src={verticalLine} alt="line" />
                    </section>

                    <Image src={brevimente} alt="line" />

                    <section>
                    <Image src={verticalLine} alt="line" />
                    <Image src={verticalLine} alt="line" />
                    </section>
                </section>
            </section>

            <section id="additionalInformation">
                <Image src={additionalInformation} alt="Informações adicionais" />
                <p>Algumas informações relativas a Angola Open-source Fest Edição Hacktoberfest</p>
            </section>

            <section className="informations">
                <span>Titulo relevante</span>
                <p>A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre.</p>
            </section>
            <section className="informations">
                <span>Titulo relevante</span>
                <p>A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre.</p>
            </section>
            <section className="informations">
                <span>Titulo relevante</span>
                <p>A primeira Festa do Software Livre da Moita decorreu nas instalações da extinta Universidade Independente, no Palheirão, em 2004, co-organizada pela Humaneasy Consulting e pela ANSOL – Associação Nacional para o Software Livre, e contou com o apoio do Município da Moita, da Universidade Independente e de várias entidades e comunidades ligadas ao Software Livre.</p>
            </section>
        </section>
    );
}