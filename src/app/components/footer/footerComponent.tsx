import "./style.css"
import communityLogo from "../../../assets/logoFooter.png"
import Image from "next/image"
import { FaLinkedin, FaFacebookF, FaDiscord, FaYoutube, FaTelegramPlane } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <section>
                <span>
                    <Image src={communityLogo} alt="Community Logo" />
                    <p>Contacto: +244 956 234 178 +244 956 234 178</p>
                </span>

               <strong>
                    <a className="fb" id="socialMedia" href="https://web.facebook.com/aoscangola">
                        <FaFacebookF />
                    </a>
                    <a className="linkedin" id="socialMedia" href="https://www.linkedin.com/company/angola-open-source-community/">
                        <FaLinkedin />
                    </a>

                    <a className="discord" id="socialMedia" href="https://discord.com/invite/tuUDNdRzvz">
                        <FaDiscord />
                    </a>
                    <a className="youtube" id="socialMedia" href="https://www.youtube.com/@angolaosc">
                        <FaYoutube />
                    </a>
                    <a className="telegram" id="socialMedia" href="https://t.me/angolasc">
                        <FaTelegramPlane />
                    </a>
               </strong>
            </section>
        </footer>
    )
}