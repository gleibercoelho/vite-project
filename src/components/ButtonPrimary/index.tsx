import { Button } from "./style";
import { ClipLoader } from "react-spinners";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: any;
    isLoading?: boolean;
}

export const ButtonPrimary = (props: IButtonProps) => {
    return (
       <Button {...props}>{props.isLoading ? <ClipLoader 
       color="#FFF"
       loading={props.isLoading}       
       size={10} /> : props.title}
        </Button>       
        )
};