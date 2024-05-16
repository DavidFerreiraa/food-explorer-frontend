import { InputHTMLAttributes } from "react";
import { Container, Input } from "./styles";
import { IoSearchSharp } from "react-icons/io5";

export function SearchInput({...rest}: InputHTMLAttributes<HTMLInputElement> ) {
    return(
        <Container>
            <label htmlFor="search"/>
            <IoSearchSharp size={24}/>
            <Input {...rest} id="search" name="search"/>
        </Container>
    );
}