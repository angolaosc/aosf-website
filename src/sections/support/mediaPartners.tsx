import Image from "next/image"
import { MediaPartnersSection } from "./style"
import { MediaPartners } from "../../utilities/data"

export default function MediaPartner() {
    return (
        <MediaPartnersSection>
            <h2 className="supportsTitle">Media Partners</h2>
            <div className="logos">
                {MediaPartners.map(({ id, src, alt, className, href }) => (
                    <a key={id} href={href}>
                        <Image src={src} alt={alt} className={className} />
                    </a>
                ))}
            </div>
        </MediaPartnersSection>
    )

}