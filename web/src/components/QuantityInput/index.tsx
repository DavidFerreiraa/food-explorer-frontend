import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../Button";
import { Container, QuantityButton, QuantityInnerInput } from "./styles";

interface IQuantityInput {
    handleChange: (value: number) => void;
    handleIncludeOrder: () => void;
    includeButtonTitle: string;
    quantity: number;
}

export function QuantityInput({ handleChange, handleIncludeOrder, quantity, includeButtonTitle }: IQuantityInput) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      handleChange(value);
    }
  };

  return (
    <Container>
      <QuantityButton onClick={() => handleChange(quantity - 1)}>
        <FaMinus size={24} />
      </QuantityButton>
      <QuantityInnerInput
        type="number"
        value={String(quantity).padStart(2, "0")}
        onChange={handleInputChange}
      />
      <QuantityButton onClick={() => handleChange(quantity + 1)}>
        <FaPlus size={24} />
      </QuantityButton>
      <Button title={includeButtonTitle} onClick={handleIncludeOrder} />
    </Container>
  );
}
