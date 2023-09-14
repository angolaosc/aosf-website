import { Dispatch, SetStateAction } from "react";
import "./style"

interface MenuProps {
    setMenuIsVisible: Dispatch<SetStateAction<boolean>>
    setIsVisible: boolean;
}

export default function MenuMobile({setMenuIsVisible, setIsVisible}:MenuProps) {

    return (
        <>
        <section id="menu">
            <button onClick={() => setMenuIsVisible(false)}>
                close
            </button>
            Menu
        </section>
        </>
    )
}