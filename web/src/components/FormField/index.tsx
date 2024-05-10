import { InputHTMLAttributes } from "react";
import { Input, Label, Container } from "./styles";

interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export function FormField({label, ...rest}: IFormField) {
    return(
        <Container>
            <Label htmlFor={label}>{label}</Label>
            <Input {...rest}/>
        </Container>
    );
}