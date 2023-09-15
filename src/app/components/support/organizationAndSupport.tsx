import fedexLogo from "../../../assets/organization/FedExWhiteLogo.svg"
import microsoftLogo from "../../../assets/organization/MicrosoftLogo.svg"
import airbnbLogo from "../../../assets/organization/AirbnbLogo.svg"
import soundCloud from "../../../assets/organization/soundCloud.svg"
import deezer from "../../../assets/organization/deezer.svg"
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
                        <Image src={soundCloud} alt="SoundCloud" />
                        <Image src={deezer} alt="Deezer" />
                        <Image src={airbnbLogo} alt="AirbnbLogo" />
                        <Image src={microsoftLogo} alt="MicrosoftLogo" />
                        <Image src={fedexLogo} alt="FedexLogo" />
                        <Image src={deezer} alt="Deezer" />

                    </li>
                </ul>

                <ul>
                    <strong>Silver</strong>
                    <li>
                        <Image src={airbnbLogo} alt="AirbnbLogo" />
                        <Image src={microsoftLogo} alt="MicrosoftLogo" />

                        <Image src={soundCloud} alt="SoundCloud" />
                        <Image src={deezer} alt="Deezer" />

                    </li>
                </ul>

                <ul>
                    <strong>In-kind sponsors</strong>
                    <li>
                        <Image src={fedexLogo} alt="FedexLogo" />
                        <Image src={soundCloud} alt="SoundCloud" />
                        <Image src={deezer} alt="Deezer" />
                    </li>
                </ul>

                <ul>
                    <strong>Community</strong>
                    <li>
                        <Image src={airbnbLogo} alt="AirbnbLogo" />
                        <Image src={microsoftLogo} alt="MicrosoftLogo" />
                        <Image src={fedexLogo} alt="FedexLogo" />
                        <Image src={soundCloud} alt="SoundCloud" />
                        <Image src={deezer} alt="Deezer" />

                    </li>
                </ul>
            </section>
        </>
    )
}