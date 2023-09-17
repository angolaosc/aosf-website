import "./style.css";
import communityLogo from "../../../assets/logoFooter.png";
import Image from "next/image";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

interface PropsType {
  id: string;
}

export default function Footer({ id }: PropsType) {
  return (
    <footer id={id}>
      <section>
        <span>
          <Image src={communityLogo} alt="Community Logo" />
          <p>Contacto: +244 956 234 178 +244 956 234 178</p>
        </span>

        <strong>
          <a id="socialMedia" href="https://web.facebook.com/aoscangola">
            <FaFacebookF />
          </a>
          <a
            id="socialMedia"
            href="https://www.linkedin.com/company/angola-open-source-community/"
          >
            <FaLinkedin />
          </a>
        </strong>
      </section>
    </footer>
  );
}
