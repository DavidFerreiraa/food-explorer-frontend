import { toast } from "react-toastify";
import { useOrder } from "../../hooks/order";
import { IOrder } from "../../interfaces/IOrder";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Container, OrderDescriptionWrapper, OrderDetailsWrapper, OrderPrice, OrderTitle } from "./styles";

interface IProductInOrder {
    order: IOrder;
}

export function ProductInOrder({order}: IProductInOrder) {
    const { deleteOrder } = useOrder();

    const orderProduct = order.OrderProducts[0];
    const imageUrl = `${api.defaults.baseURL}/files/${orderProduct.Product.imageUrl}`;

    function handleExcludeOrder(orderId: string) {
        deleteOrder(orderId).then(() => {
            toast.success("Pedido excluído")
        })
    }

    return (
        <Container>
            <img src={imageUrl}/>
            <OrderDescriptionWrapper>
                <OrderDetailsWrapper>
                    <OrderTitle>{orderProduct.quantity} x {orderProduct.Product.title}</OrderTitle>
                    <OrderPrice>R$ {Number(order.totalPrice).toFixed(2)}</OrderPrice>
                </OrderDetailsWrapper>
                <Button title="Excluir" onlyText onClick={() => {handleExcludeOrder(order.id)}}/>
            </OrderDescriptionWrapper>
        </Container>
    )
}