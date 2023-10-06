import Image from "next/image"
import { GoldSection } from "./style"
import { goldSponsor } from "../../utilities/data"

export default function GoldSponsor() {
    return (
        <GoldSection>
            <h2 className="supportsTitle">Gold</h2>
            <div className="logos">
                {goldSponsor.map(({ id, src, alt, className, href }) => (
                    <a key={id} href={href}>
                        <Image src={src} alt={alt} className={className} />
                    </a>
                ))}
            </div>
        </GoldSection>
    )

}