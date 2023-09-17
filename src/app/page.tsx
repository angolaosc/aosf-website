import "./Styles/home.css";
import Image from "next/image";
import angolaText from "../assets/Angola.svg";
import openSourceText from "../assets/Open-SourceFest.svg";
import fragment1 from "../assets/fragment1.svg";
import fragment2 from "../assets/fragment2.svg";
import CHAOSS_AFRICA_LOGO_opt from "../assets/chaoss-white-2.png";
import communityLogo from "../assets/comunityLogoText.png";
import communityIcon from "../assets/logo@4x.png";

import Support from "./components/support/organizationAndSupport";
import Informations from "./components/informations/homeInfor";
import Footer from "./components/footer/footerComponent";
import EventCalendar from "./components/eventCalendar";

export default function Home() {
  return (
    <>
      <section className="found">
        <div className="container">
          <div id="aosfContainer">
            <Image id="aosf" src={angolaText} alt="Angola" />
            <Image id="aosf" src={openSourceText} alt="Angola" />

            <section className="date">
              <Image id="date" src={fragment1} alt="fragment" />
              <h1>00´ AGO´ 2023</h1>
              <Image id="date" src={fragment2} alt="fragment" />
            </section>

            <section className="listButton">
              <button>Entrar em Contacto</button>
              <button>Saber mais</button>
            </section>
          </div>
          <h2>Organização e Apoio</h2>
          <section id="organization">
            <section>
              <Image src={communityIcon} alt="communityLogo" />
              <Image src={communityLogo} alt="communityLogo" />
            </section>
            <Image src={CHAOSS_AFRICA_LOGO_opt} alt="CHAOSS_AFRICA" />
          </section>
        </div>
      </section>
      <EventCalendar id="schedule" />
      <Informations id="information" />
      <Support id="partner" />
      <Footer id="contact" />
    </>
  );
}
