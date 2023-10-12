import calendar from "@/assets/calendar.svg";
import location from "@/assets/location.svg";
import Image from "next/image";
import { Wrapper } from "./style";

export function Calendar() {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.7 }}
    >
      <div className="calendar">
        <Image src={calendar} alt="calendar" />
        <div className="date">
          <span>06 à 27 de Outubro | 2023</span>
          <strong>4 eventos em Outubro</strong>
        </div>
      </div>

      <div className="location">
        <Image src={location} alt="location" />
        <div className="adress">
          <span>Online</span>
          <span><a href="https://maps.app.goo.gl/k1PvUrUnTktaASWT9">Dia 15, Mediateca de Luanda, Largo das Escolas, 1⁹ de Maio, Luanda, Angola</a></span> <br/>
          <span><a href="https://maps.app.goo.gl/STX1awS1vWGebJZb8">Dia 27, Digital AO, Rangel, Luanda, Angola</a></span>
        </div>
      </div>
    </Wrapper>
  );
}
