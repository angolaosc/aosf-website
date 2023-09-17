import Image from "next/image"
import freeEntry from "../../../assets/freeEntry.svg"
import aosfTag from "../../../assets/aoscTag.png"
import calendar from "../../../assets/calendar.svg"
import localization from "../../../assets/location.svg"
import eventAgenda from "../../../assets/agendaDoEvento.svg"

export default function EventCalendar() {
    return (
        <section id="fullContainer">
            <section id="container">
                <article>
                    <Image src={aosfTag} alt="" />
                    <p>
                        Junte-se a nós para o Angola Open-source Fest Edição Hacktoberfest — uma celebração de um mês de colaboração e inovação em código aberto. <br /><br /> Mergulhe no mundo da programação, contribua para projetos significativos e faça parte de uma comunidade global de desenvolvedores que fazem a diferença. Prepare-se para abraçar o espírito do Hacktoberfest e elevar as suas habilidades de programação!
                    </p>
                    <Image src={freeEntry} alt="" />
                </article>

                <section id="sectionCalendar">
                    <section className="calendarInformation">
                            <Image src={calendar} alt="" />
                            <p>19 e 20 de Outubro | 2023 <br /> <strong>Terça e Quarta-Feira</strong></p>
                    </section>

                    <section>
                        <Image src={localization} alt="" />
                        <p>Online <br/>
                            Zoom <br/>
                            <br />
                            Luanda, Luanda
                            Angola</p>
                    </section>
                </section>
            </section>

            <strong className="board">
                <Image id="textEventAgenda" src={eventAgenda} alt="Agenda do Evento" />
                <h1>BREVIMENTE</h1>
            </strong>
        </section>
    );
}