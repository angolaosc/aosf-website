"use client";
import { motion } from "framer-motion";
import { informations } from "@/utilities/data";
import { SpecialTitle } from "@/components/specialTitle";
import { Wrapper } from "./style";

interface PropsType {
  id: string;
}

export default function Informations({ id }: PropsType) {
  return (
    <Wrapper id={id}>
      <div className="main__container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="header"
        >
          <SpecialTitle content="Informações Adicionais" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Algumas informações relativas a Angola Open-source Fest:
            Hacktoberfest Edition
          </motion.p>
        </motion.div>

        <div className="all__information">
          {informations.map(({ id, title, description }) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id + 0.4 }}
              className="informations"
              key={id}
            >
              <h4>{title}</h4>
              <p>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
