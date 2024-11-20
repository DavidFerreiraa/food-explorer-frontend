import { PiCopy } from "react-icons/pi";
import { IOrder, IOrderStatus } from "../../interfaces/IOrder";
import { Button } from "../Button";
import { Table, StatusIndicator, ProductList, Card, ResponsiveContainer } from "./styles";
import { toast } from "react-toastify";

interface IOrderDataTable {
    orders: IOrder[];
  }

export function OrderDataTable({ orders }: IOrderDataTable) {

    function dateFormater(data: string) {
        const firstDateField = new Date(data).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
        });

        const secondDateField = new Date(data).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });

        return `${firstDateField} às ${secondDateField}`;
    }

    function handleCopy(text: string) {
        navigator.clipboard.writeText(text);
        toast.success("Código copiado.");
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
                                <StatusIndicator $status={order.status || IOrderStatus.Pendente} />
                                {order.status || IOrderStatus.Pendente}
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
                <Card key={order.id}>
                    <div className="card-header">
                        <div className="order-id"><p>{order.id.toUpperCase()}</p><Button onClick={() => {handleCopy(order.id)}} icon={<PiCopy />} title="" onlyText/></div>
                        <div className="status">
                            <StatusIndicator $status={order.status || IOrderStatus.Pendente} />
                            <span>{order.status || IOrderStatus.Pendente}</span>
                        </div>
                        <div className="order-date">{dateFormater(order.createdAt)}</div>
                    </div>
                    <ul className="product-list">
                        {order.OrderProducts.map((orderProduct) => (
                            <li key={orderProduct.id}>
                                {orderProduct.quantity} x {orderProduct.Product.title}
                            </li>
                        ))}
                    </ul>
                </Card>
            ))}
        </ResponsiveContainer>
    );
}
