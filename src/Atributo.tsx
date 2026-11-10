import './Atributo.css'

type AtributoProps = {
  maxValue: number;
  value: number;
  icon: string;
};

export default function Atributo({ maxValue, value, icon }: AtributoProps) {
    return (
        <div className="atributo">
            <span className="ativo">{icon.repeat(value)}</span>
            <span className="inativo">{icon.repeat(maxValue - value)}</span>
        </div>
    )
}