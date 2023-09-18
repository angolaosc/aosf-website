'use client'
import "./style.css"
import { FaLinkedin, FaFacebookF, FaDiscord, FaYoutube, FaTelegramPlane } from "react-icons/fa"
import Logo from "../logo";

interface PropsType {
    id: string;
}

export default function Footer({ id }: PropsType) {
    return (
        <>
            <footer id={id}>
            <section>
                <span>
                    <Logo />
                    <p><small>Contacto:</small> +244 936 853 728 +244 935 401 862</p>
                    <p><small>Email:</small> info@aosc.social</p>

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
        </>
    );
}
