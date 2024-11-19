import { toast } from "react-toastify";
import { useOrder } from "../../hooks/order";
import { IOrder } from "../../interfaces/IOrder";
import { api } from "../../services/api";
import { Button } from "../Button";
import { Container, OrderDescriptionWrapper, OrderDetailsWrapper, OrderPrice, OrderTitle } from "./styles";
import { useFavorites } from "../../hooks/favorites";
import { IFavorite } from "../../interfaces/IFavorite";

interface IProductInOrder {
    order?: IOrder;
    favorite?: IFavorite;
}

export function ProductInOrder({order, favorite}: IProductInOrder) {
    const { deleteOrder } = useOrder();
    const { deleteFavorite } = useFavorites();

    function handleExcludeOrder(orderId: string) {
        deleteOrder(orderId).then(() => {
            toast.success("Pedido excluído")
        })
    }

    function handleExcludeFavorite(favoriteId: string) {
        deleteFavorite(favoriteId)
    }

    if (!order && !favorite) {
        return
    };

    if (order) {
        const orderProduct = order.OrderProducts[0];
        const imageUrl = `${api.defaults.baseURL}/files/${orderProduct.Product.imageUrl}`;
        console.log(order)
        return (
            <Container>
                <img src={imageUrl}/>
                <OrderDescriptionWrapper>
                    <OrderDetailsWrapper>
                        <OrderTitle>{orderProduct.quantity} x {orderProduct.Product.title}</OrderTitle>
                        <OrderPrice>R$ {Number(order.totalPrice).toFixed(2)}</OrderPrice>
                    </OrderDetailsWrapper>
                    {favorite? <Button title="Excluir" onlyText onClick={() => {handleExcludeOrder(order.id)}}/> : <Button title="Excluir" onlyText onClick={() => {handleExcludeOrder(order.id)}}/>}
                </OrderDescriptionWrapper>
            </Container>
        )
    }

    if (favorite) {
        const imageUrl = `${api.defaults.baseURL}/files/${favorite.Product[0].imageUrl}`;
        console.log(favorite)
        return (
            <Container>
                <img src={imageUrl}/>
                <OrderDescriptionWrapper>
                    <OrderDetailsWrapper>
                        <OrderTitle>{favorite.Product[0].title}</OrderTitle>
                    </OrderDetailsWrapper>
                    <Button title="Remover dos favoritos" onlyText onClick={() => {handleExcludeFavorite(favorite.id)}}/>
                </OrderDescriptionWrapper>
            </Container>
        )
    }
}