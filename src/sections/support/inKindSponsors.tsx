import Image from "next/image"
import { InKindSponsorsStyle } from "./style"
import { inKindSponsors } from "../../utilities/data"

export default function InKindSponsors() {
    return (
        <InKindSponsorsStyle>
            <h2 className="supportsTitle">in-Kind sponsors</h2>
            <div className="logos">
                {inKindSponsors.map(({ id, src, alt, className, href }) => (
                    <a key={id} href={href}>
                        <Image src={src} alt={alt} className={className} />
                    </a>
                ))}
            </div>
        </InKindSponsorsStyle>
    )

}