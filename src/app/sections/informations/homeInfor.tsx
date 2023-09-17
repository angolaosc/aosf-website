"use client";
import "./style.css";
import { motion } from "framer-motion";
import additionalInformation from "../../../assets/additionalInformation.svg";
import Image from "next/image";
import { informations } from "@/utilities/data";

interface PropsType {
  id: string;
}

export default function Informations({ id }: PropsType) {
  return (
    <section className="TagContainer" id={id}>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="additionalInformation"
      >
        <Image src={additionalInformation} alt="Informações adicionais" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Algumas informações relativas a Angola Open-source Fest: Hacktoberfest Edition
        </motion.p>
      </motion.section>

      <div className="all__information">
        {informations.map(({ id, title, description }) => (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id + 0.4 }}
            className="informations"
            key={id}
          >
            <span>{title}</span>
            <p>{description}</p>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
