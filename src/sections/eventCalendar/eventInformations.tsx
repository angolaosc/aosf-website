import Image from "next/image"
import { InformationsStyle } from "./style"
import line from "@/assets/Line 3.svg"


interface EventDayPropsItem {
    time: String,
    speaker: String,
    description: String,
    speakerLink: string,
    isPastEvent?: boolean,  //Adicinoei esta propriedade para verificaar se o evento já
}

interface EventDayProps {
    day: String,
    items: Array<EventDayPropsItem>
}

export default function EventInformations({day, items}: EventDayProps) {
    return (
        <InformationsStyle>
            <section>
                <div>

                    <section>
                        <div>
                            <h2>{day}</h2> {
                                items.map((item, index) => (
                                    <div key={index}>
                                        <p id="time">{item.time}</p>
                                        <p>
                    <span>
                      {item.description}
                      {item.isPastEvent ? " (CONCLUÍDO)" : ""}
                    </span>
                    <br />
                    <a href={item.speakerLink}>{item.speaker}</a>
                  </p>
                                    </div>
                                ))}
                        </div>
                    </section>
                </div>
            </section>
        </InformationsStyle>
    )
}