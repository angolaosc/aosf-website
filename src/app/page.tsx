import "./Styles/home.css";
import Image from "next/image"
import angolaText from "../assets/Angola.svg"
import openSourceText from "../assets/Open-SourceFest.svg"
import fragment1 from "../assets/fragment1.svg"
import fragment2 from "../assets/fragment2.svg"
import Support from "./components/support/organizationAndSupport";
import HomeInformation from "./components/homeInformation/homeInfor";
import Footer from "./components/footer/footerComponent";

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
              <button>
                Entrar em Contacto
              </button>
              <button>
                Saber mais
              </button>
            </section>

            <h2>Organização e Apoio</h2>
            <Support />
          </div>
        </div>
      </section>

      <HomeInformation />
      <Footer />
    </>
  )
}
