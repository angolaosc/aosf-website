import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 240px;
  width: 100%;
  .calendar,
  .location {
    display: flex;
    gap: 12px;
    .date,
    .adress {
      display: flex;
      flex-direction: column;
    }
  }
`
