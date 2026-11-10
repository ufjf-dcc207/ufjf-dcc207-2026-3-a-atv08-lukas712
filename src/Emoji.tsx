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
    const [situacao, setSituacao] = useState("smile");
    const [saude, setSaude] = useState(4);
    const [sede, setSede] = useState(3);
    const [luz, setLuz] = useState(1);
    const [fome, setFome] = useState(1);
    
    function onSaude(){
        setSaude(Math.min(5,saude + 1));
    }
    function onAlimentar(){
        setFome(Math.min(5,fome + 1));
    }
    function onHidratar(){
        setSede(Math.min(5,sede + 1));
    }
    function onLigarDesligar(){
        setLuz(Math.min(5,luz + 1));
    }
    function onCiclo(){
        setSaude(Math.max(0,saude - 1));
        setSede(Math.max(0,sede - 1));
        setLuz(Math.max(0,luz - 1));
        setFome(Math.max(0,fome - 1));

        if (fome === 0){
            setSaude((s) => Math.max(0, s - 1));
        }
        if ( sede === 0){
            setSaude((s) => Math.max(0, s - 1));
        }
        if ( luz === 0){
            setSaude((s) => Math.max(0, s - 1));
        }
    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "❓"}</div>
            <div className="atributos">
                <Atributo maxValue={5} value={saude} icon="❤️" />
                <Atributo maxValue={5} value={sede} icon="💧" />
                <Atributo maxValue={5} value={luz} icon="🔌" />
                <Atributo maxValue={5} value={fome} icon="🍽️" />
            </div>
            <div className="acoes">
                <button onClick={onSaude}>Dar saúde</button>
                <button onClick={onAlimentar}>Dar comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigarDesligar}>Ligar/Desligar Luz</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    )
}