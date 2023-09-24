"use client";
import { motion } from "framer-motion";
import { Calendar } from "@/components/calendar";
import { Wrapper } from "./style";
import { SpecialTitle } from "@/components/specialTitle";
import EventInformations from "./eventInformations";

interface PropsType {
  id: string;
}

export default function EventCalendar({ id }: PropsType) {
  return (
    <Wrapper id={id}>
      <div className="main__container">
        <div className="information__area">
          <div className="description">
            <motion.div
              className="title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <SpecialTitle content="Angola Open-Source Fest" />
            </motion.div>
            <motion.div
              className="content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <p>
                Junte-se a nós para o Angola Open-source Fest Edição
                Hacktoberfest — uma celebração de um mês de colaboração e
                inovação em código aberto.
              </p>

              <p>
                Mergulhe no mundo da programação, contribua para projetos
                significativos e faça parte de uma comunidade global de
                desenvolvedores que fazem a diferença. Prepare-se para abraçar o
                espírito do Hacktoberfest e elevar as suas habilidades de
                programação!
              </p>
            </motion.div>

            <div id="freeEntry">
              <h3>Entrada Grátis</h3>
            </div>
          </div>

          <Calendar />
        </div>

        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <div className="frame__area">
            <SpecialTitle content="Agenda do evento" />

            <EventInformations title="Sexta-feira, 00’ Agosto’ 2023" time="09:00 - 09:45" description="Abertura do Angola Open-Source Fest Init 2023" speaker="Lázaro Manuel" second_title="Quinta-Feira, 00’ Abril 2024" second_time="19:00 - 09:45" second_description="Angola Open-Source Fest Init 2023" second_speaker="Lázaro" />
            <EventInformations title="Sexta-feira, 00’ Agosto’ 2023" time="09:00 - 09:45" description="Abertura do Angola Open-Source Fest Init 2023" speaker="Lázaro Manuel" second_title="Quinta-Feira, 00’ Abril 2024" second_time="19:00 - 09:45" second_description="Angola Open-Source Fest Init 2023" second_speaker="Lázaro" />
            <EventInformations title="Sexta-feira, 00’ Agosto’ 2023" time="09:00 - 09:45" description="Abertura do Angola Open-Source Fest Init 2023" speaker="Lázaro Manuel" second_title="Quinta-Feira, 00’ Abril 2024" second_time="19:00 - 09:45" second_description="Angola Open-Source Fest Init 2023" second_speaker="Lázaro" />
            <EventInformations title="Sexta-feira, 00’ Agosto’ 2023" time="09:00 - 09:45" description="Abertura do Angola Open-Source Fest Init 2023" speaker="Lázaro Manuel" second_title="Quinta-Feira, 00’ Abril 2024" second_time="19:00 - 09:45" second_description="Angola Open-Source Fest Init 2023" second_speaker="Lázaro" />
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
