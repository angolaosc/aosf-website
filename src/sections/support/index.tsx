"use client";
import { Partners } from "./partners";
import { Comunity } from "./comunity";
import { Wrapper } from "./style";

interface PropsType {
  id: string;
}

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
