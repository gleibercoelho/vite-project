
import { Button } from "../ButtonPrimary/style";
import { Cabecalho } from "./style";

interface ICabecalhoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    h2: string;
    span: string;
    button: String;
}

export const CabecalhoPrimary= ({h2, span, button}: ICabecalhoProps) => {
    return (
       <Cabecalho>
        <h2>{h2}</h2> <span>{span}</span> <button>{Button}</button>
       </Cabecalho>       
        )
};