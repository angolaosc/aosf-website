import "./style.css"
import communityLogo from "../../../assets/logoFooter.svg"
import Image from "next/image"
import { FaLinkedin, FaFacebookF } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <section>
                <span>
                    <Image src={communityLogo} alt="Community Logo" />
                    <p>Contacto: +244 956 234 178 +244 956 234 178</p>
                </span>

                <a href="https://web.facebook.com/aoscangola">
                    <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/company/angola-open-source-community/">
                    <FaLinkedin />
                </a>
            </section>
        </footer>
    )
} 