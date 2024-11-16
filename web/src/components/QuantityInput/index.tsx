import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../Button";
import { Container, QuantityButton, QuantityInnerInput, QuantityWrapper } from "./styles";
import { PiReceipt } from "react-icons/pi";

interface IQuantityInput {
    showProduct?: boolean;
    handleChange: (value: number) => void;
    handleIncludeOrder: () => void;
    includeButtonTitle: string;
    quantity: number;
}

export function QuantityInput({ handleChange, handleIncludeOrder, quantity, includeButtonTitle, showProduct = false }: IQuantityInput) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      handleChange(value);
    }
  };

  return (
    <Container $showproduct={showProduct}>
      <QuantityWrapper>
          <QuantityButton onClick={() => handleChange(quantity - 1)}>
            <FaMinus/>
          </QuantityButton>
          <QuantityInnerInput
            type="number"
            value={String(quantity).padStart(2, "0")}
            onChange={handleInputChange}
            $showproduct={showProduct}
          />
          <QuantityButton onClick={() => handleChange(quantity + 1)}>
            <FaPlus/>
          </QuantityButton>
      </QuantityWrapper>
      <Button icon={showProduct && <PiReceipt size={18}/>} title={includeButtonTitle} onClick={handleIncludeOrder} />
    </Container>
  );
}
