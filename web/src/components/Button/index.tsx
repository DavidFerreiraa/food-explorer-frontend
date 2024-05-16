import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    onlyText?: boolean
    linkTo?: string
    icon?: React.ReactNode
}

export function Button({title, onlyText = false, linkTo, icon, ...rest}: IButton) {
    const navigate = useNavigate();

    return(
        <Container {...rest} $onlytext={onlyText} onClick={() => {linkTo && navigate(linkTo)}}>
            {icon}
            {title}
        </Container>
    );
}