"use client";
import { SilverComponent } from "./silverComponent";
import { Community } from "./community";
import { Wrapper } from "./style";
import InKindSponsors from "./inKindSponsors";
import GoldSponsor from "./goldSponsor";
import MediaPartner from "./mediaPartners";
import Platinum from "./platinum";

interface PropsType {
  id: string;
}

export default function Support({ id }: PropsType) {
  return (
    <Wrapper id={id}>
      <div className="main__container">
        <div id="supportGroup">
          <MediaPartner />
          <SilverComponent />
        </div>
        
        <div id="supportGroup">
          <GoldSponsor />
          <InKindSponsors />
          <Platinum />
        </div>
        <Community />
      </div>
    </Wrapper>
  );
}
