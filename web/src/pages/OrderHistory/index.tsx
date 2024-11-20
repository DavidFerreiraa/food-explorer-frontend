import { useEffect, useState } from "react";
import { useOrder } from "../../hooks/order";
import { Container, Title } from "./styles";
import { OrderDataTable } from "../../components/OrderDataTable";

export function OrderHistory() {
    const { orders, fetchOrders } = useOrder();

    const [isMobile, setIsMobile] = useState(false);

    // Hook para verificar a largura da tela
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica o tamanho da tela na inicialização

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <Container>
            <Title>{isMobile? "Pedidos" : "Histórico de pedidos"}</Title>
            {
                orders && (
                    <OrderDataTable orders={orders} />
                ) || <p>Você não possui pedidos.</p>
            }
        </Container>
    );
}
