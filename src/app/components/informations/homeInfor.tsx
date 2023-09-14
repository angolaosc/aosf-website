import "./style.css"

import additionalInformation from "../../../assets/additionalInformation.svg"
import Image from "next/image"

export default function Informations() {
    return (
        <section className="TagContainer">
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