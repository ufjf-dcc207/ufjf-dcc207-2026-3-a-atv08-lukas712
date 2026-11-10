import './Atributo.css'
import { useState } from 'react';
type AtributoProps = {
  maxLifePoint: number;
  lifePoint: number;
  icon: string;
};

export default function Atributo({ maxLifePoint, lifePoint, icon }: AtributoProps) {
    const [actualLifePoint, setLifePoint] = useState(lifePoint);

    function increaseLifePoint() {
        if (actualLifePoint < maxLifePoint) {
            setLifePoint(actualLifePoint + 1);
        }
        else {
            setLifePoint(0);
        }
    }

    return (
        <div className="atributo">
            <span className="ativo">{icon.repeat(actualLifePoint)}</span>
            <span className="inativo">{icon.repeat(maxLifePoint - actualLifePoint)}</span>
            <button onClick={increaseLifePoint}>+</button>
        </div>
    )
}