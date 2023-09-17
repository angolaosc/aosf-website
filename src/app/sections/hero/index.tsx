"use client";
import "../../Styles/home.css";
import Image from "next/image";
import angolaText from "../../../assets/Angola.svg";
import openSourceText from "../../../assets/Open-SourceFest.svg";
import fragment1 from "../../../assets/fragment1.svg";
import fragment2 from "../../../assets/fragment2.svg";
import CHAOSS_AFRICA_LOGO_opt from "../../../assets/chaoss-white-2.png";
import communityLogo from "../../../assets/comunityLogoText.png";
import communityIcon from "../../../assets/logo@4x.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="found">
      <div className="container">
        <div id="aosfContainer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="images"
          >
            <Image id="aosf" src={angolaText} alt="Angola" />
            <Image id="aosf" src={openSourceText} alt="Angola" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="date"
          >
            <Image id="date" src={fragment1} alt="fragment" />
            <h1>00´ AGO´ 2023</h1>
            <Image id="date" src={fragment2} alt="fragment" />
          </motion.div>

          <section className="listButton">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Entrar em Contacto
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              Saber mais
            </motion.button>
          </section>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.8 }}
        >
          Organização e Apoio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 3.2 }}
          id="organization"
        >
          <section>
            <Image src={communityIcon} alt="communityLogo" />
            <Image src={communityLogo} alt="communityLogo" />
          </section>
          <Image src={CHAOSS_AFRICA_LOGO_opt} alt="CHAOSS_AFRICA" />
        </motion.div>
      </div>
    </motion.section>
  );
}
