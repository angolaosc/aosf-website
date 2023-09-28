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

            <EventInformations day="Sexta-feira, 00’ Outubro 2023 - Kickoff day"
              items={[
                { time: "19:00 - 19:15 GMT+1", speaker: "Angola Open-source Community", description: "Abertura do Angola Open-source Fest" },
                { time: "19:15 - 19:35 GMT+1", speaker: "Paloma Oliveira", description: "Introdução e importância do Open-source para a carreira" },
                { time: "19:35 - 20:15 GMT+1", speaker: "Samuel Vaz", description: "Contribuindo para o Délegua: Desenvolvendo em Português com TypeScript" },
                { time: "19:35 - 20:15 GMT+1", speaker: "Juraci Paixão Kröhling", description: "Contribuindo para o Open Telemetry: Seu Primeiro Passo no Código Aberto" },
                { time: "19:35 - 20:15 GMT+1", speaker: "Arthur Silva", description: "Contribuindo para o pREST: Simplificando o Desenvolvimento com PostgreSQL REST" },
                { time: "20:15 - 20:30 GMT+1", speaker: "Angola Open-source Community", description: "Encerramento, informações sobre o Hackathon e giveaways" },
              ]}
            />

          <EventInformations day="Domingo, 15’ Outubro 2023 - Open-source hackathon(Evento Presencial, Registro obrigatório)"
              items={[
                { time: "09:30 - 10:00 GMT+1", speaker: "Voluntários", description: "Check-in" },
                { time: "10:00 - 10:10 GMT+1", speaker: "Angola Open-source Community", description: "Abertura do evento" },
                { time: "10:10 - 10:25 GMT+1", speaker: "Ruth Ikegah", description: "Welcome to CHAOSS Africa" },
                { time: "10:25 - 10:35 GMT+1", speaker: "Filipe Mulonde", description: "Lightning talk" },
                { time: "10:35 - 11:00 GMT+1", speaker: "Todos participantes", description: "Lunch e preparação para a sessão de coding" },
                { time: "11:00 - 14:00 GMT+1", speaker: "Todos hackers", description: "Sessão de contribuição 1." },
                { time: "14:00 - 14:30 GMT+1", speaker: "Todos participantes", description: "Coffe Break e Networking" },
                { time: "14:30 - 17:00 GMT+1", speaker: "Todos hackers", description: "Sessão de contribuição 2." },
                { time: "17:00 - 17:15 GMT+1", speaker: "Angola Open-source Community", description: "Encerramento e avisos importantes sobre os vencedores." },
              ]}
            />


          <EventInformations day="Terça-feira, 24’ Outubro 2023 - Workshop day Selenium(Evento Online, registro obrigatório)"
              items={[
                { time: "19:00 - 19:15 GMT+1", speaker: "Angola Open-source Community", description: "Abertura do Angola Open-source Fest" },
                { time: "19:15 - 20:15 GMT+1", speaker: "Diego Melina", description: "Fazendo tua primeira contribuição para o Selenium." },
                { time: "20:15 - 20:30 GMT+1", speaker: "TBA", description: "Anúncio dos vencedores do Hackathon." },
                { time: "20:30 - 20:35 GMT+1", speaker: "Angola Open-source Community", description: "Encerramento e giveaways" },
              ]}
            />

        <EventInformations day="Sexta-feira, 27’ Outubro 2023 - Open-source para empresas(Registro obrigatório)"
              items={[
                { time: "TBA    ", speaker: "Angola Open-source Community", description: "Abertura do Angola Open-source Fest" },
                { time: "TBA    ", speaker: "TBA", description: "Inovação e Sustentabilidade Empresarial com Open Source." },
                { time: "TBA    ", speaker: "Angola Open-source Community", description: "Encerramento." },
              ]}
            />

          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
