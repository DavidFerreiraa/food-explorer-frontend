import { InputHTMLAttributes } from "react";
import { Input, Label, Container } from "./styles";
import { LuUpload } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    htmlFor: string,
    fileState?: "file" | "fileSelected"
}

export function FormField({label, htmlFor, fileState = "file", ...rest}: IFormField) {
    return(
        <Container>
            <Label htmlFor={htmlFor}>{label}</Label>
            <Label className={fileState} htmlFor={htmlFor}>
                <LuUpload size={24} data-inputstate="upload"/>
                <FaCheckCircle size={24}data-inputstate="saved"/>
                {label}
            </Label>
            <Input {...rest} name={htmlFor} id={htmlFor}/>
        </Container>
    );
}