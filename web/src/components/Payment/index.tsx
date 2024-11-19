import { PiCreditCardBold, PiPixLogoBold, PiReceiptBold } from "react-icons/pi";
import { Container, CreditForm, PaymentMethodWrapper, TogglePayment, ToggleWrapper, ValCVCWrapper } from "./styles";
import PixQrCode from "../../assets/pixQrCode.svg";
import { FormField } from "../FormField";
import { Button } from "../Button";

export function Payment() {

    function togglePaymentMethod(event: React.MouseEvent<HTMLButtonElement>) {
        const clickedButton = event.currentTarget;
        
        const allButtons = document.querySelectorAll('.TogglePayment');
        allButtons.forEach((button) => button.classList.remove('selected'));

        // Adiciona a classe "selected" ao botão clicado
        clickedButton.classList.add('selected');

        // Manipula as classes "selected" nas imagens e nos componentes de acordo com o botão clicado
        if (clickedButton.id === "pix") {
            // Para o Pix: adiciona "selected" na imagem e no botão
            document.querySelector('#pix-image')?.classList.add('selected');
            document.querySelector('#credit-form')?.classList.remove('selected');
        }

        if (clickedButton.id === "credit") {
            // Para Crédito: adiciona "selected" no CreditForm e no botão
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
        </Container>
    )
}