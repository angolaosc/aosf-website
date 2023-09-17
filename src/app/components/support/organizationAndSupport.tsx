import fedexLogo from "../../../assets/organization/FedExWhiteLogo.svg"
import microsoftLogo from "../../../assets/organization/MicrosoftLogo.svg"
import airbnbLogo from "../../../assets/organization/AirbnbLogo.svg"
import soundCloud from "../../../assets/organization/soundCloud.svg"
import deezer from "../../../assets/organization/deezer.svg"
import designLiquido_2 from "../../../assets/DesignLiquido_2.png"
import "./style.css"
import Image from "next/image"

export default function Support() {
    return (
        <>
            <section className="organizationAndSupport">
                <ul>
                    <strong>Platinum</strong>
                    <li>
                        <Image src={fedexLogo} alt="FedexLogo" />
                        <Image src={deezer} alt="Deezer" />
                        <Image src={fedexLogo} alt="FedexLogo" />
                    </li>
                </ul>

                <ul>
                    <strong>Silver</strong>
                    <li>
                        <Image src={microsoftLogo} alt="MicrosoftLogo" />
                    </li>
                </ul>

                <ul>
                    <strong>In-kind sponsors</strong>
                    <li>
                        <Image src={fedexLogo} alt="FedexLogo" />
                        <Image src={soundCloud} alt="SoundCloud" />
                    </li>
                </ul>

                <ul>
                    <strong>Community</strong>
                    <li>
                        <Image src={airbnbLogo} alt="AirbnbLogo" />
                        <Image id="designLiquido_2" src={designLiquido_2} alt="designLiquido_2" />
                    </li>
                </ul>
            </section>
        </>
    )
}