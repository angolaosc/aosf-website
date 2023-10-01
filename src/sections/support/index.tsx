"use client";
import { Partners } from "./partners";
import { Community } from "./community";
import { Wrapper } from "./style";
import InKindSponsors from "./inKindSponsors";

interface PropsType {
  id: string;
}

export default function Support({ id }: PropsType) {
  return (
    <Wrapper id={id}>
      <div className="main__container">
        <Partners />
        <Community />
      </div>
    </Wrapper>
  );
}
