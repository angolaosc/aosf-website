import "./style.css"
import Image from "next/image"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import PedroFracnoImg from "../../../assets/PedroFranco.jpg"
import WaltDeJesusImg from "../../../assets/walt.jpg"
import MrAguinaldo from "../../../assets/Mr_Aguinaldo.jpg"

export default function CopyrightFooter() {
    return (
        <>
            <section className="copyrightFooter">
                <section id="copyrightFooterInformation">
                    <ul>
                        <li>
                            <Image src={PedroFracnoImg} alt="Pedro Franco" />
                            <div>
                                <a id="in" href="https://www.linkedin.com/in/pedro-franco-58a460217/">
                                    Pedro Franco
                                </a>
                                <a id="yout" href="https://www.linkedin.com/in/pedro-franco-58a460217/">
                                    Software Developer
                                </a>
                            </div>
                        </li>

                        <li>
                            <Image src={WaltDeJesusImg} alt="Walt De Jesus" />
                            <div>
                                <a id="in" href="https://www.linkedin.com/in/waltdejesus/">
                                    Walt De Jesus
                                </a>
                                <a id="yout" href="https://www.youtube.com/channel/UC3cB8IzGweoVyScJhhGjSJA">
                                    UX/UI Designer
                                </a>
                            </div>
                        </li>

                        <li>
                            <Image src={MrAguinaldo} alt="Mr Aguinaldo" />
                            <div>
                                <a id="in" href="https://www.linkedin.com/in/mr-aguinaldo-3a076728a/?trk=contact-info">
                                    Mr Aguinaldo
                                </a>
                                <a id="yout" href="https://www.linkedin.com/in/mr-aguinaldo-3a076728a/?trk=contact-info">
                                Software Developer
                                </a>
                            </div>
                        </li>
                    </ul>

                    <p>© 2023 Angola Open-Source Community.<br />Todos os direitos reservados. Licenciado sob <a href="https://github.com/angolaosc/aosf-website/blob/main/LICENSE">Licença Apache-2.0.</a><br /><a href="https://github.com/angolaosc/aosf-website">Código fonte</a></p>
                </section>
            </section>
        </>
    )
}