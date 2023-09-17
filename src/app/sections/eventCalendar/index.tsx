"use client";
import Image from "next/image";
import freeEntry from "../../../assets/freeEntry.svg";
import aosfTag from "../../../assets/aoscTag.png";
import calendar from "../../../assets/calendar.svg";
import localization from "../../../assets/location.svg";
import eventAgenda from "../../../assets/agendaDoEvento.svg";
import { motion } from "framer-motion";
import "./style.css";

interface PropsType {
  id: string;
}

export default function EventCalendar({ id }: PropsType) {
  return (
    <section className="fullContainer" id={id}>
      <section id="container">
        <article>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image src={aosfTag} alt="" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Junte-se a nós para o Angola Open-source Fest Edição Hacktoberfest —
            uma celebração de um mês de colaboração e inovação em código aberto.{" "}
            <br />
            <br /> Mergulhe no mundo da programação, contribua para projetos
            significativos e faça parte de uma comunidade global de
            desenvolvedores que fazem a diferença. Prepare-se para abraçar o
            espírito do Hacktoberfest e elevar as suas habilidades de
            programação!
          </motion.p>
          <Image src={freeEntry} alt="" />
        </article>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          id="sectionCalendar"
        >
          <section>
            <Image src={calendar} alt="" />
            <p>
              06 a 27 de Outubro | 2023 <br />{" "}
              <strong>4 eventos em Outubro</strong>
            </p>
          </section>

          <section>
            <Image src={localization} alt="" />
            <p>
              Online <br />
              Luanda, Luanda Angola
            </p>
          </section>
        </motion.section>
      </section>

      <strong className="board">
        <Image id="textEventAgenda" src={eventAgenda} alt="Agenda do Evento" />
        <h1>BREVEMENTE</h1>
      </strong>
    </section>
  );
}
