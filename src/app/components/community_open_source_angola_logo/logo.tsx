import Image from "next/image"
import "./style.css"

import communityLogo from "../../../assets/comunityLogoText.png";
import communityIcon from "../../../assets/logo@4x.png";

export default function AngolaOpenSourceCommunityLogo() {
    return (
         <div id="communityLogoOpenSource">
            <Image src={communityIcon} alt="communityLogo" />
            <Image src={communityLogo} alt="communityLogo" />
          </div>
    )
}