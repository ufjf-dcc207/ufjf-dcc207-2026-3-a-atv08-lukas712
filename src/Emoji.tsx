import "./Emoji.css"
import { useState } from "react"
import Atributo from "./Atributo"

const EMOJIS = new Map<string, string>([
    ["smile", "😊"],
    ["laugh", "😂"],
    ["wink", "😉"],
    ["heart", "❤️"]
])

export default function Emoji() {
    const [situacao, setSituacao] = useState("smile")
    
    function toCycle() {
        switch (situacao) {
            case "smile":
                setSituacao("laugh")
                console.log("Changed to laugh")
                break
            case "laugh":
                setSituacao("wink")
                console.log("Changed to wink")
                break
            case "wink":
                setSituacao("heart")
                console.log("Changed to heart")
                break
            case "heart":
                setSituacao("smile")
                console.log("Changed to smile")
                break
            default:
                setSituacao("smile")
                console.log("Changed to smile")
        }
    }

    function toSmile() {
        setSituacao("smile")
        console.log("Changed to smile")
    }
    function toLaugh() {
        setSituacao("laugh")
        console.log("Changed to laugh")
    }
    function toWink() {
        setSituacao("wink")
        console.log("Changed to wink")
    }
    function toHeart() {
        setSituacao("heart")
        console.log("Changed to heart")
    }
    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "❓"}</div>
            <div className="atributos">
                <Atributo maxLifePoint={5} lifePoint={3} icon="❤️" />
            </div>
            <div className="acoes">
                <button onClick={toSmile}>Sorriso</button>
                <button onClick={toLaugh}>Riso</button>
                <button onClick={toWink}>Piscadela</button>
                <button onClick={toHeart}>Coração</button>
                <button onClick={toCycle}>Ciclo</button>
            </div>
        </div>
    )
}