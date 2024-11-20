import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";
import { IOrder, IOrderStatus } from "../../interfaces/IOrder";
import { Button } from "../Button";
import { Card, StatusIndicator } from "../OrderDataTable/styles";
import { useOrder } from "../../hooks/order";
import { dateFormater } from "../../utils/DateFormater";
import { PiCopy } from "react-icons/pi";
import { StatusSelector } from "../StatusSelector";

interface IOrderDataCard {
    order: IOrder
}

export function OrderDataCard({order}: IOrderDataCard) {
    const { user } = useAuth();
    const { updateOrderStatus } = useOrder();

    const status: string[] = Object.values(IOrderStatus)

    function handleCopy(text: string) {
        navigator.clipboard.writeText(text);
        toast.success("Código copiado.");
    }

    function handleChangeStatus(status: string, orderId: string) {
        updateOrderStatus(status as IOrderStatus, orderId);
    }

    return (
        <Card key={order.id}>
            <div className="card-header">
                {
                    user?.Role === "USER"?
                    <>
                        <div className="order-id"><p>{order.id.toUpperCase()}</p><Button onClick={() => {handleCopy(order.id)}} icon={<PiCopy />} title="" onlyText/></div>
                        <div className="status">
                            <StatusIndicator $status={order.status || IOrderStatus.Pendente} />
                            <span>{order.status || IOrderStatus.Pendente}</span>
                        </div>
                        <div className="order-date">{dateFormater(order.createdAt)}</div>
                    </>
                    :
                    <>
                        <div className="order-id">
                            <p>{order.id.toUpperCase()}</p>
                            <Button onClick={() => {handleCopy(order.id)}} icon={<PiCopy />} title="" onlyText/>
                            <div className="order-date">{dateFormater(order.createdAt)}</div>
                        </div>
                    </>
                }
            </div>
            <ul className="product-list">
                {order.OrderProducts.map((orderProduct) => (
                    <li key={orderProduct.id}>
                        {orderProduct.quantity} x {orderProduct.Product.title}
                    </li>
                ))}
            </ul>
            {
                user?.Role === "ADMIN" &&
                    <StatusSelector onChange={(e) => {handleChangeStatus(e.target.value, order.id)}} label="" data={status} value={order.status}/>
            }
        </Card>
    )
}