import { PiCreditCardBold, PiPixLogoBold, PiReceiptBold } from "react-icons/pi";
import { Container, CreditForm, PaymentMethodWrapper, TogglePayment, ToggleWrapper, ValCVCWrapper } from "./styles";
import PixQrCode from "../../assets/pixQrCode.svg";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { IOrder } from "../../interfaces/IOrder";
import { PaymentStatus } from "../PaymentStatus";

interface IPayment {
    order: IOrder
}
export function Payment({order}: IPayment) {

    function togglePaymentMethod(event: React.MouseEvent<HTMLButtonElement>) {
        const clickedButton = event.currentTarget;
        
        const allButtons = document.querySelectorAll('.TogglePayment');
        allButtons.forEach((button) => button.classList.remove('selected'));

        // Adds the class "selected"
        clickedButton.classList.add('selected');

        // Changes selected class according with the button pressed
        if (clickedButton.id === "pix") {
            document.querySelector('#pix-image')?.classList.add('selected');
            document.querySelector('#credit-form')?.classList.remove('selected');
        }

        if (clickedButton.id === "credit") {
            document.querySelector('#credit-form')?.classList.add('selected');
            document.querySelector('#pix-image')?.classList.remove('selected');
        }
    }

    return(
        <Container>
            <ToggleWrapper>
                <TogglePayment id="pix" className="selected TogglePayment" icon={<PiPixLogoBold size={24}/>} title="PIX" onClick={togglePaymentMethod}/>
                <TogglePayment id="credit" className="TogglePayment" icon={<PiCreditCardBold size={24}/>} title="Crédito" onClick={togglePaymentMethod}/>
            </ToggleWrapper>
                {
                    order.status? (
                    <PaymentMethodWrapper>
                        <PaymentStatus status={order.status} />
                    </PaymentMethodWrapper>
                    ) : (
                        <PaymentMethodWrapper>
                            <img id="pix-image" className="selected" src={PixQrCode}/>
                            <CreditForm id="credit-form" className="">
                                <FormField htmlFor="Número do cartão" name="Número do cartão" placeholder="0000 0000 0000 0000" label="Número do cartão"/>
                                <ValCVCWrapper>
                                    <FormField htmlFor="Válidade" name="Válidade" placeholder="04/25" label="Válidade"/>
                                    <FormField htmlFor="CVC" name="CVC" placeholder="000" label="CVC"/>
                                </ValCVCWrapper>
                                <Button icon={<PiReceiptBold size={24}/>} title="Finalizar pagamento"/>
                            </CreditForm>
                        </PaymentMethodWrapper>
                    )
                }
        </Container>
    )
}