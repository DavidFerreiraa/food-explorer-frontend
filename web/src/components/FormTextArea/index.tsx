import { TextareaHTMLAttributes } from "react";
import { Container, TextArea } from "./styles";
import { Label } from "../FormField/styles";

interface IFormTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
}

export function FormTextArea({label, ...rest}: IFormTextArea) {
    return(
        <Container>
            <Label htmlFor={label}>{label}</Label>
            <TextArea {...rest}/>
        </Container>
    );
}