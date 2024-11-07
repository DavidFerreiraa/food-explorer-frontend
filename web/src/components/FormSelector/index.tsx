import { ICategory } from "../../interfaces/ICategory";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Label } from "../FormField/styles";
import { Container, Option, Select, SelectContainer } from "./styles";
import { SelectHTMLAttributes } from "react";

interface IFormSelector extends SelectHTMLAttributes<HTMLSelectElement> {
    data: ICategory[] | undefined,
    label: string
}
export function FormSelector({data, label, ...rest}: IFormSelector){
    return(
        <Container>
            <Label htmlFor={label} id={label}>{label}</Label>
            <SelectContainer>
                <Select id={label} {...rest}>
                    <Option value="">Selecionar categoria</Option>
                    {
                        data && data.map((category, index) => (
                            <Option key={String(index)} value={category.id}>{category.name}</Option>
                        ))
                    }
                </Select>
                <FaChevronDown data-icon="arrow-down"/>
                <FaChevronUp data-icon="arrow-up"/>
            </SelectContainer>
        </Container>
    );
}