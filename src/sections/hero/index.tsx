"use client";
import Image from "next/image";
import CHAOSS_AFRICA_LOGO_opt from "@/assets/Platinum/chaossLogo.svg";
import { motion } from "framer-motion";
import Logo from "@/components/logo";
import { Wrapper } from "./style";
import backgroundImg from "@/assets/background.png";
import { SpecialTitle } from "@/components/specialTitle";
import { Button } from "@/components/button";
import { BUTTONS } from "@/utilities/data";

export default function Hero() {
  const openExternalLink = (externalLink: string) => {
    // Open the external link in a new tab or window
    window.open(externalLink, "_blank");
  };

  return (
    <Wrapper image={backgroundImg}>
      <div className="menu__container">
        <div id="listButtonAndTextArea">
          <div className="text__area">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Angola <br /> <span>Open-Source Fest</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
              className="date"
            >
              <SpecialTitle
                content="Nos dias 6, 15, 24 e 27 de Outubro"
                className="date"
              />
            </motion.div>
          </div>

          <div className="listButton">
            {BUTTONS.map(({ id, content, url, className }) => (
              <Button
                key={id}
                id={id}
                content={content}
                onClick={() => openExternalLink(url)}
                className={className}
              />
            ))}
          </div>
        </div>

        <div className="organizers">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 2.8 }}
          >
            Organização
          </motion.h2>
          <motion.div
            className="logos"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 3.2 }}
          >
            <Logo />
            <a href="https://twitter.com/chaoss_africa">
              <Image
                src={CHAOSS_AFRICA_LOGO_opt}
                alt="CHAOSS_AFRICA"
                className="chaoss"
              />
            </a>

          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
