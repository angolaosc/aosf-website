"use client";
import { Partners } from "./partners";
import { Comunity } from "./comunity";
import styled from "styled-components";

interface PropsType {
  id: string;
}
const Wrapper = styled.section`
  margin: 224px 0;
  .main__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;
  }

  @media (max-width: 546px) {
    .main__container {
      align-items: flex-start;
      gap: 32px;
    }
  }
`;

export default function Support({ id }: PropsType) {
  return (
    <Wrapper id={id}>
      <div className="main__container">
        <Partners />
        <Comunity />
      </div>
    </Wrapper>
  );
}
