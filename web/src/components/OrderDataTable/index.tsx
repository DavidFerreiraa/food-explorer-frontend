import { IOrder, IOrderStatus } from "../../interfaces/IOrder";
import { Table, StatusIndicator, ProductList, ResponsiveContainer } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/order";
import { StatusSelector } from "../StatusSelector";
import { dateFormater } from "../../utils/DateFormater";
import { OrderDataCard } from "../OrderDataCard";

interface IOrderDataTable {
    orders: IOrder[];
}

export function OrderDataTable({ orders }: IOrderDataTable) {

    const status: string[] = Object.values(IOrderStatus)

    const { user } = useAuth();
    const { updateOrderStatus } = useOrder();


    function handleChangeStatus(status: string, orderId: string) {
        updateOrderStatus(status as IOrderStatus, orderId);
    }

    return (
        <ResponsiveContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhamento</th>
                        <th>Data e hora</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>
                                {
                                    user?.Role === "ADMIN"? <StatusSelector onChange={(e) => {handleChangeStatus(e.target.value, order.id)}} label="" data={status} value={order.status}/> 
                                    : 
                                    <>
                                        <StatusIndicator $status={order.status || IOrderStatus.Pendente}/>
                                        {order.status || IOrderStatus.Pendente}
                                    </>
                                }
                            </td>
                            <td>{order.id.toUpperCase()}</td>
                            <td>
                                <ProductList>
                                    {order.OrderProducts.map((orderProduct) => (
                                        <li key={orderProduct.id}>
                                            {orderProduct.quantity} x {orderProduct.Product.title},
                                        </li>
                                    ))}
                                </ProductList>
                            </td>
                            <td>{dateFormater(order.createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Renderização no formato cartão */}
            {orders.map((order) => (
                <OrderDataCard id="card" key={order.id} order={order}/>
            ))}
        </ResponsiveContainer>
    );
}
