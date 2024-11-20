import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Label } from "../FormField/styles";
import { Container, Option, Select, SelectContainer, StatusIndicator } from "./styles";
import { SelectHTMLAttributes, useEffect, useState } from "react";
import { IOrderStatus } from "../../interfaces/IOrder";

interface IStatusSelector extends SelectHTMLAttributes<HTMLSelectElement> {
    data: string[] | undefined;
    label: string;
    value?: string;
}

export function StatusSelector({
    data,
    value,
    label,
    ...rest
}: IStatusSelector) {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

    // Update the state when the `value` or `data` changes
    useEffect(() => {
        if (value && data) {
            const selectedItem = data.find((item) => item === value);
            if (selectedItem) {
                setSelectedValue(selectedItem);
            }
        }
    }, [value, data]);

    // Handle the change in the select dropdown
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    // Find the selected item for displaying details (e.g., status)
    const selectedItem = data?.find((item) => item === selectedValue);
    
    return (
        <Container>
            <Label htmlFor={label} id={label}>
                {label}
            </Label>
            <SelectContainer>
                <div className="selected-value">
                    {/* Status indicator */}
                    <StatusIndicator $status={selectedValue || IOrderStatus.Pendente} />
                    {selectedItem as string || "Pendente"}
                </div>
                <Select
                    id={label}
                    value={selectedValue || ""}
                    onChange={handleChange}
                    {...rest}
                >
                    {/* Default option */}
                    {!value && <Option value="">Selecionar status</Option>}

                    {/* Render other options */}
                    {data?.map((status, index) => (
                        <Option key={String(index)} value={status}>
                            {status}
                        </Option>
                    ))}
                </Select>
                <FaChevronDown data-icon="arrow-down" />
                <FaChevronUp data-icon="arrow-up" />
            </SelectContainer>
        </Container>
    );
}
