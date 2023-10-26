"use client";
import { motion } from "framer-motion";
import { Calendar } from "@/components/calendar";
import { Wrapper } from "./style";
import { SpecialTitle } from "@/components/specialTitle";
import EventInformation from "./EventInformation";

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
              <h3>Inscrições Gratuitas</h3>
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

            <EventInformation day="Sexta-feira, 06’ Outubro 2023 - Kickoff day (CONCLUÍDO)"
              items={[
                { time: "19:00 - 19:15 GMT+1", speaker: "Angola Open-source Community", description: "Abertura do Angola Open-source Fest", speakerLink:'https://linktr.ee/angolaosc' },
                { time: "19:15 - 19:35 GMT+1", speaker: "Paloma Oliveira", description: "Introdução e importância do Open-source para a carreira",  speakerLink:'https://www.linkedin.com/in/discombobulateme'},
                { time: "19:35 - 20:15 GMT+1", speaker: "Samuel Vaz", description: "Contribuindo para o Délegua: Desenvolvendo em Português com TypeScript",  speakerLink:'https://www.linkedin.com/in/samuel-renan-goncalves-vaz/'},
                { time: "19:35 - 20:15 GMT+1", speaker: "Juraci Paixão Kröhling", description: "Contribuindo para o Open Telemetry: Seu Primeiro Passo no Código Aberto", speakerLink:'https://www.linkedin.com/in/jpkroehling' },
                { time: "19:35 - 20:15 GMT+1", speaker: "Arthur Silva", description: "Contribuindo para o pREST: Simplificando o Desenvolvimento com PostgreSQL REST",  speakerLink:'https://www.linkedin.com/in/arxdsilva'},
                { time: "19:35 - 20:15 GMT+1", speaker: "Eliezer António", description: "Contribuindo para o Flutter Carousel Intro: Introduza Onboardings Animadas em Seus Apps",  speakerLink:'https://www.linkedin.com/in/eliezer-antonio/'},
                { time: "19:35 - 20:15 GMT+1", speaker: "Paulo Lopes Estevão", description: "Contribuindo para o Risk Place Angola: Mapeando Locais de Risco com Código Aberto",  speakerLink:'https://www.linkedin.com/in/paulo-lopes-estev%C3%A3o-7a70881b4'},
                { time: "19:35 - 20:15 GMT+1", speaker: "Klaibson Natal Ribeiro Borges ", description: "Contribuindo para o OnlyOffice: Impulsione sua Produtividade com Colaboração Aberta",  speakerLink:'https://www.linkedin.com/in/klaibson/'},
                { time: "19:35 - 20:15 GMT+1", speaker: "Angola Open-source Community", description: "Encerramento, informações sobre o Hackathon e giveaways",  speakerLink:'https://aosc.social'},
              ]}
            />
          <EventInformation day="Domingo, 15’ Outubro 2023 - Open-source hackathon, Mediateca de Luanda (CONCLUÍDO)"
              items={[
                { time: "09:30 - 10:00 GMT+1", speaker: "Voluntários", description: "Check-in",  speakerLink:''},
                { time: "10:00 - 10:15 GMT+1", speaker: "Angola Open-source Community", description: "Abertura do evento",  speakerLink:'https://linktr.ee/angolaopensourcecommunity'},
                { time: "10:15 - 11:00 GMT+1", speaker: "Wilmy Danguya", description: "Workshop 1: Git/GitHub",  speakerLink:'https://www.linkedin.com/in/danguya/'},
                { time: "11:00 - 11:30 GMT+1", speaker: "Todos", description: "Networking e Jogos divertidos",  speakerLink:''},
                { time: "11:30 - 12:00 GMT+1", speaker: "António Pedro", description: "Workshop 2: Boas práticas no Open-source",  speakerLink:'https://www.linkedin.com/in/antoniopedro99l'},
                { time: "12:00 - 13:00 GMT+1", speaker: "Todos participantes", description: "Coffee Break, Networking e Jogos divertidos",  speakerLink:''},
                { time: "13:00 - 17:00 GMT+1", speaker: "Todos hackers", description: "Sessão de contribuição",  speakerLink:''},
                { time: "17:00 - 17:15 GMT+1", speaker: "Angola Open-source Community", description: "Encerramento e avisos importantes",  speakerLink:'https://linktr.ee/angolaopensourcecommunity'},
              ]}
            />

          <EventInformation day="Terça-feira, 24’ Outubro 2023 - Workshop day Selenium (CONCLUÍDO)"
              items={[
                { time: "19:00 - 19:15 GMT+1", speaker: "Angola Open-source Community", description: "Abertura do Angola Open-source Fest",  speakerLink:'https://linktr.ee/angolaosc'},
                { time: "19:15 - 20:15 GMT+1", speaker: "Diego Molina", description: "Fazendo tua primeira contribuição para o Selenium.", speakerLink:'https://www.linkedin.com/in/diemol/' },
                { time: "20:15 - 20:30 GMT+1", speaker: "Angola Open-source Community", description: "Sorteios e Jogos divertidos.",  speakerLink:''},
                { time: "20:30 - 20:35 GMT+1", speaker: "Angola Open-source Community", description: "Encerramento e giveaways",  speakerLink:'https://aosc.social'},
              ]}
            />

        <EventInformation day="Sexta-feira, 27’ Outubro 2023 - Inovação e Sustentabilidade Empresarial com Open Source(Registro obrigatório), Digital.AO, Rangel"
              items={[
                { time: "08:00 - 09:00 GMT+1", speaker: "Voluntários", description: "Check-in",  speakerLink:'https://linktr.ee/angolaosc'},
                { time: "09:00 - 09:15 GMT+1", speaker: "Djemima Luís", description: "Abertura",  speakerLink:'https://www.linkedin.com/in/djemima-lu%C3%ADs-a174121bb'},
                { time: "09:15 - 09:30 GMT+1", speaker: "Angola Open-source Community", description: "Bem-vindo a Angola Open-source Community, AOSC", speakerLink:'https://linktr.ee/angolaosc'},
                { time: "09:30 - 09:40 GMT+1", speaker: "Ruth Ikegah", description: "Keynote 1: CHAOSS Africa", speakerLink:'https://www.linkedin.com/in/ruth-ikegah/'},
                { time: "09:40 - 09:50 GMT+1", speaker: "Matias Perazoli", description: "Keynote 2: ETIC Technologias", speakerLink:'https://www.linkedin.com/in/perazoli/'},
                { time: "09:50 - 10:00 GMT+1", speaker: "Gerardo Lisboa", description: "Keynote 3: ESOP - Associação de Empresas de Softwares Open-source Portuguesas", speakerLink:'https://www.linkedin.com/in/gerardolisboa/'},
                { time: "10:00 - 10:45 GMT+1", speaker: "Walter Angolar", description: "O mindset Open-source e seus fundamentos", speakerLink:'https://www.linkedin.com/in/walter-angolar-da-silva-02a96b24/'},
                { time: "10:45 - 11:30 GMT+1", speaker: "Matias Perazoli", description: "Além do Código: Os Benefícios e Desafios da Adoção de Soluções Open Source nas Empresas", speakerLink:'https://www.linkedin.com/in/perazoli/'},
                { time: "11:30 - 12:15 GMT+1", speaker: "Elisabete Sá Cardoso", description: "Licenças de Softwares e Open-source", speakerLink:'https://www.linkedin.com/in/elisabete-s%C3%A1-cardoso-151429256/'},
                { time: "12:15 - 12:45 GMT+1", speaker: "Todos", description: "Coffe break e Networking", speakerLink:''},
                { time: "12:45 - 13:00 GMT+1", speaker: "Djemima Luís", description: "Anúncio dos vencedores do AOSFest Hackathon 2023", speakerLink:'https://www.linkedin.com/in/djemima-lu%C3%ADs-a174121bb'},
                { time: "13:00 - 13:45 GMT+1", speaker: "Guilherme Dellagustin", description: "InnerSource, InnerSource Program Offices e como funciona a iniciativa de InnerSource na SAP", speakerLink:'https://www.linkedin.com/in/dellagustin/'},
                { time: "13:45 - 14:30 GMT+1", speaker: "Márcio Júnior Vieira", description: "Open Source Program Office(OSPO): Hackers na Governança e Geração de Négocios com FLOSS", speakerLink:'https://www.linkedin.com/in/mvieira1/'},
                { time: "14:30 - 15:15 GMT+1", speaker: "Yuri Sá", description: "Observabilidade pronta para a produção com o Open-source Software", speakerLink:'https://www.linkedin.com/in/yurioliveirasa/'},
                { time: "15:15 - 15:30 GMT+1", speaker: "Palestrantes", description: "Perguntas e Respostas(Q&A)", speakerLink:''},
                { time: "15:30 - 16:30 GMT+1", speaker: "Djemima Luís & Lázaro Manuel", description: "Encerramento", speakerLink:''}
            ]
            }
            />

          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
