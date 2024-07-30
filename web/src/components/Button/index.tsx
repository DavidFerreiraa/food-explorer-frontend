import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    onlyText?: boolean
    icon?: React.ReactNode
}

export function Button({title, onlyText = false, icon, ...rest}: IButton) {
    const navigate = useNavigate();

    return(
        <Container {...rest} $onlytext={onlyText}>
            {icon}
            {title}
        </Container>
    );
}