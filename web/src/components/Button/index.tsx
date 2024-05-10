import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    onlyText?: boolean
    linkTo?: string
}

export function Button({title, onlyText = false, linkTo, ...rest}: IButton) {
    const navigate = useNavigate();

    return(
        <Container {...rest} $onlytext={onlyText} onClick={() => {linkTo && navigate(linkTo)}}>
            {title}
        </Container>
    );
}