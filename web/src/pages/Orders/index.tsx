import { useEffect } from "react";
import { useOrder } from "../../hooks/order";
import { Column, Container, ProductWrapper, Title, TotalPriceDescription } from "./styles";
import { ProductInOrder } from "../../components/ProductInOrder";
import { Payment } from "../../components/Payment";

export function Orders() {
    const {orders, fetchOrders} = useOrder();

    function getTotalPrice() {
        if (!orders) {
            return
        }

        return orders.reduce((acumulador, order) => {
            // Convertendo totalPrice de string para número
            const totalPrice = parseFloat(order.totalPrice);
            // Verificando se a conversão foi bem-sucedida
            if (!isNaN(totalPrice)) {
              return acumulador + totalPrice;
            }
            return acumulador;
          }, 0);
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return(
        <Container>
            <Column>
                <Title>Meu pedido</Title>
                <ProductWrapper>
                    {
                        orders && orders.map((order) => (
                            <ProductInOrder key={order.id} order={order}/>
                        )) || <p>Você não possui pedidos.</p>
                    }
                </ProductWrapper>
                <TotalPriceDescription>Total: R$ {getTotalPrice()}</TotalPriceDescription>
            </Column>
            <Column>
                <Title>Pagamento</Title>
                <Payment/>
            </Column>
        </Container>
    );
}