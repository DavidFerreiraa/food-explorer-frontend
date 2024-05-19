import { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

interface IItem extends InputHTMLAttributes<HTMLInputElement> {
    isNew?: boolean
    value: string
    onClick(): void
}

export function Item({isNew = false, value, onClick, ...rest}: (IItem)) {
    return (
        <Container $isnew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />
            <button
                onClick={onClick}
                type="button"
            >
                {isNew? <FiPlus size={8}/> : <FiX size={8}/>}
            </button>
        </Container>
    );
}