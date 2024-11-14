import { ICategory } from "../../interfaces/ICategory";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Label } from "../FormField/styles";
import { Container, Option, Select, SelectContainer } from "./styles";
import { SelectHTMLAttributes } from "react";

interface IFormSelector extends SelectHTMLAttributes<HTMLSelectElement> {
    data: ICategory[] | undefined;
    label: string;
    value?: string;
}

export function FormSelector({ data, value, label, ...rest }: IFormSelector) {
    return (
        <Container>
            <Label htmlFor={label} id={label}>{label}</Label>
            <SelectContainer>
                <Select id={label} value={value} {...rest}>
                    {/* Default option when no value is selected */}
                    {!value && <Option value="">Selecionar categoria</Option>}

                    {/* Render the option corresponding to the selected value */}
                    {value && data && data.some(category => category.id === value) && (
                        <Option value={value} disabled>
                            {data.find(category => category.id === value)?.name}
                        </Option>
                    )}

                    {/* Render other options */}
                    {data && data.map((category, index) => (
                        <Option key={String(index)} value={category.id}>
                            {category.name}
                        </Option>
                    ))}
                </Select>
                <FaChevronDown data-icon="arrow-down" />
                <FaChevronUp data-icon="arrow-up" />
            </SelectContainer>
        </Container>
    );
}
