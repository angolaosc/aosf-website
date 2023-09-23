import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.button)`
  cursor: pointer;
  color: #1f1f1f;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;

  border-radius: 52px;
  background: #fff;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  transition: 0.3s linear;
  box-shadow: 0px 15px 25px 0px rgba(92, 199, 255, 0.04);
  &.hackathon {
    background-color: transparent;
    color: #fff;
  }
  &:hover {
    color: #fff;
    background: rgba(255, 253, 253, 0.086);
    box-shadow: 0 0 30px rgba(254, 42, 42, 0.141),
      inset 0 0 10px rgba(4, 158, 168, 0.06),
      inset 0 0 10px rgba(70, 37, 141, 0);
    border: 1px solid rgba(254, 42, 42, 0.26);
    background-image: linear-gradient(
      134deg,
      rgba(4, 158, 168, 0.06) 1.22%,
      rgba(70, 37, 141, 0) 100%
    );
  }

  @media (max-width: 412px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
