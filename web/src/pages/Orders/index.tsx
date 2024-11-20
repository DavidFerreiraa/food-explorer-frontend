import { useEffect, useRef } from "react";
import { useOrder } from "../../hooks/order";
import { Column, Container, NextButtonWrapper, ProductWrapper, Title, TotalPriceDescription } from "./styles";
import { ProductInOrder } from "../../components/ProductInOrder";
import { Payment } from "../../components/Payment";
import { Button } from "../../components/Button";

export function Orders() {
    const { orders, fetchOrders } = useOrder();

    // Referências para as colunas de pedido e pagamento
    const orderColumnRef = useRef<HTMLDivElement | null>(null);
    const paymentColumnRef = useRef<HTMLDivElement | null>(null);

    function getTotalPrice() {
        if (!orders) {
            return;
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

    function handleNext() {
        if (orderColumnRef.current && paymentColumnRef.current) {
            // Torna a coluna de pedido invisível
            orderColumnRef.current.style.display = 'none';
            // Torna a coluna de pagamento visível
            paymentColumnRef.current.style.display = 'block';
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
            orders && (
                <Container>
                    <Column ref={orderColumnRef} id="order-column">
                        <Title>Meu pedido</Title>
                        <ProductWrapper>
                            {
                                orders && orders.map((order) => (
                                    <ProductInOrder key={order.id} order={order} />
                                )) || <p>Você não possui pedidos.</p>
                            }
                        </ProductWrapper>
                        <TotalPriceDescription>Total: R$ {getTotalPrice()}</TotalPriceDescription>
                        <NextButtonWrapper>
                            <Button id="next" title="Avançar" onClick={handleNext} />
                        </NextButtonWrapper>
                    </Column>
                    <Column ref={paymentColumnRef} id="payment-column">
                        <Title>Pagamento</Title>
                        <Payment order={orders[0]}/>
                    </Column>
                </Container>
            ) || <p>No orders</p>
    );
}
