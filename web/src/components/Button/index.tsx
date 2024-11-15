import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    onlyText?: boolean
    secondary?: boolean
    icon?: React.ReactNode
}

export function Button({title, onlyText = false, secondary = false,  icon, ...rest}: IButton) {
    return(
        <Container {...rest} $onlytext={onlyText} $secondary={secondary}>
            {icon}
            {title}
        </Container>
    );
}