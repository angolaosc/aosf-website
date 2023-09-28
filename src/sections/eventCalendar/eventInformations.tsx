import Image from "next/image"
import { InformationsStyle } from "./style"
import line from "@/assets/Line 3.svg"

interface InformationsProps {
    title: String,
    time: String,
    speaker: String,
    description: String,
    second_title: String,
    second_time: String,
    second_speaker: String,
    second_description: String,
}

export default function EventInformations({ title, time, description, speaker, second_description, second_speaker, second_time, second_title }: InformationsProps) {
    return (
        <InformationsStyle>
            <section>
                <div>
                    <Image alt="Line" src={line} />

                    <section>
                        <div>
                            <h2>{title}</h2>

                            <div>
                                <p id="time">{time}</p>
                                <p>{description}<br /> <span>{speaker}</span></p>
                            </div>

                            <div>
                                <p id="time">{second_time}</p>
                                <p>{second_description}<br /> <span>{second_speaker}</span></p>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
        </InformationsStyle>
    )
}