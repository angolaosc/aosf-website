import Image from "next/image"
import { PlatinumStyles } from "./style"
import { platinum } from "../../utilities/data"

export default function Platinum() {
    return (
        <PlatinumStyles>
            <h2 className="supportsTitle">Platinum</h2>
            <div>
                {platinum.map(({ id, src, alt, className, href }) => (
                    <a key={id} href={href}>
                        <Image src={src} alt={alt} className={className} />
                    </a>
                ))}
            </div>
        </PlatinumStyles>
    )

}