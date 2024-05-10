import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    onlyText?: boolean
}
export function Button({title, onlyText = false, ...rest}: IButton) {
    return(
        <Container {...rest} $onlytext={onlyText}>
            {title}
        </Container>
    );
}