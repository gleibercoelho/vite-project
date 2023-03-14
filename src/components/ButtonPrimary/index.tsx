import { Button } from "./style";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: any;
}

export const ButtonPrimary = (props: IButtonProps) => {
    return (
       <Button {...props}>{props.title}</Button>       
        )
};