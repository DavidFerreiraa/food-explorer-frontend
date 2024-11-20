import { LuClock3 } from "react-icons/lu";
import { IOrderStatus } from "../../interfaces/IOrder";
import { Container, Title } from "./styles";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiForkKnife } from "react-icons/pi";

interface IPaymentStatus {
    status: IOrderStatus;
}

export function PaymentStatus({status}: IPaymentStatus) {
    console.log(status == IOrderStatus.Pendente)
    return (
        status == IOrderStatus.Pendente && (
            <Container className="selected">
                <LuClock3 />
                <Title>Aguardando pagamento no caixa</Title>
            </Container>
        ) || 
        status == IOrderStatus.Pago && (
            <Container className="selected">
                <FaRegCircleCheck />
                <Title>Pagamento aprovado</Title>
            </Container>
        ) || 
        status == IOrderStatus.Preparando && (
            <Container className="selected">
                <FaRegCircleCheck />
                <Title>Pagamento aprovado</Title>
            </Container>
        ) || 
        status == IOrderStatus.Entregue && (
            <Container className="selected">
                <PiForkKnife />
                <Title>Pedido entregue</Title>
            </Container>
        ) || <p>no status</p>
    )
}